import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Layout from "./Pages/Layout/Layout";
// import LayoutSinglePage from "./Pages/Layout/LayoutSinglePage";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Protected from "./Pages/Protected/Protected";
import { PageLoader } from "./Components/Loader/PageLoader";
import { Suspense } from 'react';

const LayoutForOnePageScreens = React.lazy(() => import('./Pages/Layout/LayoutSinglePage'));
const Signup = React.lazy(() => import('./Pages/Signup/Signup'));
const OTP = React.lazy(() => import('./Pages/OTP/OTP'));
const SetPassword = React.lazy(() => import('./Pages/SetPassword/SetPassword'));
const DashboardLayout = React.lazy(() => import('./Pages/Layout/DashboardLayout'));

// const Analyzed = React.lazy(() => import('./Pages/Analyze/Analyze'));
// const History = React.lazy(() => import('./Pages/History/History'));
// const Profile = React.lazy(() => import('./Pages/Profile/Profile'));
// const Credits = React.lazy(() => import('./Pages/Credits/Credits'));
// const Dashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard'));

import Analyzed from './Pages/Analyze/Analyze';
import History from './Pages/History/History';
import Profile from './Pages/Profile/Profile';
import Credits from './Pages/Credits/Credits';
import Dashboard from './Pages/Dashboard/Dashboard';
import Debit from "./Pages/Debit&CreditCard/Debit&CreditCard";


import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// import PaymentForm from './PaymentForm'; // Import your payment form component

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);



function App() {
  return (
    <Elements stripe={stripePromise}>

      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path='/' element={<LayoutForOnePageScreens />}>
              <Route path='' element={<Login />} />
              <Route path='signup' element={<Signup />} />
              <Route path='otp' element={<OTP />} />
              <Route path='setpassword' element={<SetPassword />} />
              {/* <Route path='changePassword' element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
                <Route path='forgotPassword' element={<ForgotPassword />} /> */}
              {/* <Route path='*' element={<NotFound />} /> */}
            </Route>

            <Route path='/' element={<DashboardLayout />}>
              <Route path="dashboard" element={<Protected children={<Dashboard />} />} />
              <Route path="analyze" element={<Protected children={<Analyzed />} />} />
              <Route path="credits" element={<Protected children={<Credits />} />} />
              <Route path="debit/credit" element={<Protected children={<Debit />} />} />

              <Route path="history" element={<Protected children={<History />} />} />
              <Route path="profile" element={<Protected children={<Profile />} />} />


              {/* <Route path='' element={<Progress />} />
                <Route path='profile' element={<Profile />} /> */}
              {/* <Route path='admin' element={<ProtectedAdmin><Employee /></ProtectedAdmin>} />
                <Route path='admin/attendance/:id' element={<ProtectedAdmin><Attendance /></ProtectedAdmin>} />
                <Route path='admin/register' element={<ProtectedAdmin><Register /></ProtectedAdmin>} />
                <Route path='admin/viewInformation/:id' element={<ProtectedAdmin><ViewInformation /></ProtectedAdmin>} /> */}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>

    </Elements>




    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<Layout/>}>
    //     <Route index element={<Login/>}/>
    //     <Route path="text-analyze" element={<Protected children={<Home />} />}/>
    //   </Route>
    // </Routes>
    // </BrowserRouter>
  );
}

export default App;
