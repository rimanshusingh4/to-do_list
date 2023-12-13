import React, { useState } from 'react'
import { Search } from './Search'

const NoteForm = ({notes, setNotes}) => {
    let searchNote = [...notes]
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const onSubmit = (e) => {
        e.preventDefault();
        setNotes(prev => ([...prev, {title, desc, Status: false}]));
        setTitle("");
        setDesc("")
    }

  return (


    <div className='flex justify-center m-5'>
        <form onSubmit={onSubmit}>

        <input className='p-4 border-2 border-slate-200' type='text' name="name" value={title} placeholder='Title' onChange={e => setTitle(e.target.value)}/>
        <input className='p-4 border-2 mx-2 border-slate-200' type='text' name="description" value={desc} placeholder='Description' onChange={e => setDesc(e.target.value)} />
        <input className='p-4 border-2 mx-2 bg-black text-white font-extrabold rounded-lg border-black' type="submit" value="Add" />

        </form>
        <Search searchNote={searchNote} />
    </div>
  )
}

export default NoteForm