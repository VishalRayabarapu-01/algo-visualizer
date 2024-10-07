import React from 'react'
import Node from './Node'

const Grid = (props) => {
    return (
        <>
            {props.grid.map((row, idx) => {
                return <div className='row center-row' key={`${row}-${idx}`}>
                    {row.map((col, idx1) => {
                        return <Node board={props.board}  id={`${idx}-${idx1}`} key={`${idx}-${idx1}`} obj={col} />
                    })}
                </div>
            })}
        </>
    )
}

export default Grid
