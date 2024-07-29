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
const EmailFieldForgot = React.lazy(() => import('./Pages/EmailFieldForgot/EmailFieldForgot'));
const Analyzed = React.lazy(() => import('./Pages/Analyze/Analyze'));
const History = React.lazy(() => import('./Pages/History/History'));
const Profile = React.lazy(() => import('./Pages/Profile/Profile'));
const Credits = React.lazy(() => import('./Pages/Credits/Credits'));
const Dashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard'));
const Debit = React.lazy(() => import('./Pages/Debit&CreditCard/Debit&CreditCard'));
const PaymentScreen = React.lazy(() => import('./Pages/PaymentScreen/PaymentScreen'));
const Details = React.lazy(() => import('./Pages/Details/Details'));
const ToolManagement = React.lazy(() => import('./Pages/ToolMangement/ToolManagement'));
const CreditsManagement = React.lazy(() => import('./Pages/CreditsManagement/CreditsManagement'));
import UserManagement from './Pages/UserManagement/UserManagement'
const AdminDashboard = React.lazy(() => import('./Pages/AdminDashboard/AdminDashboard'));
const PackageSetting = React.lazy(() => import('./Pages/PackageSetting/PackageSetting'));
const AssistantInstructions = React.lazy(() => import('./Pages/Assistant/Assistant'));

import PageNotFound from "./Pages/404page/PageNotFound";


import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

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
              <Route path="payments" element={<Protected children={<PaymentScreen />} />} />
              <Route path="tool-management" element={<Protected children={<ToolManagement />} />} />
              <Route path="user-management" element={<Protected children={<UserManagement />} />} />
              <Route path="user-management/userdetails/:id" element={<Protected children={<Details />} />} />
              <Route path="credits-management" element={<Protected children={<CreditsManagement />} />} />
              <Route path="credits-management/package-setting" element={<Protected children={<PackageSetting />} />} />
              <Route path="dashboard-admin" element={<Protected children={<AdminDashboard />} />} />
              <Route path="assistant-instruction" element={<Protected children={<AssistantInstructions />} />} />
            </Route>
            <Route path="*" element={<PageNotFound/>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Elements>
  );
}

export default App;
