import { useState } from "react";
import ClockData from "./ClockData";
import Stopwatch from "./Stopwatch";
function Navdata(){
    const[activetab,setActivetab]=useState("ClockData");
    return(
        <div className=" h-28">
            <div className=" h-28 flex items-center justify-around text-2xl cursor-pointer text-white" >
            <p className={`cursor-pointer ${activetab === "ClockData" ? "border-b-4 border-blue-500" : "border-b-4 border-transparent"}`}onClick={() => setActivetab("ClockData")}>digital clock</p>
            <p className={`cursor-pointer ${activetab === "Stopwatch" ? "border-b-4 border-blue-500" : "border-b-4 border-transparent"}`}onClick={() => setActivetab("Stopwatch")}>stop watch</p>
            <p className={`cursor-pointer ${activetab === "ClockData" ? "border-b-4 border-blue-500" : "border-b-4 border-transparent"}`}onClick={() => setActivetab("ClockData")}>timer</p>
            </div>
            {activetab === "ClockData" && <ClockData />}
            {activetab === "Stopwatch" && <Stopwatch />}
            {activetab === "ClockData" && <ClockData />}
        </div>
    );
}
export default Navdata