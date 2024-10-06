import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar'
import Grid from './Grid'
import KeyPad from './KeyPad'
import {FoucsValidPaths} from '../Algorithms/SudokuBacktracking'
import { toast } from 'react-toastify'
const SudokuVisualizer = () => {

  const [grid, setGrid] = useState([])

  const [recentClicked,setRecentClicked] = useState([null,null])
  useEffect(() => {
    const createCell = (i, j) => {
      return {
        row: i,
        col: j,
        value: '',
        focused: false,
        focusSurrounding : false,
        collision : false
      }
    }
    let n = 9;
    let matrix = []
    for (let i = 0; i < n; i++) {
      let row = []
      for (let j = 0; j < n; j++) {
        row.push(createCell(i, j))
      }
      matrix.push(row)
    }
    setGrid(matrix)
  }, [])

  const numbers = Array(9).fill().map((_, idx) => idx + 1+'')

  const clickHandlerForGrid=(i,j)=>{
    setRecentClicked([i,j])
    FoucsValidPaths(Number(i),Number(j),grid,setGrid)
  }

  const displayInfo=()=>{
    toast.info("Click on empty cell and then set number (OR) click visualize", { autoClose: 10000 })
  }
  return (
    <>
      <Navbar />
      {grid.length===0 && displayInfo()}
      <div className='container' >
        <div className="row p-4 mt-4">
          <div className="col-12 col-md-6 mb-4">
            <Grid clickHandlerForGrid={clickHandlerForGrid} recentClicked={recentClicked} setRecentClicked={setRecentClicked}  grid={grid} />
          </div>
          <div className="col-12 col-md-6">
            <KeyPad recentClicked={recentClicked}  setRecentClicked={setRecentClicked} numbers={numbers} grid={grid} setGrid={setGrid} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SudokuVisualizer
