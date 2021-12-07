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