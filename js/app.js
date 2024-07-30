$(document).foundation()
$('#e1').hide();
$('#e2').hide();
$('#e3').hide();
$('#e4').hide();
$('#f1').hide();
$('#f2').hide();
$('#f3').hide();
$('#f4').hide();
$('#g1').hide();
$('#g2').hide();
$('#g3').hide();
$('#g4').hide();
$('#pokazi2').hide();
$('#pokazi3').hide();


$('#pokazi').click(function(){
    $('#pokazi').hide();
    $('#pokazi2').show();
    $('#e1').show();
    $('#e2').show();
    $('#e3').show();
    $('#e4').show();
    return false;
});

$('#pokazi2').click(function(){
    $('#pokazi2').hide();
    $('#pokazi3').show();
    $('#f1').show();
    $('#f2').show();
    $('#f3').show();
    $('#f4').show();
    return false;
});

$('#pokazi3').click(function(){
    $('#pokazi3').hide();
    $('#g1').show();
    $('#g2').show();
    $('#g3').show();
    $('#g4').show();
    return false;
});