import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import useAuth from './hooks/useAuth'
import { jwtDecode } from 'jwt-decode'

const Landing = lazy(() => import('./pages/Landing'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const AppLayouts = lazy(() => import('./layouts/AppLayouts'))
const Trip = lazy(() => import('./pages/trips/Trip'))
const AddTrip = lazy(() => import('./pages/trips/AddTrip'))
const TripDetails = lazy(() => import('./pages/trips/TripDetails'))
const EditTrip = lazy(() => import('./pages/trips/EditTrip'))
const Baggage = lazy(() => import('./pages/baggage/Baggage'))
const BaggageDetails = lazy(() => import('./pages/baggage/BaggageDetails'))
const AcceptInvitation = lazy(() => import('./pages/AcceptInvitation'))

const App = () => {

  const { token, onLogout } = useAuth();


  const ProtectedRoutes = () => {
    try {
      const decodedToken = token ? jwtDecode(token) : null;
      const userId = decodedToken?.userId;


      if (decodedToken && decodedToken.exp) {
        const currentTime = Date.now() / 1000;
        if (currentTime > decodedToken?.exp) {
          onLogout();
          return <Navigate to="/login" />;
        }
      }


      if (!token || !userId) {
        onLogout();
        return <Navigate to="/login" />;
      }


      return <AppLayouts />;
    } catch (err) {
      console.error(err);
      onLogout();
      return <Navigate to="/login" />;
    }
  };


  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path='/trips' element={<Trip />} />
          <Route path="/trips/add" element={<AddTrip />} />
          <Route path='/trips/:id' element={<TripDetails />} />
          <Route path='/trips/edit/:id' element={<EditTrip />} />

          <Route path="/baggage" element={<Baggage />} />
          <Route path="/baggage/:id" element={<BaggageDetails />} />
          <Route path="/trips/:id/invite/accept" element={<AcceptInvitation/>}/>
        </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App