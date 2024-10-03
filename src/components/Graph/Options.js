import React from 'react'
import '../Cards/Card.css'
const Options = (props) => {
    let current_algo = Object.keys(props.algorithm).filter(key=>props.algorithm[key])
    if(current_algo.length===0){
        current_algo='Select Algorithm'
    }
    const handleClicked=(key)=>{
        if(key==='BFS'){
            props.setAlgorithm({DIJKSTRA:false,DFS: false,BFS : true})
        }else if(key === 'DFS'){
            props.setAlgorithm({DIJKSTRA:false,DFS: true,BFS : false})
        }else{
            props.setAlgorithm({DIJKSTRA:true,DFS: false,BFS : false})
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
        </div>
    )
}

export default Options
