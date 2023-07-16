let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

window.addEventListener('load', function() {
	var content = document.querySelector('.header');
	content.classList.add('show');
});

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

function sendWhatsAppMessage() {
	var name = document.getElementById('nama').value;
	var email = document.getElementById('email').value;
	var message = document.getElementById('pesan').value;
	var masal = document.getElementById('masalah').value;
	var url = 'https://api.whatsapp.com/send?phone=+6281322544391&text=' + encodeURIComponent('Nama: ' + name + '\nEmail: ' + email + '\nPesan: ' + message + '\nmasalah: ' + masal);
	window.open(url);
}

function masukprojek() {
	var url = 'https://github.com/K4K4NG/';
	window.open(url);
}
