$(document).ready(function() {
	$(".buttons .button").click(function() {
		id = $(this).attr("id")
		currentStep = Number($(".content .step:visible").attr("class").replace("step step", ""))
		if(id == 'continue')
			newStep = currentStep+1
		else
			newStep = currentStep-1
		
		$(".content .step").hide()
		$(".content .step"+newStep).show()


		for(i=1; i<=10; i++) {
			$(".line").removeClass("colored")
		}
		if(newStep >= 1) {
			for(i=1; i<=newStep; i++) {
				$(".line"+i).addClass("colored")
			}
		}

		if(newStep > 1)
			$(".buttons .back").show()
		else
			$(".buttons .back").hide()
		if(newStep < 10)
			$(".buttons .continue").show()
		else
			$(".buttons .continue").hide()
	})
})