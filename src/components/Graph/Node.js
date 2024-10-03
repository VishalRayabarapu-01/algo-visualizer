import React from 'react'
import './Node.css'
const Node = (props) => {
  let obj=props.object
  let initialGrid=props.initialGrid
  let strId=props.id.split("-")
  let nodeStart=false
  let nodeEnd=false
  if(strId[0]=== initialGrid.start[0].toString() && strId[1] === initialGrid.start[1].toString()){
    nodeStart=true
  }
  else if(strId[0]=== initialGrid.end[0].toString() && strId[1] === initialGrid.end[1].toString()){
    nodeEnd=true
  }
  return (
    <div className={`node ${nodeStart ? 'node-start' : ''} ${nodeEnd ? 'node-end' : ''} ${obj.isWall ? 'node-wall' : ''} ${props.id}`}></div>
  )
}

export default Node
