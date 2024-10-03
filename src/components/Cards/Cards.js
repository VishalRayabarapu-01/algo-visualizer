import React from 'react'
import Card from './Card'
const components = [
  {
    "image": `${process.env.PUBLIC_URL}/images/graph.png`,
    "title": "Graph Algorithms",
    "description" : "Different traversal and shortest path algorithms of graphs are visualised like BFS , DFS and DIJKSTRA , ...",
    "path"  : '/graph-visualizer'
  },
  {
    "image": `${process.env.PUBLIC_URL}/images/sudoku.png`,
    "title": "Sudoku Solver",
    "description" : "A Step by Step Visualization of Sudoku solver which is done by Backtracking algorithm.",
    "path"  : '/sudoku-visualizer'
  },
  {
    "image": `${process.env.PUBLIC_URL}/images/n_queen.png`,
    "title": "N-Queens",
    "description" : "A Step by Step Visualization of N-Queen solver which is done by Backtracking algorithm.",
    "path"  : '/n-queen-visualizer'
  }
]
const addCards = (value, idx) => {
  return <div className="col-md m-1">
    <Card key={idx} path={value.path} image={value.image} description={value.description} title={value.title} />
  </div>
}
const Cards = () => {
  return (
    <div className='container'>
      <div className="row p-3 mt-3">
        {components.map(addCards)}
      </div>
    </div>
  )
}

export default Cards
