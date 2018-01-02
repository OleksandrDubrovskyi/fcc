const cells = Array.from(document.getElementsByTagName("td"));
let emptyCells = ['n0', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8'];

function playGame() {
	for (let i = 0; i < cells.length; i+=2) {
	    humanMove();
	    computerMove();
	}	
}


//function humanMove() {
	for (let i = 0; i < cells.length; i++) {
	    //cells[i].innerText = "";
	    cells[i].addEventListener("click", function(event){
		    event.preventDefault();
		    if(this.innerText === "") {
		    	this.innerText = "0";
		    	deleteItem(this.getAttribute('id'));
		    }
		    else {
		    	this.innerText = "Fault"
		    }
		    let compMove = computerMove();
		    document.getElementById(emptyCells[compMove]).innerText = "X";
		}); 
	}
//}

function computerMove() {
	
	let move = Math.floor(Math.random(emptyCells.length)*emptyCells.length);
	//document.getElementById(emptyCells[move]).innerText = "X";
	deleteItem(emptyCells[move]);
	return move;
}

function deleteItem(item) {
	emptyCells.splice(emptyCells.indexOf(item), 1);
	console.log(emptyCells);
}

//playGame();