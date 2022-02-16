import React, { useState } from 'react';
import NavBarMain from '../components/navBarMain'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { loginAuth } from '../redux/actions/loginAction'
import { TYPES } from '../redux/actions/types'
import Loading from '../components/loading'
import Head from "next/head"

const App = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { loginReducer, loadingReducer } = useSelector(state => state)

    const [input, setInput] = useState({username: "", password: ""})

    const inputUsername= e => {setInput((prevState) => ({...prevState, username: e}))}
    const inputPassword = e => {setInput((prevState) => ({...prevState, password: e}))}


    let wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    let handleSubmit = async e => {

        e.preventDefault()
        dispatch({type: TYPES.LOADING})
        await wait(1000);
        dispatch(loginAuth(input))
        dispatch({type: TYPES.STOPLOADING})

        const ls = {login: true, authority: input.username}
        localStorage.setItem('login', JSON.stringify(ls))

        router.push("/")
        
    }

    

    return(
        <div>
            <Head>
                <title>FaceGram</title>
            </Head>
            <Loading show={loadingReducer.loading} />
            <NavBarMain class="navbar navbar-dark bg-dark" />
            <div className='center-lock pt-30'>
                <form className="" onSubmit={handleSubmit}>
                    <p className='login-title text-align-center'>Login</p>
                    <div className="mb-3 ">
                        <div><label >Username </label></div>


                        <input value={input.username} onChange={e => inputUsername(e.target.value)}  />
                        {
                            loginReducer.wrongCred ?
                            <div className="form-text text-color-red">Wrong Login Credentials.</div> : <div></div>
                        }
                    </div>
                    <div className="mb-3">
                        <div><label htmlFor="exampleInputPassword1" className="form-label">Password </label></div>
                        <input value={input.password} onChange={e => inputPassword(e.target.value)} type="password" id="exampleInputPassword1"/>
                    </div>
                    <div className=''><button type="submit" >Submit</button></div>
                </form>
            </div>
        </div>
    )
}

export default App