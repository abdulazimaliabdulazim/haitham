// Components Header
export function header(homeSrc, logoName, homeName, visuals, visualsName, bock, bockName, article, articleName, engSrc, langName) {
  document.querySelector("header").innerHTML = 
  `<div class="container">
    <div class="head">
      <div class="logo">
          <a href='${homeSrc}'>
          <h3>${logoName}</h3>            
          </a>
      </div>
      <nav>
          <ul>
            <li>
                <a href='${homeSrc}'>
                ${homeName}
                </a>
            </li>
            <li>
                <a href='${visuals}'>${visualsName}</a>
            </li>
            <li>
                <a href='${bock}'>${bockName}</a>
            </li>
            <li>
                <a href='${article}'>${articleName}</a>
            </li>
            <li>
                <a href='${engSrc}'>${langName}</a>
            </li>
          </ul>
      </nav>
    </div>
    <div class="parentIcon">
      <div class="allIcon one one-three"></div>
      <div class="allIcon two two-four"></div>
      <div class="allIcon three one-three"></div>
      <div class="allIcon four two-four"></div>
    </div>
  </div>`;
  socialMedia();
  scrollToTop();
  footer();
}
    
// Navigation
export function navigation(home, homeNmae, visuals, visualsName, bock, bockName, english, langName, whit, weName) {
  // Parent
  let parent = document.createElement("nav");
  parent.className = "navMediaM";
  let leftIcone = document.querySelector(".parentIcon");
  parent.style.cssText = "background-color: white; position: absolute; width: 100%; transition: 0.5s; transform: translateX(-768px)";
  // Ul
  let navUl = document.createElement("ul");
  // Li
  let liS = [document.createElement("li"), document.createElement("li"), document.createElement("li"), document.createElement("li"), document.createElement("li")];
  liS[0].className = "active";
  liS.forEach((ele) => {
    ele.style.cssText = "border-bottom: 1px solid #0000004d; padding: 20px 15px";
    ele.onclick = blockAnone;
  });
  // Links
  let links = [document.createElement("a"), document.createElement("a"), document.createElement("a"), document.createElement("a"), document.createElement("a")];
  links.forEach((ele) => {
    ele.style.cssText = "color: black; font-size: 30px";
    ele.onclick = activeFunction(liS);
  });
  // hred Links
  links[0].href = home;
  links[1].href = visuals;
  links[2].href = bock;
  links[3].href = whit;
  links[4].href = english;
 
  // Texts Links
  let texts = [document.createTextNode(homeNmae), document.createTextNode(visualsName), document.createTextNode(bockName), document.createTextNode(weName), document.createTextNode(langName)];

  // Append Texts On Links
  links[0].appendChild(texts[0]);
  links[1].appendChild(texts[1]);
  links[2].appendChild(texts[2]);
  links[3].appendChild(texts[3]);
  links[4].appendChild(texts[4]);
  // Append Links On Ul
  liS[0].appendChild(links[0]);
  liS[1].appendChild(links[1]);
  liS[2].appendChild(links[2]);
  liS[3].appendChild(links[3]);
  liS[4].appendChild(links[4]);
  // Append Li On Ul
  navUl.append(...liS);
  // Append Ul On Parent(Nav)
  parent.appendChild(navUl);
  // Append Parent(Nav) On Header
  document.querySelector("header").appendChild(parent);
  // Click on the icon to Appear Navigation
  let one_three = document.querySelectorAll(".one-three");
  function blockAnone() {
    if (parent.style.transform == "translateX(-768px)") {
      parent.style.transform = "translateX(0)";
      one_three.forEach(ele =>  ele.style.transform = "translateX(-43%)");
    } else {
      parent.style.transform = "translateX(-768px)";
      one_three.forEach(ele =>  ele.style.transform = "translateX(0%)");
    }
     
  }
  leftIcone.onclick = blockAnone; 
}

