import './styles/font.css';
import { useState,useEffect } from 'react';

function ClockData(){
    const[time,setTime]=useState(new Date());

  useEffect(()=>{
    const intervalId= setInterval(
      ()=>{
        setTime(new Date());
      },1000);
      return()=>{
        clearInterval(intervalId);
      }
  },[])
  
  function gettingTime(){
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();
    let meridium = hours>=12?"PM":"AM";
    hours=hours%12||12;

    return `${addzero(hours)}:${addzero(minutes)}:${addzero(seconds)}:${meridium}`
  }
  function addzero(number){
    return( number<10?"0":"")+number;
  }
  return(

    <div className=' text-white'>
        <div className=' flex justify-center items-center h-96 m-28 text-6xl '>
            <p className=' hover:text-red-400 cursor-pointer'>{gettingTime()}</p>
        </div>
    </div>
  );
}
export default ClockData