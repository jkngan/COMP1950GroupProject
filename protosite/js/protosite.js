$(document).ready(function() {
	$(".image_button").click(function() {
		var paragraphs = this.getElementsByTagName("P");
		if (paragraphs[0].textContent == "Lessons") {
			window.location = "lessons.html";
		} else if (paragraphs[0].textContent == "Assignments") {
			window.location = "assignments.html";
		} else if (paragraphs[0].textContent == "Quizzes") {
			window.location = "quizzes.html";
		}
	});
    
    $("nav > ul > li").hover(function() {
        var nav = this.getElementsByTagName("A")[0].textContent);
        if (nav == "Lectures") {
            $("#lectures_nav").show();
        }
    });
});