let orlov = document.querySelector('.orlov');
let reshek= document.querySelector('.reshek');
let brosok = document.querySelector(".cklick");
let coin = document.querySelector('img');



let side1 = true;
let random = () => Boolean(Math.floor(Math.random() * 2));


let res1 = 0;
let res2 = 0;
let sum = 0;
coin.addEventListener('click', function () {
 let x = random()
  if (x) {
    res1 += 1;
    orlov.innerHTML = res1;
    console.log('orel');
    coin.src='./images/orel.png'
  } else {
    res2 += 1;
    reshek.innerHTML = res2;
    console.log('reshka');
    coin.src = "./images/reshka.png";
  }
    sum += 1;
  brosok.innerHTML = sum;
  const zvuk = document.createElement('<audio autoplay src="./music/moneta.wav"></audio>');
  document.body.append(zvuk);
})


  

