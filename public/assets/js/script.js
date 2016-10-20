var config = {
	apiKey: "AIzaSyD5fjRuASD9ZrjZgX315vnDga0pb5DJZ_s",
	authDomain: "hasrata-724e7.firebaseapp.com",
	databaseURL: "https://hasrata-724e7.firebaseio.com",
	storageBucket: "hasrata-724e7.appspot.com",
	messagingSenderId: "473676323598"
};
firebase.initializeApp(config);
var storageRef = firebase.storage().ref();
var debug;

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

		if(newStep > 0)
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

	$('.years').append(getYearsOptions())

	var citizenships = ["אוקראינית","איטלקית","אנגלית","אפריקנס","בולגרית","גרמנית","הונגרית","הינדי","יידיש","נורווגית","סינית","סלובקית","ספרדית","עברית","ערבית","פולנית","פורטוגזית","צרפתית","רומנית","רוסית","אמהרית","ארמנית","גאורגית","דנית","הולנדית","יוונית","יפנית","לאדינו","לטבית","לטינית","ליטאית","מנדרינית","סרבית","פלמית","פרסית","צ'כית","קרואטית","שוודית"];
	for(i = 1; i <= citizenships.length; i++) {
		$('.citizenships').append('<option value="' + i + '">' + citizenships[i-1] + '</option>');
	}
	
    $("input[type='checkbox']").change(function() {
		if(this.checked) {
			$("." + $(this).attr('id')).removeAttr("disabled");
		}
		else {
			$("." + $(this).attr('id')).attr("disabled", "");
		}
    })

	$("#file-upload2").change(function(e) {
		var files = this.files;
		for (var i = 0; i < files.length; i++) {
			element = '<tr class="portfolioFile">' +
			    		'<td class="remove"><img class="plusRemoveIcon remove" onclick="AddRow()" src="assets/img/remove.png"></td>' +
			    		'<td>'+files[i].name+'</td>' +
					    '<td>' +
					        '<select>' +
					            '<option>צילום וידאו</option>' +
					            '<option>צילום סטילס</option>' +
					            '<option>תסריט ותחקיר</option>' +
					            '<option>הפקה - תיק הפקה</option>' +
					            '<option>הפקה - קובץ וידאו</option>' +
					            '<option>עריכת וידאו</option>' +
					            '<option>גרפיקה</option>' +
					            '<option>אנימציה</option>' +
					        '</select>' +
					    '</td>' +
					    '<td><input /></td>' +
					    '<td><input /></td>' +
					'</tr>'
			$(".files_form3").append(element)
		}
	});

	$(document).on('click', '.files_form3 .remove', function() {
		$(this).closest('tr:not(.th)').remove()
	})

	var limit = 2;
	$('input[name="2units"]').on('change', function(evt) {
	   if($(this).siblings(':checked').length >= limit) {
	       this.checked = false;
	   }
	});

	$(document).on('click', '.addRemovePlugin .disabled .add', function() {
		$(this).closest(".addRemovePlugin").append($(this).closest('.disabled').clone().addClass('new'))
		$(this).closest('.addRemovePlugin').find('.disabled:not(.new)').removeClass('disabled').find(".plusRemoveIcon").addClass('remove').removeClass('add').attr('src', 'assets/img/remove.png')		
		$(this).closest('.addRemovePlugin').find('.new').removeClass('new')
	})

	$(document).on('click', '.addRemovePlugin .remove', function() {
		$(this).closest("tr").remove()
	})
})

function getFileContent(input) {
	var file = input[0].files[0];
	storageRef.child('files/'+file.name).put(file).then(function(snapshot) {
		console.log('Uploaded a blob or file!');
	});
}

function getYearsOptions() {
	var year = new Date().getFullYear();
	output = ''
	for(i = year; i >= year - 30; i--) {
		output += '<option value="' + i + '">' + i + '</option>';
	}
	return output
}