$(document).ready(function() {
	$("input[type=radio]").change(function(){
    if($('#creditCard').is(':checked')) {
    	$('#creditCardForm').css("display", "block");
    	$('#payPalForm').css("display", "none");
    }
    else{
    	$('#payPalForm').css("display", "block");
    	$('#creditCardForm').css("display", "none");
    }
  });
});