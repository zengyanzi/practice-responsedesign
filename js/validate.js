// Firefox, Google Chrome, Opera, Safari, Internet Explorer from version 9
function OnInput(event) {
	//alert ("The new content: " + event.target.value);
	let value = event.target.value;
	validatePassword(value);
}
// Internet Explorer
function OnPropChanged (event) {
	console.info(event)
		if (event.propertyName.toLowerCase () == "value") {
			let value = event.srcElement.value;
			validatePassword(value);
		}
} 	
function validatePassword(value){
	let reglower= new RegExp("(?=.*?[a-z])");
	let regupper= new RegExp("(?=.*?[A-Z])");
	let regnum= new RegExp("(?=.*?[0-9])");
	let regspe= new RegExp("(?=.*?[#?!@$%^&*-])");
	if (!regnum.test(value)){
        document.getElementById("number").style.color="#5e5e5e";
        document.getElementById("number").style.backgroundImage = "url(./img/dot.png)";		
	}else{
    	document.getElementById("number").style.color="#ccc";
    	document.getElementById("number").style.backgroundImage = "url(./img/greydot.png)";		
	}
	if (!regspe.test(value)){
        document.getElementById("special").style.color="#5e5e5e";
        document.getElementById("special").style.backgroundImage = "url(./img/dot.png)";		
	}else{
    	document.getElementById("special").style.color="#ccc";
    	document.getElementById("special").style.backgroundImage = "url(./img/greydot.png)";		
	}
	if (!regupper.test(value)){
        document.getElementById("uppercase").style.color="#5e5e5e";
        document.getElementById("uppercase").style.backgroundImage = "url(./img/dot.png)";		
	}else{
    	document.getElementById("uppercase").style.color="#ccc";
    	document.getElementById("uppercase").style.backgroundImage = "url(./img/greydot.png)";		
	}
	if (!reglower.test(value)){
        document.getElementById("lowercase").style.color="#5e5e5e";
        document.getElementById("lowercase").style.backgroundImage = "url(./img/dot.png)";		
	}else{
    	document.getElementById("lowercase").style.color="#ccc";
    	document.getElementById("lowercase").style.backgroundImage = "url(./img/greydot.png)";		
	}
    if(value.length<8){
        document.getElementById("minimum").style.color="#5e5e5e";
        document.getElementById("minimum").style.backgroundImage = "url(./img/dot.png)";
    }else {
    	document.getElementById("minimum").style.color="#ccc";
    	document.getElementById("minimum").style.backgroundImage = "url(./img/greydot.png)";
    }
}
function showpsw(){
	var s=document.getElementById("psdimg").src;
	var imagname=s.substring(s.lastIndexOf("/")+1);

	if (imagname == 'hide.png') {
        document.getElementById("psd").setAttribute('type', 'password');
        document.getElementById("psdimg").src = "./img/show.png";
    } else {
        document.getElementById("psd").setAttribute('type', 'text');
        document.getElementById("psdimg").src = "./img/hide.png";
    }
	
}