import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Container, Typography, FormControl, InputLabel, Select, MenuItem,
  Card, CardContent, Slider, IconButton,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { programmes } from '@/data/academicData';
import { ACADEMIC_LEVELS } from '@/types/academic';
import { gradingScale, calculateSemesterGPA } from '@/data/academicData';

const WhatIfSimulator = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedProgramme, setSelectedProgramme] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [grades, setGrades] = useState({});

  const programmesForLevel = selectedLevel
    ? programmes.filter(p => {
        const level = ACADEMIC_LEVELS.find(l => l.id === selectedLevel);
        return level ? level.ntaLevels.includes(p.ntaLevel) : false;
      })
    : [];

  const currentSemester = selectedProgramme?.semesters.find(s => s.semesterNumber === selectedSemester);

  const handleGradeChange = (moduleCode, newGradePoint) => {
    setGrades(prev => ({ ...prev, [moduleCode]: newGradePoint }));
  };

  const moduleGrades = currentSemester?.modules.map(mod => ({
    module: mod,
    gradePoint: grades[mod.code] ?? 0,
  })) || [];

  const gpa = moduleGrades.length > 0
    ? calculateSemesterGPA(moduleGrades.map(m => ({ creditHours: m.module.creditHours, gradePoint: m.gradePoint })))
    : 0;

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', height: 64, gap: 1 }}>
            <IconButton onClick={() => navigate('/tools')}><ArrowBack /></IconButton>
            <Typography variant="h6" fontWeight={700}>What-If Simulator</Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel>Academic Level</InputLabel>
            <Select value={selectedLevel?.toString() || ''} label="Academic Level" onChange={e => { setSelectedLevel(parseInt(e.target.value)); setSelectedProgramme(null); setGrades({}); }}>
              {ACADEMIC_LEVELS.map(l => (
                <MenuItem key={l.id} value={l.id.toString()}>{l.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 250 }}>
            <InputLabel>Programme</InputLabel>
            <Select value={selectedProgramme?.id?.toString() || ''} label="Programme" onChange={e => { setSelectedProgramme(programmes.find(p => p.id === parseInt(e.target.value))); setGrades({}); }} disabled={!selectedLevel}>
              {programmesForLevel.map(p => (
                <MenuItem key={p.id} value={p.id.toString()}>{p.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          {selectedProgramme && (
            <FormControl size="small" sx={{ minWidth: 180 }}>
              <InputLabel>Semester</InputLabel>
              <Select value={selectedSemester.toString()} label="Semester" onChange={e => { setSelectedSemester(parseInt(e.target.value)); setGrades({}); }}>
                {selectedProgramme.semesters.map(s => (
                  <MenuItem key={s.semesterNumber} value={s.semesterNumber.toString()}>{s.semesterName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Box>

        {currentSemester && (
          <>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h2" fontWeight={700} sx={{ color: gpa >= 4 ? 'success.main' : gpa >= 3 ? 'primary.main' : gpa >= 2 ? 'warning.main' : 'error.main' }}>
                {gpa.toFixed(2)}
              </Typography>
              <Typography variant="h6" color="text.secondary">Simulated Semester GPA</Typography>
            </Box>

            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={600} mb={3}>Adjust Module Grades</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {currentSemester.modules.map(mod => {
                    const currentGrade = grades[mod.code] ?? 0;
                    const gradeLabel = gradingScale.find(g => g.gradePoint === currentGrade)?.letterGrade || 'F';
                    return (
                      <Box key={mod.code}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                          <Typography variant="body2" fontWeight={500}>
                            {mod.code} - {mod.name}
                          </Typography>
                          <Typography variant="body2" fontWeight={600} sx={{ color: currentGrade >= 4 ? 'success.main' : currentGrade >= 3 ? 'primary.main' : currentGrade >= 2 ? 'warning.main' : 'error.main' }}>
                            {gradeLabel} ({currentGrade.toFixed(1)})
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Typography variant="caption" color="text.secondary" sx={{ minWidth: 20 }}>F</Typography>
                          <Slider
                            value={currentGrade}
                            onChange={(_, val) => handleGradeChange(mod.code, val)}
                            step={1}
                            min={0}
                            max={5}
                            marks={gradingScale.map(g => ({ value: g.gradePoint, label: '' }))}
                            sx={{ flex: 1 }}
                          />
                          <Typography variant="caption" color="text.secondary" sx={{ minWidth: 20, textAlign: 'right' }}>A</Typography>
                        </Box>
                        <Typography variant="caption" color="text.secondary">
                          {mod.creditHours} credit{mod.creditHours > 1 ? 's' : ''}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </CardContent>
            </Card>
          </>
        )}
      </Container>
    </Box>
  );
};

export default WhatIfSimulator;
