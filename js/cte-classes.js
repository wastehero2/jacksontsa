classes = {
	"Business & Marketing": ["Accounting 1", "Accounting 2", "Economics", "Business Law", "AP Microeconomics", "AP Macroeconomics", "Marketing 1", "Marketing 2", "Marketing 3"],
	"Health & Human Services": ["Family Health", "Independent Living", "Child Development", "Nutrition 1", "Nutrition 2", "Intro to Sports Medication", "Sports Medication 1", "Sports Medication 2"],
	"Technology": ["Intro to Graphic Design", "Graphic Design 1", "Graphic Design 2", "Graphic Design 3", "AP Studio Art 2D", "AP Studio Art 3D", "Digital Photo", "Digital Photo 2", "Publications 1", "Publications 2", "Publications 3", "Computer Applications", "Web Design", "University of Washington: Computer Science Principles", "Video Game Design", "Computer Programming 2", "Computer Programming 3", "AP Computer Science A", "Engineering"],
	"Work Based Learning": ["Career Choices", "Worksite Learning Experience", "Worksite Learning Volunteer", "Worksite Learning Internship"],
}

$(document).ready(function(){

	var content = $("#cte-content");
	var rendered = {};

	$.each(classes, function(c, d){
		rendered[c] = makeDiv(c);
	});
	$.each(rendered, function(c, d){
		content.append(d);
	});

	$(".category").click(function(){
		var c = $(this).find(".class");
		if(c.css("display") != "none"){
			c.hide();
			$(this).find("i").removeClass("fa-level-up").addClass("fa-level-down");
		} else {
			c.fadeIn(750);
			$(this).find("i").addClass("fa-level-up").removeClass("fa-level-down");
		}
		$("#wrapper").height($(".table").position().top+$(".table").outerHeight()+50);
	});

	$("#wrapper").height($(".table").position().top+$(".table").outerHeight()+50);

  $(window).resize($.debounce(500, true, function(e){
	$("#wrapper").height($(".table").position().top+$(".table").outerHeight()+50);
  }));

});

function makeDiv(category){
	var icon = $("<i></i>");
	icon.addClass("fa fa-level-down");
	var rendered = $("<div></div>");
	rendered.html(category+" ");
	rendered.addClass("col-sm-3 well img-rounded");
	rendered.addClass("category");

	rendered.append(icon);

	var data = classes[category];
	$.each(data, function(idx, name){
		var c = $("<div></div>");
		c.html(name);
		c.addClass("class");
		rendered.append(c);
	});
	return rendered;
}