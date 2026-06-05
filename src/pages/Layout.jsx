import { useAuthContext } from '../components/context/auth/AuthContextProvider';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

const Layout = () => {
  const { loading, currentUser } = useAuthContext();

  if (loading)
    return (
      <main className="h-screen flex items-center justify-center">
        <p className="text-Steel">Loading...</p>
      </main>
    );
  else {
    return <main>{currentUser ? <HomePage /> : <LoginPage />}</main>;
  }
};
export default Layout;
