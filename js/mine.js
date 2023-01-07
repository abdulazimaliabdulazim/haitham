import {header, navigation, getVideo, activeFunction, createBocks} from "./global.js";
header("index.html","هيثم طلعت", "الرئيسية", "#visuals", "المرئيات", "#bock", "الكتب","#", "المقالات", "html/indexEng.html", "English"); // One Order
navigation('index.html', "الرئيسية", '#visuals', "المرئيات", '#bock', "الكتب", 'html/whit.html', 'من نحن', 'html/indexEng.html', "English"); // Four Order

// Scroll Video
let boxAll = document.querySelector(".box-all");
let iconVideoLeft = document.querySelector(".iconLeft");
let iconVideoRight = document.querySelector(".iconRight");
let iconsScroll = [iconVideoLeft, iconVideoRight];
let count = 0;

getVideo(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLj8UFOcdFrvlh24Lw7jrgA&maxResults=50&order=date&key=AIzaSyA6Bn7dJHlf7G8IxR7I_ZPCP_Ew-83sqkY`, boxAll, iconsScroll, "noParaghrahVideos", "noScroll");

iconVideoLeft.onclick = () => {
  if (window.localStorage.getItem("count") != 0) {
    --count;
    window.localStorage.setItem("count", count);
    boxAll.style.transform += `translateX(-300px)`;
  }
}

iconVideoRight.onclick = () => {
  ++count;
  window.localStorage.setItem("count", count);
  boxAll.style.transform += `translateX(300px)`;
}

// Json Bocks
let bocks = document.querySelector("article.articles .container .bocks");
const filt = document.querySelectorAll(".articles .container .filter li");
const langw = document.querySelectorAll(".langw ul li");
let noneLiFilter = [filt[1], filt[2], filt[3]];


let myJsonFilter = new XMLHttpRequest();
myJsonFilter.open("GET", "json/bock.json");
myJsonFilter.send();
myJsonFilter.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let responseTextMyJson = JSON.parse(this.responseText);
    // Mine Bocks
    for (let i = 0; i < responseTextMyJson.arbic.all.length; i++) {
      createBocks(responseTextMyJson.arbic.all[i].bock.url, responseTextMyJson.arbic.all[i].bock.title, responseTextMyJson.arbic.all[i].bock.src_link, responseTextMyJson.download, responseTextMyJson.iconDownload);
    }
    // Filtrition Bocks
    filt.forEach((ele) => {
      ele.addEventListener("click", (e) => {
        bocks.innerHTML = "";
        activeFunction(filt);
        for (let i = 0; i < responseTextMyJson.arbic[`${ele.id}`].length; i++) {
          createBocks(responseTextMyJson.arbic[`${ele.id}`][i].bock.url, responseTextMyJson.arbic[`${ele.id}`][i].bock.title, responseTextMyJson.arbic[`${ele.id}`][i].bock.src_link, responseTextMyJson.download, responseTextMyJson.iconDownload);
        }
      });
    });
    filt.forEach(ele => ele.title = `عدد الكتب ${responseTextMyJson.arbic[`${ele.id}`].length}`);
    // Languages Bocks 
    langw.forEach((ele) => {
      ele.addEventListener("click", (e) => {
        bocks.innerHTML = "";
        activeFunction(langw);
        ele.id != "arbic" ? noneLiFilter.forEach(ele => ele.style.display = "none") : noneLiFilter.forEach(ele => ele.style.display = "block");
        for (let i = 0; i < responseTextMyJson.langw[`${ele.id}`].length; i++) {
          createBocks(responseTextMyJson.langw[`${ele.id}`][i].bock.url, responseTextMyJson.langw[`${ele.id}`][i].bock.title, responseTextMyJson.langw[`${ele.id}`][i].bock.src_link, responseTextMyJson.download, responseTextMyJson.iconDownload);
        }
      });
    });
  }
};

// Show Languages
function ShowLanguages() {
  let liLang = document.querySelectorAll(".langw ul li");
  document.querySelector(".hiddenLang").onclick = () => {
    liLang.forEach(ele => {
      ele.style.display == "block" ? ele.style.display = "none" : ele.style.display = "block";
      ele.addEventListener("click", () => liLang.forEach(a => a.style.display = "none"));
    });
  }
}
ShowLanguages();