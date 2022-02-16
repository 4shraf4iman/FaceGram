import React, { useEffect, Component } from 'react';
import NavBarMain from '../components/navBarMain'
import PostCard from '../components/postCard'
import { useDispatch, useSelector } from 'react-redux'


const App = () => {
    const dispatch = useDispatch()
    const { postReducer } = useSelector(state => state)

    return(
        <div>
            <NavBarMain class="navbar navbar-dark bg-dark" />
            <div className="post-logo-text">Posts:</div>
            {
                postReducer.posts.length > 0 ?
                    postReducer.posts.map((item, index)=> (
                        <div key={index}>
                            <PostCard content={item} index={index}/>
                        </div>
                    )) 
                    : null
            }
        </div>
    )
}

export default App