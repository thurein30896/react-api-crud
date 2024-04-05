import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../Context/DataContext";
import { api } from "../service/baseUrl";

const EditDrawer = () => {
  const {editDrawer,toggleEditDrawer,editCourse:{id,title,short_name,fee},updateCourse} = useContext(DataContext);
  const [loading,setLoading] = useState(false);
  const idRef = useRef();
  const titleRef = useRef();
  const shortRef = useRef();
  const feeRef = useRef();
  const closeRef = useRef();

  useEffect(() => {
    idRef.current.value = id;
    titleRef.current.value = title;
    shortRef.current.value = short_name;
    feeRef.current.value = fee;
  },[]) 

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newCourse = {
      title : titleRef.current.value,
      short_name : shortRef.current.value,
      fee : feeRef.current.value
    }
    setLoading(true);
    const res = await api.put(`courses/${id}`,JSON.stringify(newCourse));
    updateCourse(res.data);
    setLoading(false);
    if(closeRef.current.checked){
      toggleEditDrawer();
    }
  }


  
  return (
    <div
      id="recordEdit"
      className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform  bg-white w-80 dark:bg-gray-800 ${!editDrawer && "translate-x-full"}`}
      tabIndex={-1}
      aria-labelledby="drawer-right-label"
    >
      <h5
        id="drawer-right-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        <svg
          className="w-4 h-4 me-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        Edit Course
      </h5>
      <button
      onClick={toggleEditDrawer}
        type="button"
        data-drawer-hide="recordEdit"
        aria-controls="recordEdit"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <form onSubmit={handleSubmit} id="editCourseForm">
        <input ref={idRef} type="hidden" name="id" id="editCourseId" />
        <div className="mb-5">
          <label
            htmlFor="editCourseTitle"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Course Title
          </label>
          <input
            disabled={loading}
            ref={titleRef}
            type="text"
            id="editCourseTitle"
            name="course_title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="eg.Special Web Design"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="editShortName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Short Course Name
          </label>
          <input
            disabled={loading}
            ref={shortRef}
            type="text"
            id="editShortName"
            name="short_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="eg.SWD"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="editFee"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Course Fee
          </label>
          <input
            disabled={loading}
            ref={feeRef}
            type="number"
            id="editFee"
            name="fee"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            
            required
          />
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <input
            ref={closeRef}
              id="edit-default-checkbox"
              type="checkbox"
              defaultValue
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              required
            />
            <label
              htmlFor="edit-default-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Agree Policies
            </label>
          </div>
          <div className="flex">
            <button
              disabled={loading}
              type="submit"
              className="group text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-75 disabled:before:border-2 disabled:before:border-blue-200 disabled:before:w-4 disabled:before:h-4 disabled:before:rounded-full disabled:before:border-l-blue-400 disabled:before:animate-spin disabled:before:block flex items-center gap-2 "
            >
              <span className="hidden group-disabled:inline">Loading...</span>
              <span className="inline group-disabled:hidden">Update</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditDrawer;
