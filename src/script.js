window.onload=function(){
    const toggleButton=document.getElementsByClassName('toggle-button')[0];
    const nlinks= document.getElementsByClassName('r-nav')[0];
    toggleButton.addEventListener('click', () => {
        nlinks.classList.toggle('act');
    })
}
window.addEventListener('scroll',()=>{
    let anime=document.querySelectorAll('.reveal');
    let size=window.innerHeight;
    for(var i=0; i<anime.length;i++){
        var top=anime[i].getBoundingClientRect().top;
        if(top<size){
            anime[i].classList.add('active');
            
        }
        
    } 
 
});