import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import JobPage from './JobPage.jsx'
import './index.css'
import AdminForm from './AdminForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <JobPage /> */}
    <AdminForm />
  </StrictMode>,
)
