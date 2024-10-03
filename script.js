let snake = document.querySelector('.snake');
let food = document.querySelector('.food');
let score_display = document.querySelector('.score_display');
let popup = document.querySelector('.popup');
let play_again = document.querySelector('.play_again');
// let left = document.querySelector('.left');
// let top = document.querySelector('.top');
// let bottom = document.querySelector('.bottom');
// let right = document.querySelector('.right');
let width = 10;
let speed = 0.8;
let food_index = 0;
let direction = 1;
let score = 0;
let interval_time = 0;
let interval = 0;
snake = [2, 1, 0];
function create_cells (tag_name, i) {
     this.tag_name = tag_name,
     this.draw = () => {
          const create_cells = document.createElement(this.tag_name)
          const game_field = document.querySelector('.game_field')
          create_cells.classList.add('cell')
          create_cells.textContent = i;
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
          alert('you hit smth.');
          popup.style.display = 'flex';
          return clear_interval(interval);
     } else {
          move_snake(cells);
     }
}