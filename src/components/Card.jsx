import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {IoPlayBackCircleSharp} from "react-icons/io5"
import {BsCheck} from "react-icons/bs"
import {BiChevronDown} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"
import {RiThumbUpFill,RiThumbDownFill} from "react-icons/ri"
import video from '../../../mern-netflix-clone/src/assets/video.mp4'
export default React.memo(
function Card({movieData, isliked = false}) {
  const navigate = useNavigate();
  const [isHovered,setIsHovered] = useState(false);
  
  return (
    <div 
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)} 
      className=' max-w-xs  w-56 h-full cursor-pointer relative  '>
      <img className=' rounded w-full h-full z-10' src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt="image" />
      {
        isHovered && (
          <div className="absolute z-50 h-max w-80  bottom-0 left-0 rounded-md ease-in-out shadow-sm bg-black  bg-opacity-75 ">
            <div className=" relative h-36 ">
            <img className=' w-full h-36 object-cover rounded-md top-0 z-[4] absolute'
            src={`https://image.tmdb.org/t/p/w500${movieData.image}`} 
            alt="image"
            onClick={()=>navigate("/player")} />
            <video className='w-full h-36 object-cover rounded-md top-0 z-[5] absolute' src={video} autoPlay controls loop muted onClick={()=>navigate("/player")}></video>
            </div>
            <div className=" text-white p-4 gap-2">
              <h3 onClick={()=>navigate("/player")} >{movieData.name}</h3>
              <div className="flex">
                <div className="flex gap-4">
                  <IoPlayBackCircleSharp className=' hover:text-slate-400 text-4xl cursor-pointer ease-in-out' title='Play' onClick={()=>navigate("/player")} />
                  <RiThumbUpFill className=' hover:text-slate-400 text-4xl cursor-pointer ease-in-out'  title='Like' />
                  <RiThumbDownFill className=' hover:text-slate-400 text-4xl cursor-pointer ease-in-out' title='Dislike '/>
                  {
                    isliked ?
                      <BsCheck className=' hover:text-slate-400 text-4xl cursor-pointer ease-in-out' title='Remove From List' />:
                      <AiOutlinePlus className=' hover:text-slate-400 text-4xl cursor-pointer ease-in-out' title='Add to my list'/>
                  }
                </div>
                <div className="info">
                  <BiChevronDown className=' hover:text-slate-400 text-4xl cursor-pointer ease-in-out' title='More info'/> 
                </div>
              </div>
              <div className=" flex">
                <ul className='flex gap-4'>{movieData.genres.map((genre)=>
                  <li className=' h-fit p-2 rounded-xl bg-black pr-2 ' key={genre}>{genre}</li>
                )}</ul>
              </div>
            </div>
          </div>
        )}
    </div>
  )
})
