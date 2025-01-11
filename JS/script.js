const yes = document.getElementById("yes");
const no = document.getElementById("no");
const tidak = document.getElementById("tidak");
const display = document.getElementById("display");
const oke = document.querySelectorAll("#oke");
const guy = document.getElementById("guy");
const akhir = document.getElementById("akhir");
const akhirYes = document.getElementById("akhirYes");

yes.addEventListener('click', () => {
    display.classList.remove('hidden');
    guy.classList.add('hidden');
})

no.addEventListener('click', () => {
    tidak.classList.remove('hidden');
    guy.classList.add('hidden');
})

tidak.addEventListener('click', () => {
    akhir.classList.remove('hidden');
})
oke[0].addEventListener('click', () => {
    akhirYes.classList.remove('hidden');
})
oke.forEach(oke => {
    oke.addEventListener('click', () => {
        display.classList.add('hidden');
        tidak.classList.add('hidden');
    })
})
