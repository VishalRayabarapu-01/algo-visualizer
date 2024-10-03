const bfs = (grid, initalGrid, directions) => {
    let start = initalGrid.start
    let end = initalGrid.end

    let rows=grid.length
    let cols=grid[0].length

    let queue = []
    queue.push(start)
    while (queue.length > 0) {
        const current = queue.shift()
        if (current[0] === end[0] && current[1] === end[1]) {
            //return reconstructPath(parentMap, end);
        }
        for(let [dx,dy] of directions){
            let new_row= dx+current[0]
            let new_col = dy+current[1]
            
        }
    }

}

const isValid = (i, j, row, col) => {
    return i < row && i >= 0 && j < col && j >= 0;
};

export {bfs}