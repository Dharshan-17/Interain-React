import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import JobPage from './JobPage.jsx'
import './index.css'
import AdminForm from './AdminForm.jsx'
import JobForm from './JobForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <JobPage /> */}
    {/* <AdminForm /> */}
    <JobForm />
  </StrictMode>,
)
