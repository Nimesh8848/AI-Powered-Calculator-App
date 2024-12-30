import { useRef, useState } from "react";
export default function Home() {
    const canvasRef=useRef<HTMLCanvasElement>(null);
    const [isdrawing,setIsDrawing]=useState(false);
    const startDrawing=(e:React.MouseEvent<HTMLCanvasElement>)=>{
        const canvas=canvasRef.current;
        if(canvas){
            canvas.style.backgroundColor='black';
            const ctx=canvas.getContext('2d');
            if(ctx){
                ctx.lineCap='round';
                ctx.strokeStyle='white';
                ctx.lineWidth=5;
                ctx.beginPath();
                ctx.moveTo(e.nativeEvent.offsetX,e.nativeEvent.offsetY);
                setIsDrawing(true);
            }
        }
    }
    const finishDrawing=()=>{
        setIsDrawing(false);
    }
    const draw=(e:React.MouseEvent<HTMLCanvasElement>)=>{
        if(!isdrawing){
            return;
        }
        const canvas=canvasRef.current;
        if(canvas){
            const ctx=canvas.getContext('2d');
            if(ctx){
                ctx.strokeStyle='white';
                ctx.lineTo(e.nativeEvent.offsetX,e.nativeEvent.offsetY);
                ctx.stroke();
            }
        }
    }
    return (
        <div>
            <canvas ref={canvasRef}
             id='canvas'
             className="absolute top-0 left-0 w-full h-full"
             onMouseDown={startDrawing}
             onMouseOut={finishDrawing}
             onMouseUp={finishDrawing}
             onMouseMove={draw}/>
        </div>
    )
}