import React from 'react'
import lang from '../../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearch = () => {
  const langKey = useSelector(store => store.config?.language)
  return (
    <div className='flex pt-[10%]  justify-center'>
        <form className='flex bg-gray-400 rounded-lg z-10 w-[45%] '>
            <input className='w-full px-8 text-lg rounded-s-lg outline-none' type="text" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className='px-8 py-4 text-lg font-semibold text-white bg-indigo-700 rounded-e-lg'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearch