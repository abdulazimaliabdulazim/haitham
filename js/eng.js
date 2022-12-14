import {navigation, header, getVideo} from "./global.js";
header("../index.html","هيثم طلعت", "الرئيسية", "#visuals", "المرئيات", "#bock", "الكتب","#", "المقالات", "html/indexEng.html", "عربي");
navigation('../index.html', "Home", '#visuals', "Visuals", '#bock', "Bock", 'html/whit.html', 'who are we', 'html/indexEng.html', "عربي");

// Videos Counte
let videos = document.querySelector(".videos");

getVideo('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC13KPGZ_OhiRRwXwTZuWG9g&maxResults=50&order=date&key=AIzaSyDQ8lmdZuL8HUTioJPslw7aDokVL5vFRyg').then((result) => {
  for (let i = 0; i <= result.length; i++) {
    let box = document.createElement("div"); 
    box.className = "box"; 
    let createP = document.createElement("p");
    let repoNameAll = document.createTextNode(result[i].snippet.title);
    createP.appendChild(repoNameAll);
    box.appendChild(createP);
    videos.appendChild(box);
    box.innerHTML +=
      `<iframe
        width="95%"
        height="170"
        src="https://www.youtube.com/embed/${result[i].id.videoId}?rel=0"
        title="${result[i].snippet.title}" frameborder="0"allow="accelerometer;
        autoplay; clipboard-write; encrypted-media;
        gyroscope; picture-in-picture"allowfullscreen>
      </iframe>`;
  };
});

// Json Bocks
let bocks = document.querySelector("article.articles .container .bocks");

let myJsonFilter = new XMLHttpRequest();
myJsonFilter.open("GET", "../json/english.json");
myJsonFilter.send();
myJsonFilter.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let responseTextMyJson = JSON.parse(this.responseText);
        for (let i = 0; i < responseTextMyJson.langw.englsh.length; i++) {
          bocks.innerHTML +=
            `<div class="bock">
            <div class="images">
              <img src="${responseTextMyJson.langw.englsh[i].bock.url}">
            </div>
            <div class="text">
              <p>"${responseTextMyJson.langw.englsh[i].bock.title}"</p>
              <a class="download" href="${responseTextMyJson.langw.englsh[i].bock.src_link}" target="_blanck">
                "${responseTextMyJson.download}"
                <i class="${responseTextMyJson.iconDownload}"></i>
              </a>
            </div>
            </div>`;
        }  
  }
};