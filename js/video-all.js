import {header, navigation, getVideo} from "./global.js";
header("../index.html","هيثم طلعت", "الرئيسية", "#visuals", "المرئيات", "../#bock", "الكتب","../#", "المقالات", "../html/indexEng.html", "English");
navigation('../index.html', "الرئيسية", '../#visuals', "المرئيات", '../#bock', "الكتب", '../html/whit.html', 'من نحن', '../html/indexEng.html', "English");

let viId = document.querySelectorAll(".visuals .box-all .box");
viId.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    videos.innerHTML = "";
    viId.forEach(e => e.classList.remove("active"));
    e.currentTarget.classList.add("active");
    getVideo(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${ele.id}&maxResults=50&order=date&key=AIzaSyA6Bn7dJHlf7G8IxR7I_ZPCP_Ew-83sqkY`).then((result) => {
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


// Videos Counte
let videos = document.querySelector(".videos");
getVideo(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLj8UFOcdFrvlh24Lw7jrgA&maxResults=50&order=date&key=AIzaSyDDsLuqe_Gc10hV6RJ3_QBFhjW5blGZhW8`).then((result) => {
  function* generateSomething() {
      for (let i = 0; i <= result.length; i++) {
        let box = document.createElement("div"); 
        box.className = "box"; 
        let createP = document.createElement("p");
        let repoNameAll = document.createTextNode(result[i].snippet.title);
        createP.appendChild(repoNameAll);
        box.appendChild(createP);
        box.innerHTML +=
          `<iframe
            width="95%"
            height="170"
            src="https://www.youtube.com/embed/${result[i].id.videoId}?rel=0"
            title="${result[i].snippet.title}" frameborder="0"allow="accelerometer;
            autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture"allowfullscreen>
          </iframe>`;
        yield videos.appendChild(box);
      }
  }

// Start Click In Genarators videos
let buttonChild = document.querySelectorAll(".clickButton div");

const generator = generateSomething();
  // Videos 10 Number
  for (let i = 0; i <= 9; i++) {
    generator.next().value;
  }
  buttonChild.forEach((a) => {
    a.addEventListener("click", (e) => {
      // Remove Class Active
      buttonChild.forEach((a) => a.classList.remove("active"));
      // Add Class Active
      e.currentTarget.classList.add("active");
      // Add Events No Click
      a.style.cssText = "pointer-events: none";
      videos.innerHTML = "";
      // Scrolling To Top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      // Add Videos On Click 10 Number
      for (let i = 0; i <= 9; i++) {
        generator.next().value;
      }
    });
  });
});
// End Click In Genarators videos

 
