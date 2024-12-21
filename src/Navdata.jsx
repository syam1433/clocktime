import { useState } from "react";
import ClockData from "./ClockData";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer.jsx"
function Navdata(){
    const[activetab,setActivetab]=useState("ClockData");
    return(
        <div className=" h-28">
            <div className=" h-28 flex items-center justify-around text-2xl cursor-pointer text-white" >
            <p className={`cursor-pointer ${activetab === "ClockData" ? "border-b-4 border-blue-500" : "border-b-4 border-transparent"}`}onClick={() => setActivetab("ClockData")}>digital clock</p>
            <p className={`cursor-pointer ${activetab === "Stopwatch" ? "border-b-4 border-blue-500" : "border-b-4 border-transparent"}`}onClick={() => setActivetab("Stopwatch")}>stop watch</p>
            <p className={`cursor-pointer ${activetab === "Timer" ? "border-b-4 border-blue-500" : "border-b-4 border-transparent"}`}onClick={() => setActivetab("Timer")}>timer</p>
            </div>
            {activetab === "ClockData" && <ClockData />}
            {activetab === "Stopwatch" && <Stopwatch />}
            {activetab === "Timer" && <Timer />}
        </div>
    );
}
export default Navdata