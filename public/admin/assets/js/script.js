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

$.extend(true, $.fn.dataTable.defaults, {
	dom: 'frtip',
	colReorder: true,
	stateSave: true,
	scrollX: true,
})

var i18n = new Jed({
  // Generally output by a .po file conversion
  locale_data : {
    "messages" : {
      "" : {
        "domain" : "messages",
        "lang"   : "he",
        "plural_forms" : "nplurals=2; plural=(n != 1);"
      },
      "city" : ["עיר"],
      "aliahData" : ["תאריך עלייה"],
      "applications" : ["רמת הידע בבניית אפליקציות לטלפונים חכמים"],
      "birthData" : ["תאריך לידה"],
      "buildWeb" : ["רמת השליטה בבניית דפי אינטרנט"],
      "cellphone" : ["סלולארי"],
      "citizenship" : ["אזרחות"],
      "firstName" : ["שם פרטי"],
      "favoriteCharacter" : ["מה התכונה החזקה או החיובית המאפיינת אותך ביותר? איך זה בא לידי ביטוי?"],
      "fears" : ["מהם חששותיך מהשירות הצבאי באחת מיחידות ההסרטה?"],
      "friendsCircle" : ["תאר את חוג החברים שלך"],
      "ftp" : ["רמת השליטה ברשתות FTP"],
      "graphicsAnimation" : ["גרפיקה ואנימציה"],
      "hardPeople" : ["עם איזה אנשים יותר קשה לך להסתדר?"],
      "hardSchool" : ["מה היה לך יותר קשה בבית-הספר?"],
      "html5" : ["רמת השליטה ב-HTML5"],
      "idNumber" : ["תעודת זהות"],
      "investigateTasrit" : ["תחקיר ותסריט"],
      "lastName" : ["שם משפחה"],
      "phone" : ["טלפון"],
      "networks" : ["ידע בהקמת רשתות מחשבים"],
      "photoSteel" : ["צילום סטילס"],
      "prevLastName" : ["שם משפחה קודם"],
      "production" : ["הפקה"],
      "scoreAverage" : ["כתוב/י מהו ממוצע הציונים שלך בתעודת הסיום של שנת הלימודים הקודמת"],
      "serveHasrata" : ["מ-1 עד 5, עד כמה היית מעוניין/ת לשרת באחת מיחידות ההסרטה? (1=הכי נמוך, 5=הכי גבוה)"],
      "street" : ["רחוב"],
      "streetNumber" : ["מספר בית"],
      "userImg" : ["תמונה אישית"],
      "zip" : ["מיקוד"],
      "sportsLevel" : ["מ-1 עד 5, מה להערכתך היא רמת הכושר הגופני שלך? (1=הכי נמוך, 5=הכי גבוה)"],
      "studyStyle" : ["תאר את סגנון הלימוד שלך, איזה תלמיד היית?"],
      "tnuatNoar" : ["האם היית פעיל בתנועת נוער ו/או פעילות התנדבותית? אם כן, תאר את מעורבותך ומשך הזמן שהיית פעיל"],
      "tzipiot" : ["מהן ציפיותך מהשירות הצבאי באחת מיחידות ההסרטה?"],
      "videoEditing" : ["עריכת וידאו"],
      "videoShoot" : ["צילום וידאו, תאורה וסאונד"],
      "whatDoIf" : ["במידה ותחוש שאתה לא ממצה את כישוריך, מה תעשה?"],
      "whatSpecialGive" : ["מה לדעתך תוכל לתרום במיוחד ליחידת ההסרטה?"],
      "whatWillGive" : ["מה לדעתך השירות ביחידת ההסרטה יוכל להקנות לך?"],
      "whyServeHasrata" : ["אני מעוניין/ת לשרת מיחידות ההסרטה כי..."],
      "worstCharacter" : ["איזו תכונה חלשה או שלילית מאפיינת אותך? איך זה בא לידי ביטוי?"],
      "yourTeacherDesc" : ["איך המחנך שלך היה מתאר אותך?"],
      "motivationRadio" : ["ביחס לתפקידים אחרים/יחידות אחרות בהם היית רוצה לשרת בצבא, היכן מדורגות יחידות ההסרטה?"],
      "notes" : ["הערות"],
      "score" : ["ציון"],
      "skill" : ["מקצוע"],
      "unitsNumber" : ["	מספר יחידות"],
      "age" : ["גיל"],
      "name" : ["שם"],
      "fromYear" : ["משנה"],
      "toYear" : ["עד שנה"],
      "leftReason" : ["סיבת עזיבה"],
      "howLearned" : ["איך למדתי"],
      "softwareName" : ["תוכנה/ציוד"],
      "time" : ["זמן שימוש/היכרות"],
      "whatKnow" : ["מה אני יועד ליישם"],
      "file" : ["קובץ"],
      "details" : ["שם עבודה, שנה ופרטיים כללים"],
      "rule" : ["תפקיד שביצעתי\\תרומתי לעבודה"],
      "type" : ["מדיה"],
      "2units" : ["אם תתקבל/י לאחת מהיחידות, באילו שניים מהתחומים הבאים היית הכי רוצה לעסוק?"],
      "langName" : ["שפה"],
      "langLevel" : ["רמה"],
      "limitName" : ["מגבלה"],
      "limit" : ["תאור המגבלה"],
      "conditions" : ["תיאור מגבלת תנאי שירות"],
      "5unitsPlus" : ["ציון מקצועות נוספים של 5 יחידות ומעלה"],
      "armyLimit" : ["מלא\י מגבלות שירות ושיבוץ צבאי"],
      "communicationScore" : ["ציוני מקצועות התקשורת"],
      "familyDetails" : ["מלא\י פרטים אודות משפחתך הגרעינית"],
      "portfolioFiles" : ["קבצים תיק עבודות"],
      "school" : ["בית ספר"],
      "softwares" : ["תוכנות\\ציוד מקצועי בהם אני משתמש"],
      "languages" : ["פרט/י בנוגע לכישורי שפה"],
      "type" : ["מדיה"],
      "miclala" : ["האם את/ה בלימודי מכללה במסלול קולנוע וטלוויזיה (י״ג-י״ד)?"],
      "gender" : ["מין"],
      "bagrut" : ["ככל הנראה, האם תסיים/י את התיכון עם תעודת בגרות מלאה?"],
      "units": ["שני תחומים מועדפים בהסרטה"]
    }
  },
  "domain" : "messages"
});

