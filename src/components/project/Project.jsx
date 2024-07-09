import React from 'react'

export default function Project({index,title, setModal}) {
  return (
    <div className='flex w-full justify-between items-center p-20 border-t-2 cursor-pointer '
    onMouseEnter={()=> {setModal({active: true, index: index})}}
    onMouseLeave={(()=> {setModal({active: false, index: index})})}
    >
        <h2 className='text-5xl m-0 '>{title}</h2>
        <p>DESIGN AND DEVElOPEmT</p>
    </div>
  )
}
