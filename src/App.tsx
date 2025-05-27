import {useEffect } from "react"


const App = () => {

    useEffect(()=>{
    setTimeout(()=>{
       window.alert('HELLO MY APP !')
    },2000)
  },[])

  return (
    <div className='flex-center'>National-Diabetes-Project</div>
  )
}

export default App