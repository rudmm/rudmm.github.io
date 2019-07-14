var action = 'click';
var speed = "500";


$(document).ready(function(){
    $(document).ready(function(){
        $('[data-toggle="popover"]').popover(); 
    });
// Question handler
  $('.question').on(action, function(){
    $(this).siblings('.answer').slideToggle( "slow", function() {
        // Animation complete.
      });
    
    if($(this).children('.plus').css('display')!='none'){
        $(this).children('.plus').css({
            'display':'none'
        });
        $(this).children('.minus').css({
            'display':'table-cell'
        }
        );
    }else if($(this).children('.minus').css('display')!='none'){
        $(this).children('.minus').css({
            'display':'none'
        });        
        $(this).children('.plus').css({
            'display':'table-cell'
        });

        }


  });
  var modal = document.getElementById('myModal');
  var btn = document.getElementById("filter");
  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function() {
      modal.style.display = "block";
  }
  span.onclick = function() {
      modal.style.display = "none";
  }
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});
