import { useState, useEffect, useCallback, type ReactNode } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Box, Container, Typography, Card, CardContent, TextField, Button,
  IconButton, Table, TableBody, TableCell, TableHead, TableRow,
  Snackbar, Alert, AlertColor,
} from '@mui/material';
import {
  ArrowBack, Refresh, DeleteSweep, Visibility, Calculate, Lock,
} from '@mui/icons-material';
import { apiBase } from '@/lib/gpaApi';

const TOKEN_KEY = 'gap-admin-token';

interface Stats {
  totals: { views: number; unique: number; calculations: number };
  today: { views: number; unique: number; calculations: number; date: string };
  daily: Array<{ day: string; views: number; unique_visitors: number; calculations: number }>;
  topPaths: Array<{ path: string; views: number }>;
  calcBreakdown: Array<{ type: string; label: string; count: number; avgResult: number | null; lastAt: string | null }>;
  recentCalculations: Array<{ at: string; type: string; label: string; result: number; detail: string }>;
}

const fmt = new Intl.NumberFormat();

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [token, setToken] = useState<string>(() => {
    return searchParams.get('token') || localStorage.getItem(TOKEN_KEY) || '';
  });
  const [tokenInput, setTokenInput] = useState('');
  const [unauthorized, setUnauthorized] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);
  const [error, setError] = useState('');
  const [toast, setToast] = useState<{ open: boolean; title: string; severity: AlertColor }>({ open: false, title: '', severity: 'success' });

  const showToast = (title: string, severity: AlertColor = 'success') => setToast({ open: true, title, severity });

  const load = useCallback(async () => {
    const api = apiBase();
    if (!token) {
      setStats(null);
      setUnauthorized(true);
      return;
    }
    try {
      const res = await fetch(`${api}/api/stats?days=30&token=${encodeURIComponent(token)}`);
      if (res.status === 401) {
        setUnauthorized(true);
        setStats(null);
        localStorage.removeItem(TOKEN_KEY);
        return;
      }
      if (!res.ok) throw new Error(`Failed to load stats (${res.status})`);
      setStats(await res.json());
      setUnauthorized(false);
      setError('');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not reach the GAP backend');
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
      setSearchToken(token);
      load();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const setSearchToken = (value: string) => {
    if (searchParams.get('token') !== value) {
      navigate(`/admin?token=${encodeURIComponent(value)}`, { replace: true });
    }
  };

  const handleLogin = () => {
    if (!tokenInput.trim()) {
      showToast('Enter your admin token', 'error');
      return;
    }
    setToken(tokenInput.trim());
  };

  const clearData = async () => {
    if (!window.confirm('Delete ALL visitor and calculation data? This cannot be undone.')) return;
    const api = apiBase();
    try {
      const res = await fetch(`${api}/admin/clear?token=${encodeURIComponent(token)}`);
      if (!res.ok) throw new Error('Unauthorized');
      showToast('All data cleared');
      load();
    } catch (e) {
      showToast(e instanceof Error ? e.message : 'Could not clear data', 'error');
    }
  };

  const signOut = () => {
    localStorage.removeItem(TOKEN_KEY);
    setToken('');
    setTokenInput('');
    setStats(null);
    setUnauthorized(true);
    navigate('/admin', { replace: true });
  };

  const maxViews = Math.max(1, ...(stats?.daily.map((d) => d.views) || [0]));
  const maxCalcs = Math.max(1, ...(stats?.daily.map((d) => d.calculations) || [0]));

  const metricCard = (value: number | string, label: string, icon?: ReactNode) => (
    <Card sx={{ flex: '1 1 150px', minWidth: 140, p: 0 }}>
      <CardContent>
        <Typography variant="h4" fontWeight={700}>{typeof value === 'number' ? fmt.format(value) : value}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
          {icon}{label}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', height: 64, gap: 1, justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton onClick={() => navigate('/')}><ArrowBack /></IconButton>
              <Typography variant="h6" fontWeight={700}>GAP Admin Dashboard</Typography>
            </Box>
            {token && (
              <Box sx={{ display: 'flex', gap: 1 }}>
                {stats && (
                  <Button size="small" onClick={clearData} color="error" startIcon={<DeleteSweep />}>Clear data</Button>
                )}
                <Button size="small" onClick={signOut}>Sign out</Button>
              </Box>
            )}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {!token || unauthorized ? (
          <Card sx={{ maxWidth: 420, mx: 'auto', mt: 6 }}>
            <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="h6" fontWeight={700} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Lock color="primary" /> Admin access
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Enter the admin token (ADMIN_TOKEN) to view visitor and calculator statistics.
              </Typography>
              <TextField
                label="Admin token"
                type="password"
                size="small"
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                fullWidth
              />
              <Button variant="contained" onClick={handleLogin} startIcon={<Lock />}>Unlock dashboard</Button>
            </CardContent>
          </Card>
        ) : (() => {
          if (!stats) {
            return (
              <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
                <Typography color="text.secondary">Loading dashboard…</Typography>
              </Box>
            );
          }
          return (
            <Box>
              {error && (
                <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
              )}

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                {metricCard(stats.totals.views, 'Total views', <Visibility sx={{ fontSize: 14 }} />)}
                {metricCard(stats.totals.unique, 'Unique visitors', <Visibility sx={{ fontSize: 14 }} />)}
                {metricCard(stats.totals.calculations, 'Calculations', <Calculate sx={{ fontSize: 14 }} />)}
                {metricCard(stats.today.views, 'Views today', <Visibility sx={{ fontSize: 14 }} />)}
                {metricCard(stats.today.unique, 'Unique today', <Visibility sx={{ fontSize: 14 }} />)}
                {metricCard(stats.today.calculations, 'Calcs today', <Calculate sx={{ fontSize: 14 }} />)}
              </Box>

              <Card sx={{ mb: 3, p: 0 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} mb={2}>Activity — last 30 days</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: 180 }}>
                    {stats.daily.length === 0 && <Typography variant="body2" color="text.secondary">No activity yet</Typography>}
                    {stats.daily.map((d) => {
                      const vh = Math.max(2, Math.round((d.views / maxViews) * 100));
                      const ch = Math.max(0, Math.round((d.calculations / maxCalcs) * 100));
                      return (
                        <Box key={d.day} title={`${d.day}: ${d.views} views, ${d.calculations} calcs`}
                          sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
                          <Box sx={{ width: '100%', bgcolor: 'success.main', borderRadius: '3px 3px 0 0', height: `${ch}%`, minHeight: ch > 0 ? 2 : 0 }} />
                          <Box sx={{ width: '100%', bgcolor: 'primary.main', borderRadius: '3px 3px 0 0', height: `${vh}%`, minHeight: 2 }} />
                          <Typography variant="caption" color="text.disabled">{d.day.slice(5)}</Typography>
                        </Box>
                      );
                    })}
                  </Box>
                  <Box sx={{ mt: 1.5, display: 'flex', gap: 3, color: 'text.secondary', typography: 'caption' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}><Box sx={{ width: 10, height: 10, bgcolor: 'primary.main', borderRadius: 0.5 }} /> Views</Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}><Box sx={{ width: 10, height: 10, bgcolor: 'success.main', borderRadius: 0.5 }} /> Calculations</Box>
                  </Box>
                </CardContent>
              </Card>

              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 3 }}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" fontWeight={600} mb={2}>Calculator usage</Typography>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Tool</TableCell>
                          <TableCell align="right">Uses</TableCell>
                          <TableCell align="right">Avg result</TableCell>
                          <TableCell>Last used</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {stats.calcBreakdown.length === 0 && (
                          <TableRow><TableCell colSpan={4} align="center" sx={{ color: 'text.secondary' }}>No calculations yet</TableCell></TableRow>
                        )}
                        {stats.calcBreakdown.map((c) => (
                          <TableRow key={c.type}>
                            <TableCell>{c.label}</TableCell>
                            <TableCell align="right">{fmt.format(c.count)}</TableCell>
                            <TableCell align="right">{c.avgResult != null ? c.avgResult.toFixed(2) : '—'}</TableCell>
                            <TableCell>{c.lastAt ? new Date(c.lastAt).toLocaleString() : '—'}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent>
                    <Typography variant="h6" fontWeight={600} mb={2}>Top pages</Typography>
                    <Table size="small">
                      <TableHead>
                        <TableRow><TableCell>Path</TableCell><TableCell align="right">Views</TableCell></TableRow>
                      </TableHead>
                      <TableBody>
                        {stats.topPaths.length === 0 && (
                          <TableRow><TableCell colSpan={2} align="center" sx={{ color: 'text.secondary' }}>No visits yet</TableCell></TableRow>
                        )}
                        {stats.topPaths.map((p) => (
                          <TableRow key={p.path}>
                            <TableCell>{p.path}</TableCell>
                            <TableCell align="right">{fmt.format(p.views)}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </Box>

              <Card>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} mb={2}>Recent calculations</Typography>
                  <Table size="small">
                    <TableHead>
                      <TableRow><TableCell>Time</TableCell><TableCell>Tool</TableCell><TableCell align="right">Result</TableCell><TableCell>Detail</TableCell></TableRow>
                    </TableHead>
                    <TableBody>
                      {stats.recentCalculations.length === 0 && (
                        <TableRow><TableCell colSpan={4} align="center" sx={{ color: 'text.secondary' }}>No calculations yet</TableCell></TableRow>
                      )}
                      {stats.recentCalculations.map((c, i) => (
                        <TableRow key={`${c.at}-${i}`}>
                          <TableCell>{new Date(c.at).toLocaleString()}</TableCell>
                          <TableCell>{c.label}</TableCell>
                          <TableCell align="right">{typeof c.result === 'number' ? c.result.toFixed(2) : c.result}</TableCell>
                          <TableCell>{c.detail}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </Box>
          );
        })()}

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="outlined" startIcon={<Refresh />} onClick={load}>Refresh</Button>
        </Box>
      </Container>

      <Snackbar open={toast.open} autoHideDuration={4000} onClose={() => setToast((p) => ({ ...p, open: false }))} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={() => setToast((p) => ({ ...p, open: false }))} severity={toast.severity} variant="filled">{toast.title}</Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminDashboard;