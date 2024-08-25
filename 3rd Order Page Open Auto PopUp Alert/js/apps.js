window.addEventListener('load', function(){
    setTimeout(
        function open(event){
            document.querySelector('.popup').style.display = "block";
        },
        1000
    )
});
// Close btn:
document.querySelector('#close').addEventListener('click', function(){
    document.querySelector('.popup').style.display = 'none';
});