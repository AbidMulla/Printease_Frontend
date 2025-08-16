import { BrowserRouter as Router } from 'react-router-dom'
import AuthRoutes from './routes/authRoutes'

function App() {
  return (
    <Router>
        <AuthRoutes />
    </Router>
  )
}

export default App
