// eslint-disable-next-line no-unused-vars
import React, {useState,useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshChoudhary')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data) 
    //     })
    // }, [])
    return (
        <div className='mb-4 p-4 bg-slate-400 flex justify-center items-center flex-col'>
            <h1>Github Followers : {data.followers}</h1>
            <img src= {data.avatar_url} alt="Github Profile Picture" width="200" height="200" />
        </div>
    )
}

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/hiteshChoudhary')
    return response.json()
}

export default Github
