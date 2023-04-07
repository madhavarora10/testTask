import React from 'react'

function Card(props) {
  return (
    <div className="p-6 mb-96 bg-green-100 border border-green-500" >
      <p className="text-lg">{`Ownership Transferred to Entity ${props.title.title}`}</p>
    <button  className="font-semibold">View detials</button>
  
    </div>
  )
}

export default Card
