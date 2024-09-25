let isModalOpen = false;
let currentScrollPosition = 0;

function openModal(imageElement) {
    const modal = document.getElementById(modal);
    const modalImg = document.getElementById(modal-img);

    if (!isModalOpen) {
        currentScrollPosition = window.scrollY;
        modal.style.display = flex;
        modalImg.src = imageElement.src;
        isModalOpen = true;
    } else {
        closeModal();
    }
}

function closeModal() {
    const modal = document.getElementById(modal);

    modal.style.display = none;
    window.scrollTo(0, currentScrollPosition);  Возвращаем прокрутку на прежнее место
    isModalOpen = false;
}

 Функции для всплывающего окна
function showPopup() {
    const popup = document.getElementById(popup);
    popup.style.display = block;
}

function closePopup() {
    const popup = document.getElementById(popup);
    popup.style.display = none;
}
