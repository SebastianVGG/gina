const portfolio = document.querySelector(".sec-portfolio-js");
const modalImgPortfolio = document.querySelector(".img-modal-js")
const navbar_active = document.querySelector('.nav-main-js')

//Se agrega clase 'active' al cambiar en navegación
navbar_active.addEventListener('click', (e) =>{
    Array.from(document.getElementsByClassName('active')).forEach(function (element) { 
		if(element.classList.contains('active')) element.classList.remove('active')
	}); 

    let active = document.querySelector(e.target.attributes[0].textContent+"_")
    active.classList.add('active')
        
    
    // let active = e.target.attributes[0].textContent
    // let now_active = document.getElementById(active.slice(1))
    // now_active.classList.add('active')
})


portfolio.addEventListener("click", (e)=>{
    // console.log(e.target)
    console.log(e.target.classList)
    if(e.target.classList.contains('img-btn-modal-js')){
        //SRC
        let url_img = e.target.attributes[0].nodeValue
        //Add Modal
        modalImgPortfolio.src = url_img;
    }
})