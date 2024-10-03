import React from 'react'
import './Node.css'
const Node = (props) => {
  let obj=props.object
  let initialGrid=props.initialGrid
  let strId=props.id.split("-")
  let nodeStart=false
  let nodeEnd=false
  let visited=obj.isVisited
  if(strId[0]=== initialGrid.start[0].toString() && strId[1] === initialGrid.start[1].toString()){
    nodeStart=true
  }
  else if(strId[0]=== initialGrid.end[0].toString() && strId[1] === initialGrid.end[1].toString()){
    nodeEnd=true
  }
  if(nodeStart || nodeEnd){
    visited=false
  }
  return (
    <div className={`node ${visited ? 'node-visited' : ''}   ${nodeStart ? 'node-start' : ''} ${nodeEnd ? 'node-end' : ''} ${obj.isWall ? 'node-wall' : ''} ${props.id} ${obj.highlightPath ? 'node-highlight' : ''}`}></div>
  )
}

export default Node
