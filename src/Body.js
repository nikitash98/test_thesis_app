import data from "./data.json"
import { useEffect, useState } from "react";


function Body(props) {

    console.log(data["1"])
    const [positionBone, setPositionBone] = useState([0, 0, 0]);
    const [myframe, setFrame] = useState(1)
    const MINUTE_MS = 1;
    useEffect(() => {
        setPositionBone(data[myframe.toString()]["1"])

        const interval = setInterval(() => {
            setFrame(prevCount => {
                if((prevCount+1)%1900 == 0) {
                    return 1
                } else {
                    return (prevCount+1)%1900
                }
            })
          }, MINUTE_MS);
        

          return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.

      }, []);
      console.log(myframe)

        return <div>
        <h1>BODY</h1>
        <div>
        <input type="range" id="volume" name="volume" min="1" max="1938" 
            value = {myframe} onChange={(e)=> {setFrame(e.target.value)}} 
        />
            <label for="volume">frames</label>
        </div>
        {Object.keys(data[myframe.toString()]).map((number) => {
            console.log(number)
            return <div className="bone" style = {{"left": data[myframe.toString()][number.toString()][0]/2 + window.innerWidth/2, "top": -data[myframe.toString()][number.toString()][2]/2 + 1000}}>
                {number == 25 && (
                <h1>head</h1>

                )} 
                {number != 25 && (
                <a href = "https://en.wikipedia.org/wiki/Bone">test</a>
                )}
            </div>

        }
        )}


        </div>
}

export default Body
