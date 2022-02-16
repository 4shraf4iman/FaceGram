import React from 'react';
import Link from 'next/Link'

const PostCard = ({content, index}) => {
    return( 
        <div index={index}> 
            <Link href={`post/${content.id}`}>
                <div className="card postcard cursor-pointer">
                    <div className="card-header title-font2">
                        {content.title}
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                        <p className="body-font2"> <strong>Topic</strong> : {content.body}</p>
                        <footer className="blockquote-footer">{content.id}</footer>
                        </blockquote>
                    </div>
                    
                </div>
            </Link>

        </div>
        
        
    )
}

export default PostCard
