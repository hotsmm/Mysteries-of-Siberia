let square = document.getElementById('square');
let floor = document.getElementById('floor');
let materialType = document.getElementById('materialType');

let cost = 0;

function calculateCost(){
    console.log('calc cost')
    switch(Number(document.getElementById('materialType').value)) {
        case 0: cost = 0; break;
        case 1: cost = 500; break;
        case 2: cost = 1000; break;
        case 3: cost = 1500; break;
        case 4: cost = 2000; break;
    }
    console.log('cost => ' + cost )

    function makeMoney(n) {
        return parseFloat(n).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1 ");
    }

    totalCost = cost*(Number(document.getElementById('square').value))*(Number(document.getElementById('floor').value))
    console.log('totalCost => ' + totalCost )

    document.getElementById('totalCost').innerHTML = makeMoney(totalCost);;

}

// Площадь * Этажи * материал = СУММА

// totalCost = cost*(Number(document.getElementById('square').value))*(Number(document.getElementById('floor').value))
// console.log('totalCost => ' + totalCost )

// document.getElementById('totalCost').innerHTML = totalCost;

/*$('container-calc').mousemove(function(e){
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;            
    })

    $('container-calc').mousemove(function(e){
        let winWidth = window.innerWidth;
        let winHeight = window.innerHeight;
        let moveOnX = e.pageX / (winWidth / 5 );
        let moveOnY = e.pageY / (winHeight / 5);
        })    

$('section').mousemove(function(e){
        let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    let moveOnX = e.pageX / (winWidth / 5 );
    let moveOnY = e.pageY / (winHeight / 5);
    $(this).css('transform', 'translate(-' + moveOnX +'%, -' + moveOnY + '%)');
    })        
*/

/*document.getElementById("move-this").addEventListener("mousemove", moveMe);
function moveMe(event) {
    // Cache mouse coordinates.
    var clientX = event.clientX;
    var clientY = event.clientY;

    // Calculate Mouse Input
    if (!this.orientationSupport && this.relativeInput) {

        // Clip mouse coordinates inside element bounds.
        if (this.clipRelativeInput) {
            clientX = Math.max(clientX, this.ex);
            clientX = Math.min(clientX, this.ex + this.ew);
            clientY = Math.max(clientY, this.ey);
            clientY = Math.min(clientY, this.ey + this.eh);
        }

        // Calculate input relative to the element.
        this.ix = (clientX - this.ex - this.ecx) / this.erx;
        this.iy = (clientY - this.ey - this.ecy) / this.ery;

    } else {

        // Calculate input relative to the window.
        this.ix = (clientX - this.wcx) / this.wrx;
        this.iy = (clientY - this.wcy) / this.wry;
    }
};*/

let bg = document.querySelector('.container-calc');
window.addEventListener('mousemove', function(e) {
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;  
	bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});



