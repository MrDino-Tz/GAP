import { useNavigate } from 'react-router-dom';
import {
  Box, Card, CardContent, CardActionArea, Typography, Container,
} from '@mui/material';
import { AutoGraph, TrackChanges } from '@mui/icons-material';

const GpaTools = () => {
  const navigate = useNavigate();

  const tools = [
    {
      path: '/tools/what-if',
      icon: <AutoGraph sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'What-If Simulator',
      description: 'Adjust your module grades and see the instant impact on your semester GPA.',
    },
    {
      path: '/tools/target-gpa',
      icon: <TrackChanges sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: 'Target GPA Calculator',
      description: 'Calculate what GPA you need this semester to reach your desired CGPA.',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', height: 64, gap: 3 }}>
            <Typography
              variant="body2"
              sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}
              onClick={() => navigate('/')}
            >
              Home
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main' }}>
              Tools
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Typography variant="h3" fontWeight={700} textAlign="center" mb={1}>
          GPA Tools
        </Typography>
        <Typography variant="body1" color="text.secondary" textAlign="center" mb={5}>
          Interactive tools to help you plan and achieve your academic goals.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {tools.map((tool) => (
            <Card key={tool.path} sx={{ '&:hover': { boxShadow: 4 } }}>
              <CardActionArea onClick={() => navigate(tool.path)} sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  {tool.icon}
                  <Box>
                    <Typography variant="h5" fontWeight={600}>{tool.title}</Typography>
                    <Typography variant="body1" color="text.secondary">{tool.description}</Typography>
                  </Box>
                </Box>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default GpaTools;
