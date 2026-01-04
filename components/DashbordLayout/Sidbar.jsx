import React from 'react'

const Sidbar = ({ sidebar, setsidebar }) => {
  return (
    <div className={`w-60 h-full bg-white border-r border-r-gray-200 border-solid p-4 flex flex-col justify-between itmes-center
    max-sm:absolute top-14 bottom-0 ${sidebar ? 'translate-x-0' : '-transtate-x-full'} transition-all duration-300 ease-in-out`}>
      <h2>Sidbar</h2>
    </div>
  )
}

export default Sidbar
