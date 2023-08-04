const ratingE1s = document.querySelectorAll(".rating");

const btnE1 = document.getElementById("btn");
const containerE1 = document.getElementById("container")
let selectedRating = "";
ratingE1s.forEach((ratingE1s)=>{
    ratingE1s.addEventListener('click',(event)=>{
        activeRemove();
        selectedRating = event.target.innterText || event.target.parentNode.innterText;
//  console.log(event.target.innerText || event.target.parentNode.innerText); 
//gives the text inside div
    event.target.classList.add("active");
    event.target. parentNode.classList.add("active");
   
    });
});

btnE1.addEventListener("click",()=>{
    if(selectedRating !==""){
        containerE1.innerHTML =`
        <strong>Thank You!</strong>
        <br>
        <br>
        <strong>Feedback:${selectedRating}</strong>
        <p> we'll use your feedback to improve service.</p>
        `;
    }
    
})
function activeRemove(){
    ratingE1s.forEach((ratingE1s)=>{
        ratingE1s.classList.remove("active")
    });
}