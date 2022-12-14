import {header, navigation, getVideo} from "./global.js";
header("index.html","هيثم طلعت", "الرئيسية", "#visuals", "المرئيات", "#bock", "الكتب","#", "المقالات", "html/indexEng.html", "English"); // One Order
navigation('index.html', "الرئيسية", '#visuals', "المرئيات", '#bock', "الكتب", 'html/whit.html', 'من نحن', 'html/indexEng.html', "English"); // Four Order

// Videos Mine
getVideo(
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLj8UFOcdFrvlh24Lw7jrgA&maxResults=50&order=date&key=AIzaSyDQ8lmdZuL8HUTioJPslw7aDokVL5vFRyg`
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

// Scroll Video
let boxAll = document.querySelector(".box-all");
let iconVideo = document.querySelector(".iconVideo");
// Scroll Video Left
let iconVideoLeft = document.createElement("i");
iconVideoLeft.className = "fa-solid fa-caret-left";
iconVideo.appendChild(iconVideoLeft);
iconVideoLeft.onclick = function () {
  boxAll.style.transform += `translateX(-300px)`;
}

// Scroll Video Right
let iconVideoRight = document.createElement("i");
iconVideoRight.className = "fa-solid fa-caret-right";
iconVideo.appendChild(iconVideoRight);
iconVideoRight.onclick = function () {
  boxAll.style.transform += `translateX(300px)`;
}


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
// Bocks langw
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


function newProduct(bocks) {
  let newProduct = document.createElement("div");
  newProduct.className = "newProduct";
  let textNewProduct = document.createTextNode("جديد");
  newProduct.appendChild(textNewProduct);
  bocks.appendChild(newProduct);
}

function ShowLanguages() { // 10
    let liLang = document.querySelectorAll(".langw ul li");
   document.querySelector(".hiddenLang").onclick = () => {
        liLang.forEach(ele => {
            ele.style.display == "block" ? ele.style.display = "none" : ele.style.display = "block";
            ele.addEventListener("click", () => liLang.forEach(a => a.style.display = "none"));
        })
    }
  }
  ShowLanguages();