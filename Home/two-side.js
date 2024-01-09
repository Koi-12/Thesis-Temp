document.addEventListener('DOMContentLoaded', () => {
    let wrapper = document.querySelector('.two-side');
    let top = document.querySelector('.sided.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 1000;

    wrapper.addEventListener('mousemove', (e) => {
        let delta = (e.clientX - window.innerWidth / 2) * 0.4;
        handle.style.left = e.clientX + delta + 'px';
        top.style.width = e.clientX + delta + skew + 'px';
    });

    wrapper.addEventListener('mouseleave', (e) => {
        handle.style.left = window.innerWidth / 2 + 'px';
        top.style.width = window.innerWidth / 2 + skew + 'px';
    });
});