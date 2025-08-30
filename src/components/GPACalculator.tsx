import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, Calculator, Trophy, BookOpen } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { 
  programmes, 
  Programme, 
  Module, 
  getGradeInfo, 
  calculateSemesterGPA, 
  gradingScale
} from '@/data/academicData';

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

const GPACalculator = () => {
  const [selectedProgramme, setSelectedProgramme] = useState<Programme | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number>(1);
  const [moduleGrades, setModuleGrades] = useState<ModuleGrade[]>([]);
  const [semesterResults, setSemesterResults] = useState<SemesterResult[]>([]);
  const [currentGPA, setCurrentGPA] = useState<number>(0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (selectedProgramme) {
      const semester = selectedProgramme.semesters.find(s => s.semesterNumber === selectedSemester);
      if (semester) {
        const initialGrades: ModuleGrade[] = semester.modules.map(module => ({
          module,
          letterGrade: 'F',
          gradePoint: 0.0
        }));
        setModuleGrades(initialGrades);
      }
    }
  }, [selectedProgramme, selectedSemester]);

  const handleProgrammeChange = (programmeId: string) => {
    const programme = programmes.find(p => p.id === parseInt(programmeId));
    if (programme) {
      setSelectedProgramme(programme);
      setSelectedSemester(1);
      setShowResults(false);
      setCurrentGPA(0);
    }
  };

  const handleGradeChange = (index: number, letterGrade: string) => {
    const gradeInfo = gradingScale.find(g => g.letterGrade === letterGrade);
    
    const updatedGrades = [...moduleGrades];
    updatedGrades[index] = {
      ...updatedGrades[index],
      letterGrade,
      gradePoint: gradeInfo?.gradePoint || 0.0
    };
    setModuleGrades(updatedGrades);
  };

  const calculateGPA = () => {
    if (moduleGrades.some(grade => !grade.letterGrade)) {
      toast({
        title: "Incomplete Data",
        description: "Please select a grade for all modules.",
        variant: "destructive"
      });
      return;
    }

    const gpa = calculateSemesterGPA(moduleGrades.map(g => ({
      creditHours: g.module.creditHours,
      gradePoint: g.gradePoint
    })));

    setCurrentGPA(gpa);
    setShowResults(true);

    toast({
      title: "GPA Calculated Successfully!",
      description: `Your Semester GPA is ${gpa.toFixed(2)}`,
      variant: "default"
    });
  };

  const saveToLocalStorage = () => {
    if (!selectedProgramme) return;
    
    const semesterData = {
      programmeId: selectedProgramme.id,
      semesterNumber: selectedSemester,
      semesterName: selectedProgramme.semesters.find(s => s.semesterNumber === selectedSemester)?.semesterName,
      modules: moduleGrades,
      gpa: currentGPA,
      totalCreditHours: moduleGrades.reduce((sum, g) => sum + g.module.creditHours, 0),
      savedAt: new Date().toISOString()
    };

    const saved = JSON.parse(localStorage.getItem('iaa-gpa-data') || '[]');
    const existingIndex = saved.findIndex((s: any) => 
      s.programmeId === selectedProgramme.id && s.semesterNumber === selectedSemester
    );

    if (existingIndex >= 0) {
      saved[existingIndex] = semesterData;
    } else {
      saved.push(semesterData);
    }

    localStorage.setItem('iaa-gpa-data', JSON.stringify(saved));
    
    toast({
      title: "Data Saved",
      description: "Your semester data has been saved locally.",
      variant: "default"
    });
  };

  const getGPAColor = (gpa: number) => {
    if (gpa >= 4.5) return 'text-success';
    if (gpa >= 4.0) return 'text-primary';
    if (gpa >= 3.5) return 'text-warning';
    return 'text-destructive';
  };

  const getGPADescription = (gpa: number) => {
    if (gpa >= 4.5) return 'Excellent Performance! 🏆';
    if (gpa >= 4.0) return 'Very Good Performance! 🌟';
    if (gpa >= 3.5) return 'Good Performance! ✨';
    if (gpa >= 3.0) return 'Satisfactory Performance';
    if (gpa >= 2.0) return 'Pass - Room for Improvement';
    return 'Below Average - Need Significant Improvement';
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto py-8 px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="h-12 w-12 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">GAP a GPA Calculator</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your Semester GPA and CGPA with accuracy based on official IAA grading system
          </p>
        </div>

        {/* Programme Selection */}
        <Card className="mb-6 shadow-academic">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Programme & Semester Selection
            </CardTitle>
            <CardDescription>
              Select your programme and semester to load the correct modules
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="programme">Programme</Label>
                <Select onValueChange={handleProgrammeChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your programme" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover border border-border shadow-lg z-50 max-h-60 overflow-y-auto">
                    {programmes.map((programme) => (
                      <SelectItem key={programme.id} value={programme.id.toString()}>
                        {programme.name} - NTA Level {programme.ntaLevel}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {selectedProgramme && (
                <div className="space-y-2">
                  <Label htmlFor="semester">Semester</Label>
                  <Select 
                    value={selectedSemester.toString()} 
                    onValueChange={(value) => setSelectedSemester(parseInt(value))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border border-border shadow-lg z-50">
                      {selectedProgramme.semesters.map((semester) => (
                        <SelectItem key={semester.semesterNumber} value={semester.semesterNumber.toString()}>
                          {semester.semesterName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Module Entry */}
        {selectedProgramme && moduleGrades.length > 0 && (
          <Card className="mb-6 shadow-academic">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-primary" />
                Module Grades Entry
              </CardTitle>
              <CardDescription>
                Select your grades for each module. GPA will be calculated automatically.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {moduleGrades.map((moduleGrade, index) => (
                  <div key={moduleGrade.module.code} className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center p-4 border border-border rounded-lg">
                    <div className="md:col-span-2">
                      <div className="font-medium">{moduleGrade.module.code}</div>
                      <div className="text-sm text-muted-foreground">{moduleGrade.module.name}</div>
                    </div>
                    <div className="text-center">
                      <Badge variant="secondary">{moduleGrade.module.creditHours} Credits</Badge>
                    </div>
                    <div>
                      <Select
                        value={moduleGrade.letterGrade}
                        onValueChange={(value) => handleGradeChange(index, value)}
                      >
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent>
                          {gradingScale.map((grade) => (
                            <SelectItem key={grade.letterGrade} value={grade.letterGrade}>
                              {grade.letterGrade} ({grade.gradePoint.toFixed(1)})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="text-center">
                      <Badge 
                        variant={moduleGrade.gradePoint >= 4.0 ? "default" : moduleGrade.gradePoint >= 3.0 ? "secondary" : "destructive"}
                      >
                        {moduleGrade.gradePoint.toFixed(1)}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-6" />
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={calculateGPA}
                  className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-smooth"
                  size="lg"
                >
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate GPA
                </Button>
                {showResults && (
                  <Button 
                    onClick={saveToLocalStorage}
                    variant="outline"
                    size="lg"
                  >
                    Save Results
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results Display */}
        {showResults && (
          <Card className="shadow-glow border-2 border-primary/20">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Trophy className="h-8 w-8 text-success" />
                <CardTitle className="text-2xl">Your Semester Results</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="space-y-2">
                <div className="text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {currentGPA.toFixed(2)}
                </div>
                <div className={`text-xl font-semibold ${getGPAColor(currentGPA)}`}>
                  {getGPADescription(currentGPA)}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {moduleGrades.reduce((sum, g) => sum + g.module.creditHours, 0)}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Credit Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">
                    {moduleGrades.filter(g => g.gradePoint >= 2.0).length}
                  </div>
                  <div className="text-sm text-muted-foreground">Modules Passed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">
                    {moduleGrades.reduce((sum, g) => sum + (g.gradePoint * g.module.creditHours), 0).toFixed(1)}
                  </div>
                  <div className="text-sm text-muted-foreground">Quality Points</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default GPACalculator;