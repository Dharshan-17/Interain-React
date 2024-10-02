import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import JobPage from './JobPage.jsx'
import './index.css'
import AdminForm from './AdminForm.jsx'
import JobForm from './JobForm.jsx'
import Calendar from './components/Calendar/Calendar.jsx'
import App from './components/Calendar/Calendar.jsx'
import CompanyPage from './components/CompanyPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <JobPage /> */}
    {/* <AdminForm /> */}
    {/* <JobForm /> */}
    {/* <App /> */}
    <CompanyPage />
  </StrictMode>,
)
