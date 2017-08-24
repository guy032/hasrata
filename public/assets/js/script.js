var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
	window.location = "mobile.html";
}

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
	$('input').click(function() {
		if($(this).hasClass('warning'))
	  		$(this).removeClass('warning')
	});

	$('textarea').click(function() {
		if($(this).hasClass('warning'))
	  		$(this).removeClass('warning')
	});

	$('label').click(function() {
		if($(this).hasClass('warning'))
	  		$(this).removeClass('warning')
	});

	$(".buttons .button").click(function() {
		id = $(this).attr("id")
		currentStep = Number($(".content .step:visible").attr("class").replace("step step", ""))
		if(id == 'continue') {
			x = currentStep+1
			if(x==3) x=4;
			if(x==9) x=10;
			$( ".step" + currentStep + " .mandatory" ).each(function( index ) {
			  if(!$.trim(this.value).length) { // zero-length string AFTER a trim
				x = currentStep
				$(this).addClass('warning')
			  }
			});
			if(currentStep == 3){
				counter = 0;
				$( ".step3 .2units" ).each(function( index ) {
				  counter += this.checked
				});
				if(counter != 2) {
					x = currentStep
				}
			}
		}
		else {
			x = currentStep-1;
			if(x==3) x=2;
			if(x==9) x=8;
		}

		changeStep(x)
	})

	$(document).on('click', '.colored', function() {
		number = Number($(this).find(".img").attr('class').replace('img icon', ''))
		changeStep(number)
	})

	$('.empty').prepend('<option value=""></option>')

	for(i = 1; i <= 31; i++) {
		$('.days').append('<option value="' + i + '">' + i + '</option>');
	}

	var months = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובור", "נובמבר", "דצמבר"];
	for(i = 1; i <= 12; i++) {
		$('.months').append('<option value="' + i + '">' + months[i-1] + '</option>');
	}

	$('.years').append(getYearsOptions())
	$('select.languages').append(getLanguagesOptions())

	/*$('.languages.english').val('אנגלית')
	$('.languages.arabic').val('ערבית')
	$('.languages.french').val('צרפתית')*/

	var citizenships = ["", "אוזבקית","אוקראינית","אורדו","אזרבייג'נית","איטלקית","אינדונזית","איסלנדית","אלבנית","אמהרית","אנגלית","אסטונית","אפריקאנס","אקאן","ארמנית","בולגרית","בוסנית","בורמזית","בלרוסית","בנגלית","גוג'ראטית","גרוזינית","גרמנית","דזונקה","דנית","הולנדית","הונגרית","הינדי","המונג","וולשית","וייטנאמית","זולו","חמרית","טג'יקית","טגלוג","טורקית","טורקמנית","טיבטית","טלוגו","טמילית","טסוואנה","יאו","יאוית","יוונית","יידיש","יפנית","כורדית","לאו","לטבית","לטינית","ליטאית","לינגלה","מונגולית ח'לח'ית","מלאית","מלגשית","מלטזית","מנדרינית","מקדונית","מראטהי","מרשלזית","נוארית","נורווגית","נייאנג'ה","נפאלית","סווהילית","סוטו","סומאלית","סינהלה","סינית, מסורתית","סינית, מפושטת","סלובנית","סלובקית","סמואית","ספרדית","סרבית","עברית","ערבית","פוג'ואו","פולנית","פורטוגזית","פינית","פלמית","פנג'אבי","פרסית","פשטו","צ'וקסית","צ'כית","צרפתית","קאנדה","קוריאנית","קזחית","קטלנית","קירונדי","קנטונזית","קצ'ואה","קרואטית","קריאולית האיטית","רומאני","רומאנש","רומנית","רוסית","שבדית","שנחאית","תאילנדית","תיגרינית"]
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
		//These lines create the NaN bug. I don't think that they are necessary
		/*name = newTr.find('input').attr('name')
		if(name !== undefined)
			newTr.find('input').attr('name', name.split('_')[0] + (Number(name.split('_')[1]) + 1))*/

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
		languages = ["", "אוזבקית","אוקראינית","אורדו","אזרבייג'נית","איטלקית","אינדונזית","איסלנדית","אלבנית","אמהרית","אנגלית","אסטונית","אפריקאנס","אקאן","ארמנית","בולגרית","בוסנית","בורמזית","בלרוסית","בנגלית","גוג'ראטית","גרוזינית","גרמנית","דזונקה","דנית","הולנדית","הונגרית","הינדי","המונג","וולשית","וייטנאמית","זולו","חמרית","טג'יקית","טגלוג","טורקית","טורקמנית","טיבטית","טלוגו","טמילית","טסוואנה","יאו","יאוית","יוונית","יידיש","יפנית","כורדית","לאו","לטבית","לטינית","ליטאית","לינגלה","מונגולית ח'לח'ית","מלאית","מלגשית","מלטזית","מנדרינית","מקדונית","מראטהי","מרשלזית","נוארית","נורווגית","נייאנג'ה","נפאלית","סווהילית","סוטו","סומאלית","סינהלה","סינית, מסורתית","סינית, מפושטת","סלובנית","סלובקית","סמואית","ספרדית","סרבית","עברית","ערבית","פוג'ואו","פולנית","פורטוגזית","פינית","פלמית","פנג'אבי","פרסית","פשטו","צ'וקסית","צ'כית","צרפתית","קאנדה","קוריאנית","קזחית","קטלנית","קירונדי","קנטונזית","קצ'ואה","קרואטית","קריאולית האיטית","רומאני","רומאנש","רומנית","רוסית","שבדית","שנחאית","תאילנדית","תיגרינית"]

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
						obj['langName'] = $(tr).find(".firsttd").text()
						if(obj['langName'] == '')
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

	form['uid'] = uid
	delete form['undefined']
	for(i=0;i<form['portfolioFiles'].length;i++) {
		delete form['portfolioFiles'][i]['undefined']
	}
	console.log(form)
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
