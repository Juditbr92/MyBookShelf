import './App.css'
import Header from './components/Header';
import Footer from './components/footer';
import BookPage from './pages/BookPage';
import  {Routes, Route}  from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import LogInPage from './pages/LogInPage';
import ApiPage from './pages/ApiPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoutes from './components/PrivateRoutes';
import EditBookPage from './pages/EditBookPage'
import PublicRoutes from './components/PublicRoutes'
import Error404Page from './pages/Error404Page';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import UserProvider from './context/UserProvider';



function App() {

  return (
    <UserProvider>
    
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-custom-bg via-emerald-300 to-emerald-100 w-auto">
        <Header/>

        <main className='flex-grow h-auto '>

          <Routes>
            <Route path='/' element={<HomePage />}/>

            <Route element={<PublicRoutes />}>
              <Route path='/login' element= {<LogInPage/>}/>
              <Route path='/register' element={<RegisterPage />} />
            </Route>

            <Route element={<PrivateRoutes />}>
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/books' element={<BookPage/>} />
              <Route path='/addBook' element={<AddBookPage />} />
              <Route path='/editBook' element = {<EditBookPage />} />
              <Route path='/discover' element={<ApiPage />} />
            </Route>
            
            {/* Aqui la ruta para el error 404 */}
            <Route path='*' element={<Error404Page />} />

          </Routes>
            
        </main>
        <Footer/>
            
        <ToastContainer />
      </div>
    </UserProvider>
  )
}

export default App
