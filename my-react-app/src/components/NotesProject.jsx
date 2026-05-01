import React from 'react'

function NotesProject() {
  return (
    <div className="m-5 ">
      
      <form className="flex flex-col  items-start gap-3 p-4 rounded-lg shadow-md ">
        
        <input
          className="bg-gray-700  w-96  text-white px-3 py-2 rounded-md outline-none focus:ring-1 focus:ring-blue-500"
          type="text"
          placeholder="Enter heading"
        />

        <textarea
          className="bg-gray-700 w-96 h-32  text-white px-3 py-2 rounded-md outline-none focus:ring-1 focus:ring-blue-500"
          type="text"
          placeholder="Enter notes"
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          type="submit"
        >
          Add
        </button>

      </form>

    </div>
  )
}

export default NotesProject