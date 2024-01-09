document.addEventListener("mousemove" , parallax);
function parallax(e){
    this.querySelectorAll('.Frame1').forEach(Frame1 =>{
        const speed = Frame1.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100
        
        Frame1.style.transform =`translateX(${x}px)  translateY(${y}px)`
    })
}