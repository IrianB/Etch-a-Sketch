let container = document.querySelector("#container");
let square = document.querySelector("#square");

createGrid(16);

square.addEventListener("click",()=>{
    let num = parseInt(prompt("Number of Squares: "));
    container.textContent = '';

    createGrid(num);

});

function createGrid(num){
    let opa = 0.1;

    for(let i=0;i<num*num;i++){
        let grid = document.createElement('div');
        grid.classList.add('grid-item');
        grid.style.flexBasis = `calc(100% / ${num})`;
        container.appendChild(grid);

        grid.addEventListener("mouseenter",()=>{
            grid.style.backgroundColor = randomColors();
        });
        grid.addEventListener("mouseleave",()=>{
            grid.style.backgroundColor = "black";
            grid.style.opacity = opa+=0.1;
        });
    }
}

function randomColors(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}