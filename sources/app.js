
(() => {
    const header = document.querySelector('header')
    const mainNavbar = document.querySelector('.main__navbar')
  
    document.addEventListener('scroll', function(e) {
       if(window.scrollY > 200) {
            header.style.transform = "translateY(-36px)";
            mainNavbar.classList.add('header-scrolled')
            
       } else {
            header.style.transform = "translateY(0)";
            mainNavbar.classList.remove('header-scrolled')
          
            
       }
    })
})();

(() => {
    const homeSearchItem = document.querySelectorAll('.home__search-item')
    homeSearchItem.forEach(item => {
        item.addEventListener('click', function() {
            console.log([this]);
            document.querySelector('.home__search-item.active').classList.remove('active')
            this.classList.toggle('active')
            
        })
    })
})()


