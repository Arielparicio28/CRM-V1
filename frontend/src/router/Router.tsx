import { Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import FinancierPage from '../pages/financiers/FinancierPage'
import AllCallsPage from '../pages/calls/AllCallsPage'
import NewCallPage from '../pages/calls/NewCallPage'
import AllFinanciersPage from '../pages/financiers/AllFinanciersPage'
import NewFinancierPage from '../pages/financiers/NewFinancierPage'
import AllProjectsPage from '../pages/projects/AllProjectsPage'
import NewProjectPage from '../pages/projects/NewProjectPage'
import RegisterUserPage from '../pages/user/RegisterUserPage'
import NotFoundPage from '../pages/NotFoundPage'
import CallPage from '../pages/calls/CallPage'
import ProjectViewPage from '../pages/projects/ProjectViewPage'
import Layout from '@/components/Layout'
import AllManagementPage from '@/pages/management/AllManagementPage'
import Management from '@/pages/management/Management'
import { NewManagement } from '@/pages/management/NewManagementPage'

const CrmRouter = (
  <Route path='/'>
    <Route path='login' element={<LoginPage />} />
    <Route element={<Layout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/newproject' element={<NewProjectPage />} />
      <Route path='/allprojects' element={<AllProjectsPage />} />
      <Route path='/project/:id' element={<ProjectViewPage />} />
      <Route path='/allcalls' element={<AllCallsPage />} />
      <Route path='newcall' element={<NewCallPage />} />
      <Route path='/announcement/:id' element={<CallPage />} />
      <Route path='/newfinancier' element={<NewFinancierPage />} />
      <Route path='/allfinanciers' element={<AllFinanciersPage />} />
      <Route path='/financier' element={<FinancierPage />} />
      <Route path='/registeruser' element={<RegisterUserPage />} />
      <Route path='/notfound' element={<NotFoundPage />} />
      <Route path='/management' element={<NewManagement />} />
      <Route path='/allmanagement' element={<AllManagementPage />} />
      <Route path='/gestion/:id' element={<Management />} />
    </Route>
  </Route>
)

export default CrmRouter
