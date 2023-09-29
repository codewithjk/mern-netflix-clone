import React from 'react'
import {BsArrowLeft} from 'react-icons/bs'
import video from '../../../mern-netflix-clone/src/assets/video.mp4'
import { useNavigate } from 'react-router-dom'

function Player() {

    const navigate = useNavigate(); 
  return (
    <div>
        <div className="player">
            <div className="back">
                <BsArrowLeft onClick={()=>navigate(-1)}/>
            </div>
            <video className='h-full' src={video} autoPlay controls loop muted></video>
        </div>
    </div>
  )
}

export default Player