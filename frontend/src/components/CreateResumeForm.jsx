import React, { useState } from 'react'
import  Input  from "../components/Input";

import {useNavigate} from 'react-router-dom'
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from '../utils/apiPath';



const CreateResumeForm = () => {

  const [title, setTitle] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleCreateResume = async (e) =>{
    e.preventDefault();

    if(!title){
      setError("Please Enter Resume Title")
      return;

    }
    setError("")

    try {
      const response = await axiosInstance.post(API_PATHS.RESUME.CREATE, {
        title,
      })
      if(response.data?._id){
        navigate(`/resume/${response.data?._id}`)
      }
    } catch (error) {
      if(error.response && error.response.data.message){
        setError(error.response.data.message)
      }
      else{
        setError("Something is wrong. Please try again.")
      }
    }
  }

  return (
    <div className='w-full'>
      <div className="mb-6 mt-2">
        <p className='text-gray-400 font-medium'>Give your resume a title to get started. You can customise everything later.</p>
      </div>

      <form onSubmit={handleCreateResume} className="space-y-6">
        <Input 
          value={title} 
          onChange={({target}) => setTitle(target.value)}
          label='Resume Title' 
          placeholder='e.g., Software Engineer' 
          type='text' 
        />
        {error && (
          <p className='text-red-400 text-sm font-medium bg-red-950/50 border border-red-800/50 px-4 py-3 rounded-xl mb-4'>
            {error}
          </p>
        )}

        <button 
          type='submit' 
          className='w-full py-4 bg-gradient-to-r from-red-600 to-amber-500 text-white font-black text-lg rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-red-500/30 transition-all'
        >
          Create Resume
        </button>
      </form>
    </div>
  )
}

export default CreateResumeForm
