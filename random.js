var studentMax;
var tempStudent;
var whichStudent;

var students = new Array ();

$(function () {
	$("#randomButton").click(function() {
		studentMax = $("#studentNumber").val ();
		$("#howManyStudents").attr('class', 'hidden');
		$("#startOver").attr('class', 'visible');
		randomStudent ();
	});
});

$(function () {
	$("#resetButton").click(function() {
		studentMax = 0;
		tempStudent = 0;
		$("#studentNumber").val ("");
		students = new Array ();
		$("#student span").html("");
		$("#chosen span").html("");
		$("#howManyStudents").attr('class', 'visible');
		$("#startOver").attr('class', 'hidden');
	});
});

function randomStudent () {
	var whichStudent = (parseInt (Math.random() * studentMax + 1));
	tempStudent = whichStudent;
	checkStudent ();
};

function checkStudent () {
	if (students.length == studentMax)
	{
		allChosen();
		return;
	}
	var nextStudent = $.inArray (tempStudent,students);
	$("#student span").html(tempStudent);
	$("#chosen span").html(students.join(", "));
	if (nextStudent === -1) {
		students.push (tempStudent);
		$("#student span").html(tempStudent);
		$("#chosen span").html(students.join(", "));
	}
	else {
		randomStudent();
	}
};

function allChosen () {
	console.log ("all chosen");
	$("#chosen span").html("All students have now gone!");
}