const cells = Array.from(document.getElementsByTagName("td"));
let emptyCells = ['n0', 'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8'];
let cellNumber = -1;


for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
    cells[i].addEventListener("click", function(event){
	    event.preventDefault();
	    if(this.innerText === "") {
	    	this.innerText = "0";
	    	deleteItem(this.getAttribute('id'));
	    	//cellNumber = this.getAttribute('id'); 
	    }
	    else {
	    	this.innerText = "Fault"
	    }
	}); 
}

function computerMove() {

}

function deleteItem(item) {
	//console.log()
	emptyCells.splice(emptyCells.indexOf(item), 1);
	console.log(emptyCells);
	//delete emptyCells[item];
	//emptyCells = emptyCells.filter(function(n){ return n != undefined });
}