document.addEventListener('DOMContentLoaded', function() {
    // Получаем все ротаторы на странице
    const rotators = document.querySelectorAll('.rotator');
    
    // Для каждого ротатора запускаем свою смену фраз
    rotators.forEach(rotator => {
      const cases = rotator.querySelectorAll('.rotator__case');
      let currentIndex = 0;
      
      // Функция для смены активной фразы
      function rotateCase() {
        // Убираем активный класс у текущей фразы
        cases[currentIndex].classList.remove('rotator__case_active');
        
        // Переходим к следующей фразе (или к первой, если достигли конца)
        currentIndex = (currentIndex + 1) % cases.length;
        
        // Получаем данные новой фразы
        const nextCase = cases[currentIndex];
        const speed = nextCase.dataset.speed || 1000;
        const color = nextCase.dataset.color || 'black';
        
        // Добавляем активный класс новой фразе
        nextCase.classList.add('rotator__case_active');
        nextCase.style.color = color;
        
        // Устанавливаем таймер для следующей смены
        clearInterval(rotator.interval);
        rotator.interval = setInterval(rotateCase, speed);
      }
      
      // Инициализируем первую фразу
      const firstCase = cases[currentIndex];
      firstCase.classList.add('rotator__case_active');
      firstCase.style.color = firstCase.dataset.color || 'black';
      
      // Запускаем интервал с первой скоростью
      rotator.interval = setInterval(rotateCase, firstCase.dataset.speed || 1000);
    });
  });