console.log('Loaded!');


var element = document.getElementById('main-text');

element.innerHTML = "New Value";


var img =  document.getElementById('img1');

var marginLeft = 0;

function moveRight(){
	marginLeft= marginLeft +5;
	img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
	var interval = setInterval(moveRight,50);
};

