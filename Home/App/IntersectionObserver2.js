window.addEventListener('DOMContentLoaded' , setup);

function setup(){
    const title = document.getElementById('site-title2');
    
    const options = {
        root: null,
        theshold: 0,
        rootMargin:  "0px  0px -100px 0px"
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('underline'); 
                observer.unobserve(entry.target);
            }
        })
    } , options);

    observer.observe(title);
}