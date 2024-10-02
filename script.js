function tag (tag_name, i) {
     this.tag_name = tag_name,
     this.draw = () => {
          const tag = document.createElement(this.tag_name)
          const game_field = document.querySelector('.game_field')
          tag.classList.add('cell')
          tag.textContent = i;
          game_field.appendChild(tag)
     }
}
for (let i = 0; i<100; i++) {
     new tag('div', i).draw();
}