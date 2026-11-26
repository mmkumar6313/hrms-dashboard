import { useState } from 'react'
import { Paper, TextField, Button, Typography, Box, Stack, Alert } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }
    setError('')
    onLogin()
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #3f51b5 0%, #00a39d 100%)',
        p: 2
      }}
    >
      <Paper elevation={8} sx={{ p: 4, width: '100%', maxWidth: 400 }}>
        <Stack spacing={2} component="form" onSubmit={submit}>
          <Typography variant="h5" fontWeight={700}>
            TuneHR
          </Typography>
          <Typography color="text.secondary">HR Management System</Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="contained" size="large" startIcon={<LoginIcon />}>
            Sign in
          </Button>
        </Stack>
      </Paper>
    </Box>
  )
}