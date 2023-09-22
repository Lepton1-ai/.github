import {useState} from "react";
import './time.css';
function CLOCK(){

    const time =new Date().toLocaleDateString();
    const [curr_time,set_time]=useState(time);
    const get_time = () =>{
        const time =new Date().toLocaleDateString();
        set_time(time)
    }
    setInterval(get_time,1000);

    return (
        <>
            <div className="digital_clock">
                <h1>
                    {curr_time}
                </h1>
            </div>
        </>

    );
}


export default CLOCK