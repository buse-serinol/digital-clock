let myName = document.querySelector('#myName')
myName.innerHTML = prompt("Adınızı Giriniz:")



function showTime() {
    let date = new Date().toLocaleString('TR');
    document.getElementById('myClock').innerHTML = date;
}
setInterval(showTime, 1000)