import {useEffect } from "react"


const card = () =>{

    useEffect(()=>{
        window.alert('welcome !')
    },[])

    return(
        <>
        <h1>CARD INFO</h1>
        </>
    )
}
export default card