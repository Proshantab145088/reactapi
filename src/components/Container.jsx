import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`${className} max-w-9/10 mx-auto`}>{children}</div>
  )
}

export default Container