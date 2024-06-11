import React, { useEffect, useState } from 'react'

export function Github(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://api.github.com/users/hiteshchaoudhary`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setData(data)
        })
    }, [])

    return (
       <div className='text-center text-white m-4 bg-gray-600 text-3xl'>Github: {data.followers}
       
       </div>
    )
}