// Scroll To Top Website
export function scrollToTop() {
  let button = document.createElement("div");
  button.id = "button";
  let icon = document.createElement("i");
  icon.className = "fa-solid fa-angles-up";
  button.appendChild(icon);
  document.body.appendChild(button);
  window.onscroll = function () {
    if (window.scrollY >= 1000) {
      button.style.cssText =
        "display: block; background-color: var(--mane-color); color: white; border-radius: 5px; padding: 8px; position: fixed; bottom: 20px; right: 20px; border: none; cursor: pointer; box-shadow: inset -2px -2px 10px #0000006b, inset 2px 2px 10px #0000006b; animation-name: shadow; animation-duration: 3s; animation-timing-function: linear; animation-iteration-count: infinite";
    } else {
      button.style.cssText =
        "display: none; background-color: var(--mane-color); color: white; border-radius: 5px; padding: 8px; position: fixed; bottom: 20px; right: 20px; border: none; cursor: pointer; box-shadow: inset -2px -2px 10px #0000006b, inset 2px 2px 10px #0000006b; animation-name: shadow; animation-duration: 3s; animation-timing-function: linear; animation-iteration-count: infinite";
    }
  };
  button.onclick = function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
}

// Videos Mine
export async function getVideo(apiLink) {
  let key = ["AIzaSyA6Bn7dJHlf7G8IxR7I_ZPCP_Ew-83sqkY"];
  let count = 50;
  try {
    let result = await fetch(apiLink);
    let jsDataFour = await result.json();
    return jsDataFour.items;
  } catch (error) {
    console.log(error);
  } finally {
    // console.log("Good");
  }
}

// Class Active
export function activeFunction(eleActive) {
  eleActive.forEach((a) => {
    a.addEventListener("click", (e) => {
      eleActive.forEach((a) => a.classList.remove("active"));
      e.currentTarget.classList.add("active");
    });
  });
}

// Start Social Media
export function socialMedia() {
  document.querySelector("body").innerHTML += 
  `<div class="social-icon">
    <div class="parent">
      <i class="fa-solid fa-comments fa-fw"></i>
      <div class="box">
        <a href="https://web.facebook.com/drhaithamofficial" target="_blank">
          <i class="fab fa-facebook-f fa-fw"></i>
        </a>
      </div>
      <div class="box">
        <a href="https://twitter.com/ibn_badys" target="_blank">
          <i class="fab fa-twitter fa-fw"></i>
        </a>
      </div>
      <div class="box">
        <a href="https://www.youtube.com/channel/UCLj8UFOcdFrvlh24Lw7jrgA/about" target="_blank" >
          <i class="fab fa-youtube fa-fw"></i>
        </a>
      </div>
    </div>
  </div>
  `;
}

// Components Footer
export function footer() {
  let containerDiv = document.createElement("div");
  containerDiv.className = "container";
  // Text One
  let p = document.createElement("p");
  let text = document.createTextNode(`حقوق الطبع محفوظة ${new Date().getFullYear()}`);
  p.style.cssText = "color: white;font-size: 20px;font-weight: bold;text-align: center;line-height: 1.6;margin: 0;padding: 10px 0";
  p.appendChild(text);
  // Br
  let br = document.createElement("br");
  p.append(br);
  // Text Two
  let text2 = document.createTextNode('النسخة التجريبية المؤقتة الاصدار 3.0');
  p.append(text2);
  containerDiv.appendChild(p);
  let footer = document.querySelector("footer");
  footer.style.backgroundColor = "var(--mane-color-opacty)";
  footer.appendChild(containerDiv);
}

// create Bocks
export function createBocks(srcImage, textParagraph, scrLink, textDawnload, icon) {
  let bocks = document.querySelector("article.articles .container .bocks");
  bocks.innerHTML +=
  `<div class="bock">
    <div class="images">
      <img src=${srcImage}>
    </div>
    <div class="text">
      <p>${textParagraph}</p>
      <a class="download" href=${scrLink} target="_blanck">
        ${textDawnload}
        <i class="${icon}"></i>
      </a>
    </div>
  </div>`;
}