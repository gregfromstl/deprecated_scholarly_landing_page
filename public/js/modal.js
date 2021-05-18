const openModal = (e) => {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    modal.classList.add('active');
    overlay.classList.add('active');
}
const closeModal = (e) => {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

(() => {
    const join = document.getElementById('join');
    join.addEventListener('click', openModal);
    const close = document.getElementById('overlay');
    close.addEventListener('click', closeModal);
})();