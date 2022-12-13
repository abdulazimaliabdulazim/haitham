import {header, activeFunction, footer, navigation, socialMedia} from "./global.js";
header('../index.html', "../#visuals", "../#bock", "../#", "../html/indexEng.html", "English", "هيثم طلعت", "الرئيسية", "المرئيات", "الكتب", "المقالات");
navigation('../index.html', '../#visuals', '../#bock', '../html/whit.html', '../html/indexEng.html');
activeFunction();
socialMedia();
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
let viId = document.querySelectorAll(".visuals .box-all .box");

getVideo(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLj8UFOcdFrvlh24Lw7jrgA&maxResults=50&order=date&key=AIzaSyDQ8lmdZuL8HUTioJPslw7aDokVL5vFRyg`).then((result) => {
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

viId.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    videos.innerHTML = "";
    viId.forEach(e => e.classList.remove("active"));
    e.currentTarget.classList.add("active");
    getVideo(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${ele.id}&maxResults=50&order=date&key=AIzaSyDQ8lmdZuL8HUTioJPslw7aDokVL5vFRyg`).then((result) => {
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
  });
});