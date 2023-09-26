class Knight {
  constructor(xPos, yPos) {
    this.position = [xPos, yPos];
    this.path = [[xPos, yPos]];
  }
}

const knightMoves = ([x, y], [a, b]) => {
  if (
    x < 0 ||
    x >= 8 ||
    y < 0 ||
    y >= 8 ||
    a < 0 ||
    a >= 8 ||
    b < 0 ||
    b >= 8
  ) {
    return "Coordinates out of bound";
  }
  if (x === a && y === b) return "You're already where you want to get!";

  // Create a chessboard as a 2D array to keep track of visited cells and paths
  const chessboard = Array(8)
    .fill()
    .map(() => Array(8).fill({ visited: false }));

  // Define knight's possible moves
  const possibleMoves = [
    [+1, +2],
    [+1, -2],
    [-1, +2],
    [-1, -2],
    [+2, +1],
    [+2, -1],
    [-2, +1],
    [-2, -1],
  ];

  const knight = new Knight(x, y);
  const queue = [knight]; // Create a queue array and initialize it with the first knight position
  chessboard[x][y].visited = true;

  // Perform a BFS on the possible moves

  while (queue.length > 0) {
    const currentKnight = queue.shift();
    const [currentX, currentY] = currentKnight.position;

    for (const [xCoord, yCoord] of possibleMoves) {
      // Get all the possible moves
      const newX = currentX + xCoord;
      const newY = currentY + yCoord;

      // Make sure the knight doesn't go out of the board and exclude visited squares
      if (
        newX >= 0 &&
        newX < 8 &&
        newY >= 0 &&
        newY < 8 &&
        !chessboard[newX][newY].visited
      ) {
        const newKnight = new Knight(newX, newY); // Create a new knight node for every legal next move
        newKnight.path = [...currentKnight.path, [newX, newY]]; // Add new position to the path array
        queue.push(newKnight);
        chessboard[newX][newY].visited = true;

        if (newX === a && newY === b) {
          console.log(`You made it in ${newKnight.path.length - 1} moves! Here's your path: ${newKnight.path}` );
          return newKnight.path;
        }
      }
    }
  }
  return "No valid path found.";
};

knightMoves([2, 3], [7, 5]);
