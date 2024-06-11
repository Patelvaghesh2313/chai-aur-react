import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github(props) {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/Patelvaghesh2313`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

    return (
       <div className='text-center text-white m-4 bg-gray-600 text-3xl'>Github: {data.followers}
        <img src={data.avatar_url}width = {300} className="px-3 py-3" alt="avatar" /> 
       </div>
    )
}
export default Github
export const githubDetails = async () => {
    const resp = await fetch(`https://api.github.com/users/Patelvaghesh2313`)
    return resp.json()
}