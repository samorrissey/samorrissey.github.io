const hamburgerBtn = document.getElementById('hamburgerBtn'); 
const navbar = document.getElementById('navbar'); 

hamburgerBtn.addEventListener('click', () => {
    console.log('Button clicked'); 
    navbar.classList.toggle('open');
}); 