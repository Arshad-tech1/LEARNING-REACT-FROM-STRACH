
import React,{useState} from 'react';

function Form() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    const onSubmit= (e) => {
        e.preventDefault();
        console.log(name)
        console.log(email)
        alert('Form submitted!');
    }
  return (
    <>
        <form onSubmit={(e) => { onSubmit(e)}} className="m-4 border border-gray-400 p-6 w-80  mt-10 rounded-lg shadow-md">
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                type="text"
                placeholder="Enter name"
                className="w-full p-2 mb-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />

            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="Enter email"
                className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
            />


            <button
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