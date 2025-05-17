document.addEventListener('DOMContentLoaded', function() {
    const book = document.getElementById('book');
    const fontSizeControls = document.querySelectorAll('.book__control_font-size .font-size');
    
    fontSizeControls.forEach(control => {
      control.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Удаляем активный класс у всех элементов управления размером
        fontSizeControls.forEach(item => item.classList.remove('font-size_active'));
        
        // Добавляем активный класс текущему элементу
        this.classList.add('font-size_active');
        
        // Удаляем все классы размера шрифта у книги
        book.classList.remove('book_fs-small', 'book_fs-big');
        
        // Получаем выбранный размер из data-атрибута
        const size = this.dataset.size;
        
        // Добавляем соответствующий класс книге
        if (size === 'small') {
          book.classList.add('book_fs-small');
        } else if (size === 'big') {
          book.classList.add('book_fs-big');
        }
        // Если size undefined - оставляем стандартный размер (без классов)
      });
    });
  });