
const data = [
    {id: 1, name: 'LARGE FRIES', Image: 'img/menu/menu (1).png'},
    {id: 2, name: 'CHICKEN BUCKET', Image: 'img/menu/menu (2).png'},
    {id: 3, name: 'ZINGER BOX', Image: 'img/menu/menu (3).png'},
    {id: 4, name: 'CHICKEN ROLL', Image: 'img/menu/menu (4).png'},
    {id: 5, name: 'ALL CHICKEN BOX', Image: 'img/menu/menu (5).png'},
    {id: 6, name: 'PERI PERI CHICKEN', Image: 'img/menu/menu (6).png'},
    {id: 7, name: 'BURGER BOX', Image: 'img/menu/menu (7).png'},
    {id: 8, name: 'FRIES CHICKEN', Image: 'img/menu/menu (8).png'},
    {id: 9, name: 'BUDDY MEAL', Image: 'img/menu/menu (9).png'},
    {id: 10, name: 'KRISPER BURGER', Image: 'img/menu/menu (10).png'},
    {id: 11, name: 'VEG KRISPER BURGER', Image: 'img/menu/menu (11).png'},
    {id: 12, name: 'CLASSIC BURGER', Image: 'img/menu/menu (12).png'},
    {id: 13, name: '8PC BUCKET', Image: 'img/menu/menu (13).png'},
    {id: 14, name: 'MAX BUCKET', Image: 'img/menu/menu (14).png'},
    {id: 15, name: 'KRISPER MEAL', Image: 'img/menu/menu (15).png'},
    {id: 16, name: 'SMOKY CHICKEN', Image: 'img/menu/menu (16).png'},
]

const newList = data.map(item => {
    return ` 
        <li class="list-item">
        <div class="list-div">
        <img class="list-img" src="${item.Image}" alt="" />
        <h6 class="list-name">${item.name}</h6>
        </div>
        </li> `;
})

const ulElement = document.getElementById('list')
ulElement.innerHTML = newList.join('');

const sliderContainer = document.querySelector("#sliderContainer")
const gallery = document.querySelector('.gallery')
const cards = gallery.getElementsByTagName('li')



const sliderContainerWidth = sliderContainer.clientWidth;
let elementsToShow = 5;
if(document.body.clientWidth<576){
    elementsToShow = 1;
}else if(document.body.clientWidth<768){
    elementsToShow = 3;
}else if(document.body.clientWidth<992){
    elementsToShow = 4;
}


const cardWidth = sliderContainerWidth/elementsToShow;


gallery.style.width = cards.length*cardWidth+'px';
gallery.style.transition ='margin';
gallery.style.transitionDuration = '1s';

for(let index =0;  index < cards.length; index++ ) {
    const element = cards[index];
    element.style.width = cardWidth+'px';
}


const backBtn = document.getElementById("backBtn");
const prevBtn = document.getElementById("prevBtn");

prevBtn.addEventListener('click', function pre(){
    if(+gallery.style.marginLeft.slice(0,-2)!=-cardWidth*(cards.length-elementsToShow))
     gallery.style.marginLeft = ((+ gallery.style.marginLeft.slice(0,-2))-cardWidth)+'px';
}
)
backBtn.addEventListener('click',function back(){
    if(+gallery.style.marginLeft.slice(0,-2)!=0)
    gallery.style.marginLeft = ((+ gallery.style.marginLeft.slice(0,-2))+cardWidth)+'px';
}
)