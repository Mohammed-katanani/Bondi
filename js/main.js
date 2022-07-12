let switcherLis =Array.from(document.querySelectorAll(".ourWork ul li"));
let imgs =Array.from(document.querySelectorAll(".ourWork .items > div"));
console.log(imgs)
switcherLis.forEach((li) => {
li.addEventListener("click",test);
});

// switcherLis.onclick()=(i)=>{
//     switcherLis.forEach((i)=>{
//         i.classlist.remove("active")
//     });

function test(){
    switcherLis.forEach((i)=>{
        // console.log(i.classList)
        i.classList.remove("active")
    });
    this.classList.add("active");
    console.log(this)
    let dataFilter = this.getAttribute("data-filter")

    imgs.forEach((img)=>{
        let dataWork =img.getAttribute("data-item");
        console.log(dataFilter,dataWork)
        if(dataFilter==="All"){
            img.style.display="block"
        }else{
        dataFilter===dataWork?img.style.display="block":img.style.display="none"

        }
    })
}
////////////////////////////////////////////////////////////////////////////////////
// switcherLis.forEach((li) => {
//     li.addEventListener("click", removeActive);
//     li.addEventListener("click", manageImgs);
//   });
  
//   // Remove Active Class From All Lis And Add To Current
//   function removeActive() {
//     switcherLis.forEach((li) => {
//       li.classList.remove("active");
//       this.classList.add("active");
//     });
//   }
   
//   // Manage Imgs
//   function manageImgs() {
//     imgs.forEach((img) => {
//       img.style.display = "none";
//     });
//     document.querySelectorAll(`.${this.dataset.cat}`).forEach((el) => {
//       el.style.display = "block";
//     });
//   }