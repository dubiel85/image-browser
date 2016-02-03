(function(){
    var overlay = $("<div id='overlay'>");
    var image = $("<img>");
    
    $("#imageGallery a").click(function(event){
        event.preventDefault();
        $("body").append(overlay);
        var href = $(this).attr("href");
        image.attr("src", href);
        overlay.append(image);
        overlay.show();        
    });
    
    overlay.click(function(){
       $(this).hide(); 
    });
})(this);