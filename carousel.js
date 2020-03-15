var shift_times = Math.ceil(winnerData.length / 7);
var shift_count = 0;

$(document).ready(function(){
  // $("#profile-details-section").hide();
  populate_profile_cards(); 
  populate_profile_details(0);
  $($(".card")[0]).addClass('selected');

});

function populate_profile_details(id){

  var row = winnerData[id];
  var card = '<div class="card-holder" style="display: contents;">'
  + '<div class="card-expanded left">'
  + '<img src="' + row['pic'] + '" alt="' + row['name'] + '" >'
  + '<h2 id="winner_name">' + row['name'] + '</h2>'
  + '<h3 id="winner_field">' + row['dept'] + '</h3>'
  + '</div>'
  +  '</div>'
  +  '<div class="card-holder" style="display: contents;">'
  +      '<div class="card-expanded right">'
  +        '<div id="award_details">'
  +          '<img id="sbu-logo" src="sbu-logo.png" style="max-width: 22em;margin-bottom: 3em;"></img>'
  +          "<h3>" + row['award'] + "</h3><br/>"
  +          '<h3 id="diss_title"><b>Dissertation Title:</b>  ' + row['title'] + '</h3><br/>'
  +          '<p>' + row['bio'] + '</p>'
  +      '</div>'
  +      '</div>'
  +  '</div>';

  $("#profile-details-section").html(card).show('slow');
        
}

function populate_profile_cards(){
  
  var card = '';
  for(var i = 0; i < winnerData.length; i++){
    var row = winnerData[i];
    card += '<div class="card-holder">'
              + '<div class="card" id="' + i + '">'
              + '<img src="' + row['pic'] + '" alt="' + row['name'] + '">'
              // + '<p>' + row['name'] + '</p>' 
              + '</div>'
              + '</div>';
  }
  $("#lower_cards").html(card);

  $('.card').on("click", function() {

    $(".card").removeClass("selected");
  
    $(this).addClass("selected");
    populate_profile_details($(this).attr("id"));
  
    // $("#profile-details-section").fadeIn();  
  
  })

  
}

$(".dot").on("click",function(){

        var position = $('.card').position();
        var shift_dist = $($('.card')[1]).position().left - $($('.card')[0]).position().left;

        var id = $(this).attr("id");

        if(id == "right"){

          if(shift_count < shift_times - 1){  
            shift_count = shift_count + 1;
            var left = - Math.abs(shift_count) * 7 * shift_dist + 'px';
            $('.card').css({'transform' : 'translate(' + left +')'});

          } 

        } else  if(id == "left"){

          if(shift_count > 0){
            shift_count = shift_count -  1;
            var right = -(Math.abs(shift_count) * 7 * shift_dist) + 'px';
            $('.card').css({'transform' : 'translate(' +  right +')'});

          }

        }

});

