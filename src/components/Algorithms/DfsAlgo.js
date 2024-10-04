const dfs = async (grid, initalGrid, directions,setGrid) => {
    let start = initalGrid.start
    let end = initalGrid.end

    let rows=grid.length
    let cols=grid[0].length

    let queue = []
    let parentMap = new Map(); 
    queue.push(start)
    parentMap.set(`${start[0]}-${start[1]}`, null);
    grid[start[0]][start[1]].isVisited=true
    while (queue.length > 0) {
        const current = queue.pop()
        for(let [dx,dy] of directions){
            let new_row= dx+current[0]
            let new_col = dy+current[1]
            if(isValid(new_row,new_col,rows,cols) && !grid[new_row][new_col].isWall && !grid[new_row][new_col].isVisited){
                grid[new_row][new_col].isVisited=true
                queue.push([new_row,new_col])
                parentMap.set(`${new_row}-${new_col}`, current);
                if(new_row===end[0] && new_col===end[1]){
                    highlightPath(parentMap, end, grid, setGrid);
                    return
                }
                await sleep(18)
                setGrid([...grid])
            }
        }
    }
}


const highlightPath= async (parentMap, end, grid, setGrid)=>{
    let current=end
    while(current!=null){
        grid[current[0]][current[1]].highlightPath=true
        current = parentMap.get(`${current[0]}-${current[1]}`);
        await sleep(5);
        setGrid([...grid]);
    }
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const isValid = (i, j, row, col) => {
    return i < row && i >= 0 && j < col && j >= 0;
};

export {dfs}