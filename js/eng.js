import {scrollToTop, footer, activeFunction, navigation, socialMedia, header} from "./global.js";
header("../index.html", "#visuals", "#bock", "#", "../index.html", "عربي", "Haitham Talaat's", "Home", "Visuals", "Bock", "Aricle");
socialMedia();
activeFunction();
scrollToTop();
navigation('../index.html', '#visuals', '#bock', '../html/whit.html', '../index.html', "عربي");
footer();

// Videos Counte
export async function getVideo(apiLink) {
  try {
    let result = await fetch(apiLink);
    let jsDataFour = await result.json();
    return jsDataFour.items;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Good");
  }
}

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