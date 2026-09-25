import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import LearnUseEffect1 from './component/learnuseeffect/LearnUseEffect1.jsx'
import LearnUseEffect2 from './component/learnuseeffect/LearnUseEffect2.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
      <ToastContainer></ToastContainer>
      <App />
      {/* <LearnUseEffect1></LearnUseEffect1> */}
      {/* <LearnUseEffect2></LearnUseEffect2> */}
  </BrowserRouter>
    
  // </StrictMode>,
)
