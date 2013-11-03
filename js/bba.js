/*function fadeItem() {
	$('nav li:hidden:first').delay(500).fadeIn(fadeItem);
}
function testwidth() {
	var deviceWidth = document.documentElement.clientWidth;
	if (deviceWidth >= 480) {
		//$('nav li').hide();
		$('h1').hover(function () {
			fadeItem();
		});
	}
}*/
$(document).ready(function () {
    'use strict';
    var navSections = $('nav > section').length;
    //alert(navSections);

    function setOpeningPanels() {
        var openPanel = $('nav section:first-child');
        $(openPanel).addClass('opened');
        $(openPanel).siblings().addClass('closed');
    }
    function removeOpeningPanels() {
        var panel = ('nav > section');
        $(panel).removeClass();
    }
    //setOpeningPanels();
     $('nav > section').mouseover(function(){
        //removeOpeningPanels();
    });

});