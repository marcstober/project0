function doStuff() {
    alert('hi!');
    document.title = 'clicky click clak';
}
document.getElementById("clicky-button").addEventListener("click", doStuff);