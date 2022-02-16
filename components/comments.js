import React from 'react';

const Comments = ({item, index, adminAuth, edit, handleOpenEdit, editText, handleEditText, editComment, deleteComment}) => {
    return (

        <li className="list-group-item" key={index}>
        <div className="d-flex w-100 justify-content-between">
            <h6 className="mb-1"> {item.name}</h6>

            {
                adminAuth ?
                <div onClick={() => {handleOpenEdit(index, item)}}>
                    <small className="text-muted cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                    </small>
                </div> : null
            }
            
            
            
        </div>
        <p className="mb-1 comment-body-font">{item.body}</p>
        <small className="text-muted"><strong>By :</strong> {item.email} ( {item.id} )</small>
        {
            adminAuth ? 
            <div>
                {
                    edit == index ? 
                    <div>
                    <input className="form-control mt-2 mb-2" value={editText} onChange={handleEditText}/>
                    <div className=''><button onClick={editComment} className="btn btn-primary mr-3">Edit</button><button onClick={deleteComment} className="btn btn-danger">Delete</button></div></div> : <div></div>
                }
            </div> : null
        }
            
            
    </li>
        
    )
    
}

export default Comments