const store =[];


function projectGenerator(screenshot, Name, Live, Repo, Tech, Description){
    return {
      screenShot: screenshot,
      name: Name,
      live: Live,
      repo: Repo,
      tech: Tech,
      description: Description,
  
      generateTechList: function(){
        const arr = [];
        this.tech.forEach(tech => {
          arr.push(`<li><img class="icon icon-right" src="images/${tech}.png" alt="${tech} icon"></li>`);
      });
      return arr.join("");
      },
  
      generateProjectHTML: function(){
        const arr = [];
        arr.push(`<li class="flexible"><img class="screen-shot" src="images/${this.screenShot}" alt="application screenshot">
        <div>`, `<h3>${this.name}</h3>`, `<div class="link-wrapper">`, `<a class="white" href="${this.live}" target="_blank"> Live App</a>`, `<a class="white" href="${this.repo}" target="_blank" id="repo">Repo</a>`, `</div>`, `<p>${this.description}</p>`, `<h4>Technologies Used</h4>`, `<ul class="tech">`, this.generateTechList(), `</ul>`, `</div>`, `</li>`);
        return arr.join("");
      }
    }
  }
  
  

