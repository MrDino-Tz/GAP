import { useState, useEffect, useCallback } from 'react';
import {
  Box, Card, CardHeader, CardContent, Typography, Button, FormControl,
  InputLabel, Select, MenuItem, Chip, Divider, Snackbar, Alert,
  IconButton, Drawer, List, ListItem, ListItemText, Dialog,
  DialogTitle, DialogContent, DialogActions, ListItemIcon,
} from '@mui/material';
import {
  School, Calculate as CalculateIcon, EmojiEvents, MenuBook,
  Download, Delete, Close, Star, GitHub,
} from '@mui/icons-material';
import { 
  programmes, Programme, Module, getGradeInfo, 
  calculateSemesterGPA, calculateCGPA, gradingScale
} from '@/data/academicData';
import { ACADEMIC_LEVELS } from '@/types/academic';
import { UNIVERSITIES, University, getUniversityById } from '@/types/university';
import { exportToPDF } from '@/lib/pdfExport';
import AcademicChatbot from '@/components/AcademicChatbot';

interface ModuleGrade {
  module: Module;
  letterGrade: string;
  gradePoint: number;
}

interface SemesterResult {
  semesterNumber: number;
  semesterName: string;
  modules: ModuleGrade[];
  gpa: number;
  totalCreditHours: number;
}

interface SavedSemesterData {
  programmeId: number;
  semesterNumber: number;
  semesterName?: string;
  modules: ModuleGrade[];
  gpa: number;
  totalCreditHours: number;
  savedAt: string;
  programmeName?: string;
}

