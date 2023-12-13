import React from 'react'

export const Search = () => {


  return (
    <>
        <div className='ml-60'>
            <input className='p-4 border-2 border-slate-200' type='text' name="name" value="" placeholder='Search Here' onChange={e => setTitle(e.target.value)}/>
            <input className='p-4 border-2 mx-2 bg-black text-white font-extrabold rounded-lg border-black' type="submit" value="Search" />
    </div>
    </>
  )
}