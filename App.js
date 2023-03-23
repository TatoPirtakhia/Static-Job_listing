import data from "./data.json" assert {type:"json"}

const list = document.querySelector('main')

const createTag = (tag,clasName,src,position,postedAt,contract,location) =>{
   const element = document.createElement(tag) 
   element.classList.add(clasName)
    if (src){
        element.src = src;
    }
    if(position){
        element.textContent = position
    }
    if(postedAt){
        element.textContent = postedAt
    }
    if(contract){
        element.textContent = contract
    }
    if(location){
        element.textContent = location
    }
   return element
}


for (let index = 0 ; index < data.length; index++){
    const {    
        company,logo, New , featured,position,role,level,postedAt,contract,location,language,tools
    } = data[index];
     

    const box = createTag("div", "box")
    list.append(box)

    const userInfo = createTag("div","userInfo")
    const userSkils = createTag("div", "userSkils")
    box.append(userInfo,userSkils)

    const image = createTag("img", "image",logo)
    const info = createTag('div',"info")
    userInfo.append(image,info)

    const photosnap = createTag("div","photosnap")
    const Position = createTag("h2","position",null,position)
    const ul = createTag("ul","ul")
    info.append(photosnap,Position,ul)
    const li1 = createTag("p","posted",null,null,postedAt)
    const li2 = createTag("li","contract",null,null,null,contract)
    const li3 = createTag("li","location",null,null,null,null,location)
    ul.append(li1,li2,li3)

}