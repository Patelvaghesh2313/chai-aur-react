import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
const name = 'b'
const reactElement = React.createElement('a', { href: 'http://react.dev', target: '_blank' }, 'React Element ', name)
ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    reactElement
)
