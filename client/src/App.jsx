import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getUserProfileThunk } from './store/slice/user/user.thunk.js';
import { toast } from 'react-toastify';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    toast("Getting user data")
    dispatch(getUserProfileThunk())
  }, [])
  return (
    <>
    </>
  );
}

export default App;