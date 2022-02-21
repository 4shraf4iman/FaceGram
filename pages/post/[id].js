import React from 'react';
import axios from 'axios'
import PostPage from '../../components/postPage'



export const getStaticPaths = async () => {

    
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    const posts = res.data

    const paths = posts.map((item) => ({
        params: { id: item.id.toString() },
      }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {

    const id = params.id
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    const post = res.data

    // Pass post data to the page via props
    return { props: { post: post } }

}

const Profile = ({post}) => {

    
	
    return (
      <PostPage post = {post} />
    );
  
  }
  
  export default Profile;