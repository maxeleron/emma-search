'use strict'

//alert('Hi Yandex script is working')

//1-link open by Enter feature
window.addEventListener('keyup', (e)=>{
    //let searchInput = document.querySelector('.input__control');
    if (e.keyCode === 13 && true) {// there should be smart enter reading in future
        //clicks on the first link when Enter hited
        document.querySelector("#search-result > li:nth-child(3) > div.organic.typo.typo_text_m.typo_line_s.i-bem > h2 > a").click()
      }
})
