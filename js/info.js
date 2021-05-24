let $rulebtn = document.querySelector('.rule');
let $closebtn = document.querySelector('.close');
$rulebtn.addEventListener('click',function(){
    document.querySelector("#info").style.display = "flex";
    $rulebtn.style.display = 'none';
});
$closebtn.addEventListener('click',function(){
    document.querySelector("#info").style.display = "none";
    $rulebtn.style.display = '';
});