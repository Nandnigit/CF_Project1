import React from 'react'
import './Categoriesdetail.css'

const Categroiesdetails=({category})=> {
  return (
    <>
    <h1 className=' font-bold text-center text-4xl'>Top Categories</h1>
      <div className=' flex flex-wrap gap-2 md:grid md:grid-cols-4 md:gap-4 px-5 md:px-16 py-11 ' id='detail'>
        {category.map((card,index)=>(
            <div key={index}>
                <div className=' flex gap-5 rounded-xl border-2 px-5 py-7 border-white bg-white shadow-lg shadow-slate-100  '>
                    <img src={card.icon} className=' h-7 w-7 hover:animate-spin'/>
                    <div className=' font-semibold text-2xl hover:text-orange-500'>{card.title}</div>
                    </div>
                </div>
        ))}
      </div>
    </>
  )
}

export default Categroiesdetails
