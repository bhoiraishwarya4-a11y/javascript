document.title = "Text Page";
'Text Page'
document.body.style.backgroundColor = "#282c34";
'#282c34'
let img = document.createElement("img");
undefined
img.src = "https://cdn2.sbnation.com/entry_photo_images/8101001/smartphone-lineup_1020_large_verge_medium_landscape.jpg";
'https://cdn2.sbnation.com/entry_photo_images/8101001/smartphone-lineup_1020_large_verge_medium_landscape.jpg'
img.style.width = "100vw";
'100vw'
img.style.height = "50vh";
'50vh'
img.style.objectFit = "cover";
'cover'
img.style.display = "block";
'block'
img.style.margin = "0 auto";
'0 auto'
document.body.appendChild(img);
<img src=​"https:​/​/​cdn2.sbnation.com/​entry_photo_images/​8101001/​smartphone-lineup_1020_large_verge_medium_landscape.jpg" style=​"width:​ 100vw;​ height:​ 50vh;​ object-fit:​ cover;​ display:​ block;​">​

let heading = document.createElement("h1");
undefined
heading.textContent = "Welcome To My Dynamic Page";
'Welcome To My Dynamic Page'
heading.style.color = "white";
'white'
heading.style.textAlign = "center";
'center'
heading.style.fontSize = "2.5rem";
'2.5rem'
heading.style.marginTop
''
document.body.appendChild(heading);

<h1 style=​"color:​ white;​ text-align:​ center;​ font-size:​ 2.5rem;​ margin-top:​ 20px;​">​Welcome To My Dyanamic Page​</h1>​

let para = document.createElement("p");
undefined
para.textContent = "This Page Is Fully Created Using JavaScript In Console!";
'This Page Is Fully Created Using JavaScript In Console!'
para.style.color = "#ddd";
'#ddd'
para.style.fontSize = "1.2rem";
'1.2rem'
para.style.textAlign = "center";
'center'
para.style.maxWidth = "600px";
'600px'
para.style.margin = "20px auto";
'20px auto'
para.style.lineHeight = "1.6";
'1.6'
document.body.appendChild(para);

<p style=​"color:​ rgb(221, 221, 221)​;​ font-size:​ 1.2rem;​ text-align:​ center;​ max-width:​ 600px;​ margin:​ 20px auto;​ line-height:​ 1.6;​">​This Page Is Fully Created USing JavaScript In Console!​</p>​

let button = document.createElement("button");
undefined
button.textContent = "Click Me";
'Click Me'
button.style.display = "block";
'block'
button.style.margin = "20px auto";
'20px auto'
button.style.padding = "12px 24px";
'12px 24px'
button.style.fontSize = "1.2rem";
'1.2rem'
button.style.border = "none";
'none'
button.style.borderRadius = "8px";
'8px'
button.style.cursor = "pointer";
'pointer'
button.style.backgroundColor = "#ff9800";
'#ff9800'
button.style.color = "white";
'white'
button.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.3)";
'2px 2px 10px rgba(0,0,0,0.3)'
document.body.appendChild(button);
<button style=​"display:​ block;​ margin:​ 20px auto;​ padding:​ 12px 24px;​ font-size:​ 1.2rem;​ border-width:​ medium;​ border-style:​ none;​ border-color:​ currentcolor;​ border-image:​ none;​ border-radius:​ 8px;​ cursor:​ pointer;​ background-color:​ rgb(230, 81, 0)​;​ color:​ white;​">​Click Me​</button>​

button.addEventListener("mouseover", function () {
button.style.backgroundColor = "#e65100";
});

button.addEventListener("mouseout", function () {
button.style.backgroundColor = "#ff9800";
});
undefined
let card = document.createElement("div");
undefined
card.style.width = "300px";
'300px'
card.style.margin = "20px auto";
'20px auto'
card.style.padding = "20px";
'20px'
card.style.borderRadius = "12px";
'12px'
card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
'0 5px 15px rgba(0,0,0,0.2)'
card.style.backgroundColor = "#333";
'#333'
card.style.textAlign = "center";
'center'
document.body.appendChild(card);

<div style=​"width:​ 300px;​ margin:​ 20px auto;​ padding:​ 20px;​ border-radius:​ 12px;​ box-shadow:​ rgba(0, 0, 0, 0.2)​ 0px 5px 15px;​ background-color:​ rgb(51, 51, 51)​;​ text-align:​ center;​">​</div>​

let cardTitle = document.createElement("h2");
undefined
cardTitle.textContent = "JavaScript Rocks!";
'JavaScript Rocks!'
cardTitle.style.color = "#ff9800";
'#ff9800'
card.appendChild(cardTitle);

<h2 style=​"color:​ rgb(255, 152, 0)​;​">​javaScript Rocks!​</h2>​

let cardText = document.createElement("p");
undefined
cardText.textContent = "This Card Was Created Using JavaScript!";
'This Card Was Created Using JavaScript!'
cardText.style.color = "white";
'white'
cardText.style.fontSize = "1rem";
'1rem'
cardText.style.marginTop = "10px";
'10px'
card.appendChild(cardText);

<p style=​"color:​ white;​ font-size:​ 1rem;​ margin-top:​ 10px;​">​This Card Was Created Using JavaScript!​</p>​

document.body.style.display = "flex";
'flex'
document.body.style.flexDirection = "column";
'column'
document.body.style.justifyContent = "center";
'center'
document.body.style.height = "100vh";
'100vh'
document.body.style.fontFamily = "Arial, sans-serif";
'Arial, sans-serif'
