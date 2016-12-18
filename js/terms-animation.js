function updateHeaders() {
   $(".terms-section").each(function() {
   
       var el             = $(this),
           offset         = el.offset(),
           scrollTop      = $(window).scrollTop(),
           fixedTitle     = $(".fixed-title", this),
           headerTitle     = $(".main-title", this)
       
       if (scrollTop > offset.top  &&  scrollTop < (offset.top + (el.height() * .8))) {
          fixedTitle.css({'opacity' : 1});
          headerTitle.css({'opacity' : 0});

       }else{
          fixedTitle.css({'opacity' : 0});
          headerTitle.css({'opacity' : 1});
       }
   });
}

// DOM Ready      
$(function() {
   $(window).scroll(updateHeaders).trigger("scroll");
});