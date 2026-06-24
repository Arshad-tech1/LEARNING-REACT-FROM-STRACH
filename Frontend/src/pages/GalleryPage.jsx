import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function GalleryPage() {

    const [userdata, setUserData] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()

    const pageno = Number(searchParams.get("page")) || 1

    const getGalleryData = async () => {
        const res = await axios.get(`/api/v1/gallery?page=${pageno}`)
        console.log(res.data)
        setUserData(res.data)
    }

    useEffect(() => {
        getGalleryData()
    }, [pageno])

    return (
        <div className="bg-black min-h-screen text-white">

            <button
                onClick={getGalleryData}
                className="active:bg-white active:scale-75 transition-all duration-150 m-5 p-1 bg-amber-600 text-white rounded-md h-10 w-40"
            >
                Get Gallery Photos
            </button>

            <div className='mx-5 pb-2 h-full flex flex-wrap gap-4'>

                {userdata.map((item, idx) => (
                    <div key={item.id}>
                        <img
                            src={item.download_url}
                            alt={item.author}
                            className="w-80 h-60 object-cover rounded-2xl"
                        />

                        <h2 className='flex gap-2 justify-center'>
                            <span>{idx + 1}</span>
                            {item.author}
                        </h2>
                    </div>
                ))}

                {userdata.length > 0 && (
                    <div className='mx-5 flex justify-center gap-4 items-center w-full'>

                        <button
                            onClick={() => {
                                if (pageno > 1) {
                                    setSearchParams({ page: pageno - 1 })
                                }
                            }}
                            className='bg-amber-600 text-white w-14 h-8 rounded-lg'
                        >
                            Prev
                        </button>

                        <span>Page {pageno}</span>

                        <button
                            onClick={() => {
                                setSearchParams({ page: pageno + 1 })
                            }}
                            className='bg-amber-600 text-white w-14 h-8 rounded-lg'
                        >
                            Next
                        </button>

                    </div>
                )}

            </div>

        </div>
    )
}

export default GalleryPage