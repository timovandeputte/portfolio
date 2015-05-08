var main = function () {
 "use strict";
 $('a').on("click", function(){ 
 $("li").removeClass('selected');
 $(this).closest('li').addClass("selected");
 $(".textabout,.textgraphicdesign,.textask,.textillustration,.textcinema4D").addClass('verborgen');
 $("." + $(this).data('par')).removeClass('verborgen');
 
     
 };
  


    var index = 0;
    var image = document.getElementById("fotoke");
    var img_array = ["img/cveen.jpg", "img/cvtwee.jpg", "img/cvdrie.jpg"];

    function slide() {
        image.src = img_array[index++ % img_array.length];
    }
    setInterval(slide, 5000);
    
    
    };
    
    var index = 0;
    var image = document.getElementById("fotokes");
    var img_array = ["img/illueen.jpg", "img/illutwee.jpg", "img/illudrie.jpg","img/illuvier.jpg","img/illuvijf.jpg"];

    function slide() {
        image.src = img_array[index++ % img_array.length];
    }
    setInterval(slide, 5000);
    
   
    (end);
    
     var index = 0;
    var image = document.getElementById("fotos");
    var img_array = ["img/grafeen.jpg", "img/graftwee.jpg", "img/grafdrie.jpg","img/grafvier.jpg","img/grafvijf.jpg"];

    function slide() {
        image.src = img_array[index++ % img_array.length];
    }
    setInterval(slide, 5000);
    
   
    (end);
    
    

$("document").ready(main);