import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import LeaveRequest from './pages/LeaveRequest'

export default function App() {
  const [authed, setAuthed] = useState(false)
  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={() => setAuthed(true)} />} />
      <Route
        path="/*"
        element={
          authed ? (
            <Layout>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/leave" element={<LeaveRequest />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </Layout>
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  )
}