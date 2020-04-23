function openCity(cityName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = $(".tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = $(".tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    if(cityName === "projects"){
        $("#height-adjuster").addClass("auto-height").removeClass("height-100");  
    }else{
         $("#height-adjuster").addClass("height-100").removeClass("auto-height");
    }
    document.getElementById(cityName).style.display = "flex";
    elmnt.style.backgroundColor = color;
    $("#projects").html(generateProjectsHTML());
}
  // Get the element with id="defaultOpen" and click on it
$("#defaultOpen").click();

$(document).ready(function(){
    store.push(projectGenerator("Question.png", "Quiz App", "https://tailrin.github.io/quiz-app", "https://github.com/tailrin/quiz-app", ["Javascript", "Jquery", "html", "css"], "This app is a simple quiz app of the state capitals. 15 of the 50 states will be randomly chosen to be asked about. This quiz would be great for kids who are studying United States geography."));
    store.push(projectGenerator("beer.png", "Brewery App", "https://tailrin.github.io/brewery-app/", "https://github.com/tailrin/brewery-app", ["Javascript", "Jquery", "html", "css"], "This a search engine for breweries. This app is good for people looking for things to do in a specific area and find some good beer in the process."));
    store.push(projectGenerator("bugTrapper.png", "Bug Trapper", "https://bug-trapper-client.now.sh", "https://github.com/tailrin/bug-trapper-client", ["Javascript", "node", "postgre", "html", "css", "react"], "This app is an issue tracker for software development. You can track projects and and log issues as well as keep track of the work done on those issues"));
    store.push(projectGenerator("projectTracker.png", "Project Tracker", "https://project-tracker.now.sh/", "https://github.com/tailrin/project-tracker-client", ["Javascript", "node", "postgre", "html", "css", "react"], "This a a collaborative project tracker designed for use by companies. You can create and prioritize projects, track tasks and assign priority."));
});

function generateProjectsHTML(){
    const arr = [`<ul id="projects-tab">`];
    store.forEach(project => {
        arr.push(project.generateProjectHTML())
    });
    arr.push('</ul>')
    return arr.join("");
}






