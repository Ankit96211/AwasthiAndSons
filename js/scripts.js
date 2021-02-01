$(document).ready(function(){
$.getJSON('https://my.mlh.io/api/v3/users?client_id=rAUPJGA7JmxSu4Svf90q-BGV7v5N5SEaoesw83kdeno&secret=_CGRHoYzG4pw3lYgqs0JWOfGLomTOvY00z5V12ZPJTQ', function(data) {
        var users=data["data"];
        var text = `Date: ${data.status}<br>`
        
        $.each( users, function(key) {
        	
    $("#users").append("<div class='card user my-2'><div class='card-header '><h4 class='m-0 text-capitalize'>"+users[key].first_name +" "+ users[key].last_name+" <small>#"+users[key].id+"</small></h4></div><div class='card-body'><div class='row'><div class='col-6'><b>Email : </b><a href='mailto:"+users[key].email+"'>"+users[key].email+"</a></div><div class='col-6'><b>Phone : </b><a href='tel:"+users[key].phone_number+"'>"+users[key].phone_number+"</a></div></div><div class='row'><div class='col-6'><b>DOB : </b>"+users[key].date_of_birth+"</div><div class='col-6'><b>Gender : </b>"+users[key].gender+"</div></div><div class='row'><div class='col-12'><b>College/University : </b>"+users[key].school.name+"</div></div></div><div class='card-footer text-muted'>registered at "+users[key].created_at+"</div></div>");
    
   });
        
            });

});

