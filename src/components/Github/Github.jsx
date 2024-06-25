import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    console.log(data)
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='flex text-3xl text-white bg-gray-600 justify-evenly' >
     <div className='m-10 ' > 
     <p> followers: {data.followers} </p>
     <p> Name: {data.name} </p>
     <p> From: {data.location} </p>
      </div> 
      
    <img  src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vishuRizz')
    return response.json()
}