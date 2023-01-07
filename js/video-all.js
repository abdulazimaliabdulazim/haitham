import {header, navigation,getVideo ,activeFunction} from "./global.js";
header("../index.html","هيثم طلعت", "الرئيسية", "#visuals", "المرئيات", "../#bock", "الكتب","../#", "المقالات", "../html/indexEng.html", "English");
navigation('../index.html', "الرئيسية", '../#visuals', "المرئيات", '../#bock', "الكتب", '../html/whit.html', 'من نحن', '../html/indexEng.html', "English");
let buttonChild = document.querySelectorAll(".clickButton div");

let channelId = document.querySelectorAll(".visuals .box-all .box");
let parent = document.createElement("div");
let parentVideos = document.querySelector(".videos");

// Function Videos Mine Dr Haitham
getVideo('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLj8UFOcdFrvlh24Lw7jrgA&maxResults=50&order=date&key=AIzaSyDDsLuqe_Gc10hV6RJ3_QBFhjW5blGZhW8', parentVideos, buttonChild);

// Function  Active Class
activeFunction(channelId);

channelId.forEach((box) => {
  box.addEventListener("click", (e) => {
    box.after(parent);
    parentVideos.innerHTML = "";
    test();
    // Function Videos Channels
    getVideo(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${box.id}&maxResults=50&order=date&key=AIzaSyDDsLuqe_Gc10hV6RJ3_QBFhjW5blGZhW8`, parentVideos, buttonChild);
  });
});

function test() {
  parent.className = "parentDivOnSpan";
  let oneChildDiv = document.createElement("span");
  oneChildDiv.className = "active"
  oneChildDiv.id = "date";
  let texOneChildDiv = document.createTextNode("الأحدث");
  oneChildDiv.title = "الأحدث";
  oneChildDiv.appendChild(texOneChildDiv);
  let twoChildDiv = document.createElement("span");
  twoChildDiv.className = "newAll";
  twoChildDiv.id = "viewCount";
  let texTwoChildDiv = document.createTextNode("الأكثر شهرة");
  twoChildDiv.title = "الأكثر شهرة";
  twoChildDiv.appendChild(texTwoChildDiv);
  let spanArray = [oneChildDiv, twoChildDiv]; // --------------
  parent.append(...spanArray);

  channelId.forEach((box) => {
    box.addEventListener("click", (e) => {
      parentVideos.innerHTML = "";
      spanArray.forEach((span) => {
        span.addEventListener("click", () => {
          parentVideos.innerHTML = "";
          activeFunction(spanArray);
          getVideo(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${box.id}&maxResults=50&order=${span.id}&key=AIzaSyDDsLuqe_Gc10hV6RJ3_QBFhjW5blGZhW8`,parentVideos, buttonChild);
        });
      });
    });
  });
}
// Total Code 127
