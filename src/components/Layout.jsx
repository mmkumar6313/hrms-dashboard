import { AppBar, Toolbar, Typography, Tabs, Tab, Box, Button } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout'

export default function Layout({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const tab = location.pathname.includes('employees') ? 1 : location.pathname.includes('leave') ? 2 : 0
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ fontWeight: 700, mr: 4 }}>
            TuneHR
          </Typography>
          <Tabs textColor="inherit" value={tab} sx={{ flexGrow: 1 }}>
            <Tab label="Dashboard" component={Link} to="/dashboard" />
            <Tab label="Employees" component={Link} to="/employees" />
            <Tab label="Leave Requests" component={Link} to="/leave" />
          </Tabs>
          <Button color="inherit" startIcon={<LogoutIcon />} onClick={() => navigate('/login')}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3, maxWidth: 1100, mx: 'auto', width: '100%' }}>
        {children}
      </Box>
    </Box>
  )
}