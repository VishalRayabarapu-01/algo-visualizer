import React from 'react'
import {clearBoard, solveBoard ,removeFocus } from '../Algorithms/NQueenAlgo'
import { toast } from 'react-toastify'
const KeyPad = (props) => {

    const visualizeBoard=async ()=>{
        let newGrid= [...props.grid]
        if(await solveBoard(props.board,newGrid,0,props.setGrid,props.speedRef)){
            toast.success("Solved !!!")
            removeFocus(newGrid)
            props.setGrid(newGrid)
        }else{
            toast.error("Internal errror occured try again !!!")
        }
    }
    const setNewGame=()=>{
        let newGrid= [...props.grid]
        clearBoard(newGrid)
        props.setGrid(newGrid)
    }
    return (
        <>
            <div className="row">
                <label htmlFor="board-selection" style={{ fontFamily: 'Inclusive Sans' }} className="fw-bold">Select NxN board :</label>
                <input type="range" min={4} value={props.board} max={8} className="form-range" onChange={e => props.setBoard(e.target.value)} />
            </div>
            <div className="row mt-4">
                <label htmlFor="speed" style={{ fontFamily: 'Inclusive Sans' }} className="fw-bold">Speed :</label>
                <input type="range" min={0} value={props.speed} max={1200} className="form-range" onChange={e => props.setSpeed(e.target.value)} />
            </div>
            <div className="row mt-3">
                <div className="col mt-1 pt-1">
                    <button onClick={visualizeBoard} style={{ fontFamily: 'Inclusive Sans' }} className="btn btn-primary btn-lg w-100 mt-3 pt-1">Visualize</button>
                </div>
                <div className="col mt-1 pt-1">
                    <button onClick={setNewGame} style={{ fontFamily: 'Inclusive Sans' }} className="btn btn-primary btn-lg w-100 mt-3 pt-1">New Game</button>
                </div>
            </div>
        </>
    )
}

export default KeyPad
