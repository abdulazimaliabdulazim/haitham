import {scrollToTop, footer, activeFunction, navigation} from "./global.js";
footer();
scrollToTop();
navigation('../index.html', '../#visuals', '../#bock', '../html/whit.html', '../html/indexEng.html');
activeFunction();

// Add Videos
let myRequest = new XMLHttpRequest();
myRequest.open(
  "GET",
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC13KPGZ_OhiRRwXwTZuWG9g&maxResults=300&order=date&key=AIzaSyB0AHvujKcQQIn8d3TXWUWEVqTHlKh3rjU"
);
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let jsData = JSON.parse(this.responseText);
    Object.keys(jsData.items).forEach((ele) => {
      let boxAll = document.querySelector(".visuals .container .box-all");
      let box = document.createElement("div");
      box.className = "box";
      let p = document.createElement("p");
      p.innerHTML = jsData.items[ele].snippet.title;
      box.appendChild(p);
      let divs = document.createElement("div");
      divs.innerHTML += `<iframe 
                src="https://www.youtube.com/embed/${jsData.items[ele].id.videoId}?rel=0"
                title="${jsData.items[ele].snippet.title}"
                frameborder="0" allow="accelerometer; autoplay;
                clipboard-write; encrypted-media; gyroscope;
                picture-in-picture" allowfullscreen>
            </iframe>`;
      box.appendChild(divs);
      boxAll.appendChild(box);
    });
  }
};