let snake = document.querySelector('.snake');
let food = document.querySelector('.food');
let score_display = document.querySelector('.score_display');
let popup = document.querySelector('.popup');
let play_again = document.querySelector('.play_again');
let left = document.querySelector('.left');
let up = document.querySelector('.top');
let bottom = document.querySelector('.bottom');
let right = document.querySelector('.right');
let gameover = document.querySelector('.game_over');
let stopwatch = document.querySelector('.timer');
let time = 0;
let width = 10;
let speed = 0.8;
let food_index = 0;
let direction = 1;
let score = 0;
let interval_time = 0;
let interval = 0;
snake = [2, 1, 0];
document.addEventListener('DOMContentLoaded', function() {
     create_cells();
     start_game();
     timer();
     let timer = setInterval(timer, 1000);
     play_again.addEventListener('click', replay);
})
function create_cells (tag_name) {
     this.tag_name = tag_name,
     this.draw = () => {
          const create_cells = document.createElement(this.tag_name)
          const game_field = document.querySelector('.game_field')
          create_cells.classList.add('cell')
          game_field.appendChild(create_cells)
     }
}
for (let i = 0; i<100; i++) {
     new create_cells('div', i).draw();
}
function start_game() {
     let cells = document.querySelectorAll('.cell');
     random_food(cells);
     direction = 1;
     score_display.innerHTML = score;
     interval_time = 1000;
     snake.forEach((index) => cells[index].classList.add('snake'));
     interval = setInterval(move_outcome, interval_time)
}
function move_outcome() {
     let cells = document.querySelectorAll('.cell');
     if (check_hits(cells)) {
          gameover.textContent = 'Game Over :)'
          popup.style.display = 'flex';
          return clear_interval(interval);
     } else {
          move_snake(cells);
     }
}
function move_snake(cells) {
     let tail = snake.pop();
     cells[tail].classList.remove('snake');
     snake.unshift(snake[0] + direction);
     eat_food(cells, tail);
     cells[snake[0]].classList.add('snake');
}
function check_hits(cells) {
     if (
          (snake[0] + width >= width * width && direction === width) || (snake[0] % width === width - 1 && direction === 1) || (snake[0] % width === 0 && direction === -1) || (snake[0] - width <= 0 && direction === -width) || cells[snake[0] + direction].classList.contains('snake')
     ) {
          return true;
     } else {
          return false;
     }
}
function eat_food(cells, tail) {
     if (cells[snake[0]].classList.contains('food')) {
          cells[snake[0]].classList.remove(('food'));
          cells[tail].classList.add('snake');
          snake.push(tail);
          random_food(cells);
          score++;
          score_display.textContent = score;
          clear_interval(interval);
          interval_time = interval_time * speed;
          interval = setInterval(move_outcome, interval_time);
     }
}
function random_food(cells) {
     do {
          food_index = Math.floor(Math.random() * cells.length);
     } while (cells[food_index].classList.contains('snake'));
     cells[food_index].classList.add('food');
}
up.addEventListener("click", () => (direction = -width));
bottom.addEventListener("click", () => (direction = +width));
left.addEventListener("click", () => (direction = -1));
right.addEventListener("click", () => (direction = 1));
function replay() {
     game_field.innerHTML = "";
     createBoard();
     startGame();
     popup.style.display = "none";
   }