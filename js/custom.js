jQuery(document).ready(function() {
	
	"use strict";
	// Your custom js code goes here.

});

function readMoreFunction(dotsSpanName, moreSpanName, moreButtonName ) {
	var dots = document.getElementById(dotsSpanName);
	var moreText = document.getElementById(moreSpanName);
	var btnText = document.getElementById(moreButtonName);
  
	if (dots.style.display === "none") {
	  dots.style.display = "inline";
	  btnText.innerHTML = "Lire plus";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Lire moins";
	  moreText.style.display = "inline";
	}
  } 