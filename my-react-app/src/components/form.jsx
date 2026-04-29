import React from 'react';

function Form() {

    const onSubmit= (e) => {
        e.preventDefault();
        console.log('Form submitted!');
    }
  return (
    <>
        <form className="m-4 border border-gray-400 p-6 w-80  mt-10 rounded-lg shadow-md">
        <input
            type="text"
            placeholder="Enter name"
            className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
            type="email"
            placeholder="Enter email"
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
            onSubmit={(e) => onSubmit(e)}
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
            Submit
        </button>
        </form>
    </>
  );
}

export default Form;