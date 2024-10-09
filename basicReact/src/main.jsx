import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'

// function MyApp(){
//     return (
//         <div>
//             <h1>Custom App</h1>
//             <p>This is the Custom App</p>
//         </div>
//     )
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click Me to Visit Google'
// }

// const anotherElement = (
//     <a href="https://google.com" target='_blank'>Visit Goggle</a>
// )

const anotherUser = "Likho tumhara nam!"
const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'Click Me to Visit Google',
    anotherUser
)

createRoot(document.getElementById('root'))
.render(
    reactElement
)
