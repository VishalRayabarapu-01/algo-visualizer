import React from 'react'
import '../Cards/Card.css'
const Options = (props) => {
    let current_algo = Object.keys(props.algorithm).filter(key => props.algorithm[key])
    if (current_algo.length === 0) {
        current_algo = 'Select Algorithm'
    }
    const handleClicked = (key) => {
        if (key === 'BFS/DIJKSTRA') {
            props.setAlgorithm({ "A*": false, DFS: false, 'BFS/DIJKSTRA': true })
        } else if (key === 'DFS') {
            props.setAlgorithm({ "A*": false, DFS: true, 'BFS/DIJKSTRA': false })
        } else {
            props.setAlgorithm({ "A*": true, DFS: false, 'BFS/DIJKSTRA': false })
        }
    }
    const obj = { cursor: 'pointer', fontFamily: 'Inclusive Sans' }
    return (
        <nav className="navbar navbar-expand-md bg-body-tertiary">
            <div className="container-fluid">
                <button style={{ fontFamily: 'Inclusive Sans' }} className="btn text-light btn-gradient dropdown-toggle" data-bs-toggle="dropdown">{current_algo}</button>
                <ul className="dropdown-menu">
                    {Object.keys(props.algorithm).map((key) => {
                        return <li className='dropdown-item' style={obj} key={key} onClick={() => handleClicked(key)}>{key}</li>
                    })}
                </ul>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item p-1">
                            <div className="nav-link" style={obj} onClick={props.maze}>Create Maze</div>
                        </li>
                        <li class="nav-item p-1">
                            <div className="nav-link" style={obj} onClick={props.visualizeGraph}>Visualize</div>
                        </li>
                        <li class="nav-item p-1">
                            <div className="nav-link" style={obj} onClick={props.clearGrid}>Clear Grid</div>
                        </li>
                        <li class="nav-item p-1">
                            <div className="nav-link" style={obj} onClick={props.clearPath}>Clear Path</div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Options
