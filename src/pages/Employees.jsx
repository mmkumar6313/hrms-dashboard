import { useState } from 'react'
import {
  Paper, Table, TableHead, TableRow, TableCell, TableBody, TextField,
  MenuItem, Box, Chip, TableContainer
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const rows = [
  { id: 1, name: 'Ravi Kumar', dept: 'Engineering', role: 'Sr. Developer', status: 'Active' },
  { id: 2, name: 'Anita Sharma', dept: 'HR', role: 'HR Manager', status: 'Active' },
  { id: 3, name: 'Suresh Babu', dept: 'Engineering', role: 'Developer', status: 'Onboarding' },
  { id: 4, name: 'Priya Nair', dept: 'Design', role: 'UI Designer', status: 'Active' },
  { id: 5, name: 'Kiran Reddy', dept: 'Sales', role: 'Sales Exec.', status: 'On Leave' },
  { id: 6, name: 'Deepa Rao', dept: 'Finance', role: 'Accountant', status: 'Active' },
  { id: 7, name: 'Manoj Verma', dept: 'Engineering', role: 'QA Engineer', status: 'Active' },
  { id: 8, name: 'Lakshmi Devi', dept: 'HR', role: 'Recruiter', status: 'On Leave' },
  { id: 9, name: 'Arjun Das', dept: 'Marketing', role: 'Analyst', status: 'Active' },
  { id: 10, name: 'Sneha Iyer', dept: 'Design', role: 'UX Designer', status: 'Active' }
]

const statusColor = {
  Active: 'success',
  'On Leave': 'warning',
  Onboarding: 'info'
}

export default function Employees() {
  const [query, setQuery] = useState('')
  const [dept, setDept] = useState('All')

  const filtered = rows.filter(
    (r) =>
      (dept === 'All' || r.dept === dept) &&
      (r.name.toLowerCase().includes(query.toLowerCase()) ||
        r.role.toLowerCase().includes(query.toLowerCase()))
  )

  return (
    <Paper sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
        <TextField
          placeholder="Search by name or role..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          InputProps={{ startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} /> }}
          sx={{ minWidth: 280 }}
        />
        <TextField select label="Department" value={dept} onChange={(e) => setDept(e.target.value)} sx={{ minWidth: 180 }}>
          {['All', 'Engineering', 'HR', 'Design', 'Sales', 'Finance', 'Marketing'].map((d) => (
            <MenuItem key={d} value={d}>
              {d}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((r) => (
              <TableRow key={r.id} hover>
                <TableCell>{r.name}</TableCell>
                <TableCell>{r.dept}</TableCell>
                <TableCell>{r.role}</TableCell>
                <TableCell>
                  <Chip label={r.status} color={statusColor[r.status]} size="small" />
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  No employees found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}