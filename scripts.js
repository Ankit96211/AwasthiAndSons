$(document).ready(function(){

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
	var n=this.value;
	var tmp='';
	for (var i = 1; i <= n; i++) {
       tmp+= '<h5 class="font-italic text-blue m-2">Child '+i+'</h5><div  class="form-group row p-2 hh-row"><div class="col-2 col-sm-1 icon-col mb-2 mb-md-0"><i class="v-center fa fa-lg fa-user prefix grey-text "></i></div><div class="col-10 col-md-5 mb-2 mb-md-0"> <input placeholder="Enter Name" required="" type="text" name="child'+i+'-name" class="form-control validate"/></div><div class="w-100 d-md-none"></div><div class="col-2 col-sm-1 icon-col"><i class="v-center fa fa-lg fa-mercury prefix grey-text "></i></div><div class="col-10 col-md-5 "> <div class="radio-group v-center"><div class="radio p-1 mr-md-2" data-value="male"><img width="20" src="./assets/male.png">Male</div><div class="radio p-1 ml-md-2" data-value="female"><img width="20" src="./assets/female.png">Female</div><input type="hidden" name="child'+i+'-gender"> </div></div><div class="w-100 d-md-none"></div><div class="col-2 col-sm-1 icon-col"><i class="v-center fa fa-lg fa-birthday-cake prefix grey-text "></i></div><div class="col-10 col-md-5 "> <input class="form-control" type="date" value="2011-08-19" name="child'+i+'-dob"></div></div><hr class="w-100 bg-blue">'
	}
	$('#children').html(tmp);
});
$('.radio-group .radio').click(function(){
     $(this).parent().find('input').val($(this).attr("data-value"));
});
$('#general-submit').click(function(){

	var uname=$("input[name=uname]").val();
	var ugender=$("input[name=ugender]").val();
	var uphone=$("input[name=uphone]").val();
	var uemail=$("input[name=uemail]").val();
	var ucity=$("input[name=ucity]").val();
	alert(uname+ugender+uphone+uemail+ucity);
});
});