let generate_btn=document.querySelector(".generate-btn");

generate_btn.addEventListener('click', fetchPics);
function fetchPics(){
    fetch('https://api.thecatapi.com/v1/images/search').then(response=>response.json()).then((data)=>{
        console.log(data);
    })
}
