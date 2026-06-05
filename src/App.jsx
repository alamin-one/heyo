import { Toaster } from 'react-hot-toast';
import AuthContextProvider from './components/context/auth/AuthContextProvider';
import Layout from './pages/Layout';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Layout />
      </AuthContextProvider>
    </>
  );
}

export default App;
