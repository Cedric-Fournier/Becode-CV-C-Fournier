var posiPrec = 0;
$('body').scroll(function(){
	var a = $('body').scrollTop();
	
	if(a<posiPrec){
		// on monte
		console.log('monte');
	}else if(a>posiPrec){
		// on descend
		console.log('descend');				
	}
	posiPrec = a;
});