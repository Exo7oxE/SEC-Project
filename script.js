function informCat() {
	document.getElementById('no motion').hidden = true;
	document.getElementById('motion').hidden = false;
	setTimeout(() => {
		document.getElementById('no motion').hidden = false;
		document.getElementById('motion').hidden = true;
	}, 2000)
}
