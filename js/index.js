/* contact form*/
$("form").submit(function(){
    var post = $('form').serialize();
    $('#submit').addClass('disabled');
  
    $.post('php/send.php', post, function(data){
  
    $("#success_msg").text(data);
    
  
  setTimeout(function() {
        $("#success_msg").fadeOut().empty();
        }, 3000);
  
        $('#submit').removeClass('disabled');
        $('form').trigger("reset");
        if(data.match('success') != null)
        {
            $("#error_msg").text(data);   
            setTimeout(function() {
            $("#success_msg").fadeOut().empty();
            }, 3000);
        }
    });
  return false;
  });
  