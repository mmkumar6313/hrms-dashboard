import { useState } from 'react'
import {
  Paper, TextField, MenuItem, Button, Typography, Box, Stack, Alert, Grid
} from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

export default function LeaveRequest() {
  const [form, setForm] = useState({ type: '', from: '', to: '', reason: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    if (!form.type || !form.from || !form.to || form.reason.trim().length < 10) {
      setError('Please fill all fields. Reason needs at least 10 characters.')
      setSuccess(false)
      return
    }
    setError('')
    setSuccess(true)
    setForm({ type: '', from: '', to: '', reason: '' })
  }

  return (
    <Paper sx={{ p: 3, maxWidth: 640, mx: 'auto' }}>
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Apply for Leave
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ mb: 2 }}>Leave request submitted successfully!</Alert>}
      <Stack spacing={2} component="form" onSubmit={submit}>
        <TextField select required label="Leave type" value={form.type} onChange={set('type')}>
          {['Casual Leave', 'Sick Leave', 'Earned Leave', 'Work From Home'].map((t) => (
            <MenuItem key={t} value={t}>{t}</MenuItem>
          ))}
        </TextField>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField required type="date" label="From" InputLabelProps={{ shrink: true }} value={form.from} onChange={set('from')} fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField required type="date" label="To" InputLabelProps={{ shrink: true }} value={form.to} onChange={set('to')} fullWidth />
          </Grid>
        </Grid>
        <TextField
          required
          multiline
          rows={4}
          label="Reason"
          value={form.reason}
          onChange={set('reason')}
          helperText="Minimum 10 characters"
        />
        <Box>
          <Button type="submit" variant="contained" size="large" startIcon={<SendIcon />}>
            Submit request
          </Button>
        </Box>
      </Stack>
    </Paper>
  )
}