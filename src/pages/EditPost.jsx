import React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config'


function EditPost() {
    const [post, setPosts]  = useState(null) // edit tu ek hi post karegna
    const {slug} = useParams()
    const navigate = useNavigate()  
    
    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug).then((post) => {
                if(post){
                    setPosts(post) // pehle isme post document kiya but ya post because ek hi aayega usko handle kar lenge 
                }
            })
        }
        else{
            navigate('/')
        }
    }, [slug, navigate])
    
    return post ?  (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ): null
}

export default EditPost
