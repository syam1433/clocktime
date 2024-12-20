import { useState,useEffect,useRef } from "react";
function Stopwatch(){

    const[stopwatch,setStopwatch]=useState(0);
    const[isRunning,setIsRunning]=useState(false);
    const intervalid=useRef(null);
    const starttimeref=useRef(0);

    useEffect(()=>{
        if(isRunning){
            intervalid.current=setInterval(()=>{
                setStopwatch(Date.now()  -starttimeref.current);
            },10);
        }
        return()=>{
            clearInterval(intervalid.current);
        }
    },[isRunning])

    function start(){
        setIsRunning(true);
        starttimeref.current=Date.now()-stopwatch;
    }
    function reset(){
        setStopwatch(0);
        setIsRunning(false);
    }
    function stop(){
        setIsRunning(false);
    }
    function displytime(){
        let hours = Math.floor(stopwatch/(1000*60*60));
        let minutes = Math.floor(stopwatch/(1000*60)%60);
        let seconds = Math.floor(stopwatch/(1000)%60);
        let milliseconds = Math.floor((stopwatch%1000)/10);

        return `${addzero(hours)}:${addzero(minutes)}:${addzero(seconds)}:${addzero(milliseconds)}`
    }
    function addzero(number){
        return( number<10?"0":"")+number;
    }

    return(
        <div className="">
            <div className=' flex justify-center items-center m-28 text-6xl '>
                <p className=" text-white">{displytime()}</p>
            </div>
            <div className=" text-white flex justify-evenly text-2xl">
                <button onClick={start}>Start</button>
                <button onClick={reset}>Reset</button>
                <button onClick={stop}>Stop</button>
            </div>
        </div>
    );
}

export default Stopwatch