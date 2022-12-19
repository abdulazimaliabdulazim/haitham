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
    <i class="fa-solid fa-align-left"></i>
  </div>`;
  socialMedia();
  scrollToTop();
  footer();
}

// Navigation
export function navigation(home, homeNmae, visuals, visualsName, bock, bockName, whit, weName, english, langName) {
  // Document Object Model
  // Parent
  let parent = document.createElement("nav");
  let leftIcone = document.querySelector(".fa-align-left");
  parent.style.cssText = "position: absolute; background-color: white ;width: 100%; height: auto; display: none";
  // Ul
  let navUl = document.createElement("ul");
  // Li
  let nav1 = document.createElement("li");
  let nav2 = document.createElement("li");
  let nav3 = document.createElement("li");
  let nav4 = document.createElement("li");
  let nav5 = document.createElement("li");
  let apendLi = [nav1, nav2, nav3, nav4, nav5];
  apendLi.forEach((ele) => {
    ele.style.cssText = "border-bottom: 1px solid #0000004d; padding: 20px 15px";
    ele.onclick = blockAnone;
  });
  // Links
  let a1 = document.createElement("a");
  let a2 = document.createElement("a");
  let a3 = document.createElement("a");
  let a4 = document.createElement("a");
  let a5 = document.createElement("a");
  // a1.className = "active"; 
  let links = [a1, a2, a3, a4, a5];
  links.forEach((ele) => {
    ele.style.cssText = "color: black; font-size: 30px";
    ele.onclick = activeFunction(apendLi);
  });
  // hred Links
  a1.href = home;
  a2.href = visuals;
  a3.href = bock;
  a4.href = whit;
  a5.href = english;
 
  // Texts Links
  let text1 = document.createTextNode(homeNmae);
  let text2 = document.createTextNode(visualsName);
  let text3 = document.createTextNode(bockName);
  let text4 = document.createTextNode(weName);
  let text5 = document.createTextNode(langName);
  // Append Texts On Links
  a1.appendChild(text1);
  a2.appendChild(text2);
  a3.appendChild(text3);
  a4.appendChild(text4);
  a5.appendChild(text5);
  // Append Links On Ul
  nav1.appendChild(a1);
  nav2.appendChild(a2);
  nav3.appendChild(a3);
  nav4.appendChild(a4);
  nav5.appendChild(a5);
  // Append Li On Ul
  navUl.append(...apendLi);
  // Append Ul On Parent(Nav)
  parent.appendChild(navUl);
  // Append Parent(Nav) On Header
  document.querySelector("header").appendChild(parent);
  // Click on the icon to Appear Navigation
  function blockAnone() {
    parent.style.display == "block"? parent.style.cssText = "display: none" : parent.style.cssText = "display: block; background-color: white";
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