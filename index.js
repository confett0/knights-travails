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
    return "Out of range, please enter start and end points between [0, 0] and [7, 7]";
  }

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
        newY < 8
      ) {
        const newKnight = new Knight(newX, newY); // Create a new knight node for every legal next move
        newKnight.path = [...currentKnight.path, [newX, newY]]; // Add new position to the path array
        queue.push(newKnight);

        if (newX === a && newY === b) {
          console.log(`You made it in ${newKnight.path.length - 1} moves! Here's your path:`);
          newKnight.path.forEach(pos => console.log(pos));
          return;
        }
      }
    }
  }
};
