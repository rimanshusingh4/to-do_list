'use client'
import { Complete } from '@/components/Complete'
import { Inprogress } from '@/components/Inprogress'
import NoteForm from '@/components/NoteForm'
import NoteList from '@/components/NoteList'
import React, { useEffect, useState } from 'react'

const TestPage = () => {
  const [shownotes, setAllNotes] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [showInprogress, setShowInprogress] = useState(false);


    const [notes, setNotes] = useState([
        {
          title: "bncdk",
          desc: "lksjdf",
          completed: false
        },
        {
          title: "bncdk",
          desc: "lksjdf",
          completed: true
        }
    ])

    
    useEffect(() => {
        // console.log(notes)
    }, [notes])

    const handleNotes = () =>{
      setAllNotes(true);
      setShowComponent(false);
      setShowInprogress(false);
    }
    
    const handleClick = () => {
      setShowComponent(true);
      setAllNotes(false);
      setShowInprogress(false);
      // return <Complete />;
    };
    const inprogress = () => {
      setShowInprogress(true);
      setAllNotes(false);
      setShowComponent(false);
    };
  return (
  <>
    <div className='text-center  border-gray-600 w-full'>
      <h1 className='justify-center font-bold text-5xl p-2 text-red-400 bg-slate-600'>To-Do List</h1>
      <NoteForm notes={notes} setNotes={setNotes} />
      <div className='flex justify-around'>
        <button onClick={handleNotes}><b>All Notes</b></button>
        <button onClick={handleClick}><b>Complete</b></button>
        <button onClick={inprogress}><b>In-Progress</b></button>
      </div>
      { shownotes && <NoteList notes={notes} setNotes={setNotes} />}
      { showComponent && <Complete notes={notes} setNotes={setNotes} />}
      {  showInprogress && <Inprogress notes={notes} />}
    </div>
  </>    
  )
}

export default TestPage