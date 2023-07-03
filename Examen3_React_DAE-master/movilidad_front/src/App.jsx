//
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import Parentesco from './pages/apoderados/Parentesco';
import { PagosPage } from './pages/PagosPage';
import { PagosFormPage } from './pages/PagosFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';
import { FormasPagos } from './pages/FormasPagos';
import { FormasPagosForm } from './pages/FormasPagosForm';

function App() {
  return (
    <div style={{margin:'1px', backgroundImage: "url('https://4kwallpapers.com/images/wallpapers/blue-sky-half-moon-crescent-moon-clouds-star-trails-5k-3840x2160-8404.png')", minHeight: '100vh', backgroundSize: 'cover' }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/parentesco" element={<Parentesco />} />

          <Route path="/PagosPage" element={<PagosPage />} />
          <Route path="/PagosFormPage" element={<PagosFormPage />} />
          <Route path="/PagosPage/:movilidad_pago_id" element={<PagosFormPage />} />

          <Route path="/FormasPagos" element={<FormasPagos />} />
          <Route path="/FormasPagosForm" element={<FormasPagosForm />} />
          <Route path="/FormasPagos/:forma_pago_id" element={<FormasPagosForm />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;