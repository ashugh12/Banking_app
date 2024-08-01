import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Page from "./Page.jsx"
import BusinessLoanForm from './BusinessLoan.jsx'
import EducationLoanForm from './EducationLoan.jsx'
import PersonalLoanForm from './PersonalLoan.jsx'
import CarLoanForm from './CarLoan.jsx'
import OldCarLoanForm from './OldCarPurchase.jsx'
import PropertyLoan from './PropertyLoan.jsx'
import MudraLoanForm from './MudraLoan.jsx'
import SubsidyLoanForm from './SubsidyLoan.jsx'
import ODLLoanForm from './ODLLoanForm.jsx'
import FixedDepositLoanForm from './FixedDepositLoan.jsx'
import CreditCardLoanForm from './CreditCardLoan.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Page /> */}
    <BusinessLoanForm />
  </React.StrictMode>,
)
