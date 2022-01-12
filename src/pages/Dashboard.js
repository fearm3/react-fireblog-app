import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import { readData } from '../helpers/firebase'

const Dashboard = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        readData(setData);
    }, [])
    // console.log(data)
    

    return (
        <div className='App' >
            <h1>DASHBOARD</h1>
         
            {data.map((doc)=>(
                <BlogCard doc={doc} key={doc.id}/>
            ))}
            
        </div>
    )
}

export default Dashboard

// _userDataWriter