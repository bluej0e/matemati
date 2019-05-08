
const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function generateHtml([h, v]){
  return`<div class="item hi${h} vi${v}"><img src="img/product/${randNum(40)}.jpg" /></div>`;
}

function randNum(limit){
  return Math.floor(Math.random() * limit) + 1 ;
}

function handleClick(e){
  const src = e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
  overlay.classList.add('open');
}
function close(){
  overlay.classList.remove('open');
}

const digits = Array.from({length: 12}, () =>
[randNum(3), randNum(3)]).concat([[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]])

const html = digits.map(generateHtml).join('');

gallery.innerHTML = html;

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', close);
overlay.addEventListener('click', close);
overlay.addEventListener('key', close);

$(document).keypress(function(e) {
  console.log(e.keyCode);
    if (e.keyCode === 27) {
        close();
  }});
