const panels = document.querySelectorAll('.panel'); 


const panelHanlder = function(e){
this.classList.toggle('openPanel')


if(this.classList.contains('openPanel') ){ 
    e.target.querySelector('.moveTop').classList.add('animateText')
    e.target.querySelector('.moveBottom').classList.add('animateText')
    

}
else { 
    e.target.querySelector('.moveTop').classList.remove('animateText')
    e.target.querySelector('.moveBottom').classList.remove('animateText')
}
  

   
}



panels.forEach(panel => panel.addEventListener('click', panelHanlder))

