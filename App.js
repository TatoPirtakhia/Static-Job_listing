import data from "./data.json" assert { type: "json" };

const list = document.querySelector("main");

const createTag = (
  tag,
  clasName,
  src,
  position,
  postedAt,
  contract,
  location,
  company,
  New,
  featured,
  language
) => {
  const element = document.createElement(tag);
  element.classList.add(clasName);
  if (src) {
    element.src = src;
  }
  if (position) {
    element.textContent = position;
  }
  if (postedAt) {
    element.textContent = postedAt;
  }
  if (contract) {
    element.textContent = contract;
  }
  if (location) {
    element.textContent = location;
  }
  if (company) {
    element.textContent = company;
  }
  if (New) {
    element.textContent = New;
  }
  if (featured) {
    element.textContent = featured;
  }
  if (language) {
    element.textContent = language;
  }
  return element;
};

for (let index = 0; index < data.length; index++) {
  const {
    company,
    logo,
    new: New,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = data[index];

  const box = createTag("div", "box");
  list.append(box);

  const userInfo = createTag("div", "userInfo");
  const userSkils = createTag("div", "userSkils");
  box.append(userInfo, userSkils);

  const image = createTag("img", "image", logo);
  const info = createTag("div", "info");
  userInfo.append(image, info);

  const photosnap = createTag("div", "photosnap");
  const Company = createTag(
    "p",
    "Company",
    null,
    null,
    null,
    null,
    null,
    company
  );
  photosnap.append(Company);

  if (New) {
    const NEW = createTag(
      "button",
      "NEW",
      null,
      null,
      null,
      null,
      null,
      null,
      "new!"
    );
    photosnap.append(NEW);
  }
  if (featured) {
    const Featured = createTag(
      "button",
      "featured",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      "featured"
    );
    photosnap.append(Featured);
  }

  const Position = createTag("h2", "position", null, position);
  const ul = createTag("ul", "ul");
  info.append(photosnap, Position, ul);
  const li1 = createTag("p", "posted", null, null, postedAt);
  const li2 = createTag("li", "contract", null, null, null, contract);
  const li3 = createTag("li", "location", null, null, null, null, location);
  ul.append(li1, li2, li3);

  const container = createTag("div", "container");
  userSkils.append(container);
  for (let i = 0; i < languages.length; i++) {
    const buton = createTag(
      "button",
      "button",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      languages[i]
    );
    container.append(buton);
  }
  const ifFeaturedContain = box.querySelector(".featured");
  if (ifFeaturedContain) {
    box.classList.add("boxIsFeatured");
  }
}
const menu = document.querySelector(".shearch_menu");

const main = document.querySelector("body");
const block = document.querySelector(".block");
main.addEventListener("click", update);

let clickCategory = [];
let buttons = [];
function update(e) {
  const { target } = e;
  if (target.classList.contains("button")) {
    const containerButton = createTag("div", "containerButton");
    const menuButton = createTag(
      "button",
      "menuButton",
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      target.textContent
    );
    clickCategory.push(target.textContent)
    console.log(clickCategory)
    const remove = createTag("img", "remove", "./images/icon-remove.svg");
    const removeConatiner = createTag("div", "removeConatiner");
    removeConatiner.append(remove);
    containerButton.append(menuButton, removeConatiner);
    menu.append(containerButton);
    buttons.push(containerButton)
    block.style.display = "block";
  }
}
const clearMenu = document.querySelector('.containerButton')
const clearButton = document.querySelector('.clear_button')
clearButton.addEventListener('click',() =>{
    console.log(buttons)
    for(let i = 0; i < buttons.length; i++){
        buttons[i].remove()
    }
 
    block.style.display = "none";
})
