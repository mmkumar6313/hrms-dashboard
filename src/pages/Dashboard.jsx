import React from 'react'
import { Grid, Card, CardContent, Typography, List, ListItem, ListItemText, Divider, Box } from '@mui/material'
import GroupIcon from '@mui/icons-material/Group'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'
import PendingIcon from '@mui/icons-material/Pending'

const stats = [
  { label: 'Total Employees', value: 128, icon: <GroupIcon color="primary" fontSize="large" /> },
  { label: 'Present Today', value: 112, icon: <CheckCircleIcon color="success" fontSize="large" /> },
  { label: 'On Leave', value: 9, icon: <BeachAccessIcon color="warning" fontSize="large" /> },
  { label: 'Pending Requests', value: 5, icon: <PendingIcon color="error" fontSize="large" /> }
]

const activity = [
  'Ravi Kumar applied for casual leave (Dec 2-3)',
  'Anita Sharma marked attendance manually',
  'New employee onboarded: Suresh Babu (Engineering)',
  'Payroll for November approved',
  'Priya Nair requested work-from-home (Nov 28)'
]

const week = [
  { day: 'Mon', pct: 88 },
  { day: 'Tue', pct: 92 },
  { day: 'Wed', pct: 85 },
  { day: 'Thu', pct: 90 },
  { day: 'Fri', pct: 78 },
  { day: 'Sat', pct: 40 }
]

export default function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Dashboard
        </Typography>
      </Grid>
      {stats.map((s) => (
        <Grid item xs={12} sm={6} md={3} key={s.label}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              {s.icon}
              <Typography variant="h4" fontWeight={700}>
                {s.value}
              </Typography>
              <Typography color="text.secondary">{s.label}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Attendance overview (this week)
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 160, px: 2 }}>
              {week.map((d) => (
                <Box key={d.day} sx={{ flex: 1, textAlign: 'center' }}>
                  <Box
                    sx={{
                      height: `${d.pct * 1.4}px`,
                      bgcolor: 'primary.main',
                      borderRadius: 1,
                      mb: 1
                    }}
                  />
                  <Typography variant="caption">{d.day}</Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Recent activity
            </Typography>
            <List>
              {activity.map((a, i) => (
                <React.Fragment key={i}>
                  <ListItem>
                    <ListItemText primary={a} />
                  </ListItem>
                  {i < activity.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
