import React, {useState, useContext } from 'react'
import { AuthContext } from "../contexts/AuthContext";
import { addData} from './../helpers/firebase';
import BlogForm from '../components/BlogForm' 
import { addInfo, updateInfo } from "../helpers/functions"


const NewBlog = () => {

    const { currentUser } = useContext(AuthContext);
    const [title, setTitle] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [content, setContent] = useState("")

    const handleClick = () => {
        addData(currentUser,title,content,imageUrl);
        setTitle("")
        setContent("")
        setImageUrl("")
    }
   
    return (
        <BlogForm
            handleClick={handleClick}
            setContent= {setContent}
            setImageUrl= {setImageUrl}
            setTitle= {setTitle}
            title={title}
            imageUrl={imageUrl}
            content={content}
        />
    )
}

export default NewBlog
