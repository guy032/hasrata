var config = {
	apiKey: "AIzaSyD5fjRuASD9ZrjZgX315vnDga0pb5DJZ_s",
	authDomain: "hasrata-724e7.firebaseapp.com",
	databaseURL: "https://hasrata-724e7.firebaseio.com",
	storageBucket: "hasrata-724e7.appspot.com",
	messagingSenderId: "473676323598"
};
firebase.initializeApp(config);
var storageRef = firebase.storage().ref();
var db = firebase.database();

var debug;
var uid = guid()

$(document).ready(function() {
	$(".buttons .button").click(function() {
		id = $(this).attr("id")
		currentStep = Number($(".content .step:visible").attr("class").replace("step step", ""))
		if(id == 'continue')
			x = currentStep+1
		else
			x = currentStep-1

		changeStep(x)
	})

	$(document).on('click', '.colored', function() {
		number = Number($(this).find(".img").attr('class').replace('img icon', ''))
		changeStep(number)
	})

	for(i = 1; i <= 31; i++) {
		$('.days').append('<option value="' + i + '">' + i + '</option>');
	}

	var months = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובור", "נובמבר", "דצמבר"];
	for(i = 1; i <= 12; i++) {
		$('.months').append('<option value="' + i + '">' + months[i-1] + '</option>');
	}

	$('.years').append(getYearsOptions())
	$('.languages').append(getLanguagesOptions())

	$('.languages.english').val('אנגלית')
	$('.languages.hebrew').val('עברית')

	var citizenships = ["אוקראינית","איטלקית","אנגלית","אפריקנס","בולגרית","גרמנית","הונגרית","הינדי","יידיש","נורווגית","סינית","סלובקית","ספרדית","עברית","ערבית","פולנית","פורטוגזית","צרפתית","רומנית","רוסית","אמהרית","ארמנית","גאורגית","דנית","הולנדית","יוונית","יפנית","לאדינו","לטבית","לטינית","ליטאית","מנדרינית","סרבית","פלמית","פרסית","צ'כית","קרואטית","שוודית"];
	for(i = 1; i <= citizenships.length; i++) {
		$('.citizenships').append('<option value="' + citizenships[i-1] + '">' + citizenships[i-1] + '</option>');
	}

    $("input[type='checkbox']").change(function() {
		if(this.checked) {
			$("." + $(this).attr('id')).removeAttr("disabled");
		}
		else {
			$("." + $(this).attr('id')).attr("disabled", "");
		}
    })

	$("#userImg").change(function(e) {
		var file = $(this)[0].files[0]
		if(file !== undefined)
			$("#imgName").text(file.name)
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
		newTr = $(this).closest('.addRemovePlugin').find('.new').removeClass('new')
		name = newTr.find('input').attr('name')
		if(name !== undefined)
			newTr.find('input').attr('name', name.split('_')[0] + (Number(name.split('_')[1]) + 1))

	})

	$(document).on('click', '.addRemovePlugin .remove', function() {
		$(this).closest("tr").remove()
	})

	$("input[type='range']:not(.five)").ionRangeSlider({
        type: "single",
        grid: true,
        min: 1,
        max: 10,
        step: 1,
		values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    })
    $("input[type='range'].five").ionRangeSlider({
        type: "single",
        grid: true,
        min: 1,
        max: 5,
        step: 1,
		values: [1, 2, 3, 4, 5]
    })
})

function getYearsOptions() {
	var year = new Date().getFullYear();
	output = ''
	for(i = year; i >= year - 30; i--) {
		output += '<option value="' + i + '">' + i + '</option>';
	}
	return output
}

function getLanguagesOptions() {
	var year = new Date().getFullYear(),
		output = '',
		languages = ["אוקראינית","איטלקית","אנגלית","אפריקנס","בולגרית","גרמנית","הונגרית","הינדי","יידיש","נורווגית","סינית","סלובקית","ספרדית","עברית","ערבית","פולנית","פורטוגזית","צרפתית","רומנית","רוסית","אמהרית","ארמנית","גאורגית","דנית","הולנדית","יוונית","יפנית","לאדינו","לטבית","לטינית","ליטאית","מנדרינית","סרבית","פלמית","פרסית","צ'כית","קרואטית","שוודית"]

	for(i=0; i<languages.length; i++) {
		output += '<option value="'+languages[i]+'">' + languages[i] + '</option>';
	}
	return output
}

function changeStep(x) {
	for(i=1; i<=10; i++) {
		$(".line").removeClass("colored")
	}
	if(x >= 1) {
		for(i=1; i<=x; i++) {
			$(".line"+i).addClass("colored")
		}
	}

	if(x > 0 && x < 10)
		$(".buttons .back").show()
	else
		$(".buttons .back").hide()
	if(x < 9)
		$(".buttons .continue").show()
	else
		$(".buttons .continue").hide()

	$(".content .step").hide()
	$(".content .step"+x).show()

	if(x == 9)
		uploadFiles()
}

