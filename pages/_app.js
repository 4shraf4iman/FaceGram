import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { wrapper } from "../redux/store"
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../redux/actions/postAction'
import React, { useEffect } from 'react';
import { loginAuth } from '../redux/actions/loginAction'

function MyApp({ Component, pageProps }) {

  const dispatch = useDispatch()
  const { loginReducer, loadingReducer, postReducer } = useSelector(state => state)

  useEffect(() => {
    dispatch(getPost())
  },[postReducer.test])

  useEffect(() => {
      const loginLs = JSON.parse(localStorage.getItem('login'))
      if(loginLs){
        const log = {
          username: loginLs.authority,
          password: loginLs.authority
        }
        dispatch(loginAuth(log))
      }
      
  },[loginReducer.login])



  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp);
