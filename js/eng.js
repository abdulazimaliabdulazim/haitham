import {navigation, header, getVideo, createBocks} from "./global.js";
header("../index.html","Haitham Talaat's", "Home", "#visuals", "Visuals", "#bock", "Bock","#", "Articles", "html/indexEng.html", "عربي");
navigation('../index.html', "Home", '#visuals', "Visuals", '#bock', "Bock", 'whit.html', 'who are we', '../index.html', "عربي");

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
let myJsonFilter = new XMLHttpRequest();
myJsonFilter.open("GET", "../json/english.json");
myJsonFilter.send();
myJsonFilter.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let responseTextMyJson = JSON.parse(this.responseText);
      for (let i = 0; i < responseTextMyJson.langw.englsh.length; i++) {
          createBocks(responseTextMyJson.langw.englsh[i].bock.url, responseTextMyJson.langw.englsh[i].bock.title, responseTextMyJson.langw.englsh[i].bock.src_link, responseTextMyJson.download, responseTextMyJson.iconDownload);
      }  
  }
};