function uploadFiles() {
	var inputs = $("input[type='file']")
	var files = []
	$.each(inputs, function(index, input) {
		$.each(input.files, function(index, file) {
			files.push(file)
		})
	})

	$(".filesUpload").empty()
	var total = files.length
	var count = 0
	$.each(files, function(index, file) {
		var uploadTask = storageRef.child('files/'+uid+'/'+file.name).put(file)

		newTr = '<tr>' +
                    '<td>'+file.name+'</td>' +
                    '<td><div class="percent"></div><progress id="'+file.name+'" value="0" max="100"></progress></td>' +
                '</tr>'

		$(".filesUpload").append(newTr)

		uploadTask.on('state_changed', function(snapshot){
		  var progress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
		  $("progress[id='"+file.name+"']").val(progress)
		  $("progress[id='"+file.name+"']").parent().find('.percent').text(progress + '%')

		  switch (snapshot.state) {
		    case firebase.storage.TaskState.PAUSED: // or 'paused'
		      //console.log('Upload is paused');
		      break;
		    case firebase.storage.TaskState.RUNNING: // or 'running'
		      //console.log('Upload is running');
		      break;
		  }
		}, function(error) {
		  // Handle unsuccessful uploads
		}, function() {
			//console.log('Uploaded a blob or file!');
			var downloadURL = uploadTask.snapshot.downloadURL;
			//console.log(downloadURL)
			count++
			if(total == count)
				sendForm()
		});
	})
}

function sendForm() {
	form = {}
	$.each($(".step1 input[type='text'], .step1 select, .step1 input[type='radio']:checked"), function(index, input) {
		id = $(input).attr('id')
		name = $(input).attr('name')
		if(id !== undefined)
			form[id] = $(input).val()
		else if(name !== undefined)
			form[name] = $(input).val()
	})

	$.each($(".input.date"), function(index, element) {
		form[$(this).attr('id')] = $(element).find("select.days").val() +'/'+ $(element).find("select.months").val() +'/'+ $(element).find("select.years").val()
	})

	$.each($("table:not(.filesUpload)"), function(index, table) {
		if($(table).attr('id') !== undefined) {
			form[$(table).attr('id')] = []
			$.each($(table).find("tr:not(.disabled):not(.th)"), function(index, tr) {
				obj = {}
				if($(table).attr('id') == 'languages') {
					input = $(tr).find(":input[type='radio']:checked")
					if(input.length) {
						obj[input.attr('name').split('_')[0]] = input.val()
						obj['langName'] = $(tr).find("select").val()
					}
				}
				else {
					$.each($(tr).find("td:not(:has(> img))"), function(index, td) {
						input = $(td).find(":input")
						value = input.val()
						if(input.attr('type') == 'file')
							value = value.split('/').pop().split('\\').pop()
						obj[input.attr('name')] = value
					})
				}
				if(!$.isEmptyObject(obj))
					form[$(table).attr('id')].push(obj)
			})
		}
	})

	form['armyLimit'] = {}
	$.each($("#armyLimit").find("input[type='checkbox']:checked"), function(index, checkbox) {
		box = $(checkbox).closest(".input.innerBox2in2")
		text = box.attr('id')
		form['armyLimit'][text] = {}
		$.each(box.find(":input[type!='checkbox']"), function(index, input) {
			form['armyLimit'][text][$(input).attr('name')] = $(input).val()
		})
	})

	form['2units'] = []
	$.each($("input[name='2units']:checked"), function(index, input) {
		form['2units'].push($(input).val())
	})
	form['2units'] = form['2units'].join()

	$.each($("input[type='radio']:checked"), function(index, input) {
		if($(input).closest('table').length) {
			if($(input).closest('table').attr('id') == 'languages')
				return
		}
		form[$(input).attr('name')] = $(input).val()
	})

	$.each($(":input[name='alone']"), function(index, input) {
		value = $(input).val()
		if($(input).attr('max') !== undefined && $(input).attr('type') == 'range')
			value = value + '/' + $(input).attr('max')
		form[$(input).attr('id')] = value
	})

	$.each($(":input[type!='radio'][name!='2units']:checked"), function(index, input) {
		form[$(input).attr('name')] = $(input).val()
	})

	form['userImg'] = $("#userImg").val().split('/').pop().split('\\').pop()
	form['uid'] = uid
	delete form['undefined']

	db.ref('users/'+uid).set(form, function() {
		changeStep(10)
		console.log(form)
	})
}

function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}