import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar'
import Grid from './Grid'
import Options from './Options';
import { setBorders, createPath, addRandomOpenings, directions } from '../Algorithms/randomMaze'
import { bfs } from '../Algorithms/BfsAlgo';
import {dfs} from '../Algorithms/DfsAlgo';
const GraphVisualizer = () => {
  const [grid, setGrid] = useState([]);
  const [algorithm, setAlgorithm] = useState({
    BFS: false,
    DFS: false,
    DIJKSTRA: false
  });
  const [initialGrid, setInitialGrid] = useState({
    start: [],
    end: []
  })
  useEffect(() => {
    const createCellData = (row, col) => {
      return {
        row: row,
        col: col,
        isVisited: false,
        isWall: false,
        isBorder: false,
        highlightPath:false
      }
    }
    const cols = Math.floor(window.innerWidth / 25);
    const rows = Math.floor(window.innerHeight / 25) - 5;
    let matrix = []
    for (let i = 0; i < rows; i++) {
      let row = []
      for (let j = 0; j < cols; j++) {
        row.push(createCellData(i, j))
      }
      matrix.push(row)
    }
    let end_i = rows - 3;
    let end_j = cols - 3;
    setInitialGrid({
      start: [4, 4],
      end: [end_i, end_j]
    })
    setGrid(matrix)
  }, [])

  const visualizeGraph = () => {
    if (algorithm.BFS === true) {
      bfs(grid, initialGrid,directions,setGrid)
    } else if (algorithm.DFS === true) {
      dfs(grid,initialGrid,directions,setGrid)
    } else if (algorithm.DIJKSTRA === true) {

    } else {
    }
  }

  const createMaze = async () => {
    clearGrid();
    const newGrid = [...grid]
    const rows = newGrid.length
    const cols = newGrid[0].length
    await setBorders(newGrid, rows, cols, setGrid)
    await createPath(2, 2, newGrid, rows, cols, setGrid);
    await addRandomOpenings(newGrid, rows, cols, setGrid, clearPathForInitial)
  }
  const clearPathForInitial = (maze) => {
    let i = initialGrid.start[0]
    let j = initialGrid.start[1]
    let end_i = initialGrid.end[0]
    let end_j = initialGrid.end[1]
    for (let dir of directions) {
      maze[i + dir[0]][j + dir[1]].isWall = false
      maze[end_i + dir[0]][end_j + dir[1]].isWall = false
    }
  }
  const clearGrid = () => {
    grid.forEach((row, idx) => {
      row.forEach((element, idx1) => {
        element.isVisited = false;
        element.isWall = false
        element.isBorder = false
        element.highlightPath=false
      });
    })
    setGrid(grid)
  }

  return (
    <>
      <Navbar />
      <Options algorithm={algorithm} visualizeGraph={visualizeGraph} maze={createMaze} setAlgorithm={setAlgorithm} />
      <Grid grid={grid} initialGrid={initialGrid} />
    </>
  )
}

export default GraphVisualizer
