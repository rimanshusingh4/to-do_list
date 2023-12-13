import { useState } from 'react';
import React from 'react'

export const Inprogress = ({notes}) => {
  let [inprogress, setInprogress] = useState([]);

  (() => {
    inprogress = [...notes];
    inprogress.map((obj)=>{
        if(obj.Status === false){
          console.log(obj);
        }
      })
  })();

  return (
          <div className='w-2/3 mx-auto border'>
            <hr/>
            <div  className="grid md:grid-cols-4 grid-cols-3 py-4 gap-2">
              {
                inprogress.map((obj,id) => (
                obj.Status  !== false ? <></> 
                :
                <div className="max-w-sm border py-4 mx-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <div key={id} className=''>
                    <h5 className="my-2 p-6 justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{obj.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{obj.desc}</p>
                  </div>
                </div> 
                ))
              }
              </div>
            </div>
  )
}
