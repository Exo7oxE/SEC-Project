function informCat() {
	document.getElementById('no motion').hidden = true;
	document.getElementById('motion').hidden = false;
	alert('whole lotta motion');
	setTimeout(() => {
		document.getElementById('no motion').hidden = false;
		document.getElementById('motion').hidden = true;
	}, 2000)
}
