import React from 'react'
import "./SideBar.css"

const SideBar = () => {
    
  return (
    <div className='sidebar'>
        <div>
            <h1>Logo</h1>
        </div>
        <div className='menu'>
            <ul>
                <li>Add Student</li>
                <li>Edit Student</li>
                <li>Update Student</li>
                <li>Delete Student</li>
            </ul>
        </div>     
    </div>
  )
}

export default SideBar