import Image from 'next/image'
import React from 'react'

const SkillsItem = ({urlImg, framework}) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-150">
    <div className="grid grid-cols-2 gap-4 justify-center items-center">
      <div className="m-auto">
        <Image
          src={urlImg}
          width="64"
          height="64"
          alt="/"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h3 className='uppercase'>{framework}</h3>
      </div>
    </div>
  </div>
  )
}

export default SkillsItem