const canvas = document.getElementById('snake');
const context = canvas.getContext('2d');

const grid = 20;
let count = 0;

let snake = {
  x: 160,
  y: 160,
  dx: grid,
  dy: 0,
  cells: [],
  maxCells: 4
};

let apple = {
  x: 320,
  y: 320
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function resetGame() {
  snake.x = 160;
  snake.y = 160;
  snake.dx = grid;
  snake.dy = 0;
  snake.cells = [];
  snake.maxCells = 4;
  apple.x = getRandomInt(0, 25) * grid;
  apple.y = getRandomInt(0, 25) * grid;
}

function gameLoop() {
  requestAnimationFrame(gameLoop);

  if (++count < 4) {
    return;
  }

  count = 0;
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.strokeStyle = 'white';
  context.lineWidth = 2;
  context.strokeRect(0, 0, canvas.width, canvas.height);

  snake.x += snake.dx;
  snake.y += snake.dy;

  // Проверка на столкновение с границами
  if (snake.x < 0 || snake.x >= canvas.width || snake.y < 0 || snake.y >= canvas.height) {
    resetGame();
  }

  snake.cells.unshift({x: snake.x, y: snake.y});

  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

  context.fillStyle = 'green';
  snake.cells.forEach((cell, index) => {
    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }

    for (let i = index + 1; i < snake.cells.length; i++) {
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        resetGame();
      }
    }
  });

  drawHead(snake.cells[0], snake.dx, snake.dy);
}

function drawHead(cell, dx, dy) {
  context.fillStyle = 'darkgreen';
  if (dx > 0) {
    context.beginPath();
    context.moveTo(cell.x + grid, cell.y);
    context.lineTo(cell.x + grid, cell.y + grid);
    context.lineTo(cell.x + grid / 2, cell.y + grid / 2);
    context.fill();
  } else if (dx < 0) {
    context.beginPath();
    context.moveTo(cell.x, cell.y);
    context.lineTo(cell.x, cell.y + grid);
    context.lineTo(cell.x + grid / 2, cell.y + grid / 2);
    context.fill();
  } else if (dy > 0) {
    context.beginPath();
    context.moveTo(cell.x, cell.y + grid);
    context.lineTo(cell.x + grid, cell.y + grid);
    context.lineTo(cell.x + grid / 2, cell.y + grid / 2);
    context.fill();
  } else if (dy < 0) {
    context.beginPath();
    context.moveTo(cell.x, cell.y);
    context.lineTo(cell.x + grid, cell.y);
    context.lineTo(cell.x + grid / 2, cell.y + grid / 2);
    context.fill();
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  } else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  } else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  } else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

resetGame();
requestAnimationFrame(gameLoop);