function ModuleGradeRow({ moduleGrade, index, onGradeChange, isMobile }) {
  const gradePointBadgeColor = moduleGrade.gradePoint >= 4.0 ? 'primary'
    : moduleGrade.gradePoint >= 3.0 ? 'secondary'
    : moduleGrade.gradePoint >= 2.0 ? 'warning'
    : 'error';

  return (
    <Box
      sx={{
        p: { xs: 2, md: 3 },
        border: 1,
        borderColor: 'divider',
        borderRadius: 1,
        '&:hover': { bgcolor: 'action.hover' },
      }}
    >
      {isMobile ? (
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography variant="body2" fontWeight={600}>{moduleGrade.module.code}</Typography>
              <Typography variant="caption" color="text.secondary">{moduleGrade.module.name}</Typography>
            </Box>
            <Chip label={`${moduleGrade.module.creditHours} Credits`} size="small" variant="outlined" sx={{ ml: 1, flexShrink: 0 }} />
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
            <FormControl size="small" fullWidth>
              <InputLabel sx={{ fontSize: '0.75rem' }}>Grade</InputLabel>
              <Select
                value={moduleGrade.letterGrade}
                label="Grade"
                onChange={(e) => onGradeChange(index, e.target.value)}
              >
                {gradingScale.map((g) => (
                  <MenuItem key={g.letterGrade} value={g.letterGrade}>
                    {g.letterGrade} ({g.gradePoint.toFixed(1)})
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 40, border: 1, borderColor: 'divider', borderRadius: 1, bgcolor: 'grey.100' }}>
              <Chip label={moduleGrade.gradePoint.toFixed(1)} size="small" color={gradePointBadgeColor} />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 2, alignItems: 'center' }}>
          <Box>
            <Typography variant="body2" fontWeight={600}>{moduleGrade.module.code}</Typography>
            <Typography variant="caption" color="text.secondary">{moduleGrade.module.name}</Typography>
          </Box>
          <Box textAlign="center">
            <Chip label={`${moduleGrade.module.creditHours} Credits`} size="small" variant="outlined" />
          </Box>
          <FormControl size="small">
            <Select
              value={moduleGrade.letterGrade}
              onChange={(e) => onGradeChange(index, e.target.value)}
            >
              {gradingScale.map((g) => (
                <MenuItem key={g.letterGrade} value={g.letterGrade}>
                  {g.letterGrade} ({g.gradePoint.toFixed(1)})
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box textAlign="center">
            <Chip label={moduleGrade.gradePoint.toFixed(1)} color={gradePointBadgeColor} size="small" />
          </Box>
        </Box>
      )}
    </Box>
  );
}

const GPACalculator = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [selectedProgramme, setSelectedProgramme] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [moduleGrades, setModuleGrades] = useState([]);
  const [semesterResults] = useState([]);
  const [currentGPA, setCurrentGPA] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [savedSemesters, setSavedSemesters] = useState([]);
  const [cgpa, setCgpa] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [githubStars, setGithubStars] = useState(null);
  const [toast, setToast] = useState({ open: false, title: '', description: '', severity: 'success' });

  const closeToast = () => setToast((prev) => ({ ...prev, open: false }));

  const showToast = (title, description, severity = 'success') => {
    setToast({ open: true, title, description, severity });
  };

  useEffect(() => {
    const fetchGithubStars = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/mrdino-tz/GAP');
        const data = await response.json();
        setGithubStars(data.stargazers_count);
      } catch (error) {
        console.error('Error fetching GitHub stars:', error);
        setGithubStars(0);
      }
    };
    fetchGithubStars();
  }, []);

  const programmesForLevel = selectedLevel
    ? programmes.filter(p => {
        const level = ACADEMIC_LEVELS.find(l => l.id === selectedLevel);
        return level ? level.ntaLevels.includes(p.ntaLevel) : false;
      })
    : [];

  useEffect(() => {
    if (selectedProgramme) {
      const semester = selectedProgramme.semesters.find((s) => s.semesterNumber === selectedSemester);
      if (semester) {
        const initialGrades = semester.modules.map((mod) => ({
          module: mod,
          letterGrade: 'F',
          gradePoint: 0.0,
        }));
        setModuleGrades(initialGrades);
      }
    }
  }, [selectedProgramme, selectedSemester]);

  const loadSavedSemesters = useCallback(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('iaa-gpa-data') || '[]');
      const savedWithNames = saved.map((semester) => {
        const prog = programmes.find((p) => p.id === semester.programmeId);
        return { ...semester, programmeName: prog ? prog.name : 'Unknown Programme' };
      });
      setSavedSemesters(savedWithNames);
      if (savedWithNames.length > 0) {
        const cgpaValue = calculateCGPA(savedWithNames.map((s) => ({ gpa: s.gpa, totalCreditHours: s.totalCreditHours })));
        setCgpa(cgpaValue);
      }
    } catch (error) {
      console.error('Error loading saved semesters:', error);
      setSavedSemesters([]);
    }
  }, []);

  useEffect(() => { loadSavedSemesters(); }, [loadSavedSemesters]);

  const handleUniversityChange = (universityId) => {
    const university = getUniversityById(parseInt(universityId));
    setSelectedUniversity(university || null);
    setSelectedLevel(null);
    setSelectedProgram(null);
    setSelectedProgramme(null);
    setSelectedSemester(1);
    setShowResults(false);
    setCurrentGPA(0);
  };

  const handleLevelChange = (level) => {
    const levelNum = parseInt(level);
    setSelectedLevel(levelNum);
    setSelectedProgram(null);
    setSelectedProgramme(null);
    setSelectedSemester(1);
    setShowResults(false);
    setCurrentGPA(0);
  };

  const handleProgramChange = (programId) => {
    const programme = programmes.find((p) => p.id === parseInt(programId));
    if (programme) {
      setSelectedProgram(programme);
      setSelectedProgramme(programme);
      setSelectedSemester(1);
      setModuleGrades([]);
      setShowResults(false);
      setCurrentGPA(0);
    }
  };

  const handleGradeChange = (index, letterGrade) => {
    const gradeInfo = gradingScale.find((g) => g.letterGrade === letterGrade);
    const updatedGrades = [...moduleGrades];
    updatedGrades[index] = {
      ...updatedGrades[index],
      letterGrade,
      gradePoint: gradeInfo?.gradePoint || 0.0,
    };
    setModuleGrades(updatedGrades);
  };

  const calculateGPA = () => {
    if (moduleGrades.some((grade) => !grade.letterGrade)) {
      showToast('Incomplete Data', 'Please select a grade for all modules.', 'error');
      return;
    }
    const gpa = calculateSemesterGPA(moduleGrades.map((g) => ({ creditHours: g.module.creditHours, gradePoint: g.gradePoint })));
    setCurrentGPA(gpa);
    setShowResults(true);
    showToast('GPA Calculated Successfully!', `Your Semester GPA is ${gpa.toFixed(2)}`, 'success');
  };

  const calculateCumulativeGPA = () => {
    if (savedSemesters.length === 0) {
      showToast('No Saved Data', 'Please save at least one semester\'s results to calculate CGPA.', 'error');
      return;
    }
    const cgpaValue = calculateCGPA(savedSemesters.map((s) => ({ gpa: s.gpa, totalCreditHours: s.totalCreditHours })));
    setCgpa(cgpaValue);
    showToast('CGPA Calculated Successfully!', `Your Cumulative GPA is ${cgpaValue.toFixed(2)}`, 'success');
  };

  const saveToLocalStorage = () => {
    if (!selectedProgramme) return;
    const semesterData = {
      programmeId: selectedProgramme.id,
      semesterNumber: selectedSemester,
      semesterName: selectedProgramme.semesters.find((s) => s.semesterNumber === selectedSemester)?.semesterName,
      modules: moduleGrades,
      gpa: currentGPA,
      totalCreditHours: moduleGrades.reduce((sum, g) => sum + g.module.creditHours, 0),
      savedAt: new Date().toISOString(),
    };
    const saved = JSON.parse(localStorage.getItem('iaa-gpa-data') || '[]');
    const existingIndex = saved.findIndex((s) => s.programmeId === selectedProgramme.id && s.semesterNumber === selectedSemester);
    if (existingIndex >= 0) {
      saved[existingIndex] = semesterData;
    } else {
      saved.push(semesterData);
    }
    localStorage.setItem('iaa-gpa-data', JSON.stringify(saved));
    loadSavedSemesters();
    showToast('Data Saved', 'Your semester data has been saved locally.', 'success');
  };

  const resetCalculations = () => {
    setCurrentGPA(0);
    setShowResults(false);
    if (selectedProgramme) {
      const semester = selectedProgramme.semesters.find((s) => s.semesterNumber === selectedSemester);
      if (semester) {
        const initialGrades = semester.modules.map((mod) => ({ module: mod, letterGrade: 'F', gradePoint: 0.0 }));
        setModuleGrades(initialGrades);
      }
    }
    showToast('Calculations Reset', 'Previous GPA calculations have been cleared.', 'info');
  };

  const resetAllData = () => {
    setCurrentGPA(0);
    setShowResults(false);
    setSavedSemesters([]);
    setCgpa(0);
    localStorage.removeItem('iaa-gpa-data');
    if (selectedProgramme) {
      const semester = selectedProgramme.semesters.find((s) => s.semesterNumber === selectedSemester);
      if (semester) {
        const initialGrades = semester.modules.map((mod) => ({ module: mod, letterGrade: 'F', gradePoint: 0.0 }));
        setModuleGrades(initialGrades);
      }
    }
    showToast('All Data Reset', 'All calculations and saved data have been cleared.', 'info');
  };

  const getGPADescription = (gpa) => {
    if (gpa >= 4.5) return 'Excellent Performance!';
    if (gpa >= 4.0) return 'Very Good Performance!';
    if (gpa >= 3.5) return 'Good Performance!';
    if (gpa >= 3.0) return 'Satisfactory Performance';
    if (gpa >= 2.0) return 'Pass - Room for Improvement';
    return 'Below Average - Need Significant Improvement';
  };

  const getGPAColor = (gpa) => {
    if (gpa >= 4.5) return 'success.main';
    if (gpa >= 4.0) return 'primary.main';
    if (gpa >= 3.5) return 'warning.main';
    return 'error.main';
  };

  const handleExportPDF = () => {
    if (!selectedProgramme) return;
    const semesterName = selectedProgramme.semesters.find((s) => s.semesterNumber === selectedSemester)?.semesterName || '';
    exportToPDF({
      programmeName: selectedProgramme.name,
      semesterName,
      moduleGrades,
      gpa: currentGPA,
      totalCreditHours: moduleGrades.reduce((sum, g) => sum + g.module.creditHours, 0),
      passedModules: moduleGrades.filter((g) => g.gradePoint >= 2.0).length,
      qualityPoints: moduleGrades.reduce((sum, g) => sum + g.gradePoint * g.module.creditHours, 0),
      cgpa: cgpa > 0 ? cgpa : undefined,
    });
    showToast('PDF Exported', 'Your GPA results have been downloaded as PDF.', 'success');
  };

  const handleExportSavedSemesterPDF = (semesterData) => {
    const programme = programmes.find((p) => p.id === semesterData.programmeId);
    exportToPDF({
      programmeName: semesterData.programmeName || (programme ? programme.name : 'Unknown Programme'),
      semesterName: semesterData.semesterName || `Semester ${semesterData.semesterNumber}`,
      moduleGrades: semesterData.modules,
      gpa: semesterData.gpa,
      totalCreditHours: semesterData.totalCreditHours,
      passedModules: semesterData.modules.filter((m) => m.gradePoint >= 2.0).length,
      qualityPoints: semesterData.modules.reduce((sum, m) => sum + m.gradePoint * m.module.creditHours, 0),
    });
    showToast('PDF Exported', `GPA results for ${semesterData.semesterName || `Semester ${semesterData.semesterNumber}`} have been downloaded as PDF.`, 'success');
  };

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 900;

  return (
    <Box>
      <Snackbar open={toast.open} autoHideDuration={4000} onClose={closeToast} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={closeToast} severity={toast.severity} variant="filled" sx={{ width: '100%' }}>
          <Typography variant="subtitle2">{toast.title}</Typography>
          <Typography variant="body2">{toast.description}</Typography>
        </Alert>
      </Snackbar>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
        <Box sx={{ maxWidth: 1200, mx: 'auto', px: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <School color="primary" />
            <Typography variant="h6" fontWeight={700}>GAP</Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
            <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Home</Typography>
            <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }} onClick={() => setShowAbout(true)}>About</Typography>
            <Box
              component="a"
              href="https://github.com/mrdino-tz/GAP"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ display: 'flex', alignItems: 'center', gap: 0.5, textDecoration: 'none', color: 'text.primary', '&:hover': { color: 'primary.main' } }}
            >
              <GitHub sx={{ fontSize: 14 }} />
              <Star sx={{ fontSize: 12 }} color="warning" />
              <Typography variant="body2">{githubStars !== null ? githubStars : '...'}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button variant="outlined" size="small" sx={{ display: { xs: 'none', sm: 'inline-flex' } }} onClick={() => setShowHelp(true)}>Help</Button>
            <IconButton size="small" sx={{ display: { md: 'none' } }} onClick={() => setMobileMenuOpen(true)}>
              <Box sx={{ width: 20, height: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box sx={{ height: 2, bgcolor: 'text.primary', borderRadius: 1 }} />
                <Box sx={{ height: 2, bgcolor: 'text.primary', borderRadius: 1 }} />
                <Box sx={{ height: 2, bgcolor: 'text.primary', borderRadius: 1 }} />
              </Box>
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Drawer anchor="right" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <Box sx={{ width: 256, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <School color="primary" />
              <Typography variant="h6" fontWeight={700}>GAP</Typography>
            </Box>
            <IconButton size="small" onClick={() => setMobileMenuOpen(false)}><Close /></IconButton>
          </Box>
          <List>
            <ListItem button onClick={() => setMobileMenuOpen(false)}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => { setShowAbout(true); setMobileMenuOpen(false); }}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://github.com/mrdino-tz/GAP"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ListItemIcon sx={{ minWidth: 36, gap: 0.5 }}>
                <GitHub sx={{ fontSize: 18 }} />
                <Star sx={{ fontSize: 14, color: 'warning.main' }} />
              </ListItemIcon>
              <ListItemText primary={githubStars !== null ? `${githubStars} stars` : '...'} />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Dialog open={showAbout} onClose={() => setShowAbout(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant="h5" fontWeight={700}>About GAP Calculator</Typography>
            <Typography variant="caption" color="text.secondary">Version 2.1 (November 24, 2025)</Typography>
          </Box>
          <IconButton size="small" onClick={() => setShowAbout(false)}><Close /></IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body2" color="text.secondary" paragraph>
            GAP (Grade Analysis Platform) is a comprehensive GPA calculator designed specifically for IAA (Institute of Accountancy Arusha) students. It helps students accurately calculate their semester and cumulative GPAs based on the official IAA grading system.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>Key Features</Typography>
          <Box component="ul" sx={{ pl: 2, mb: 2 }}>
            {['Calculate semester GPA for all IAA programmes', 'Track cumulative GPA (CGPA) across multiple semesters', 'Export results to PDF for record keeping', 'Save semester data locally for future reference', 'Dark mode support for comfortable viewing', 'Responsive design for desktop and mobile use'].map((f) => (
              <Typography key={f} component="li" variant="body2" color="text.secondary">{f}</Typography>
            ))}
          </Box>
          <Typography variant="subtitle2" gutterBottom>How It Works</Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Simply select your academic level (Certificate, Diploma, Bachelor, Masters), programme, and semester, then enter your grades for each module. The calculator will automatically compute your GPA based on the official IAA grading scale. You can save your results to track your cumulative GPA over time.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>Academic Chatbot</Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            GAP also features an AI-powered academic chatbot that can answer your questions about GPA calculation, academic policies, and study tips. The chatbot is integrated directly into the calculator interface.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>About DTC Group</Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            GAP Calculator is developed and maintained by <strong>DTC Group</strong>, a team dedicated to creating innovative digital solutions for educational institutions. We specialize in developing tools that enhance the academic experience for students and educators alike.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>Disclaimer</Typography>
          <Typography variant="body2" color="text.secondary">
            This tool is designed to assist students in calculating their GPAs and is not an official IAA application. Always verify your results with official IAA records. The developers (DTC Group) are not responsible for any discrepancies or academic decisions based on this calculator.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowAbout(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={showHelp} onClose={() => setShowHelp(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5" fontWeight={700}>How to Use GAP Calculator</Typography>
          <IconButton size="small" onClick={() => setShowHelp(false)}><Close /></IconButton>
        </DialogTitle>
        <DialogContent dividers>
          {[
            { title: '1. Select Your Programme', items: ['First, select your NTA Level from the dropdown', 'Then choose your specific academic programme', 'Finally, select the semester you want to calculate'] },
            { title: '2. Enter Your Grades', items: ['For each module, select your earned grade from the dropdown', 'Make sure to enter grades for all modules', 'You can change grades at any time before calculating'] },
            { title: '3. Calculate Your GPA', items: ['Click "Calculate Semester GPA" to compute your semester result', 'Your GPA will be displayed with performance evaluation', 'Quality points and credit hours are shown for reference'] },
            { title: '4. Save and Export', items: ['Click "Save Results" to store your semester for CGPA calculation', 'Use "Export PDF" to download a report of your results', 'View your CGPA in the summary section after saving semesters'] },
            { title: '5. Understanding Your Results', items: [
              'Semester GPA: Grade Point Average for the current semester',
              'CGPA: Cumulative Grade Point Average across all saved semesters',
              'Quality Points: Grade points multiplied by credit hours',
              'Performance: Text evaluation based on your GPA score',
            ] },
          ].map((section) => (
            <Box key={section.title} sx={{ mb: 2 }}>
              <Typography variant="subtitle2" gutterBottom>{section.title}</Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                {section.items.map((item) => (
                  <Typography key={item} component="li" variant="body2" color="text.secondary">{item}</Typography>
                ))}
              </Box>
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowHelp(false)}>Got It</Button>
        </DialogActions>
      </Dialog>

      <AcademicChatbot
        userGPA={showResults ? currentGPA : undefined}
        programmeName={selectedProgramme?.name}
        semesterNumber={selectedSemester}
      />

      <Box sx={{ maxWidth: 1200, mx: 'auto', py: 4, px: 2 }}>
        <Box textAlign="center" mb={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 1 }}>
            <School color="primary" sx={{ fontSize: 48 }} />
            <Typography variant="h3" fontWeight={700}>GAP a GPA Calculator</Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Calculate your Semester GPA and CGPA with accuracy
            {selectedUniversity ? (
              <span> based on {selectedUniversity.shortName} grading system</span>
            ) : (
              <span> - Select your university to begin</span>
            )}
          </Typography>
          {selectedUniversity && (
            <Chip label={`${selectedUniversity.name} - ${selectedUniversity.location}`} variant="outlined" sx={{ mt: 1 }} />
          )}
        </Box>

        {savedSemesters.length > 0 && (
          <Card sx={{ mb: 3, border: 2, borderColor: 'success.light' }}>
            <CardHeader
              avatar={<EmojiEvents color="success" />}
              title="CGPA Summary"
              subheader="Cumulative Grade Point Average across all saved semesters"
            />
            <CardContent>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: { xs: 1, md: 3 }, mb: 3 }}>
                {[
                  { value: cgpa.toFixed(2), label: 'CGPA', color: 'success.main' },
                  { value: savedSemesters.length, label: 'Semesters', color: 'primary.main' },
                  { value: savedSemesters.reduce((sum, sem) => sum + sem.totalCreditHours, 0), label: 'Credits', color: 'success.dark' },
                ].map((stat) => (
                  <Box key={stat.label} sx={{ textAlign: 'center', p: { xs: 2, md: 3 }, bgcolor: `${stat.color}10`, borderRadius: 2 }}>
                    <Typography variant="h4" fontWeight={700} sx={{ color: stat.color }}>{stat.value}</Typography>
                    <Typography variant="caption" color="text.secondary">{stat.label}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="subtitle2">Saved Semesters:</Typography>
                  <Chip label={`${savedSemesters.length} ${savedSemesters.length === 1 ? 'semester' : 'semesters'}`} variant="outlined" size="small" />
                </Box>
                <Box sx={{ maxHeight: 160, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {savedSemesters.map((semester, index) => (
                    <Box
                      key={index}
                      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: { xs: 1.5, md: 2 }, bgcolor: 'grey.100', borderRadius: 1, '&:hover': { bgcolor: 'action.hover' } }}
                    >
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography variant="body2" fontWeight={500} noWrap>{semester.programmeName}</Typography>
                        <Typography variant="caption" color="text.secondary">
                          {semester.semesterName} &bull; {new Date(semester.savedAt).toLocaleDateString()}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center', flexShrink: 0, ml: 1 }}>
                        <Chip label={semester.gpa.toFixed(2)} size="small" color="primary" variant="outlined" />
                        <IconButton size="small" onClick={(e) => { e.stopPropagation(); handleExportSavedSemesterPDF(semester); }} title="Export PDF">
                          <Download fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1, justifyContent: 'center' }}>
                <Button variant="contained" color="success" onClick={calculateCumulativeGPA} startIcon={<CalculateIcon />} fullWidth={isMobile}>
                  {isMobile ? 'Calculate' : 'Calculate CGPA'}
                </Button>
                <Button variant="contained" color="error" onClick={resetAllData} startIcon={<Delete />} fullWidth={isMobile}>
                  {isMobile ? 'Reset' : 'Reset All Data'}
                </Button>
              </Box>
            </CardContent>
          </Card>
        )}

        <Card sx={{ mb: 3 }}>
          <CardHeader
            avatar={<MenuBook color="primary" />}
            title="University, Programme & Semester Selection"
            subheader="Select your university, academic level, programme and semester to load the correct modules"
          />
          <CardContent>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                <InputLabel>University</InputLabel>
                <Select value={selectedUniversity?.id?.toString() || ''} label="University" onChange={(e) => handleUniversityChange(e.target.value)}>
                  {UNIVERSITIES.map((u) => (
                    <MenuItem key={u.id} value={u.id.toString()}>
                      {u.name} ({u.shortName})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
                <FormControl size="small" fullWidth>
                  <InputLabel>Academic Level</InputLabel>
                  <Select value={selectedLevel?.toString() || ''} label="Academic Level" onChange={(e) => handleLevelChange(e.target.value)} disabled={!selectedUniversity}>
                    {ACADEMIC_LEVELS.map((l) => (
                      <MenuItem key={l.id} value={l.id.toString()}>{l.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl size="small" fullWidth>
                  <InputLabel>Programme</InputLabel>
                  <Select value={selectedProgram?.id?.toString() || ''} label="Programme" onChange={(e) => handleProgramChange(e.target.value)} disabled={!selectedLevel}>
                    {programmesForLevel.map((p) => (
                      <MenuItem key={p.id} value={p.id.toString()}>{p.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              {selectedProgramme && (
                <FormControl fullWidth size="small" sx={{ mt: 2 }}>
                  <InputLabel>Semester</InputLabel>
                  <Select value={selectedSemester.toString()} label="Semester" onChange={(e) => setSelectedSemester(parseInt(e.target.value))}>
                    {selectedProgramme.semesters.map((sem) => (
                      <MenuItem key={sem.semesterNumber} value={sem.semesterNumber.toString()}>{sem.semesterName}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'grid' }, gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
              <FormControl size="small" fullWidth>
                <InputLabel>University</InputLabel>
                <Select value={selectedUniversity?.id?.toString() || ''} label="University" onChange={(e) => handleUniversityChange(e.target.value)}>
                  {UNIVERSITIES.map((u) => (
                    <MenuItem key={u.id} value={u.id.toString()}>
                      {u.name} ({u.shortName})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl size="small" fullWidth>
                <InputLabel>Academic Level</InputLabel>
                <Select value={selectedLevel?.toString() || ''} label="Academic Level" onChange={(e) => handleLevelChange(e.target.value)} disabled={!selectedUniversity}>
                  {ACADEMIC_LEVELS.map((l) => (
                    <MenuItem key={l.id} value={l.id.toString()}>{l.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl size="small" fullWidth>
                <InputLabel>Programme</InputLabel>
                <Select value={selectedProgram?.id?.toString() || ''} label="Programme" onChange={(e) => handleProgramChange(e.target.value)} disabled={!selectedLevel}>
                  {programmesForLevel.map((p) => (
                    <MenuItem key={p.id} value={p.id.toString()}>{p.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              {selectedProgramme && (
                <FormControl size="small" fullWidth>
                  <InputLabel>Semester</InputLabel>
                  <Select value={selectedSemester.toString()} label="Semester" onChange={(e) => setSelectedSemester(parseInt(e.target.value))}>
                    {selectedProgramme.semesters.map((sem) => (
                      <MenuItem key={sem.semesterNumber} value={sem.semesterNumber.toString()}>{sem.semesterName}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            </Box>
          </CardContent>
        </Card>

        {selectedProgramme && moduleGrades.length > 0 && (
          <Card sx={{ mb: 3 }}>
            <CardHeader
              avatar={<CalculateIcon color="primary" />}
              title="Module Grades Entry"
              subheader="Select your grades for each module. GPA will be calculated automatically."
            />
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {moduleGrades.map((moduleGrade, index) => (
                  <ModuleGradeRow
                    key={moduleGrade.module.code}
                    moduleGrade={moduleGrade}
                    index={index}
                    onGradeChange={handleGradeChange}
                    isMobile={isMobile}
                  />
                ))}
              </Box>
              <Divider sx={{ my: 3 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={calculateGPA}
                  startIcon={<CalculateIcon />}
                  fullWidth
                >
                  Calculate Semester GPA
                </Button>
                {showResults && (
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 1 }}>
                    <Button variant="outlined" size="large" onClick={saveToLocalStorage} fullWidth>Save Results</Button>
                    <Button variant="contained" color="success" size="large" onClick={handleExportPDF} startIcon={<Download />} fullWidth>
                      {isMobile ? 'Export' : 'Export PDF'}
                    </Button>
                    <Button variant="contained" color="error" size="large" onClick={resetCalculations} startIcon={<Delete />} fullWidth>
                      {isMobile ? 'Reset' : 'Reset'}
                    </Button>
                  </Box>
                )}
              </Box>
            </CardContent>
          </Card>
        )}

        {showResults && (
          <Card sx={{ border: 2, borderColor: 'primary.light' }}>
            <CardHeader
              sx={{ textAlign: 'center' }}
              avatar={<EmojiEvents color="success" />}
              title={<Typography variant="h5">Your Semester Results</Typography>}
            />
            <CardContent sx={{ textAlign: 'center' }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h2" fontWeight={700} sx={{ color: getGPAColor(currentGPA) }}>
                  {currentGPA.toFixed(2)}
                </Typography>
                <Typography variant="h6" sx={{ color: getGPAColor(currentGPA), fontWeight: 600 }}>
                  {getGPADescription(currentGPA)}
                </Typography>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: { xs: 1, md: 3 }, mb: 2 }}>
                <Box>
                  <Typography variant="h5" fontWeight={700} color="primary.main">
                    {moduleGrades.reduce((sum, g) => sum + g.module.creditHours, 0)}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">Credits</Typography>
                </Box>
                <Box>
                  <Typography variant="h5" fontWeight={700} color="success.main">
                    {moduleGrades.filter((g) => g.gradePoint >= 2.0).length}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">Passed</Typography>
                </Box>
                <Box>
                  <Typography variant="h5" fontWeight={700} color="success.dark">
                    {moduleGrades.reduce((sum, g) => sum + g.gradePoint * g.module.creditHours, 0).toFixed(1)}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">Points</Typography>
                </Box>
              </Box>
              {cgpa > 0 && (
                <Box sx={{ mt: 2, p: 2, bgcolor: 'success.light', borderRadius: 1 }}>
                  <Typography variant="subtitle1" fontWeight={600} color="success.dark">Cumulative GPA</Typography>
                  <Typography variant="h4" fontWeight={700} color="success.dark">{cgpa.toFixed(2)}</Typography>
                </Box>
              )}
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="error" size="small" onClick={resetCalculations} startIcon={<Delete />}>
                  Reset Calculation
                </Button>
              </Box>
            </CardContent>
          </Card>
        )}
      </Box>
    </Box>
  );
};

export default GPACalculator;
