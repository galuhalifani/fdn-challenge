import './App.css';
import {useEffect} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './views/Navbar'
import Home from './views/Home'
import {useDispatch} from 'react-redux'
import {fetchAPI} from './store/actions'

function App() {
  // const select = useSelector
  const dispatch = useDispatch()

  useEffect(() => {
    // console.log('fetching')
    dispatch(fetchAPI())
  }, [dispatch])

  return (
    <>
    <Navbar />
    <Home />
    </>
  );
}

export default App;
