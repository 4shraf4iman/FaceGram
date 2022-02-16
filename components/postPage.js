import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { getComment } from '../redux/actions/commentAction'
import { TYPES } from '../redux/actions/types'
import NavBarMain from './navBarMain'
import Loading from './loading'
import Comments from './comments'
import Head from "next/head"

const PostPage = ({post}) => {

    const dispatch = useDispatch()
    const router = useRouter()
    const { loginReducer, postReducer, commentReducer, loadingReducer } = useSelector(state => state)

    useEffect(() => {
        dispatch(getComment(post.id))
    },[])

    const [editTitle, setEditTitle] = useState(false)
    const [editTitleText, setEditTitleText] = useState("")
    const [edit, setEdit] = useState(null)
    const [editCommentID, setEditCommentID] = useState(null)
    const [editText, setEditText] = useState("")


    let adminAuth 
    loginReducer.authority === "admin" ? adminAuth = true : adminAuth = false
    let wait = ms => new Promise(resolve => setTimeout(resolve, ms));

    const handleOpenEditTitle = () => {

        if(editTitle === false) {
            setEditTitle(true)
            setEditTitleText(post.title)
        } else {
            setEditTitle(false)
            setEditTitleText("")
        }

    }

    const handleOpenEdit = (input, item) => {

        if(input == edit) {
            setEdit(null)
            setEditText("")
        } else {
            setEdit(input)
            setEditCommentID(item.id)
            setEditText(item.body)
        }

    }

    const handleEditTitleText = e => {
        e.preventDefault()
        setEditTitleText(e.target.value)
    }

    const handleEditText = e => {
        e.preventDefault()
        setEditText(e.target.value)
    }


    const textPayload = {number: editCommentID, res: editText}
    const titleTextPayload = {number: post.id, res: editTitleText}

    const deleteComment = async () => {
        dispatch({type: TYPES.LOADING})
        await wait(1000);
        dispatch({type: TYPES.DELETECOMMENT, payload: edit})
        setEdit(null)
        dispatch({type: TYPES.STOPLOADING})
    }

    const editComment = async () => {
        dispatch({type: TYPES.LOADING})
        await wait(1000);
        dispatch({type: TYPES.EDITCOMMENT, payload: textPayload})
        setEdit(null)
        dispatch({type: TYPES.STOPLOADING})
    }


    const deletePost = async () => {
        dispatch({type: TYPES.LOADING})
        await wait(1000);
        dispatch({type: TYPES.DELETEPOST, payload: titleTextPayload})
        showTitle = post.title
        router.push("/")
        dispatch({type: TYPES.STOPLOADING})
    }

    const editPost = async () => {
        dispatch({type: TYPES.LOADING})
        await wait(1000);
        dispatch({type: TYPES.EDITPOST, payload: titleTextPayload})
        setEditTitle(null)
        dispatch({type: TYPES.STOPLOADING})
    }
    

    let showTitle
    if(postReducer.posts.find(x => x.id == post.id)) {
        showTitle = postReducer.posts.find(x => x.id == post.id).title
    } else {
        showTitle = post.title
    }


    return(
        <div>
            <Head>
                <title>FaceGram</title>
            </Head>
            <Loading show={loadingReducer.loading} />
            <NavBarMain />
            <div className="card postcard">
                <div className="card-header">
                    <div className="d-flex w-100 justify-content-between">
                        <div className="title-font">Title: {showTitle}</div>
                        <div>

                        { adminAuth ? 
                            <div>
                                <a className="mr-10" onClick={() => {handleOpenEditTitle()}}>
                                    <small className="text-muted cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                    </small>
                                </a>
                                
                                <button onClick={deletePost} className="btn btn-danger">Delete</button>
                                
                            </div> : null
                        }
                        
                        </div>
                    </div>
                    {editTitle ? <div><input className="form-control mt-2 mb-2" value={editTitleText} onChange={handleEditTitleText}/><button onClick={() => {editPost()}} className="btn btn-primary mr-3">Edit</button></div> : <div></div>}
                </div>
                
                <div className="card-body mb-20">
                    <blockquote className="blockquote mb-0">
                    <p className="body-font">Body: {post.body}</p>
                    <footer className="blockquote-footer">ID: {post.id}</footer>
                    </blockquote>
                </div>
                <div className="comment-title-font">Comments:</div>
                <ul className="list-group list-group-flush">
                {
                        commentReducer.comments.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Comments item={item} index={index} adminAuth={adminAuth} edit={edit} handleOpenEdit={handleOpenEdit} editText={editText} handleEditText={handleEditText} editComment={editComment} deleteComment={deleteComment} />  
                                </div>
                                  
                            )
                        })
                    }
                </ul>
                
            </div>

        </div>
        
    )
}

export default PostPage