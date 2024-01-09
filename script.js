let money = 0;
let mps = 0;

function informCat() {
	document.getElementById('no motion').hidden = true;
	document.getElementById('motion').hidden = false;
	mps = 1;
}

function update() {
	money = money + mps;
	mps = mps + mps;
	document.getElementById('money').textContent = money;
	document.getElementById('mps').textContent = mps;
}

setInterval(update, 1);
