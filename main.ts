function solution(B: string[]): number[] {
  let patrolBoats: number = 0;
  let submarines: number = 0;
  let destroyers: number = 0;

  let connected = 0;

  function markVisited(grid: string[], x: number, y: number) {
    grid[x] = grid[x].substring(0, y) + "*" + grid[x].substring(y + 1);
  }

  const getConnectedCells = (grid: string[], x: number, y: number) => {
    if (grid[x] && grid[x][y] === "#") {
      connected += 1;
      markVisited(grid, x, y);
      getConnectedCells(grid, x + 1, y);
      getConnectedCells(grid, x, y + 1);
    }
  };

  for (let i = 0; i < B.length; i++) {
    for (let j = 0; j < B[i].length; j++) {
      getConnectedCells(B, i, j);
      if (connected === 1) patrolBoats += 1;
      if (connected === 2) submarines += 1;
      if (connected === 3) destroyers += 1;
      connected = 0;
    }
  }

  return [patrolBoats, submarines, destroyers];
}

console.log(
  solution(["#.....", "#..#..", "....##", "##....", "..##..", "....##"])
);
