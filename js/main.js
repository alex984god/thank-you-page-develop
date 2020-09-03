$(document).ready(function() {

$('.search').click(function(){
		$('.overlay').toggleClass('open');//open serach menu
});
$('.closing').click(function(){
		$('.overlay').removeClass('open');//close search menu
});
$.getJSON('https://test-api.acc.tcc.rocks/api/content', function(data) {
		var box_content = data;	
		$('.box-wrapper>div').each(function(index){
				$(this).children().addClass('box_'+index);// adding individual class for each box icluding index number in the class
			});
		$('.box-wrapper>div').each(function(index){
				$(this).find('div.box-content>p').text(box_content[index]);//adding content  in each box based on the index of the recived data from the api;
			});
			
	}); 


});

