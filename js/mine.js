import {scrollToTop, header, footer, activeFunction, navigation} from "./global.js";
scrollToTop();
header("index.html", "#visuals", "#bock", "#", "html/indexEng.html");
footer();
activeFunction();
navigation('index.html', '#visuals', '#bock', 'html/whit.htm', 'html/indexEng.html');

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
    filt[0].innerHTML += ` ( ${responseTextMyJson.all.length})`;
    for (let i = 0; i < responseTextMyJson.all.length; i++) {
      // Container
      const parent = document.createElement("div");
      const parentText = document.createElement("div");
      parent.className = "bock";
      parentText.className = "text";
      // Image
      const ima = document.createElement("div");
      const imgUrl = document.createElement("img");
      ima.className = "images";
      imgUrl.src = `${responseTextMyJson.all[i].bock.url}`;
      ima.appendChild(imgUrl);
      parent.appendChild(ima);
      // Paraghraph
      const paragraph = document.createElement("p");
      const paragraphTitle = document.createTextNode(
        responseTextMyJson.all[i].bock.title
      );
      paragraph.appendChild(paragraphTitle);
      parentText.appendChild(paragraph);
      // Link Href
      const scrLink = document.createElement("a");
      scrLink.className = "download";
      scrLink.target = "_blank";
      const scrLinkText = document.createTextNode(responseTextMyJson.download);
      scrLink.appendChild(scrLinkText);
      scrLink.href = `${responseTextMyJson.all[i].bock.src_link}`;
      // Downolad Icon
      let iconDownload = document.createElement("i");
      iconDownload.className = responseTextMyJson.iconDownload;
      scrLink.append(iconDownload);
      // Append Child
      parentText.appendChild(scrLink);
      parent.appendChild(parentText);
      bocks.appendChild(parent);
    }
    filt.forEach((ele) => {
      ele.addEventListener("click", (e) => {
        filt.forEach((ele) => {
          ele.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        bocks.innerHTML = "";
        for (let i = 0; i < responseTextMyJson[`${ele.id}`].length; i++) {
          // Container
          const parent = document.createElement("div");
          const parentText = document.createElement("div");
          parent.className = "bock";
          parentText.className = "text";
          // Image
          const ima = document.createElement("div");
          const imgUrl = document.createElement("img");
          ima.className = "images";
          imgUrl.src = responseTextMyJson[`${ele.id}`][i].bock.url;
          ima.appendChild(imgUrl);
          parent.appendChild(ima);
          // Paraghraph
          const paragraph = document.createElement("p");
          const paragraphTitle = document.createTextNode(
            responseTextMyJson[`${ele.id}`][i].bock.title
          );
          paragraph.appendChild(paragraphTitle);
          parentText.appendChild(paragraph);
          // Link Href
          const scrLink = document.createElement("a");
          scrLink.className = "download";
          scrLink.target = "_blank";
          const scrLinkText = document.createTextNode(responseTextMyJson.download);
          scrLink.appendChild(scrLinkText);
          scrLink.href = `${responseTextMyJson[`${ele.id}`][i].bock.src_link}`;
          // Downolad Icon
          let iconDownload = document.createElement("i");
          iconDownload.className = responseTextMyJson.iconDownload;
          scrLink.append(iconDownload);
          // Append Child
          parentText.appendChild(scrLink);
          parent.appendChild(parentText);
          bocks.appendChild(parent);
        }
      });
    })
  }
};

// // Scroll Video
let boxAll = document.querySelector("main.visuals .box-all");

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