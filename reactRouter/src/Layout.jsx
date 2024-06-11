import React from 'react'
import { Header } from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'

export function Layout(props) {
    // Outlet is to used when you want to change the component with few static component should be there

    return (
        <>
            <Header />
            <Outlet /> 
            <Footer />
        </>
    )
}
