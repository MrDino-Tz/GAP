import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Container, Typography, TextField, Card, CardContent, IconButton,
  FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { programmes } from '@/data/academicData';
import { ACADEMIC_LEVELS } from '@/types/academic';

const TargetGpaCalculator = () => {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedProgramme, setSelectedProgramme] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [currentCgpa, setCurrentCgpa] = useState('');
  const [completedCredits, setCompletedCredits] = useState('');
  const [targetCgpa, setTargetCgpa] = useState('');

  const programmesForLevel = selectedLevel
    ? programmes.filter(p => {
        const level = ACADEMIC_LEVELS.find(l => l.id === selectedLevel);
        return level ? level.ntaLevels.includes(p.ntaLevel) : false;
      })
    : [];

  const currentSemester = selectedProgramme?.semesters.find(s => s.semesterNumber === selectedSemester);
  const semesterCredits = currentSemester?.modules.reduce((sum, m) => sum + m.creditHours, 0) || 0;

  const currentCgpaNum = parseFloat(currentCgpa) || 0;
  const completedCreditsNum = parseFloat(completedCredits) || 0;
  const targetCgpaNum = parseFloat(targetCgpa) || 0;

  const currentQualityPoints = currentCgpaNum * completedCreditsNum;

  const requiredGpa = targetCgpaNum > 0 && semesterCredits > 0
    ? (targetCgpaNum * (completedCreditsNum + semesterCredits) - currentQualityPoints) / semesterCredits
    : 0;

  const isAchievable = requiredGpa <= 5 && requiredGpa >= 0;
  const needsAtLeast = Math.max(0, requiredGpa);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', height: 64, gap: 1 }}>
            <IconButton onClick={() => navigate('/tools')}><ArrowBack /></IconButton>
            <Typography variant="h6" fontWeight={700}>Target GPA Calculator</Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
          <FormControl size="small" sx={{ minWidth: 200 }}>
            <InputLabel>Academic Level</InputLabel>
            <Select value={selectedLevel?.toString() || ''} label="Academic Level" onChange={e => { setSelectedLevel(parseInt(e.target.value)); setSelectedProgramme(null); }}>
              {ACADEMIC_LEVELS.map(l => (
                <MenuItem key={l.id} value={l.id.toString()}>{l.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 250 }}>
            <InputLabel>Programme</InputLabel>
            <Select value={selectedProgramme?.id?.toString() || ''} label="Programme" onChange={e => setSelectedProgramme(programmes.find(p => p.id === parseInt(e.target.value)))} disabled={!selectedLevel}>
              {programmesForLevel.map(p => (
                <MenuItem key={p.id} value={p.id.toString()}>{p.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          {selectedProgramme && (
            <FormControl size="small" sx={{ minWidth: 180 }}>
              <InputLabel>Semester</InputLabel>
              <Select value={selectedSemester.toString()} label="Semester" onChange={e => setSelectedSemester(parseInt(e.target.value))}>
                {selectedProgramme.semesters.map(s => (
                  <MenuItem key={s.semesterNumber} value={s.semesterNumber.toString()}>{s.semesterName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} mb={2}>Your Current Status</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Current CGPA"
                  size="small"
                  type="number"
                  value={currentCgpa}
                  onChange={e => setCurrentCgpa(e.target.value)}
                  inputProps={{ min: 0, max: 5, step: 0.01 }}
                  helperText="Your current cumulative GPA"
                />
                <TextField
                  label="Completed Credits"
                  size="small"
                  type="number"
                  value={completedCredits}
                  onChange={e => setCompletedCredits(e.target.value)}
                  inputProps={{ min: 0, step: 1 }}
                  helperText="Total credit hours completed so far"
                />
                <TextField
                  label="Target CGPA"
                  size="small"
                  type="number"
                  value={targetCgpa}
                  onChange={e => setTargetCgpa(e.target.value)}
                  inputProps={{ min: 0, max: 5, step: 0.01 }}
                  helperText="The CGPA you want to achieve"
                />
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight={600} mb={2}>Current Semester</Typography>
              {selectedProgramme ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Programme: <strong>{selectedProgramme.name}</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Semester: <strong>{currentSemester?.semesterName}</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This semester credits: <strong>{semesterCredits}</strong>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    Quality points so far: <strong>{currentQualityPoints.toFixed(1)}</strong>
                  </Typography>
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary">Select a programme and semester above.</Typography>
              )}
            </CardContent>
          </Card>
        </Box>

        {currentCgpa && completedCredits && targetCgpa && selectedProgramme && (
          <Card sx={{ textAlign: 'center', border: 2, borderColor: isAchievable ? 'success.light' : 'error.light' }}>
            <CardContent sx={{ py: 4 }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Required GPA This Semester
              </Typography>
              <Typography variant="h2" fontWeight={700} sx={{ color: isAchievable ? 'success.main' : 'error.main' }}>
                {isAchievable ? needsAtLeast.toFixed(2) : '—'}
              </Typography>
              {isAchievable ? (
                <>
                  <Typography variant="body1" color="text.secondary" mt={1}>
                    You need a GPA of at least <strong>{needsAtLeast.toFixed(2)}</strong> this semester
                    to reach a CGPA of <strong>{targetCgpaNum.toFixed(2)}</strong>.
                  </Typography>
                  <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                    <Box>
                      <Typography variant="h5" fontWeight={600} color={needsAtLeast <= 2 ? 'success.main' : needsAtLeast <= 3 ? 'primary.main' : 'warning.main'}>
                        {needsAtLeast <= 2 ? 'Easily achievable' : needsAtLeast <= 3.5 ? 'Achievable' : needsAtLeast <= 4.5 ? 'Challenging' : 'Very difficult'}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">Difficulty</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h5" fontWeight={600}>{semesterCredits}</Typography>
                      <Typography variant="caption" color="text.secondary">Credits this semester</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h5" fontWeight={600}>{(currentQualityPoints + needsAtLeast * semesterCredits).toFixed(1)}</Typography>
                      <Typography variant="caption" color="text.secondary">Total quality points</Typography>
                    </Box>
                  </Box>
                </>
              ) : (
                <Typography variant="body1" color="error.main" mt={1}>
                  {requiredGpa > 5
                    ? 'This target is not achievable — you would need a GPA above 5.0. Try a lower target CGPA.'
                    : 'Please check your inputs.'}
                </Typography>
              )}
            </CardContent>
          </Card>
        )}
      </Container>
    </Box>
  );
};

export default TargetGpaCalculator;
