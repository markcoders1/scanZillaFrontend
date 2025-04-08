import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Protected from "./Pages/Protected/Protected";
import { PageLoader } from "./Components/Loader/PageLoader";
import Signup from "./Pages/Signup/Signup";
import LayoutForOnePageScreens from "./Pages/Layout/LayoutSinglePage";
import SignUPPagesLayout from "./Pages/Layout/SignUPPagesLayout";
import OTP from "./Pages/OTP/OTP";
import SetPassword from "./Pages/SetPassword/SetPassword";
import DashboardLayout from "./Pages/Layout/DashboardLayout";
import EmailFieldForgot from "./Pages/EmailFieldForgot/EmailFieldForgot";
import Analyzed from "./Pages/Analyze/Analyze";
import History from "./Pages/History/History";
import Profile from "./Pages/Profile/Profile";
import Credits from "./Pages/Credits/Credits";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Debit from "./Pages/Debit&CreditCard/Debit&CreditCard";
import PaymentScreen from "./Pages/PaymentScreen/PaymentScreen";
import Details from "./Pages/Details/Details";
import ToolManagement from "./Pages/ToolMangement/ToolManagement";
import CreditsManagement from "./Pages/CreditsManagement/CreditsManagement";
import UserManagement from "./Pages/UserManagement/UserManagement";
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
const CheckoutForm = React.lazy(() =>
  import("./Components/CheckoutForm/CheckoutForm")
);
import PackageSetting from "./Pages/PackageSetting/PackageSetting";
import AssistantInstructions from "./Pages/Assistant/Assistant";
import ContactForm from "./Pages/ContactForm/ContactForm";
import Contactus from "./Pages/ContactUs/Contactus";
import PageNotFound from "./Pages/404page/PageNotFound";
import Liscenced from "./Pages/Liscenced/Liscenced";
import TermOfServices from "./Pages/TermOfServices/TermOfServices";
import PrivacyNotice from "./Pages/PrivacyNotice/PrivacyNotice";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PN from "./Pages/SignUpPages/PN";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import TOSSignUp from "./Pages/SignUpPages/TOSSignUp";
import LayoutPublic from "./Pages/Layout/LayoutPublic";
import Liscenced2 from "./Pages/Liscenced/Lisceneced2";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<LayoutForOnePageScreens />}>
              <Route path="" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              <Route path="otp" element={<OTP />} />
              <Route path="setpassword" element={<SetPassword />} />
              <Route
                path="submit-email-for-otp"
                element={<EmailFieldForgot />}
              />
            </Route>

            <Route path="/" element={<LayoutPublic />}>
              <Route path="/terms-of-service" element={<TOSSignUp />} />
              <Route path="/privacy-notice" element={<PN />} />
            <Route
              path="/os-Library-list"
              element={<Liscenced2 />}
            />
            </Route>

            <Route path="/" element={<DashboardLayout />}>
              <Route
                path="dashboard"
                element={<Protected children={<Dashboard />} />}
              />
              <Route
                path="analyze"
                element={<Protected children={<Analyzed />} />}
              />
              <Route
                path="credits"
                element={<Protected children={<Credits />} />}
              />
              <Route
                path="card-details"
                element={<Protected children={<Debit />} />}
              />
              <Route
                path="history"
                element={<Protected children={<History />} />}
              />
              <Route
                path="profile"
                element={<Protected children={<Profile />} />}
              />
              <Route
                path="checkout"
                element={<Protected children={<CheckoutForm />} />}
              />
              <Route
                path="payments"
                element={<Protected children={<PaymentScreen />} />}
              />
              <Route
                path="tool-management"
                element={<Protected children={<ToolManagement />} />}
              />
              <Route
                path="user-management"
                element={<Protected children={<UserManagement />} />}
              />
              <Route
                path="user-management/userdetails/:id"
                element={<Protected children={<Details />} />}
              />
              <Route
                path="credits-management"
                element={<Protected children={<CreditsManagement />} />}
              />
              <Route
                path="credits-management/package-setting"
                element={<Protected children={<PackageSetting />} />}
              />
              <Route
                path="dashboard-admin"
                element={<Protected children={<AdminDashboard />} />}
              />
              <Route
                path="assistant-instruction"
                element={<Protected children={<AssistantInstructions />} />}
              />
              <Route
                path="contact"
                element={<Protected children={<ContactForm />} />}
              />
              <Route
                path="support"
                element={<Protected children={<Contactus />} />}
              />
              <Route
                path="/dashboard/OS-Library-List"
                element={<Protected children={<Liscenced />} />}
              />

              <Route
                path="dashboard/terms-of-service"
                element={<Protected children={<TermOfServices />} />}
              />
              <Route
                path="dashboard/privacy-notice"
                element={<Protected children={<PrivacyNotice />} />}
              />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Elements>
  );
}

export default App;
