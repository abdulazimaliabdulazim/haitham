import {scrollToTop, footer, activeFunction, navigation} from "./global.js";
footer();
scrollToTop();
navigation('../index.html', '../#visuals', '../#bock', '../html/whit.html', '../html/indexEng.html');
activeFunction();

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