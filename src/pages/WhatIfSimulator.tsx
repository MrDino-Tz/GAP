import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Container, Typography, FormControl, InputLabel, Select, MenuItem,
  Card, CardContent, Slider, IconButton,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { programmes } from '@/data/academicData';
import { ACADEMIC_LEVELS } from '@/types/academic';
import {
  UNIVERSITIES, getUniversityById,
  getUniversityGradeScale, getUniversityFailGrade, getGradingPrecision,
} from '@/types/university';
import { calcSemesterGPA, GradingConfig } from '@/lib/gpaApi';

const WhatIfSimulator = () => {
  const navigate = useNavigate();
  const [selectedUniversity, setSelectedUniversity] = useState(getUniversityById(1));
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedProgramme, setSelectedProgramme] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [grades, setGrades] = useState({});
  const [gpa, setGpa] = useState(0);
  const [calculating, setCalculating] = useState(false);

  const gradeOptions = selectedUniversity
    ? getUniversityGradeScale(selectedUniversity)
    : getUniversityGradeScale(getUniversityById(1));

  const failGrade = getUniversityFailGrade(selectedUniversity);
  const topGrade = gradeOptions.reduce((top, level) => (level.points > top.points ? level : top), gradeOptions[0])?.grade ?? 'A';
  const grading: GradingConfig = getGradingPrecision(selectedUniversity);

  const programmesForLevel = selectedLevel
    ? programmes.filter(p => {
        const level = ACADEMIC_LEVELS.find(l => l.id === selectedLevel);
        const universityOk = selectedUniversity ? p.universityId === selectedUniversity.id : true;
        return universityOk && level ? level.ntaLevels.includes(p.ntaLevel) : false;
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

  const moduleGradesKey = JSON.stringify(moduleGrades.map(m => [m.module.code, m.gradePoint]));

  useEffect(() => {
    if (moduleGrades.length === 0) {
      setGpa(0);
      return;
    }
    setCalculating(true);
    const timer = setTimeout(async () => {
      try {
        const result = await calcSemesterGPA(moduleGrades, false, grading);
        setGpa(result.gpa);
      } finally {
        setCalculating(false);
      }
    }, 300);
    return () => {
      clearTimeout(timer);
      setCalculating(false);
    };
    // recalc only when the selected grades change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleGradesKey]);

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
            <InputLabel>University</InputLabel>
            <Select value={selectedUniversity?.id?.toString() || '1'} label="University" onChange={e => { setSelectedUniversity(getUniversityById(parseInt(e.target.value))); setSelectedLevel(null); setSelectedProgramme(null); setGrades({}); }}>
              {UNIVERSITIES.map(u => (
                <MenuItem key={u.id} value={u.id.toString()}>{u.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
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
                  {gpa.toFixed(grading.decimals)}
                </Typography>
              <Typography variant="h6" color="text.secondary">Simulated Semester GPA</Typography>
              {calculating && (
                <Typography variant="caption" color="text.secondary">Calculating…</Typography>
              )}
            </Box>

            <Card>
              <CardContent>
                <Typography variant="h6" fontWeight={600} mb={3}>Adjust Module Grades</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {currentSemester.modules.map(mod => {
                    const currentGrade = grades[mod.code] ?? 0;
                    const gradeLabel = gradeOptions.find(g => g.points === currentGrade)?.grade || failGrade;
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
                          <Typography variant="caption" color="text.secondary" sx={{ minWidth: 20 }}>{failGrade}</Typography>
                          <Slider
                            value={currentGrade}
                            onChange={(_, val) => handleGradeChange(mod.code, val)}
                            step={1}
                            min={0}
                            max={5}
                            marks={gradeOptions.map(g => ({ value: g.points, label: '' }))}
                            sx={{ flex: 1 }}
                          />
                          <Typography variant="caption" color="text.secondary" sx={{ minWidth: 20, textAlign: 'right' }}>{topGrade}</Typography>
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
