const section1 = document.querySelector("#section1");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");
const section4 = document.querySelector("#section4");
const sections = [section1,section2,section3,section4];
const menus = document.querySelectorAll("#header .center .gnb li");
const bg = document.querySelector(".main_right");
const spancolors = ["one","two","three","four"];
const bgColorChange = ["one","two","three","four"];
const headerspan = document.querySelectorAll("#header .center .gnb span");

// 섹션 이동 시 메뉴 디자인 변경 스크립트 시작 //
window.addEventListener("scroll", () => {
    let scTop = window.scrollY;
    for (let i = 0; i < sections.length; i++) {
      const offsetTop = sections[i].offsetTop;
      if (scTop >= offsetTop) {
        for (let j = 0; j < menus.length; j++) {
          menus[j].classList.remove("on");
          headerspan[j].classList.remove(spancolors[j]);
          bg.classList.remove(bgColorChange[j]);
        }
        menus[i].classList.add("on");
        headerspan[i].classList.add(spancolors[i])
        bg.classList.add(bgColorChange[i]);
      }
    }
});
// 섹션 이동 시 메뉴 디자인 변경 스크립트 끝 //



// 메뉴 클릭 시 해당 섹션으로 이동 스크립트 시작 //
for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({
        top:sections[i].offsetTop,
        behavior:"smooth"
        })
    });
}
// 메뉴 클릭 시 해당 섹션으로 이동 스크립트 끝 //




// 섹션 스크롤 이동 스크립트 시작 //
window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

let $html = $("html");
let page = 1;
let lastPage = $(".center").length;

$html.animate({scrollTop:0},10);

$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	let posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
});
// 섹션 스크롤 이동 스크립트 끝//




// 섹션3 책갈피 클릭 시 발생하는 이벤트 //
const portFolioList = document.querySelectorAll(".swiper-slide .btn");
const portFolioText = document.querySelectorAll(".swiper-slide .textbox");
for(let i=0; i<portFolioList.length; i++){

    for(let j=0; j<portFolioList[i].querySelectorAll("li").length; j++){
     
        portFolioList[i].querySelectorAll("li")[j].addEventListener("click",(e)=>{
            e.preventDefault();

            for(let k=0; k<portFolioList[i].querySelectorAll("li").length; k++){
              portFolioText[i].querySelectorAll(".text_list")[k].classList.remove("change");
              portFolioList[i].querySelectorAll("li")[k].classList.remove("change");
            }
            
            portFolioText[i].querySelectorAll(".text_list")[j].classList.add("change")
            portFolioList[i].querySelectorAll("li")[j].classList.add("change")
        })
    }
}

// 섹션2 책갈피 클릭 시 발생하는 이벤트 끝 //




// 이미지 변경 스크립트 시작 //
$(function() {
  const imageGroups = [
    {
      sizeUPSelector: ".sizeUP",
      mainImgSelector: ".main_img"
    },
    {
      sizeUPSelector: ".sizeUP2",
      mainImgSelector: ".main_img2"
    },
    {
      sizeUPSelector: ".sizeUP3",
      mainImgSelector: ".main_img3"
    },
    {
      sizeUPSelector: ".sizeUP4",
      mainImgSelector: ".main_img4"
    },
    {
      sizeUPSelector: ".sizeUP5",
      mainImgSelector: ".main_img5"
    }
  ];

  imageGroups.forEach(function(group) {
    const currentIndex = 0;
    const $sizeUP = $(group.sizeUPSelector);
    const $mainImg = $(group.mainImgSelector);
    const images = $sizeUP.find("img");

    // 이미지 클릭 이벤트
    $sizeUP.on("click", function() {
      const src = $(this).find("img").attr("src");
      changeImage(src, $mainImg, $sizeUP);
      currentIndex = $sizeUP.index(this);
    });
    // 이미지 변경 함수
    function changeImage(src, $mainImg, $sizeUP) {
      $mainImg.fadeOut(400, function() {
        $mainImg.attr("src", src).fadeIn(400);
        });
      }
    });
});

// 이미지 변경 스크립트 끝 //