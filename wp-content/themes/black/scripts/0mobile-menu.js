// mobile-menu
let flag2 = true
document.querySelector(".mobile-menu-switcher").addEventListener('click', (e) => {
    if (flag2 === true) {
        document.querySelector(".mobile-menu").classList.add('mobile-menu-show')
        flag2 = false
        document.querySelector(".header").style.cssText = " background: #1C1C1C;"
        e.target.src = '/wp-content/themes/black/images/close.svg'
        e.target.style.cssText = "transform: rotate(360deg)"
        setTimeout(() => {
            var texts = document.querySelectorAll(".text-menu > span")
            texts.forEach((val) => {
                val.style.cssText = "-webkit-transform: translateY(0px);\n" +
                    "        -moz-transform: translateY(0px);\n" +
                    "        -ms-transform:translateY(0px) ;\n" +
                    "        -o-transform: translateY(0px);\n" +
                    "        transform: translateY(0px);"
            })
            e.target.style.cssText = ""

        }, 500)
closeMenu()

    } else {

        var texts = document.querySelectorAll(".text-menu > span")
        texts.forEach((val) => {
            val.style.cssText = "-webkit-transform: translateY(-100px);\n" +
                "        -moz-transform: translateY(-100px);\n" +
                "        -ms-transform:translateY(-100px) ;\n" +
                "        -o-transform: translateY(-100px);\n" +
                "        transform: translateY(-100px);"
        })
        e.target.src = '/wp-content/themes/black/images/menu_mobile.svg'
        e.target.style.cssText = "transform: rotate(360deg)"
        setTimeout(() => {
            document.querySelector(".header").style.cssText = ""
            flag2 = true
            e.target.style.cssText = ""
            document.querySelector(".mobile-menu").style.cssText = "  -webkit-transform: translateY(-113vh);\n" +
                "        -moz-transform: translateY(-113vh);\n" +
                "        -ms-transform:translateY(-113vh) ;\n" +
                "        -o-transform: translateY(-113vh);\n" +
                "        transform: translateY(-113vh);"
            setTimeout(() => {
                document.querySelector(".mobile-menu").classList.remove('mobile-menu-show')
                document.querySelector(".mobile-menu").style.cssText = ""
            }, 1500)
        }, 1000)

    }
})
function closeMenu(){
    if (document.documentElement.clientWidth <= 768) {

            const menuTop = document.querySelector('#menu-menu-1')
            // console.log(menuTop)
            const  buttons = document.querySelectorAll(".text-menu")

            console.log('buttons',buttons)
            buttons.forEach((val5)=>{
                val5.addEventListener('click',()=>{
                    var texts = document.querySelectorAll(".text-menu > span")
                    texts.forEach((val) => {
                        val.style.cssText = "-webkit-transform: translateY(-100px);\n" +
                            "        -moz-transform: translateY(-100px);\n" +
                            "        -ms-transform:translateY(-100px) ;\n" +
                            "        -o-transform: translateY(-100px);\n" +
                            "        transform: translateY(-100px);"
                    })
                    document.querySelector(".mobile-menu-switcher").src = '/wp-content/themes/black/images/menu_mobile.svg'
                    document.querySelector(".mobile-menu-switcher").style.cssText = "transform: rotate(360deg)"
                    setTimeout(() => {
                        document.querySelector(".header").style.cssText = ""
                        flag2 = true
                        document.querySelector(".mobile-menu-switcher").style.cssText = ""
                        document.querySelector(".mobile-menu").style.cssText = "  -webkit-transform: translateY(-113vh);\n" +
                            "        -moz-transform: translateY(-113vh);\n" +
                            "        -ms-transform:translateY(-113vh) ;\n" +
                            "        -o-transform: translateY(-113vh);\n" +
                            "        transform: translateY(-113vh);"
                        setTimeout(() => {
                            document.querySelector(".mobile-menu").classList.remove('mobile-menu-show')
                            document.querySelector(".mobile-menu").style.cssText = ""
                        }, 1500)
                    }, 1000)
                })
            })



    }
}

window.addEventListener('resize', () => {
    var texts = document.querySelectorAll(".text-menu> span")
    if (document.documentElement.clientWidth > 768) {

        texts.forEach((val) => {
            val.style.cssText = "-webkit-transform: translateY(0px);\n" +
                "        -moz-transform: translateY(0px);\n" +
                "        -ms-transform:translateY(0px) ;\n" +
                "        -o-transform: translateY(0px);\n" +
                "        transform: translateY(0px);"
        })
    } else {
        texts.forEach((val) => {
            val.style.cssText = "-webkit-transform: translateY(-100px);\n" +
                "        -moz-transform: translateY(-100px);\n" +
                "        -ms-transform:translateY(-100px) ;\n" +
                "        -o-transform: translateY(-100px);\n" +
                "        transform: translateY(-100px);"
        })

    }
})

document.addEventListener('scroll', () => {
    if (pageYOffset > 1) {
        document.querySelector('.header').style.cssText = 'background: rgba(28, 28, 28,.8);'
    } else {
        document.querySelector('.header').style.cssText = ''
    }
})