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
  
/* whatsapp chat */
document.getElementById('chat').style.display= "none";
window.onload = function(){
  document.getElementById('chat').style.display= "none";
document.getElementById('whatsapp').addEventListener("click",function(){
  document.getElementById('chat').style.display ="block";
});

document.getElementById('close').addEventListener("click",function(){
  document.getElementById('chat').style.display="none";
});


document.getElementById('send').addEventListener("click",function(){
  var msg = document.getElementById('msg').value;
  window.location="https://api.whatsapp.com/send/?phone=918857058202&text="+msg;
});
}
