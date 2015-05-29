var main = function () {
 "use strict";
 $('a').on("click", function(){ 
        $("li").removeClass('selected');
        $(this).closest('li').addClass("selected");
        $(".textabout,.textgraphicdesign,.textask,.textillustration,.textcinema4D").addClass('verborgen');
        $("." + $(this).data('par')).removeClass('verborgen');
 });
  
     var index1 = 0;
    var image1 = document.getElementById("fotoke");
    var img_array1 = ["img/cveen.jpg","img/cvtwee.jpg","img/cvdrie.jpg"];

    function slide1() {
        image1.src = img_array1[index1++ % img_array1.length];
    }
    //setInterval(slide1, 5000);
    
    
    
    
     var index = 0;
    var image2 = document.getElementById("fotokes");
    var img_array2 = ["img/illueen.jpg", "img/illutwee.jpg", "img/illudrie.jpg","img/illuvier.jpg","img/illuvijf.jpg"];

    function slide2() {
        image2.src = img_array2[index++ % img_array2.length];
    }
    //setInterval(slide2, 5000);
    
   
    
    
     var index = 0;
    var image3 = document.getElementById("fotos");
    var img_array3 = ["img/grafeen.jpg", "img/graftwee.jpg", "img/grafdrie.jpg","img/grafvier.jpg","img/grafvijf.jpg"];

    function slide3() {
        image3.src = img_array3[index++ % img_array3.length];
    }
    //setInterval(slide3, 5000);
    
    setInterval(function(){
        slide3();
        slide1();
        slide2();
    }, 5000);
    
   
};
    
    

$("document").ready(main);