$(document).ready(function() {
	db.ref('users').once('value', function(snapshot) {
		users = snapshot.val()
		rows = []
		columns = []
		$.each(users, function(uid, user) {
			rows.push(user)
			if(user.userImg !== undefined)
				user.userImg = '<a href="#" class="link">'+user.userImg+'</a>'
			$.each(user, function(index, value) {
				if(typeof value !== 'object')
					columns.push(index)
				else {
					counter = 1
					$.each(value, function(i, obj) {
						$.each(obj, function(idx, val) {
							user[idx+counter] = val
							columns.push(idx+counter)
						})
						counter++
					})
				}
			})
		})

		cols = [{defaultContent: ""}]
		columns = $.unique(columns)
		$.each(columns, function(index, column) {
			if(column != 'uid') {
				cols.push({
					title: i18n.gettext(column.replace(/[0-9]/g, '')),
					name: column,
					data: column,
					defaultContent: ""
				})
			}
		})

		table = $('#users').DataTable({
			dom: 'Bfrtip',
		    scrollY: '55vh',
		    scroller: true,
	        buttons: [
	            'colvis',
				'selectAll',
				'selectNone',
		        {
	                text: 'Delete',
	                action: function ( e, dt, node, config ) {
	                	rows = table.rows('.selected')
	                	if(Object.keys(table.rows('.selected')[0]).length > 0) {
							if (confirm('למחוק בטוח את כל השורות שנבחרו?')) {
								$.each(rows.data(), function(index, row) {
									uid = row.uid
									files = []
									if(row.userImg !== undefined)
										files.push(row.userImg.replace('<a href="#" class="link">', '').replace('</a>', ''))
									$.each(row.portfolioFiles, function(i, obj) {
										files.push(obj.file)
									})
									db.ref('users/'+uid).set(null, function() {
										rows.remove().draw()
										$.each(files, function(index, fileName) {
											storageRef.child('files/'+uid+'/'+fileName.replace('<a href="#" class="link">', '').replace('</a>', '')).delete();
										})
									})
								})
							}
	                	}
	                   
	                }
	            },
	            {
                	extend: 'csv',
	                exportOptions: {
	                    modifier: {
	                        selected: true
	                    }
	                }
	            }
	        ],
		    columnDefs: [ {
	            orderable: false,
	            className: 'select-checkbox',
	            targets:   0
	        } ],
	        select: {
	            style:    'multi',
	            selector: 'td:first-child'
	        },
			columns: cols
		})

		tableUser = $('#tableUser').DataTable({
		    scrollY: '40vh',
			columns: [
				{
					title: 'index',
					name: 'index',
					data: 'index',
					defaultContent: ""
				},
				{
					title: 'value',
					name: 'value',
					data: 'value',
					defaultContent: ""
				}
			],
			bPaginate: false,
			scrollX: false,
    		rowReorder: true
		})

		table.rows.add(rows).draw()

		$(document).on('click', '#users tr td:not(.select-checkbox)', function() {
			$("#tables").empty()
			$('#modal1').openModal();
			$("#content").hide()
			$("#loading").show()

			setTimeout(function(t) {
				data = table.row($(t)).data()
				//Deletes all array data from the table "tableUser"
				toDelete = []
				$.each(data, function(index, value) {
					if(index.match(/.*\d$/gm) && index != 'html5') {
						toDelete.push(index)
					}
				})
				for (var i = 0; i < toDelete.length; i++) {
					delete data[toDelete[i]]
				}

				$("#personalImg").attr('src', '')
				$("#uid").val(data.uid)
				img = data.userImg.replace('<a href="#" class="link">', '').replace('</a>', '')
				storageRef.child('files/'+$("#uid").val()+'/'+img).getDownloadURL().then(function(url) {
					console.log(url)
					$("#personalImg").attr('src', url)
				})
				rows = []
				$.each(data, function(index, value) {
					if(typeof value !== 'object') {
						if(index != 'uid') {
							rows.push({
								'index': i18n.gettext(index.replace(/[0-9]/g, '')),
								'value': value
							})
						}
					}
					else {
						$("#tables").append("<hr><h5>"+i18n.gettext(index)+"</h5><table id='"+index+"' class='table table-striped table-bordered' cellspacing=''0' width='100%'></table>")
						columnsNames = []
						rows2 = []
						$.each(value, function(idx, val) {
							if(index == 'portfolioFiles') {
								$.each(val, function(i, n) {
									if(i == 'file')
										value[idx][i] = '<a href="#" class="link">'+n+'</a>'
								})
							}
							if(index == 'armyLimit')
								val['limitName'] = i18n.gettext(idx)
							rows2.push(val)
						})
						$.each(flatten(value), function(index, column) {
							name = /[^\.]*$/.exec(index)[0]
							columnsNames.push(name)
						})
						columnsNames = $.unique(columnsNames)
						columns = []
						$.each(columnsNames, function(index, name) {
							columns.push({
								title: i18n.gettext(name),
								name: name,
								data: name,
								defaultContent: ""
							})
						})
						window[index] = $("#"+index).DataTable({
							columns: columns,
							scrollX: false,
							bPaginate: false
						})

						window[index].clear()
						window[index].rows.add(rows2).draw()
					}
					tableUser.clear()
					tableUser.rows.add(rows).draw()
					$("#loading").hide()
					$("#content").show()
				})
			}, 500, this)
		})
	})
})

$(document).on('click', '.link', function() {
	storageRef.child('files/'+$("#uid").val()+'/'+$(this).text()).getDownloadURL().then(function(url) {
		win = window.open(url, '_blank');
  		win.focus();
	})
})

function isBuffer (obj) {
	return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

function flatten(target, opts) {
  opts = opts || {}

  var delimiter = opts.delimiter || '.'
  var maxDepth = opts.maxDepth
  var output = {}

  function step(object, prev, currentDepth) {
    currentDepth = currentDepth ? currentDepth : 1
    Object.keys(object).forEach(function(key) {
      var value = object[key]
      var isarray = opts.safe && Array.isArray(value)
      var type = Object.prototype.toString.call(value)
      var isbuffer = isBuffer(value)
      var isobject = (
        type === "[object Object]" ||
        type === "[object Array]"
      )

      var newKey = prev
        ? prev + delimiter + key
        : key

      if (!isarray && !isbuffer && isobject && Object.keys(value).length &&
        (!opts.maxDepth || currentDepth < maxDepth)) {
        return step(value, newKey, currentDepth + 1)
      }

      output[newKey] = value
    })
  }

  step(target)

  return output
}