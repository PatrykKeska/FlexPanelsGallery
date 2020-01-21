const panels = document.querySelectorAll('.panel'); 
const panel1 = document.querySelector('.panel1'); 
const textTop = document.querySelectorAll('.moveTop')

const panelHanlder = function(e){
this.classList.toggle('openPanel')

if(this.classList.contains('openPanel')){ 
    e.target.querySelector('.moveTop').classList.add('animateText')
    e.target.querySelector('.moveBottom').classList.add('animateText')
    
}else { 
    e.target.querySelector('.moveTop').classList.remove('animateText')
    e.target.querySelector('.moveBottom').classList.remove('animateText')
}




   
}

function handleTxtTop(){
    console.log(this)
}


panels.forEach(panel => panel.addEventListener('click', panelHanlder))
textTop.forEach(txt => txt.addEventListener('click', handleTxtTop))
