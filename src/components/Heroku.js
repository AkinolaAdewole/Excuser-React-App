import React, { useState } from 'react'
import axios from 'axios'
import myStyle from '../myStyle/Heroku'
import '../css/style.css'
// import userEvent from "@testing-library/user-event"


const Heroku = () => {
    const [hero,sethero]=useState([])
    const url1="https://excuser.herokuapp.com/v1/excuse/family/"
    const url2="https://excuser.herokuapp.com/v1/excuse/office/"
    const url3="https://excuser.herokuapp.com/v1/excuse/children/"
    const url4="https://excuser.herokuapp.com/v1/excuse/college/"
    const url5="https://excuser.herokuapp.com/v1/excuse/party/"
    
    
    
    
    const xmas=()=>{
    axios.get(url1).then((result)=>{
        sethero(result.data)
        // console.log(result)
    }) }

    
    const excuser2=()=>{
        axios.get(url2).then((result)=>{
            sethero(result.data)
        })  }

        const excuser3=()=>{
            axios.get(url3).then((result)=>{
                sethero(result.data)
            }) }


        const excuser4=()=>{
            axios.get(url4).then((result)=>{
                sethero(result.data)
            }) }    

        const excuser5=()=>{
            axios.get(url5).then((result)=>{
                sethero(result.data)
            }) }    


  
  
        return (
    <>
    <div style={myStyle.bg} className='bg'>
    <h1>INTERNATIONAL EXCUSE</h1>
    <button className='' onClick={xmas}>FAMILY EXCUSE</button>
    <button className='ms-3' onClick={excuser2}>OFFICE EXCUSE</button>
    <button className='ms-3' onClick={excuser3}>CHILDREN EXCUSE</button>
    <button className='ms-3' onClick={excuser4}>COLLEGE EXCUSE</button>
    <button className='ms-3' onClick={excuser5}>PARTY EXCUSE</button>



    {
        hero.map((user)=>(
            <>
        
         <div className='disp'> <h2 className='mt-5 color'>{user.excuse}</h2> </div>   
        </>
        ))}
        </div>
    </>
  )
}

export default Heroku