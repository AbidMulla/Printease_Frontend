import { BrowserRouter as Router } from 'react-router-dom'
import AuthRoutes from './routes/authRoutes'
import UserRoutes from './routes/userRoutes'

function App() {
  return (
    <Router>
        <AuthRoutes />
        <UserRoutes />
    </Router>
  )
}

export default App
