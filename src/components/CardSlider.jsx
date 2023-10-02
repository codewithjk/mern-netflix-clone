import React, { useRef, useState } from 'react'
import Card from './Card'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
export default React.memo(
 function CardSlider({data,title}) {

  const [showControls, setShowControls] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const listRef = useRef();
  const [position, setPosition] = useState(0);

  const handleDirection = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 70;
    if (direction === "left" && sliderPosition > 0) {
      listRef.current.style.transform = `translateX(0)`;
      setSliderPosition(0);
    }
    if (direction === "right" && sliderPosition < 4) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
    }
  };


// grid grid-flow-col overflow-x-auto overflow-y-hidden no-scrollbar
  return (
    <div className='flex flex-col gap-4 relative p-2 ' onMouseEnter={()=>setShowControls(true)} onMouseLeave={()=>setShowControls(false)}>
      <h1 className=' ml-12 text-white text-2xl'>{title}</h1>
      <div className="wrapper">
        <div className={`slider-action absolute z-50 h-full top-1/2 bottom-0 w-14 ease-in-out left-0 ${!showControls?"hidden":""}`}>
          <AiOutlineLeft className=' text-3xl text-white ' onClick={()=>handleDirection('left')}/>
        </div>
          <div className="flex   w-max gap-4 translate-x-0 ease-in-out ml-4 duration-500 " ref={listRef}>
            {data.map((movie, index)=>{
              return <Card movieData={movie} index={index} key={movie.id} />
            })}
        </div>
        <div className={`slider-action absolute z-50 h-full top-1/2 bottom-0 w-14 ease-in-out right-0 ${!showControls?"hidden":""}`}>
          <AiOutlineRight className=' text-3xl text-white' onClick={()=>handleDirection('right')}/>
        </div>
      </div>
      
    </div>
  )
})
