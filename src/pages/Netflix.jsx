import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import {FaPlay} from 'react-icons/fa'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import background from '../../../mern-netflix-clone/src/assets/banner.jpg'
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { fetchMovies, getGenres } from '../store';
import Slider from '../components/Slider';


function Netflix() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getGenres())
  },[])

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "all" }));
    }
  }, [genresLoaded]);


  window.onscroll =()=>{
    setIsScrolled(window.pageXOffset === 0?false:true);
    return ()=>window.onscroll = null;
  }
   
  return (
    <div>
      <Navbar isScrolled={isScrolled}/>

      <div className=" ">
        <img className='object-cover w-full  h-[100vh]' src={background} alt="background" />
        <div className='relative bottom-20  w-fit flex flex-row gap-10 pl-10'>
          <button onClick={()=>navigate("/player")} className=' bg-neutral-400 rounded  w-fit  p-1 items-center gap-1 flex flex-row  opacity-75'  >
            <FaPlay/>Play
          </button>
          <button className=' bg-neutral-400 rounded  w-fit  p-1 items-center gap-1 flex flex-row  opacity-75 '>
            <AiOutlineInfoCircle/>More Info
          </button>
        </div>
      </div>
      <Slider movies={movies}/>
    </div>
  )
}

export default Netflix