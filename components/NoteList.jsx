import React, { useState } from 'react'

const NoteList = ({ notes, setNotes }) => {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [editNoteId, setEditNoteId] = useState(-1)

    const changeCheckBox = (id) => {
        const updatedNotes = notes.map((note, i) => {
            if (id == i) {
                note.completed = !note.completed;
            }
            return note;
        })

        setNotes(updatedNotes)
    }

    const handleEdit = (id) => {

        setEditNoteId(id);
        setTitle(notes[id].title)
        setDesc(notes[id].desc)
    }
    const deleteHandler = (id) =>{
        const remainingNotes = notes.filter((note, i) => {
            return id != i;
        })
        setNotes(remainingNotes);
    }
    const updateNote = (e) => {
        e.preventDefault()

        const updatedNotes = notes.map((note, i) => {
            if (i == editNoteId) {
                note.title = title
                note.desc = desc
            }
            return note;
        })

        setNotes(updatedNotes);
        setEditNoteId(-1)

    }

    return (
        <div className='w-2/3 mx-auto border'>
            <hr/>
            <div className="grid md:grid-cols-3 grid-cols-2 py-4 px-2 gap-2">
                {
                    notes.map((note, id) => (
                        <div key={id} className=''>
                        <div className="my-2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            {
                                editNoteId !== id ? <>
                                    <p></p>
                                </>
                                    :
                                    <div className='flex flex-col'>
                                        <input type="text" value={title} onChange={e => setTitle(e.target.value)} name="title" className='mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white bg-transparent border-b outline-none' />
                                        <input type="text" value={desc} onChange={e => setDesc(e.target.value)} name="desc" className='mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white bg-transparent border-b outline-none' />
                                    </div>
                                    
                            }
                            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">{note.title}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{note.desc}</p>
                            
                            <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            
                               {
                                    editNoteId === -1 ? <button onClick={() => handleEdit(id)}>Edit</button> :
                                        <button onClick={updateNote}>Update</button>
                               }
                                
                            
                            </a>

                            <a  className="inline-flex items-center px-3 mx-2  py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            <button onClick={(e)=>{
                                e.preventDefault();
                                deleteHandler(id)
                            }}>Delete</button>
                            </a>
                            <p>Status: {note.completed ? "Complete" : "In Progress"}</p>
                            <input type='checkbox' value={note.completed} onChange={() => changeCheckBox(id)} />
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default NoteList