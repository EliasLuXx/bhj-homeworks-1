document.addEventListener('DOMContentLoaded', function() {
    const cookie = document.getElementById('cookie');
    const counter = document.getElementById('clicker__counter');
    let clickCount = 0;
    let isSmall = false;

    cookie.addEventListener('click', function() {
        // Увеличиваем счетчик
        clickCount++;
        counter.textContent = clickCount;

        // Чередуем размер печеньки
        if (isSmall) {
            cookie.width = 200;
            cookie.height = cookie.width; // Сохраняем пропорции
        } else {
            cookie.width = 180;
            cookie.height = cookie.width; // Сохраняем пропорции
        }
        
        isSmall = !isSmall; // Меняем флаг для следующего клика
    });
});