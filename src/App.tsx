import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Create from './pages/Create'
import Account from './pages/Account'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>
    </div>
  )
}

export default App