import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
function Myapp(){
  return (
    <div>
      <h1>myApp</h1>
    </div>
  )

}
// const reactElement = {
//     type:'a',
//     props:{
//         href:'https://www.google.com',
//         target:'_blank'
//     },
//     children:'click here to visit google'
// }
const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'click here to visit google'
)
const anotherElement = (
  <a href="https://www.google.com" target="_blank">click here to visit google</a>
)
createRoot(document.getElementById('root')).render(

// anotherElement
reactElement



  // <StrictMode>
  //   {/* MyApp() */}
  //   {/* <Myapp/> */}
  //   {/* <App /> */}
  // </StrictMode>,
)
