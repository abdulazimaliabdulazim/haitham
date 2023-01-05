import {header, navigation, getVideo, activeFunction} from "./global.js";
header("../index.html","هيثم طلعت", "الرئيسية", "#visuals", "المرئيات", "../#bock", "الكتب","../#", "المقالات", "../html/indexEng.html", "English");
navigation('../index.html', "الرئيسية", '../#visuals', "المرئيات", '../#bock', "الكتب", '../html/whit.html', 'من نحن', '../html/indexEng.html', "English");

function propertyBox(parentBox, titleP, scrVideo, titleVideo) {
  parentBox.className = "box"; 
  let createP = document.createElement("p");
  let repoNameAll = document.createTextNode(titleP);
  createP.appendChild(repoNameAll);
  parentBox.appendChild(createP);
  parentBox.innerHTML +=
    `<iframe
      width="95%"
      height="170"
      src="https://www.youtube.com/embed/${scrVideo}?rel=0"
      title="${titleP}" frameborder="0"allow="accelerometer;
      autoplay; clipboard-write; encrypted-media;
      gyroscope; picture-in-picture"allowfullscreen>
    </iframe>`;
}

// Videos Counte
let videos = document.querySelector(".videos");
getVideo(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCLj8UFOcdFrvlh24Lw7jrgA&maxResults=50&order=date&key=AIzaSyA6Bn7dJHlf7G8IxR7I_ZPCP_Ew-83sqkY`).then((result) => {
  function* generateSomething() {
    for (let i = 0; i <= result.length; i++) {
      let box = document.createElement("div"); 
      propertyBox(box, result[i].snippet.title, result[i].id.videoId, result[i].snippet.title);
      yield videos.appendChild(box);
    }
  }

  let viId = document.querySelectorAll(".visuals .box-all .box");
  let buttonChild = document.querySelectorAll(".clickButton div");

  viId.forEach((ele) => {
      ele.addEventListener("click", (e) => {
        
          let parent = document.createElement("div");
          parent.className = "parentDivOnSpan";
          parent.style.cssText = "display: flex; flex-direction: column; position: relative;";
          let oneChildDiv = document.createElement("span");
          let twoChildDiv = document.createElement("span");
          let texOneChildDiv = document.createTextNode("الأحدث");
          oneChildDiv.className = "active"
          oneChildDiv.id = "viewCount";
          let texTwoChildDiv = document.createTextNode("الأكثر شهرة");
          twoChildDiv.className = "newAll";
          twoChildDiv.id = "searchSortUnspecified";
          oneChildDiv.appendChild(texOneChildDiv);
          twoChildDiv.appendChild(texTwoChildDiv);
          parent.appendChild(oneChildDiv);
          parent.appendChild(twoChildDiv);
          ele.after(parent);
          let spanArray = [oneChildDiv, twoChildDiv];

          spanArray.forEach((a) => {
            
            a.addEventListener("click", (e) => {
              videos.innerHTML = "";
              spanArray.forEach((a) => a.classList.remove("active"));
              e.currentTarget.classList.add("active");
              
              getVideo(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${ele.id}&maxResults=50&order=${a.id}&key=AIzaSyA6Bn7dJHlf7G8IxR7I_ZPCP_Ew-83sqkY`).then((result) => {
              function* generatChanlleNew() {
                for (let i = 0; i <= result.length; i++) {
                  let box = document.createElement("div"); 
                  propertyBox(box, result[i].snippet.title, result[i].id.videoId, result[i].snippet.title);
                  yield videos.appendChild(box);
                }
              }
              // Start Click In Genarators videos
              const generatorNew = generatChanlleNew();
              for (let i = 0; i <= 9; i++) {
                generatorNew.next().value;
              }
              clickOnBoxCreateVideos(generatorNew);
            });
              
            });
          });
        
        videos.innerHTML = "";
        activeFunction(viId);
        getVideo(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${ele.id}&maxResults=50&order=date&key=AIzaSyA6Bn7dJHlf7G8IxR7I_ZPCP_Ew-83sqkY`).then((result) => {
          function* generatChanlle() {
            for (let i = 0; i <= result.length; i++) {
              let box = document.createElement("div"); 
              propertyBox(box, result[i].snippet.title, result[i].id.videoId, result[i].snippet.title);
              yield videos.appendChild(box);
            }
          }
          // Start Click In Genarators videos
          const generator = generatChanlle();
          for (let i = 0; i <= 9; i++) {
            generator.next().value;
          }
          clickOnBoxCreateVideos(generator);
        });
      });
  });

  // Genarat Mine Videos
  const generatOfMine = generateSomething();
  for (let i = 0; i <= 9; i++) {
    generatOfMine.next().value;
  }

  function clickOnBoxCreateVideos(generatValueFoFunction) {
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
            generatValueFoFunction.next().value;
          }
        });
    });
  }
  clickOnBoxCreateVideos(generatOfMine);
});


// function test(thisClick) {
//   let parent = document.createElement("div");
//   parent.className = "parentDivOnSpan";
//   parent.style.cssText = "display: flex; flex-direction: column; position: relative;";
//   let oneChildDiv = document.createElement("span");
//   let twoChildDiv = document.createElement("span");
//   let texOneChildDiv = document.createTextNode("الأحدث");
//   oneChildDiv.className = "active"
//   oneChildDiv.id = "videosViewCount";
//   let texTwoChildDiv = document.createTextNode("الأكثر شهرة");
//   twoChildDiv.className = "newAll";
//   twoChildDiv.id = "videosSearchSortUnspecified";
//   oneChildDiv.appendChild(texOneChildDiv);
//   twoChildDiv.appendChild(texTwoChildDiv);
//   parent.appendChild(oneChildDiv);
//   parent.appendChild(twoChildDiv);
//   thisClick.after(parent);
//   let spanArray = [oneChildDiv, twoChildDiv];
//   activeFunction(spanArray);
// }


