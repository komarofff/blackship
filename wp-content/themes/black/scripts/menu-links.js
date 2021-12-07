document.addEventListener('DOMContentLoaded',()=> {
    const menu = document.getElementById('menu-menu-1')
    const links = menu.querySelectorAll('a')
    links.forEach((val) => {
        val.classList.add('text-menu', 'text-menu-animation')
        let text = val.querySelector('span').innerText
        let spanTag = val.querySelector('span')
        spanTag.dataset.text = text

    })

    const menu2 = document.getElementById('menu-menu-2')
    menu2.classList.remove('flex-row')
    menu2.classList.add('footer-flex-row')
    const links2 = menu2.querySelectorAll('a')
    links2.forEach((val2) => {
        val2.classList.add('text-menu-footer', 'text-menu-animation')
        let text2 = val2.querySelector('span').innerText
        let spanTag2 = val2.querySelector('span')
        spanTag2.dataset.text = text2

    })
})

// add space above hash links
jQuery(document).ready(function ($) {

    $(function () {

        $('a[href*=#]:not([href=#])').click(function () {


            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                var hash55 = this.hash
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {

                    if (document.documentElement.clientWidth > 768){
                        $('html,body').animate({
                            scrollTop: target.offset().top - 270
                        }, 1000);

                }else {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 220
                    }, 1000);
                }
                    // let targMenu = document.querySelectorAll(`a[href="/${hash55}"]`)
                    // if(targMenu){
                    //     targMenu[0].parentNode.querySelector('a').classList.add('current-menu-item')
                    //     targMenu[1].parentNode.querySelector('a').classList.add('current-menu-item')
                    // }

                    return false;
                }
            }


        });
    });


})