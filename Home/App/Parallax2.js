document.addEventListener("mousemove" , parallax);
function parallax(e){
    this.querySelectorAll('.mockup1').forEach(mockup1 =>{
        const speed = mockup1.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100
        
        mockup1.style.transform =`translateX(${x}px)  translateY(${y}px)`
    })
}