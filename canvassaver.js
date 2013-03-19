function CanvasSaver(url) {
	
	this.url = url;
	
	this.savePNG = function(cnvs, fname) {
		if(!cnvs || !url) return;
		fname = fname || 'picture';
		
		var data = cnvs.toDataURL("image/png");
		data = data.substr(data.indexOf(',') + 1).toString();
		
		var dataInput = document.createElement("input") ;
		dataInput.setAttribute("name", "imgdata") ;
		dataInput.setAttribute("value", data);
		dataInput.setAttribute("type", "hidden");
		
		var nameInput = document.createElement("input") ;
		nameInput.setAttribute("name", 'name') ;
		nameInput.setAttribute("value", fname + '.png');
		
		var myForm = document.createElement("form");
		myForm.method = 'post';
		myForm.action = url;
		myForm.appendChild(dataInput);
		myForm.appendChild(nameInput);
		
		document.body.appendChild(myForm) ;
		myForm.submit() ;
		document.body.removeChild(myForm) ;
	};
	
	this.generateButton = function (label, cnvs, fname) {
		var btn = document.createElement('button'), scope = this;
		btn.innerHTML = label;
		btn.style['class'] = 'canvassaver';
		btn.addEventListener('click', function(){scope.savePNG(cnvs, fname);}, false);
		
		return btn;
	};
}