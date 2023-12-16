const sketchpadcontainer=document.querySelector(".main-container");
let noofpixels = 16;
let allBoxes;
function makeBoxes(noofboxes){
    sketchpadcontainer.removeChild(document.querySelector(".temp-container"));
    const tempcontainer = document.createElement("div");
    tempcontainer.classList.add("temp-container");
    for (let i=0;i<noofboxes;i++){
        let tempbox = document.createElement("div");
        tempbox.classList.add("sketchpad-pixel");
        tempbox.style.backgroundColor = "white";
        tempbox.style.border = "1px solid black";
        tempcontainer.appendChild(tempbox);
        tempbox.style.width = Math.floor(100 / Math.sqrt(noofboxes)) + "%";
        console.log(tempbox.style.width);
        tempbox.style.height = 100 / Math.sqrt(noofboxes) + "%";
    }
    sketchpadcontainer.appendChild(tempcontainer);
    allBoxes = document.querySelectorAll(".sketchpad-pixel");
    addHoverEffect();
}
makeBoxes(noofpixels);
function addHoverEffect(){
    allBoxes.forEach(function(box){
        box.addEventListener('mouseover', (e)=>{
            e.target.style.backgroundColor = "black";
            e.target.style.border = "1px solid white";
        })
    });
}
(document.querySelector(".clear")).addEventListener("click", (e)=>{
    for (let i = 0; i < noofpixels;i++){
        allBoxes.forEach(function(box){
            box.style.backgroundColor = "white";
            box.style.border = "1px solid black";
        })
    }
});
(document.querySelector(".confirmsize")).addEventListener("click", (e)=>{
    const inputField = (document.querySelector("#inputboxcount"));
    if (inputField.value !== "" && Number.isInteger(Math.sqrt(inputField.value))){
        makeBoxes(inputField.value);
        (document.querySelector(".settings")).classList.remove("failed");
    }
    else{
        (document.querySelector(".settings")).classList.add("failed");
    }
    inputField.value = "";
})