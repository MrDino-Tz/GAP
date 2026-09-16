import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface ModuleGrade {
  module: {
    code: string;
    name: string;
    creditHours: number;
  };
  letterGrade: string;
  gradePoint: number;
}

interface ExportData {
  programmeName: string;
  semesterName: string;
  moduleGrades: ModuleGrade[];
  gpa: number;
  totalCreditHours: number;
  passedModules: number;
  qualityPoints: number;
  cgpa?: number;
}

interface ComparativeExportData {
  semester1: ExportData;
  semester2: ExportData;
  cgpa?: number;
}

const drawHeader = (doc: jsPDF, logo: string | null, subtitle: string) => {
  const pageWidth = doc.internal.pageSize.width;

  doc.setFillColor(13, 110, 253);
  doc.rect(0, 0, pageWidth, 40, 'F');

  if (logo) {
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(13, 6, 32, 33, 6, 6, 'F');
    doc.addImage(logo, 'PNG', 16.5, 9, 25, 26);
  }

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('GAP - GPA Calculator', pageWidth / 2, 20, { align: 'center' });

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(subtitle, pageWidth / 2, 30, { align: 'center' });
};

export const exportToPDF = async (data: ExportData) => {
  const doc = new jsPDF();
  
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;

  const logo = await getLogoDataUrl();
  drawHeader(doc, logo, 'Academic Performance Report');
  
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Programme:', 15, 55);
  doc.setFont('helvetica', 'normal');
  doc.text(data.programmeName, 45, 55);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Semester:', 15, 62);
  doc.setFont('helvetica', 'normal');
  doc.text(data.semesterName, 45, 62);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Date:', 15, 69);
  doc.setFont('helvetica', 'normal');
  doc.text(new Date().toLocaleDateString('en-GB'), 45, 69);
  
  const tableData = data.moduleGrades.map(mg => [
    mg.module.code,
    mg.module.name,
    mg.module.creditHours.toString(),
    mg.letterGrade,
    mg.gradePoint.toFixed(1),
    (mg.gradePoint * mg.module.creditHours).toFixed(1)
  ]);
  
  autoTable(doc, {
    startY: 80,
    head: [['Module Code', 'Module Name', 'Credits', 'Grade', 'Grade Point', 'Quality Points']],
    body: tableData,
    theme: 'striped',
    headStyles: {
      fillColor: [13, 110, 253],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 10
    },
    bodyStyles: {
      fontSize: 9
    },
    alternateRowStyles: {
      fillColor: [245, 245, 245]
    },
    columnStyles: {
      0: { cellWidth: 30 },
      1: { cellWidth: 65 },
      2: { cellWidth: 20, halign: 'center' },
      3: { cellWidth: 20, halign: 'center' },
      4: { cellWidth: 25, halign: 'center' },
      5: { cellWidth: 30, halign: 'center' }
    },
    margin: { left: 15, right: 15 }
  });
  
  const finalY = (doc as any).lastAutoTable.finalY + 15;
  
  doc.setFillColor(240, 240, 240);
  doc.roundedRect(15, finalY, pageWidth - 30, 50, 3, 3, 'F');
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(13, 110, 253);
  doc.text('Semester GPA:', 20, finalY + 12);
  
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text(data.gpa.toFixed(2), 70, finalY + 12);
  
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'normal');
  doc.text(`Total Credit Hours: ${data.totalCreditHours}`, 20, finalY + 25);
  doc.text(`Modules Passed: ${data.passedModules}`, 20, finalY + 32);
  doc.text(`Total Quality Points: ${data.qualityPoints.toFixed(1)}`, 20, finalY + 39);
  
  // Add CGPA section if available
  if (data.cgpa !== undefined) {
    doc.setFontSize(16);
    doc.setTextColor(40, 167, 69); // Success green color
    doc.text('Cumulative GPA:', pageWidth - 120, finalY + 12);
    
    doc.setFontSize(28);
    doc.setFont('helvetica', 'bold');
    doc.text(data.cgpa.toFixed(2), pageWidth - 70, finalY + 12);
  }
  
  let performance = '';
  let performanceColor: [number, number, number] = [0, 0, 0];
  
  if (data.gpa >= 4.5) {
    performance = 'Excellent Performance';
    performanceColor = [40, 167, 69];
  } else if (data.gpa >= 4.0) {
    performance = 'Very Good Performance';
    performanceColor = [13, 110, 253];
  } else if (data.gpa >= 3.5) {
    performance = 'Good Performance';
    performanceColor = [255, 193, 7];
  } else if (data.gpa >= 3.0) {
    performance = 'Satisfactory Performance';
    performanceColor = [108, 117, 125];
  } else if (data.gpa >= 2.0) {
    performance = 'Pass - Room for Improvement';
    performanceColor = [255, 152, 0];
  } else {
    performance = 'Below Average';
    performanceColor = [220, 53, 69];
  }
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(performanceColor[0], performanceColor[1], performanceColor[2]);
  doc.text(performance, pageWidth / 2, finalY + 25, { align: 'center' });
  
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.setFont('helvetica', 'italic');
  doc.text(
    'Generated by GAP - Official GPA Calculator for IAA',
    pageWidth / 2,
    pageHeight - 15,
    { align: 'center' }
  );
  
  doc.setFontSize(7);
  doc.text(
    'Developed by DTC Group',
    pageWidth / 2,
    pageHeight - 10,
    { align: 'center' }
  );
  
  const fileName = `GPA_Report_${data.semesterName.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
};

export const exportComparativePDF = (data: ComparativeExportData) => {
  const doc = new jsPDF();
  
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  
  // Header
  doc.setFillColor(13, 110, 253);
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('GAP - GPA Calculator', pageWidth / 2, 20, { align: 'center' });
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Comparative Academic Performance Report', pageWidth / 2, 30, { align: 'center' });
  
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Programme:', 15, 55);
  doc.setFont('helvetica', 'normal');
  doc.text(data.semester1.programmeName, 45, 55);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Date:', 15, 62);
  doc.setFont('helvetica', 'normal');
  doc.text(new Date().toLocaleDateString('en-GB'), 45, 62);
  
  // Semester 1 Section
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(13, 110, 253);
  doc.text(data.semester1.semesterName, 15, 75);
  
  const tableData1 = data.semester1.moduleGrades.map(mg => [
    mg.module.code,
    mg.module.name,
    mg.module.creditHours.toString(),
    mg.letterGrade,
    mg.gradePoint.toFixed(1),
    (mg.gradePoint * mg.module.creditHours).toFixed(1)
  ]);
  
  autoTable(doc, {
    startY: 80,
    head: [['Module Code', 'Module Name', 'Credits', 'Grade', 'Grade Point', 'Quality Points']],
    body: tableData1,
    theme: 'striped',
    headStyles: {
      fillColor: [13, 110, 253],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 10
    },
    bodyStyles: {
      fontSize: 9
    },
    alternateRowStyles: {
      fillColor: [245, 245, 245]
    },
    columnStyles: {
      0: { cellWidth: 25 },
      1: { cellWidth: 50 },
      2: { cellWidth: 15, halign: 'center' },
      3: { cellWidth: 15, halign: 'center' },
      4: { cellWidth: 20, halign: 'center' },
      5: { cellWidth: 25, halign: 'center' }
    },
    margin: { left: 15, right: 15 }
  });
  
  let finalY = (doc as any).lastAutoTable.finalY + 10;
  
  doc.setFillColor(240, 240, 240);
  doc.roundedRect(15, finalY, (pageWidth / 2) - 20, 40, 3, 3, 'F');
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(13, 110, 253);
  doc.text('Semester GPA:', 20, finalY + 10);
  
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text(data.semester1.gpa.toFixed(2), 65, finalY + 10);
  
  doc.setFontSize(9);
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'normal');
  doc.text(`Credits: ${data.semester1.totalCreditHours}`, 20, finalY + 20);
  doc.text(`Passed: ${data.semester1.passedModules}`, 20, finalY + 27);
  doc.text(`Points: ${data.semester1.qualityPoints.toFixed(1)}`, 20, finalY + 34);
  
  // Semester 2 Section
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(13, 110, 253);
  doc.text(data.semester2.semesterName, (pageWidth / 2) + 5, 75);
  
  const tableData2 = data.semester2.moduleGrades.map(mg => [
    mg.module.code,
    mg.module.name,
    mg.module.creditHours.toString(),
    mg.letterGrade,
    mg.gradePoint.toFixed(1),
    (mg.gradePoint * mg.module.creditHours).toFixed(1)
  ]);
  
  autoTable(doc, {
    startY: 80,
    head: [['Module Code', 'Module Name', 'Credits', 'Grade', 'Grade Point', 'Quality Points']],
    body: tableData2,
    theme: 'striped',
    headStyles: {
      fillColor: [13, 110, 253],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
      fontSize: 10
    },
    bodyStyles: {
      fontSize: 9
    },
    alternateRowStyles: {
      fillColor: [245, 245, 245]
    },
    columnStyles: {
      0: { cellWidth: 25 },
      1: { cellWidth: 50 },
      2: { cellWidth: 15, halign: 'center' },
      3: { cellWidth: 15, halign: 'center' },
      4: { cellWidth: 20, halign: 'center' },
      5: { cellWidth: 25, halign: 'center' }
    },
    margin: { left: (pageWidth / 2) + 5, right: 15 }
  });
  
  finalY = (doc as any).lastAutoTable.finalY + 10;
  
  doc.setFillColor(240, 240, 240);
  doc.roundedRect((pageWidth / 2) + 5, finalY, (pageWidth / 2) - 20, 40, 3, 3, 'F');
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(13, 110, 253);
  doc.text('Semester GPA:', (pageWidth / 2) + 10, finalY + 10);
  
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text(data.semester2.gpa.toFixed(2), (pageWidth / 2) + 55, finalY + 10);
  
  doc.setFontSize(9);
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'normal');
  doc.text(`Credits: ${data.semester2.totalCreditHours}`, (pageWidth / 2) + 10, finalY + 20);
  doc.text(`Passed: ${data.semester2.passedModules}`, (pageWidth / 2) + 10, finalY + 27);
  doc.text(`Points: ${data.semester2.qualityPoints.toFixed(1)}`, (pageWidth / 2) + 10, finalY + 34);
  
  // Comparative Summary
  finalY = Math.max(finalY, (doc as any).lastAutoTable.finalY) + 15;
  
  doc.setFillColor(13, 110, 253);
  doc.roundedRect(15, finalY, pageWidth - 30, 35, 3, 3, 'F');
  
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('Comparative Summary', pageWidth / 2, finalY + 12, { align: 'center' });
  
  doc.setFontSize(12);
  doc.text(`${data.semester1.semesterName}:`, 25, finalY + 22);
  doc.text(data.semester1.gpa.toFixed(2), 70, finalY + 22);
  
  doc.text(`${data.semester2.semesterName}:`, 25, finalY + 30);
  doc.text(data.semester2.gpa.toFixed(2), 70, finalY + 30);
  
  if (data.cgpa !== undefined) {
    doc.setFontSize(14);
    doc.text('CGPA:', pageWidth - 70, finalY + 22);
    doc.text(data.cgpa.toFixed(2), pageWidth - 30, finalY + 22);
  }
  
  // Performance Comparison
  let comparisonText = '';
  if (data.semester1.gpa > data.semester2.gpa) {
    comparisonText = `${data.semester1.semesterName} performed better`;
  } else if (data.semester2.gpa > data.semester1.gpa) {
    comparisonText = `${data.semester2.semesterName} performed better`;
  } else {
    comparisonText = 'Both semesters performed equally';
  }
  
  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'italic');
  doc.text(comparisonText, pageWidth / 2, finalY + 45, { align: 'center' });
  
  // Footer
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.setFont('helvetica', 'italic');
  doc.text(
    'Generated by GAP - Official GPA Calculator for IAA',
    pageWidth / 2,
    pageHeight - 15,
    { align: 'center' }
  );
  
  doc.setFontSize(7);
  doc.text(
    'Developed by DTC Group',
    pageWidth / 2,
    pageHeight - 10,
    { align: 'center' }
  );
  
  const fileName = `Comparative_GPA_Report_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
};

