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

	for(i = 1; i <= 31; i++) {
		$('.days').append('<option value="' + i + '">' + i + '</option>');
	}

	var months = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובור", "נובמבר", "דצמבר"];
	for(i = 1; i <= 12; i++) {
		$('.months').append('<option value="' + i + '">' + months[i-1] + '</option>');
	}

	var year = new Date().getFullYear();
	for(i = year; i >= year - 30; i--) {
		$('.years').append('<option value="' + i + '">' + i + '</option>');
	}

	var citizenships = ["אוקראינית","איטלקית","אנגלית","אפריקנס","בולגרית","גרמנית","הונגרית","הינדי","יידיש","נורווגית","סינית","סלובקית","ספרדית","עברית","ערבית","פולנית","פורטוגזית","צרפתית","רומנית","רוסית","אמהרית","ארמנית","גאורגית","דנית","הולנדית","יוונית","יפנית","לאדינו","לטבית","לטינית","ליטאית","מנדרינית","סרבית","פלמית","פרסית","צ'כית","קרואטית","שוודית"];
	for(i = 1; i <= citizenships.length; i++) {
		$('.citizenships').append('<option value="' + i + '">' + citizenships[i-1] + '</option>');
	}
})