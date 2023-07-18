//Реализовать страницу, на которой будет 1 кнопка. 
//Нажатие на кнопку должно вызывать появление каритинки 
//(возмите любую из интернета) на 5 сек, после чего картинка должна пропадать.

document.getElementById("picture-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Отменяем отправку формы

    var pictureURL = "https://t4.ftcdn.net/jpg/02/82/72/09/360_F_282720917_7ZtAfEqEfA6CRT66imV9avGWXEg9w6Jt.jpg"; 
    var image = document.getElementById("myImage");

    image.src = pictureURL; // Устанавливаем ссылку на картинку
    image.style.display = "block"; // Показываем картинку

    setTimeout(function() {
        image.style.display = "none"; // Скрываем картинку
    }, 5000); 
});

