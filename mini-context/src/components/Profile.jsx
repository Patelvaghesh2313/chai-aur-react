import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export function Profile(props) {
    
    const { user } = useContext(UserContext)

    if (!user) return <div> Please Login</div>

    return (
        <>
            <div className='bg-slate-600 text-white text-3xl p-4 text-center'> Profile: { user.username } </div>
        </>
    )
}
