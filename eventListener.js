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
    document.getElementById(cityName).style.display = "flex";
    elmnt.style.backgroundColor = color;
    $("#projects").html(generateProjectsHTML());
}
  // Get the element with id="defaultOpen" and click on it
$("#defaultOpen").click();

function generateProjectsHTML(){
    const arr = [`<ul id="projects-tab">`];
    store.forEach(project => {
        arr.push(`<li class="flexible"><img class="screen-shot" src="images/${project.screenShot}" alt="application screenshot">
        <div>`, `<h3>${project.name}</h3>`, `<div class="link-wrapper">`, `<a class="white" href="${project.live}" target="_blank"> Live App</a>`, `<a class="white" href="${project.repo}" target="_blank" id="repo">Repo</a>`, `</div>`, `<p>${project.description}</p>`, `<h4>Technologies Used</h4>`, `<ul class="tech">`, generateTechList(project), `</ul>`, `</div>`, `</li>`)
    });
    arr.push('</ul>')
    return arr.join("");
}

function generateTechList(project){
    const arr = []
    project.tech.forEach(tech => {
        arr.push(`<li><img class="icon icon-right" src="images/${tech}.png" alt="${tech} icon"></li>`);
    });
    return arr.join("");
}
   


