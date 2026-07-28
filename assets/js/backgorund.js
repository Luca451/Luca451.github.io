const bg = document.querySelector(".background-layer");


document.addEventListener(
"mousemove",
(e)=>{


let x =
(e.clientX / window.innerWidth - 0.5) * 45;


let y =
(e.clientY / window.innerHeight - 0.5) * 45;



bg.style.transform =
`
scale(1.15)
translate(${x}px, ${y}px)
`;



});