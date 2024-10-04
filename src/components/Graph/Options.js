import React from 'react'
import '../Cards/Card.css'
const Options = (props) => {
    let current_algo = Object.keys(props.algorithm).filter(key=>props.algorithm[key])
    if(current_algo.length===0){
        current_algo='Select Algorithm'
    }
    const handleClicked=(key)=>{
        if(key==='BFS/DIJKSTRA'){
            props.setAlgorithm({"A*":false,DFS: false,'BFS/DIJKSTRA' : true})
        }else if(key === 'DFS'){
            props.setAlgorithm({"A*":false,DFS: true,'BFS/DIJKSTRA' : false})
        }else{
            props.setAlgorithm({"A*":true,DFS: false,'BFS/DIJKSTRA' : false})
        }
    }
    return (
        <div className='m-2'>
            <div className="btn-group mx-5">
                <button className="btn text-light btn-gradient dropdown-toggle" data-bs-toggle="dropdown">{current_algo}</button>
                <ul className="dropdown-menu">
                    {Object.keys(props.algorithm).map((key)=>{
                        return <li className='dropdown-item' key={key} style={{cursor : 'pointer'}} onClick={()=>handleClicked(key)}>{key}</li>
                    })}
                </ul>
            </div>
            <span className="mx-2">
                <button className="btn text-light btn-gradient" onClick={props.maze}>Create Maze</button>
            </span>
            <span className="mx-2">
            <button className="btn text-light btn-gradient" onClick={props.visualizeGraph}>Visualize</button>
            </span>
            <span className="mx-2">
            <button className="btn text-light btn-gradient" onClick={props.clearGrid}>Clear Grid</button>
            </span>
            <span className="mx-2">
            <button className="btn text-light btn-gradient" onClick={props.clearPath}>Clear Path</button>
            </span>
        </div>
    )
}

export default Options
