var canvas = document.querySelector("Canvas");
var ctx = canvas.getContext("2d");
var x = randomX();
var y = canvas.height-80;
var dx = 2;
var dy = -2;
var ballRadius = 12;
var padHeight = 10;
var padWidth = 100;
var padX = (canvas.width-padWidth) / 2;
var right = false;
var left = false;
var speed = 5;
var brickRowCount = 6;
var brickColCount = 7;
var brickWidth = 100;
var brickHeight = 20;
var brickPadding = 8;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;
var interval = setInterval(draw, speed);

function gameSpeed() {
  if (score > 0 && score % 5 == 0 && speed >= 3) {
    speed = 1;
    setTimeout(draw, speed);
  }

}

function randomX() {
  return Math.floor(Math.random() * 750);
}

var bricks = [];
for (var i = 0; i < brickColCount; i++) {
  bricks[i] = [];
  for (var j = 0; j < brickRowCount; j++) {
    bricks[i][j] = {x: 0, y: 0, status: 1};
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d" || e.key == "в") {
    right = true;
  } else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a" || e.key == "ф") {
    left = true;
  }
}

function keyUpHandler(e) {
  if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d" || e.key == "в") {
    right = false;
  } else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "a" || e.key == "ф") {
    left = false;
  }
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    padX = relativeX - padWidth / 2;
  }
}


function collisionDetection() {
  for (var i = 0; i < brickColCount; i++) {
    for (var j = 0; j < brickRowCount; j++) {
      var b = bricks[i][j];
      if (b.status == 1) {
        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy;
          b.status = 0;
          score++;
          if (score == brickRowCount * brickColCount) {
            alert ('Вы победили! Ваш счёт: ' + score);
            document.location.reload();
            clearInterval(interval);
          }
        }
      }
    }
  }
}

function drawLives() {
  ctx.font = "16 px Cascadia Mono";
  ctx.fillStyle = "52, 235, 192";
  ctx.fillText("Жизни: " + lives, canvas.width - 100, 20);
}

function drawScore() {
  ctx.font = "16px Cascadia Mono";
  ctx.fillStyle = "52, 235, 192";
  ctx.fillText("Счёт: " + score, 30, 20);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "rgb(14, 144, 176)";
  ctx.fill();
  ctx.closePath();
}


function drawPad() {
  ctx.beginPath();
  ctx.rect(padX, canvas.height-padHeight - 10, padWidth, padHeight);
  ctx.fillStyle = "rgb(14, 144, 176)";
  ctx.fill();
  ctx.closePath();
}

function drawBricks() {
  for (var i = 0; i < brickColCount; i++) {
    for (var j = 0; j < brickRowCount; j++) {
      if (bricks[i][j].status == 1) {
        var brickX = (i * (brickWidth + brickPadding)) + brickOffsetLeft;
        var brickY = (j * (brickHeight + brickPadding)) + brickOffsetTop;
        bricks[i][j].x = brickX;
        bricks[i][j].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "rgb(14, 144, 176)";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPad();
  drawBricks();
  drawScore();
  drawLives();
  collisionDetection();

  if (x + dx > canvas.width-ballRadius || x + dx < 0) {
    dx = -dx;
  }

  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - 16 - ballRadius) {
    if (x > padX && x < padX + padWidth) {
      dy = -dy;
    } else {
      lives--;
      if (!lives) {
        alert ('Игра закончена. Ваш счёт: ' + score);
        document.location.reload();
        clearInterval(interval);
      } else {
        x = randomX();
        y = canvas.height - 40;
        dx = 2;
        dy = -2;
        padX = (canvas.width - padWidth) / 2;
      }
    }
  }

  if (right) {
    padX += 2;
    if (padX + padWidth > canvas.width) {
      padX = canvas.width - padWidth;
    }
  } else if (left) {
    padX -= 2;
    if (padX < 0) {
      padX = 0;
    }
  }

  x += dx;
  y += dy;

}

gameSpeed();
