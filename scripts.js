$(document).ready(function(){
var familymembers=1;
$('#general-submit').click(function(){
	var uname=$("input[name=uname]").val();
	var ugender=$("input[name=ugender]").val();
	var uphone=$("input[name=uphone]").val();
	var uemail=$("input[name=uemail]").val();
	var ucity=$("input[name=ucity]").val();
	   var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       //alert(this.responseText);
      }
    };
    var url="generalinfosubmit.php?uname="+uname+"&uphone="+uphone+"&uemail="+uemail+"&ugender="+ugender+"&ucity="+ucity;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
	//alert();
});
$('#famiydetail-submit').click(function(){
     var selfname="";
     var partnername="";
     var fathername="";
     var mothername="";
     var child1name="";
     var child2name="";
     var child3name="";
   
     var selfdob="";
     var partnerdob="";
     var fatherdob="";
     var motherdob="";
     var child1dob="";
     var child2dob="";
     var child3dob="";
     
     var child1gender="";
     var child2gender="";
     var child3gender="";

     switch(familymembers){
     	case 1:
     	selfname=$("#me input[name=selfname]").val();
     	selfdob=$("#me input[name=selfdob]").val();
 
     	break;

     	case 2:
     	selfname=$("#v-pills-partner input[name=selfname]").val();
     	selfdob=$("#v-pills-partner input[name=selfdob]").val();
     	partnername=$("#v-pills-partner input[name=partnername]").val();
     	partnerdob=$("#v-pills-partner input[name=partnerdob]").val();
     	
     	break;

     	case 3:
        selfname=$("#v-pills-child input[name=selfname]").val();
     	selfdob=$("#v-pills-child input[name=selfdob]").val();
     	partnername=$("#v-pills-child input[name=partnername]").val();
     	partnerdob=$("#v-pills-child input[name=partnerdob]").val();
     	child1name=$("#v-pills-child input[name=child1-name]").val();
     	child1dob=$("#v-pills-child input[name=child1-dob]").val();
     	child1gender=$("#v-pills-child input[name=child1-gender]").val();
     	break;
     	case 4:
     	selfname=$("#v-pills-children input[name=selfname]").val();
     	selfdob=$("#v-pills-children input[name=selfdob]").val();
     	partnername=$("#v-pills-children input[name=partnername]").val();
     	partnerdob=$("#v-pills-children input[name=partnerdob]").val();
     	child1name=$("#v-pills-children input[name=child1-name]").val();
     	child1dob=$("#v-pills-children input[name=child1-dob]").val();
     	child1gender=$("#v-pills-children input[name=child1-gender]").val();
     	child2name=$("#v-pills-children input[name=child2-name]").val();
     	child2dob=$("#v-pills-children input[name=child2-dob]").val();
     	child2gender=$("#v-pills-children input[name=child2-gender]").val();
     	child3name=$("#v-pills-children input[name=child3-name]").val();
     	child3dob=$("#v-pills-children input[name=child3-dob]").val();
     	child3gender=$("#v-pills-children input[name=child3-gender]").val();
     	break;
     	case 5:
        fathername=$("#v-pills-parents input[name=fathername]").val();
     	fatherdob=$("#v-pills-parents input[name=fatherdob]").val();
     	mothername=$("#v-pills-parents input[name=mothername]").val();
     	motherdob=$("#v-pills-parents input[name=motherdob]").val();
     	break;
     	case 6:
     	selfname=$("#v-pills-others input[name=selfname]").val();
     	selfdob=$("#v-pills-others input[name=selfdob]").val();
     	othermembers=$("#v-pills-others input[name=othermember]").val();
     	break;
       }
        
	   var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       //alert(this.responseText);
      }
    };
    var url="familydetailssubmit.php?selfname="+selfname+"&selfdob="+selfdob+"&partnername="+partnername+"&partnerdob="+partnerdob+"&fathername="+fathername+"&fatherdob="+fatherdob+"&mothername="+mothername+"&motherdob="+motherdob+"&child1name="+child1name+"&child1dob="+child1dob+"&child1gender="+child1gender+"&child2name="+child2name+"&child2dob="+child2dob+"&child2gender="+child2gender+"&child3name="+child3name+"&child3dob="+child3dob+"&child3gender="+child3gender;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
	//alert();
});
$('#message-submit').click(function(){
	var message=$("textarea[name=message]").val();
	   var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      if(this.responseText=="1")
      {
      	$('.form-success').removeClass('d-none');
      }
      }
    };
    var url="messagesubmit.php?message="+message;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
	//alert();
});
var current_fs, next_fs, previous_fs; //fieldsets
var opacity;

$(".next").click(function(){

current_fs = $(this).parent();
next_fs = $(this).parent().next();

//Add Class Active
$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

//show the next fieldset
next_fs.show();
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
next_fs.css({'opacity': opacity});
},
duration: 600
});
});

$(".previous").click(function(){

current_fs = $(this).parent();
previous_fs = $(this).parent().prev();

//Remove class active
$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

//show the previous fieldset
previous_fs.show();

//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
previous_fs.css({'opacity': opacity});
},
duration: 600
});
});

$('.radio-group .radio').click(function(){
$(this).parent().find('.radio').removeClass('selected');
$(this).addClass('selected');
});

$(".submit").click(function(){
return false;
})

$('#noofchildren').change(function(){
	var n=Number(this.value);
	alert(n);

	switch(n)
	{
		case 1:
		$('.child1').removeClass('d-none');
		break;
		case 2:
		$('.child1').removeClass('d-none');
		$('.child2').removeClass('d-none');
		break;
		case 3:
		$('.child1').removeClass('d-none');
		$('.child2').removeClass('d-none');
		$('.child3').removeClass('d-none');
		break;
	}
	
});
$('.radio').click(function(){
     $(this).parent().find('input').val($(this).attr("data-value"));
});
$('.family-members div a').click(function(){
      familymembers=Number($(this).attr("data-value"));
});
});