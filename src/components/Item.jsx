import React from 'react'
import { useParams } from 'react-router-dom'

const Item = () => {
    const {id} = useParams()
  return (
    <div>
        <h1>This is Params: {id}</h1>
    </div>
  )
}

export default Item