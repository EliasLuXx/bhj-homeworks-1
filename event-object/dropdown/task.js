document.addEventListener('DOMContentLoaded', function() {
    const dropdownValue = document.querySelector('.dropdown__value');
    const dropdownList = document.querySelector('.dropdown__list');
    const dropdownItems = document.querySelectorAll('.dropdown__item');
    
    // Обработчик клика по кнопке
    dropdownValue.addEventListener('click', function() {
        dropdownList.classList.toggle('dropdown__list_active');
    });
    
    // Обработчики кликов по пунктам списка
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Отменяем переход по ссылке
            dropdownValue.textContent = this.textContent.trim();
            dropdownList.classList.remove('dropdown__list_active');
        });
    });
    
    // Закрытие списка при клике вне его области
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdownList.classList.remove('dropdown__list_active');
        }
    });
});