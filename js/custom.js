$(document).ready(function() {
    if ($(window).innerWidth() < 768)
	{
		$('.index-header .header-background').css('background', 'url("img/header_short.jpg")');
        addBackgroundStyle();
        setShortHeader();		
	}

    if($(window).scrollTop() > 375 && !$('.navbar-toggle').is(":visible")){
        $('nav.index-bar.navbar-default').addClass('dark-nav');
    }else{
        $('nav.index-bar.navbar-default').removeClass('dark-nav');
    }

    if ($('.navbar-toggle').is(":visible"))
    {
        $('nav.navbar-default').removeClass('dark-nav');        
    }

    if (!$('header').is(":visible"))
    {
        $('nav.index-bar.navbar-default').addClass('dark-nav');
    }
});

// Nav Sticky

$(window).scroll(function(){
    if($(window).scrollTop() > 375 && !$('.navbar-toggle').is(":visible")){
        $('nav.index-bar.navbar-default').addClass('dark-nav');
    }else{
        $('nav.index-bar.navbar-default').removeClass('dark-nav');
    }

    if ($('.navbar-toggle').is(":visible"))
    {
        $('nav.navbar-default').removeClass('dark-nav');        
    }

    if (!$('header').is(":visible"))
    {
        $('nav.index-bar.navbar-default').addClass('dark-nav');
    }
});

var oldWidth = $(window).innerWidth;

$(window).resize(function() {

    if ($('.navbar-toggle').is(":visible"))
    {
        $('nav.navbar-default').removeClass('dark-nav');        
    }

	if (this.innerWidth < 768 && oldWidth >= 740)
	{
		$('.index-header .header-background').css('background', 'url("img/header_short.jpg")');
	}
	else if (this.innerWidth >= 768 && oldWidth < 790)
	{
        $('.background-image-holder.parallax-background:not(.cities)').css('height', '110%');  
        $('.background-image-holder.parallax-background:not(.cities)').css('width', '100%');  
        $('.background-image-holder.parallax-background:not(.cities)').css('left', '0%');
		$('.index-header .header-background').css('background', 'url("img/header.jpg")');
        
	}

    if (this.innerWidth < 768)
    {
        setShortHeader();
    }

    addBackgroundStyle();
    
	oldWidth = this.innerWidth;
});

function setShortHeader() {
    var currentWidth = Math.max(window.innerWidth, 275);
    var height = gradientCalc(currentWidth, 'height');
    var width = gradientCalc(currentWidth, 'width');
    var left = gradientCalc(currentWidth, 'left');
    $('.background-image-holder.parallax-background:not(.cities)').css('height', height + '%');  
    $('.background-image-holder.parallax-background:not(.cities)').css('width', width + '%');  
    $('.background-image-holder.parallax-background:not(.cities)').css('left', left + '%');
}

function addBackgroundStyle() {
    $('.header-background').css('background-position', 'top center');
    $('.header-background').css('background-repeat', 'no-repeat');
}

function gradientCalc(currentWidth, prop) {
    var multi;
    var start;

    switch (prop) {
    case "height":
        multi = 60;
        start = 110;
        break;
    case "width":
        multi = -50;
        start = 150;
        break;
    case "left":
        multi = 20;
        start = -20;
        break;
    }

    return (((currentWidth - 275) / 492) * multi) + start;
}