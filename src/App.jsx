import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Protected from "./Pages/Protected/Protected";
import { PageLoader } from "./Components/Loader/PageLoader";

const LayoutForOnePageScreens = React.lazy(() => import('./Pages/Layout/LayoutSinglePage'));
const Signup = React.lazy(() => import('./Pages/Signup/Signup'));
const OTP = React.lazy(() => import('./Pages/OTP/OTP'));
const SetPassword = React.lazy(() => import('./Pages/SetPassword/SetPassword'));
const DashboardLayout = React.lazy(() => import('./Pages/Layout/DashboardLayout'));
import EmailFieldForgot from './Pages/EmailFieldForgot/EmailFieldForgot'

import Analyzed from './Pages/Analyze/Analyze';
import History from './Pages/History/History';
import Profile from './Pages/Profile/Profile';
import Credits from './Pages/Credits/Credits';
import Dashboard from './Pages/Dashboard/Dashboard';
import Debit from "./Pages/Debit&CreditCard/Debit&CreditCard";
import PaymentScreen from "./Pages/PaymentScreen/PaymentScreen";
import Details from "./Pages/Details/Details";

import ToolManagement from "./Pages/ToolMangement/ToolManagement";
import UserManagement from "./Pages/UserManagement/UserManagement";
import CreditsManagement from "./Pages/CreditsManagement/CreditsManagement";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "./Components/CheckoutForm/CheckoutForm";
import PackageSetting from "./Pages/PackageSetting/PackageSetting";

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
              <Route path='submit-email-for-otp' element={<EmailFieldForgot />} />
            </Route>

            <Route path='/' element={<DashboardLayout />}>
            <Route path="dashboard" element={<Protected children={<Dashboard />} />} />
              <Route path="analyze" element={<Protected children={<Analyzed />} />} />
              <Route path="credits" element={<Protected children={<Credits />} />} />
              <Route path="card-details" element={<Protected children={<Debit />} />} />
              <Route path="history" element={<Protected children={<History />} />} />
              <Route path="profile" element={<Protected children={<Profile />} />} />
              <Route path="checkout" element={<Protected children={<CheckoutForm />} />} />
              <Route path="payments" element={<Protected children={<PaymentScreen />} />} />
              <Route path="tool-management" element={<Protected children={<ToolManagement />} />} />
              <Route path="user-management" element={<Protected children={<UserManagement />} />} />
              <Route path="user-management/userdetails/:id" element={<Protected children={<Details />} />} />
              <Route path="credits-management" element={<Protected children={<CreditsManagement />} />} />
              <Route path="credits-management/package-setting" element={<Protected children={<PackageSetting />} />} />
              <Route path="dashboard-admin" element={<Protected children={<AdminDashboard />} />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Elements>
  );
}

export default App;
