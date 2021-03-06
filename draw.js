const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;
var close;

(function setup(){
  snake = new Snake();
  fruit = new Fruit();

  fruit.pickLocation();

  close = window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();

    if(snake.eat(fruit)){
      fruit.pickLocation();
      fruit.draw();
    }

    snake.checkCollision(close);

    document.querySelector('.score').innerText = snake.total;
  }, 200);
}())

window.addEventListener('keydown', ((evt) => {
  const dir = evt.key.replace('Arrow', '');
  snake.changeDir(dir);
}));
