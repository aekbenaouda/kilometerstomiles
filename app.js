document.getElementById('inpt').addEventListener('input', convert);
document.querySelector('.output').style.visibility = 'hidden';

function convert(e){
    document.querySelector('.output').style.visibility = 'visible';
    let km = e.target.value;
    let nm = document.querySelector('.n-miles');
    let feet = document.querySelector('.feet');
    nm.innerHTML = km * 0.62137;
    feet.innerHTML = km * 3280.84;
}

