function createGrid(gridSize=16){
    const gridCont = document.querySelector(".gridContainer");
    template = ""
    for(i=0;i<gridSize;i++){
        template += "1fr ";
    }
    gridCont.style["grid-template-columns"] = template;
    gridCont.style["grid-template-rows"] = template;
    for (i=0; i<gridSize**2; i++){
        const gridItem = document.createElement("div");
        gridItem.classList.add("gridItem");
        gridItem.setAttribute("id", `${i+1}`);
        gridCont.appendChild(gridItem);
    };
    mouseover();
};
createGrid();
centreGrid();

function centreGrid(){
    let d = document.querySelector('.gridContainer');
    let r = document.querySelector('#reset');
    let w = window.innerWidth;
    let h = window.innerHeight;
    let divW = d.clientWidth;
    let divH = d.clientHeight;
    d.style.position="absolute";
    d.style.top = (h/2)-(divH/2)+"px";
    d.style.left = (w/2)-(divW/2)+"px";
    r.style.left = (w/2)-(r.clientWidth/2)+"px";
};

function resetGrid(e){
    let gridSize = prompt("Enter squares per side");
    const gridCont = document.querySelector(".gridContainer");
    gridCont.innerHTML = "";
    createGrid(gridSize);
};
const reset = document.querySelector("#reset");
reset.addEventListener("click", resetGrid);


function colorGridItem(e){
    // e.target.classList.add("colorGridItem");
    e.target.style["background-color"] = `#${Math.floor(Math.random()*16777215).toString(16)}`;
};
function mouseover(){
    const gridItems = document.querySelectorAll(".gridItem");
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', colorGridItem);
    });
};
