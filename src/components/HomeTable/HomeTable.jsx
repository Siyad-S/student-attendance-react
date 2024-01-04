import React from 'react'
import "./HomeTable.css"

const HomeTable = () => {
    const getAllStudents = async () => {
        try {
            const response = await axios.get("http://localhost:2000/students")
            const allStudents = response.data
        } catch(err) {
            console.error(err)
        }
    }
  return (
    <div>

    </div>
  )
}

export default HomeTable