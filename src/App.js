import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Canvas from './Canvas';
import Body from './Body';

function App() {
  const [pageNumber, setPageNumber] = useState(0);

  const [scrollPos, setScrollPos] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  
  const width =  window.innerWidth;
  const height = window.innerHeight;
  const numberOfPeople = 8092033714;
  let numberOfPages = numberOfPeople/(width * height)
  

  var checkScrollSpeed = (function(settings){
    settings = settings || {};
  
    var lastPos, newPos, timer, delta, 
        delay = settings.delay || 50; // in "ms" (higher means lower fidelity )
  
    function clear() {
      lastPos = null;
      delta = 0;
    }
  
    clear();
    
    return function(){
      newPos = window.scrollY;
      if ( lastPos != null ){ // && newPos < maxScroll 
        delta = newPos -  lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;

    };
})();

// listen to "scroll" event
window.onscroll = function(){
  console.clear()
  setScrollSpeed(prevSpeed => (prevSpeed + checkScrollSpeed())/2)
};

  return (
    <div className="App">
      <h1>HTMLife</h1>
      <label>
      page:
      <select name="selectedFruit"
      value ={pageNumber}
      onChange={e => setPageNumber(e.target.value)}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    </label>

      {pageNumber==0 && (
      <div>
        {width * height}
        <br/>
        {numberOfPages}

        <div style={{"height": numberOfPages * height + "px", "backgroundColor": "red"}}>
          <div className='info_overlay medium_type'>
              At your scroll speed, you will meet everyone in {height/scrollSpeed} minutes
            </div>

          <Canvas />
        </div>
        </div>
      )}

      {pageNumber == 1 && (
        <div>
          361.6 billion emails are sent per day.
          Average words in an email are 434.48.
          This takes on average 3.3 minutes to read.
          About 155 million books
          </div>
      )}

      {pageNumber == 2 && (
        <div>
          <Body/>
        </div>
      )}
    </div>
  );
}

export default App;
