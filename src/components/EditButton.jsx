import React, { useContext, useRef, useState } from 'react'
import { DataContext } from '../Context/DataContext'
import { api } from '../service/baseUrl';

const EditButton = ({id}) => {
    const {toggleEditDrawer,setEditCourse} = useContext(DataContext);
    const [loading,setLoading] = useState(false);

    const handleEditBtn = async() => {
        setLoading(true);
        const res = await api.get(`courses/${id}`);
        setEditCourse(res.data);
        setLoading(false);
        toggleEditDrawer();
    }
   return (
    <button
        onClick={handleEditBtn}
        disabled={loading}
            type="button"
            className="record-edit me-2 group px-3 py-2 text-xs font-medium text-center inline-flex items-center text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-75 disabled:pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3 pointer-events-none hidden group-disabled:block animate-spin"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3 pointer-events-none block group-disabled:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
  )
}

export default EditButton