const portfolio = document.querySelector(".sec-portfolio-js");
const modalImgPortfolio = document.querySelector(".img-modal-js")

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