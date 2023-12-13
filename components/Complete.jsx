import React, { useState } from 'react'
import NoteList from './NoteList';

export const Complete = ({notes, setNotes}) => {
  let [completearr, setCompleteArr] = useState([]);

  (() => {
      completearr = [...notes];
      completearr.map((obj)=>{
        if(obj.completed === true){
          console.log(obj);
        }
      })
  })();
  const deleteHandler = (id) =>{
    const remainingNotes = notes.filter((note, i) => {
        return id != i;
    })
    setNotes(remainingNotes);
}

  return (
          <div className='w-2/3 mx-auto border'>
            <hr/>
            <div  className="grid md:grid-cols-4 grid-cols-3 py-4 gap-2">
              {
                completearr.map((obj,id) => (
                obj.completed  !== true ? <>
                <p></p>
                </> :
                <div className="max-w-sm border py-4 mx-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div key={id} className=''>
                    <h5 className="my-2 p-6 justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{obj.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{obj.desc}</p>
                      <a  className="inline-flex items-center px-3 mx-2  py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                        <button onClick={(e)=>{
                          e.preventDefault();
                          deleteHandler(id)
                          }}>Delete
                        </button>
                      </a>
                  </div>
                </div> 
                ))
              }
              </div>
            </div>
  )
}
