import React, { Component } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Movies from './components/movies'
import Rentals from './components/rentals'
import Customers from './components/customers'
import MovieForm from './components/movieForm'
import NotFound from './components/notFound'
import NavBar from './components/NavBar'
import LoginForm from './components/loginForm'
import RegisterForm from './components/registerForm'
import Logout from './components/logout'
import auth from './services/authService'
import Protected from './components/common/Protected'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

class App extends Component {
  state = {}

  componentDidMount() {
    const user = auth.getCurrentUser()
    this.setState({ user })
  }

  render() {
    const { user } = this.state
    return (
      <React.Fragment>
        <NavBar user={user} />
        <ToastContainer />
        <main className="container">
          <Routes>
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/movies" element={<Movies user={user} />} />
            <Route
              path="/movies/:id"
              element={
                <Protected>
                  <MovieForm />
                </Protected>
              }
            />
            <Route path="/customers" element={<Customers />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/movies" replace />} />
            <Route
              path="*"
              element={<Navigate exact to="/not-found" replace />}
            />
          </Routes>
        </main>
      </React.Fragment>
    )
  }
}

export default App
