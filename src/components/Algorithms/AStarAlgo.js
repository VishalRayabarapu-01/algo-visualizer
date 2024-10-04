import {Heap} from 'heap-js'

const aStar = async (grid, initalGrid, directions, setGrid) => {
    let start = initalGrid.start;
    let end = initalGrid.end;

    let rows = grid.length;
    let cols = grid[0].length;

    const customComparator=(a,b)=> a[0] - b[0];

    let openSet = new Heap(customComparator);
    openSet.push([0, start]);

    let gScore = Array(rows).fill().map(() => Array(cols).fill(Infinity));
    gScore[start[0]][start[1]] = 0;

    let parentMap = new Map();
    parentMap.set(`${start[0]}-${start[1]}`, null);
    grid[start[0]][start[1]].isVisited = true;

    while (openSet.length!==0) {
        const current = openSet.pop()[1];
        const [curRow, curCol] = current;

        if (curRow === end[0] && curCol === end[1]) {
            await highlightPath(parentMap, end, grid, setGrid);
            return;
        }

        for (let [dx, dy] of directions) {
            let newRow = curRow + dx;
            let newCol = curCol + dy;

            if (isValid(newRow, newCol, rows, cols) && !grid[newRow][newCol].isWall) {
                let tentative_gScore = gScore[curRow][curCol] + 1;
                
                if (tentative_gScore < gScore[newRow][newCol]) {
                    gScore[newRow][newCol] = tentative_gScore;
                    parentMap.set(`${newRow}-${newCol}`, current);

                    let fScore = tentative_gScore + heuristic([newRow, newCol], end);
                    openSet.push([fScore, [newRow, newCol]]);

                    grid[newRow][newCol].isVisited = true;
                    await sleep(15);
                    setGrid([...grid]);
                }
            }
        }
    }
};

const heuristic = (node, end) => {
    return Math.abs(node[0] - end[0]) + Math.abs(node[1] - end[1]);
};

const highlightPath = async (parentMap, end, grid, setGrid) => {
    let current = end;
    while (current !== null) {
        grid[current[0]][current[1]].highlightPath = true;
        current = parentMap.get(`${current[0]}-${current[1]}`);
        await sleep(5);
        setGrid([...grid]);
    }
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const isValid = (i, j, row, col) => {
    return i < row && i >= 0 && j < col && j >= 0;
};

export { aStar };
