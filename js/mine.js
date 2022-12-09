import {scrollToTop, header, footer, activeFunction, navigation} from "./global.js";
scrollToTop();
header("index.html", "#visuals", "#bock", "#", "html/indexEng.html");
footer();
activeFunction();
navigation('index.html', '#visuals', '#bock', 'html/whit.html', 'html/indexEng.html');

// (Page Mine)
// Json Bocks
let bocks = document.querySelector("article.articles .container .bocks");
const filt = document.querySelectorAll(".articles .container .filter li");

let myJsonFilter = new XMLHttpRequest();
myJsonFilter.open("GET", "json/bock.json");
myJsonFilter.send();
myJsonFilter.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let responseTextMyJson = JSON.parse(this.responseText);
    filt[0].innerHTML += ` ( ${responseTextMyJson.arbic.all.length})`;
    for (let i = 0; i < responseTextMyJson.arbic.all.length; i++) {
      bocks.innerHTML +=
        `<div class="bock">
          <div class="images">
            <img src="${responseTextMyJson.arbic.all[i].bock.url}">
          </div>
          <div class="text">
            <p>"${responseTextMyJson.arbic.all[i].bock.title}"</p>
            <a class="download" href="${responseTextMyJson.arbic.all[i].bock.src_link}" target="_blanck">
              "${responseTextMyJson.download}"
              <i class="${responseTextMyJson.iconDownload}"></i>
            </a>
          </div>
        </div>`;
    }
    filt.forEach((ele) => {
      ele.addEventListener("click", (e) => {
        filt.forEach(ele => ele.classList.remove("active"));
        e.currentTarget.classList.add("active");
        bocks.innerHTML = "";
        for (let i = 0; i < responseTextMyJson.arbic[`${ele.id}`].length; i++) {
          bocks.innerHTML +=
            `<div class="bock">
            <div class="images">
              <img src="${responseTextMyJson.arbic[`${ele.id}`][i].bock.url}">
            </div>
            <div class="text">
              <p>"${responseTextMyJson.arbic[`${ele.id}`][i].bock.title}"</p>
              <a class="download" href="${responseTextMyJson.arbic[`${ele.id}`][i].bock.src_link}" target="_blanck">
                "${responseTextMyJson.download}"
                <i class="${responseTextMyJson.iconDownload}"></i>
              </a>
            </div>
            </div>`;
        }
      });
    });
  }
};

const langw = document.querySelectorAll(".langw ul li");
let noneLiFilter = [filt[1], filt[2], filt[3]];
let myJsonLangw = new XMLHttpRequest();
myJsonLangw.open("GET", "json/bock.json");
myJsonLangw.send();
myJsonLangw.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let responseTextMyJson = JSON.parse(this.responseText);
    langw.forEach((ele) => {
      ele.addEventListener("click", (e) => {
        langw.forEach(ele => ele.classList.remove("active"));
        e.currentTarget.classList.add("active");
        bocks.innerHTML = "";
        ele.id != "arbic" ? noneLiFilter.forEach(ele => ele.style.display = "none") : noneLiFilter.forEach(ele => ele.style.display = "block");
        if (ele.id != "arbic") {
          noneLiFilter.forEach(ele => ele.style.display = "none");
        }
        for (let i = 0; i < responseTextMyJson.langw[`${ele.id}`].length; i++) {
          bocks.innerHTML +=
            `<div class="bock">
            <div class="images">
              <img src="${responseTextMyJson.langw[`${ele.id}`][i].bock.url}">
            </div>
            <div class="text">
              <p>"${responseTextMyJson.langw[`${ele.id}`][i].bock.title}"</p>
              <a class="download" href="${responseTextMyJson.langw[`${ele.id}`][i].bock.src_link}" target="_blanck">
                "${responseTextMyJson.download}"
                <i class="${responseTextMyJson.iconDownload}"></i>
              </a>
            </div>
            </div>`;
        }
      });
    });
  }
};


// Scroll Video
let boxAll = document.querySelector(".box-all");

// Scroll Video Left
function scrollVideo_L() {
  boxAll.style.transform += `translateX(-100px)`;
}
// Scroll Video Right
function scrollVideo_R() {
  boxAll.style.transform += `translateX(100px)`;
}

// Videos Mine
async function getVideo(apiLink) {
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
getVideo(
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLj8UFOcdFrvlh24Lw7jrgA&maxResults=50&order=date&key=AIzaSyB0AHvujKcQQIn8d3TXWUWEVqTHlKh3rjU`
).then((result) => {
  let boxAll = document.querySelector("main.visuals .box-all");
  for (let i = 0; i <= result.length; i++) {
    let boxAllTest = document.createElement("div");
    boxAllTest.className = "box";
    boxAllTest.style.margin = "10px";

    boxAllTest.innerHTML = 
    `<iframe
        src="https://www.youtube.com/embed/${result[i].id.videoId}?rel=0"
        title="${result[i].snippet.title}" frameborder="0"allow="accelerometer;
        autoplay; clipboard-write; encrypted-media;
        gyroscope; picture-in-picture"allowfullscreen>
      </iframe>`;
    boxAll.appendChild(boxAllTest);
  }
});


function newProduct(bocks) {
  let newProduct = document.createElement("div");
  newProduct.className = "newProduct";
  let textNewProduct = document.createTextNode("جديد");
  newProduct.appendChild(textNewProduct);
  bocks.appendChild(newProduct);
}