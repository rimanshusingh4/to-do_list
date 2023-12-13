'use client'
import NoteForm from '@/components/NoteForm'
import NoteList from '@/components/NoteList'
import React, { useEffect, useState } from 'react'

const TestPage = () => {


    const [notes, setNotes] = useState([
        
    ])

    
    useEffect(() => {
        console.log(notes)
    }, [notes])


  return (
    <div>
    <NoteForm setNotes={setNotes} />
        <NoteList notes={notes} setNotes={setNotes}/>
    </div>
  )
}

export default TestPage