let generate_btn=document.querySelector(".generate-btn");

generate_btn.addEventListener('click', fetchPics);
function fetchPics(){
    fetch('https://api.thecatapi.com/v1/images/search').then(response=>response.json()).then((data)=>{
        let catImgUrl=data[0].url;
        let catsImgEl=document.createElement("img");

        catsImgEl.setAttribute('src',`${catImgUrl}`)
        catsImgEl.classList.add("showcase")
        let catsImgDiv = document.querySelector(".catImg");
        
        catsImgDiv.appendChild(catsImgEl);
    })
    .catch(err=>console.log(err))
}
