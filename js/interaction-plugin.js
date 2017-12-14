(function(){ //IIFE START
	// jQuery for btns like start, submit, help and replan
	// mostly hide and show function
	$(document).ready(function(){
		$("#enterButton").click(function(){
			event.preventDefault();
			$("#titlePageContent").hide();

			// Textillate Plugin
			$(".tlt").textillate({
				in: {effect: 'flash', shuffle:true, delay: 100}
			});
		});
		
		$("#helpButton").click(function(){
			event.preventDefault();
			$("#aboutUsWrapper").show();
		});

		$("#helpButtonTwo").click(function(){
			event.preventDefault();
			$("#aboutUsWrapper").show();
		});

		$("#closeButton").click(function(){
			event.preventDefault();
			$("#aboutUsWrapper").hide();
		});

		$("#errorModalCloseButton").click(function(){
			event.preventDefault();
			$("#errorModal").hide();
		});

		$(".available-vehicle").click(function(){
			event.preventDefault();
			$("#formOverviewWrapper").show();
		});

		$("#overviewCloseButton").click(function(){
			event.preventDefault();
			$("#formOverviewWrapper").hide();
		});

		$("#restartButton").click(function() {
		    location.reload();
		});
	});

})(); //IIFE FINISH