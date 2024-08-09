import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import User from './Pages/User/User'
import Transfer from './Pages/User/pages/transfer/transfer';
import Account from './Pages/User/pages/Account/Account';
import Managewallet from './Pages/User/pages/Manage-wallet/Managewallet';
import './App.css'
import Dashboard from './Pages/User/pages/dashboard/Dashboard';
import Transactions from './Pages/User/pages/Transactions/Transactions';
import { FormProvider } from "./Pages/User/pages/transfer/context";
import Login from './Pages/Login/Login';
import SignUp from './Pages/Signup/SignUp';
import VerifyEmail from './Pages/Signup/VerifyEmail';
import CreateWalletPin from './Pages/Signup/CreateWalletPin';
import LandingPage from './Pages/landingpage/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}>
        </Route>
        
        <Route path="/verify" element={<VerifyEmail />}/>
        <Route path="/create" element={<CreateWalletPin />}/>
        <Route path="/user" element={<User/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="" element={<Navigate to="dashboard" replace />} />
          <Route path="transfer" element={ <FormProvider> <Transfer /> </FormProvider>}/>
          <Route path="account" element={<Account/>}/>
          <Route path="managewallet" element={<Managewallet/>}/>
          <Route path="transactions" element={<Transactions/>}/>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