interface FullReportSemester {
  programmeName: string;
  semesterName: string;
  gpa: number;
  totalCreditHours: number;
  modules: ModuleGrade[];
}

interface FullReportData {
  cgpa: number;
  totalSemesters: number;
  totalCredits: number;
  universityName?: string;
  semesters: FullReportSemester[];
}

const getLogoDataUrl = async (): Promise<string | null> => {
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}LOGO.png`);
    if (!res.ok) return null;
    const blob = await res.blob();
    return await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
};

export const exportFullReportPDF = async (data: FullReportData) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;
  const pageHeight = doc.internal.pageSize.height;
  let cursorY = 0;

  const logo = await getLogoDataUrl();
  drawHeader(doc, logo, 'Cumulative Academic Report');

  cursorY = 55;

  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('University:', 15, cursorY);
  doc.setFont('helvetica', 'normal');
  doc.text(data.universityName || 'N/A', 45, cursorY);

  doc.setFont('helvetica', 'bold');
  doc.text('Date:', pageWidth - 100, cursorY);
  doc.setFont('helvetica', 'normal');
  doc.text(new Date().toLocaleDateString('en-GB'), pageWidth - 80, cursorY);

  doc.setFont('helvetica', 'bold');
  doc.text('Programme:', 15, cursorY + 8);
  doc.setFont('helvetica', 'normal');
  doc.text(data.semesters[0]?.programmeName || 'Multiple / N/A', 45, cursorY + 8);

  cursorY += 20;

  doc.setFillColor(240, 240, 240);
  doc.roundedRect(15, cursorY, pageWidth - 30, 45, 3, 3, 'F');

  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(40, 167, 69);
  doc.text('Cumulative GPA:', 20, cursorY + 12);

  doc.setFontSize(28);
  doc.text(data.cgpa.toFixed(2), 20, cursorY + 30);

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text(`Total Semesters: ${data.totalSemesters}`, pageWidth - 70, cursorY + 12);
  doc.text(`Total Credits: ${data.totalCredits}`, pageWidth - 70, cursorY + 22);

  cursorY += 55;

  for (let i = 0; i < data.semesters.length; i++) {
    const sem = data.semesters[i];
    const passedModules = sem.modules.filter((m) => m.gradePoint >= 2.0).length;
    const qualityPoints = sem.modules.reduce((sum, m) => sum + m.gradePoint * m.module.creditHours, 0);

    if (cursorY + 30 > pageHeight - 30) {
      doc.addPage();
      cursorY = 25;
    }

    doc.setFontSize(13);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(13, 110, 253);
    const semLabel = `${sem.semesterName}${sem.programmeName ? ` - ${sem.programmeName}` : ''}`;
    doc.text(`Semester ${i + 1}: ${semLabel}`, 15, cursorY);
    cursorY += 6;

    const tableData = sem.modules.map((mg) => [
      mg.module.code,
      mg.module.name,
      mg.module.creditHours.toString(),
      mg.letterGrade,
      mg.gradePoint.toFixed(1),
      (mg.gradePoint * mg.module.creditHours).toFixed(1)
    ]);

    autoTable(doc, {
      startY: cursorY,
      head: [['Module Code', 'Module Name', 'Credits', 'Grade', 'Grade Point', 'Quality Points']],
      body: tableData,
      theme: 'striped',
      headStyles: {
        fillColor: [13, 110, 253],
        textColor: [255, 255, 255],
        fontStyle: 'bold',
        fontSize: 9
      },
      bodyStyles: {
        fontSize: 8
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245]
      },
      columnStyles: {
        0: { cellWidth: 28 },
        1: { cellWidth: 62 },
        2: { cellWidth: 18, halign: 'center' },
        3: { cellWidth: 18, halign: 'center' },
        4: { cellWidth: 22, halign: 'center' },
        5: { cellWidth: 28, halign: 'center' }
      },
      margin: { left: 15, right: 15 }
    });

    cursorY = (doc as any).lastAutoTable.finalY + 10;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text(
      `GPA: ${sem.gpa.toFixed(2)}    Credits: ${sem.totalCreditHours}    Modules Passed: ${passedModules}    Quality Points: ${qualityPoints.toFixed(1)}`,
      15,
      cursorY
    );
    cursorY += 15;
  }

  doc.setFontSize(7);
  doc.setTextColor(100, 100, 100);
  doc.setFont('helvetica', 'italic');
  doc.text(
    'Developed by DTC Group',
    pageWidth / 2,
    pageHeight - 15,
    { align: 'center' }
  );

  const fileName = `Full_Academic_Report_${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
};