
import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const canvasRef = useRef(null)
  var width;
  var height;

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.fill()
  }
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    width = canvas.width;
    height = canvas.height;

    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            // Example: Draw a gradient from red to blue
            var r = Math.random() * 255; // Red component
            var g = Math.random() * 255; // Green component (constant)
            var b = Math.random() * 255; // Blue component

            // Set pixel color
            context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            context.fillRect(x, y, 1, 1); // Fill rectangle at (x, y) with width and height of 1 pixel
        }
    }

    //Our draw came here
    const render = () => {
      frameCount++
      //draw(context, frameCount)



      animationFrameId = window.requestAnimationFrame(render)



    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])
  
  return <canvas style={{"height": "100vh", "width": "100vw", "position": "sticky", "left": "0px", "top":"0px"}} ref={canvasRef} {...props}/>
}

export default Canvas
