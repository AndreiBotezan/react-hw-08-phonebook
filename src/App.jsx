
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import  authOperations  from 'redux/auth/auth-operations';
import  authSelectors  from 'redux/auth/auth-selectors';
import Wrapper from 'components/Wrapper/Wrapper';
import AppBar from 'components/AppBar/AppBar';
import BarLoader from 'react-spinners/BarLoader';
import PrivateRoute from 'components/PrivateRoutes/PrivateRoutes';
import PublicRoute from 'components/PublicRoutes/PublicRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

function App() {
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Wrapper>
                    <Suspense fallback={<BarLoader color="#6495ed" />}>
                      <HomePage />
                    </Suspense>
                  </Wrapper>
                </PublicRoute>
              }
            />

            <Route
              path="/register"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <Wrapper>
                    <Suspense fallback={<BarLoader color="#6495ed" />}>
                      <RegisterPage />
                    </Suspense>
                  </Wrapper>
                </PublicRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <Wrapper>
                    <Suspense fallback={<BarLoader color="#6495ed" />}>
                      <LoginPage />
                    </Suspense>
                  </Wrapper>
                </PublicRoute>
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Wrapper>
                    <Suspense fallback={<BarLoader color="#6495ed" />}>
                      <ContactsPage />
                    </Suspense>
                  </Wrapper>
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

          <ToastContainer autoClose={3000} theme="colored" />
        </>
      )}
    </>
  );
}

export default App;
