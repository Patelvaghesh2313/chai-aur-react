import React from 'react'
import { useParams } from 'react-router-dom'

export function User(props) {
    
    const { id } = useParams()

    return (
        <>
            <div className='bg-slate-600 text-white text-3xl p-4 text-center'> User: { id } </div>
        </>
    )
}
