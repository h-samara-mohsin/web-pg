import React, { useEffect, useState } from 'react'
import axios from "axios";
import './WebPage.css'



const WebPage = () => {
    const [data,setData] = useState()
    const getData = async() => {
        try{
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
              );
          setData(response.data.posts);
          console.log('data: ', data)
        }
        catch (error) {
            console.error("Error:", error);
          }
       
    }
    useEffect(() => {
        getData();
      }, []);
  return (
    <div>
      <table className='table'>
        <tr>
            <th>User ID</th>
            <th>Post ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
        </tr>
        <tr>
            {data.map((user) => {
                <td>{user.userId}</td>
                // <td key={index}>{user.id}</td>,
                // <td key={index}>{user.title}</td>,
                // <td key={index}>{user.body}</td>
            })}
        </tr>
      </table>
    </div>
  )
}

export default WebPage
