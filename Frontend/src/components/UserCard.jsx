import React from 'react'

function UserCard({ name, email, role }) {
  return (
    <div className="m-4 max-w-xs  bg-white border border-gray-200 rounded-xl shadow-md p-5 text-center hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-500 mt-2">{email}</p>
      <p className="bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-violet-700 text-white mt-4 px-3 py-1 rounded-full inline-block">
        {role}
      </p>
    </div>
  )
}

export default UserCard