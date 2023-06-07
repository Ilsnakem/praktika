//открытие картинки в новом окне для просмотра
function openImageWindow(src) {
  var image = new Image();
  image.src = src;
  var width = image.width;
  var height = image.height;
  window.open(src,"Image","width=" + width + ",height=" + height);
}
// Get the modal
var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

//анимация прокрутки
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myiFunction()};
function myiFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
//подсказка
$(function(){
  $("[data-tooltip]").mousemove(function (eventObject) {
      $data_tooltip = $(this).attr("data-tooltip");
      $("#tooltip").html($data_tooltip)
          .css({ 
            "top" : eventObject.pageY + 5,
            "left" : eventObject.pageX + 5
          })
          .show();
      }).mouseout(function () {
        $("#tooltip").hide()
          .html("")
          .css({
              "top" : 0,
              "left" : 0
          });
  });
});
//Валидация поля e-mail
function validateEmail() { 
	var email = document.getElementById("email").value; 
	var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
	if (!emailPattern.test(email)) { 
		alert("Адрес электронной почты имеет неверный формат"); 
		return false; 
	} 
}
//Логотип наверх
var aStudio1 = document.getElementById("aStudio1");
      if (aStudio1) {
        aStudio1.addEventListener("click", function () {
          var anchor = document.querySelector("[data-scroll-to='topMenu']");
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }
//карусель изображений
let btn_prev = document.querySelector('#gallery .buttons .prev');
        let btn_next = document.querySelector('#gallery .buttons .next');
        let images = document.querySelectorAll('#gallery .photos img');
        let i = 0; // номер текущей картинки, на экране
        images[i].style.display = 'none'; // прячем текущую картину
        i++ ; // увеличиваем переменную i на единицу
        if(i >= images.length){
            i = 0; // переменная i равна 0
        }
        btn_prev.onclick = function(){
        images[i].style.display = 'none';
        i = i - 1;
        if(i < 0){
            i = images.length - 1;
        }
        images[i].style.display = 'block';
        }
//самолет
train.onclick = function() {
  let start = Date.now();

  let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    train.style.left = timePassed / 5 + 'px';

    if (timePassed > 2000) clearInterval(timer);

  }, 20);
}
//всплывающее сообщение разработчика
function myFunction() {
  // Находим контейнер с сообщением
  var x = document.getElementById("snackbar");
  // Добавляем контейнеру класс "show"
  x.className = "show";
  // Через 3 секунды удаляем класс "show" у контейнера с сообщением
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
//кнопка наверх
const btnUp = {
  el: document.querySelector('.btn-up'),
  show() {
    // удалим у кнопки класс btn-up_hide
    this.el.classList.remove('btn-up_hide');
  },
  hide() {
    // добавим к кнопке класс btn-up_hide
    this.el.classList.add('btn-up_hide');
  },
  addEventListener() {
    // при прокрутке содержимого страницы
    window.addEventListener('scroll', () => {
      // определяем величину прокрутки
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
      scrollY > 400 ? this.show() : this.hide();
    });
    // при нажатии на кнопку .btn-up
    document.querySelector('.btn-up').onclick = () => {
      // переместим в начало страницы
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
btnUp.addEventListener();