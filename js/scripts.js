$(document).ready(function(){
	$('.brand-col').click(function () {
		$('#selectbrandmodal').modal("hide");
		$('#selectcarmodal').modal("show");
        var brand = $(this).attr('setval') ;
        $('.car-brand').text(brand);
    });
    $('.model-col').click(function () {
		$('#selectcarmodal').modal("hide");
        var model = $(this).attr('setval') ;
        $('.car-model').text(model);
    })
    $('#selectmodalback').click(function(){
    	$('#selectbrandmodal').modal("show");
		$('#selectcarmodal').modal("hide");

    });
});
  for (var i = 0; i<52; i++){
    $('#brand-row').append('<div class="col-4 col-sm-3 brand-col  p-2" setval="Audi" ><div class="brands border rounded text-center"><img class=" p-2 img-fluid" src="assets/brands/Audi.png"><h6>Audi</h6></div></div>');
  }

  for (var i = 0; i<50; i++){
    $('#car-row').append('<div class="col-4 col-sm-3 model-col  p-2" setval=" Audi Q3" ><div class="models border rounded text-center"><img class=" p-2 img-fluid" src="assets/model/Audi_12.png"><h6>Audi</h6></div></div>');
  }
