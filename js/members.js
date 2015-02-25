var members = {
	"heejoon": {
		"title": "President Heejoon Ahn",
		"content": "<p>Heejoon Ahn has been a TSA member for three years and has contributed many successes in both Biotechnology and Scivis where she placed 3rd and 1st in state. She is currently the President for this year’s Jackson Chapter where her duties consist of member attendance and meeting minutes as well as facilitating the growth of this year’s TSA. Through her knowledge and experience of a variety of events, she continues to serve as an excellent role model for future officers.</p>"
	},
	"caleb": {
		"title": "Vice President Caleb Kim",
		"content": "<p>Caleb Kim, a current senior, is also the Vice President for our chapter. He has been a member for three years where he has demonstrated extraordinary skills in on demand video where he helped write the script and act in their state project. They were able to place 3rd at State and qualify for Nationals. This year we are looking to see even further progress and improvement. </p>",
	},
	"nabil": {
		"title": "Secretary Nabil Syed",
		"content": "<p>Nabil Syed currently is a junior where he has been a member for three years. By showing great leadership skills, he was elected as this year’s secretary. Previous achievements of Nabil include: placing 4th on digital video and qualified to participate in State for Structural engineering. We are looking to see him excel in even further events in the future. </p>",
	},
	"lessane": {
		"title": "Treasurer Lessane Ketema",
		"content": "<p>Lessane is a senior who has been part of TSA for all four years of his high school career.  He serves as our treasurer and is an integral part of keeping track of our club’s financial situation  Competing in many different events every year such as Children’s Stories and Video Game Design, he is well versed in TSA events and has a lot of experience with the club.  By showing immense leadership, he has earned a spot in our TSA leadership.</p>",		
	},
	"seven": {
		"title": "Reporter Seven Bennett",
		"content": "<p>Seven Bennett has been a member for two years and is the reporter for our chapter. Her main job is to work on graphics that promote TSA for our school. She has also participated in extemporaneous speech and debating technological issues. Therefore, she has experience with areas related to communication that further enhance her skills as a reporter.</p>",
	},
	"lydia":{
		"title": "Sergeant in Arms Lydia Kim",
		"content": "<p>Lydia Kim is currently a junior and has been a member of TSA for two years. Although she is a fairly new officer, she has competed in a variety of events and has placed at the national level. For example, in her sophomore year, she participated in our biotech team, which placed 6th out of 6,800 people in the nation. Through her academic prowess, she continues to set the bar for excellence. </p>",
	},
	"rick":{
		"title": "Advisor Rick Wigre",
		"content": "<p>Rick has been an astounding and vital addition to our chapter. Leading as our chapter advisor, Rick was the recipient of the 2012-2013 advisor of the year award in Washington. Through his excellent counseling, TSA seems to grow each and every year.</p>",
	}

}

$(document).ready(function(){
	$(".profile").each(function(idx, ele){
		var mem = members[$(ele).attr("data-member")];

		new jBox('Modal', {
		    width: 300,
		    height: 300,
		    attach: $(ele),
		    title: mem.title,
		    content: mem.content,
		});
	});

	var container = $("#officers-container");
	var track = container.find(".slider-container").silverTrack();

	// install the plugins you want, in our case Navigator
	track.install(new SilverTrack.Plugins.Navigator({
	  prev: $("a.prev", container),
	  next: $("a.next", container)
	}));

	track.start();

})