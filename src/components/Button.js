import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className="px-4 py-3 m-2 text-sm whitespace-nowrap bg-slate-100 shadow-lg rounded-lg">
        {name}</button></div>
  )
}

export default Button