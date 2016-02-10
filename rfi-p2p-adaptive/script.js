// JavaScript Document

$(function(){
	$('.transferAmmount-helpIcon').hover(function(){
		$('.transferAmmount-helpText').show();
	},function(){
		$('.transferAmmount-helpText').hide();
	});
	
	// add shadow
	$('#proceedBox input').longShadow({
		colorShadow: '#e8e2e2',
		sizeShadow: 100,
		directionShadow: 'bottom-right'
	});
    $('#proceedBox button').longShadow({
        colorShadow: '#e8e2e2',
        sizeShadow: 100,
        directionShadow: 'bottom-right'
    });
	
	// add top & bottom frame
	$('body').append('<div id="topFrame"></div><div id="bottomFrame"></div>');
	
	// card number mask
	//$('#PayTransferForm_card, #PayTransferForm_payment_to').mask('0000 0000 0000 0000');
    $('#PayTransferForm_card, #PayTransferForm_payment_to:visible, #PayTransferForm_payment_to_stub').mask('0000 ' + '0000 ' + '0000 ' + '0000 ' + '000'); // Will not be filtered by Web Application Firewall (WAF)
});

function form_update_bank_class(el)
{
    var val = $(el).val().trim();
    var bank_first = val.substr(0, 1);
    var bank_two = val.substr(0, 2);

    $(el).removeClass("visa master");
    if (bank_first == "4") {
        $(el).addClass("visa");
    } else if (bank_first == "5") {
        $(el).addClass("master");
    }
}
