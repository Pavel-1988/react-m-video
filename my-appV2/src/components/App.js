import {Sales} from '../pages/Sales'
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Invoices } from './Invoices';
import {InovicesDetailes} from './InovicesDetailes'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Homepage index route</div>} />
          <Route path="dashboard" element={<div>Dashboard</div>} />
          <Route path="sales" element={<Sales />}>
            < Route index element={<div>Sales index route</div> } />
            <Route path="analytics" element={<div>AAnalytics</div>} />
            <Route path="invoices" element={<Invoices />}>
              <Route index element={<div>Invoices index route</div>} />
              <Route path=":invoiceId" element={<InovicesDetailes />}/>
            </Route>
            <Route path="deposits" element={<div>DDeposits</div>} />
           </Route> 
          <Route path="reports" element={<div>Reports</div>} />
          <Route path="feedback" element={<div>Feedback</div>} />
          <Route path="customers" element={<div>Customers</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  )
}