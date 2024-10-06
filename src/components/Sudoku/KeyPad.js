import React, { useEffect, useRef, useState } from 'react';
import './node.css'
import { toast } from 'react-toastify';
import { checkForCollisions, removeFocus, sleep,resetCollisions, fillSudoku } from '../Algorithms/SudokuBacktracking';
const KeyPad = (props) => {
    let [i, j] = props.recentClicked
    const [speed,setSpeed] = useState(600)
    const speedRef = useRef(speed)
    useEffect(()=>{
        speedRef.current=speed
    },[speed])
    const NumberHandler = async (number) => {
        if (i === null && j === null) {
            toast.error("Please select a empty grid to add Value !!!")
            return
        }
        let newGrid = [...props.grid]
        if (checkForCollisions(i, j, newGrid, number)) {
            toast.error("Collisions occured Invalid Number !!!")
            newGrid[i][j].value = number
            props.setGrid([...newGrid])
            await sleep(2000)
            newGrid[i][j].value = ''
            resetCollisions(i,j,newGrid)
        } else {
            newGrid[i][j].value = number
        }
        removeFocus(newGrid)
        props.setGrid(newGrid)
        props.setRecentClicked([null, null])
    }
    const resetGrid = () => {
        let grid = props.grid
        grid.forEach((row) => {
            row.forEach(element => {
                element.focused = false
                element.focusSurrounding = false
                element.collision = false
                element.value=''
            });
        })
        props.setGrid([...grid])
    }
    const visualiseGrid = async ()=>{
        if(await fillSudoku(props.grid,props.setGrid,speedRef)){
            toast.success("Solved !!!")
            removeFocus(props.grid)
            props.setGrid([...props.grid])
        }else{
            toast.error("No Solution exists !!!")
        }
    }
    return (
        <div className="p-3">
            <div className="row mt-2 pt-2">
                {props.numbers.map((number) => (
                    <div key={number} className="col-4 mb-2">
                        <button onClick={() => NumberHandler(number)} style={{ fontFamily: 'Inclusive Sans' }} className="btn fs-3 btn-primary p-3 btn-lg w-100">{number}</button>
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="col mt-1 pt-1">
                    <label htmlFor="customRange1" style={{ fontFamily: 'Inclusive Sans' }} className="fw-bold">Speed :</label>
                    <input type="range" min={0} value={speed} max={1200} className="form-range" onChange={e=>setSpeed(e.target.value)}  />
                </div>
                <div className="col">
                    <button onClick={visualiseGrid} style={{ fontFamily: 'Inclusive Sans' }} className="btn btn-primary btn-lg w-100 mt-3 pt-1">Visualize</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button onClick={resetGrid} style={{ fontFamily: 'Inclusive Sans' }} className="btn btn-primary btn-lg w-100 mt-3 pt-1">New Game</button>
                </div>
            </div>
        </div>
    );
};

export default KeyPad;
