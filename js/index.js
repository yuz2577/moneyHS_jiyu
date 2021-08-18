window.onload=function() {
    const mask = document.querySelector('#maskBox'),
    scrollB = document.querySelector('#scrollBar'),
    indis = document.querySelector('#indi'),
    roundBt = document.querySelector('#roundBt'),
    firstLogo = document.querySelector('#firstLogo'),
    nextfirstLogo = document.querySelector('#NextfirstLogo'),
    htmls = document.querySelector('html'),
    bodys = document.getElementsByTagName('body'),
    menu = document.querySelector('#menu'),
    li = document.querySelectorAll('.indi'),
    indiclick = document.queryCommandValue('#indiclick'),
    menus = document.querySelectorAll('.menus'),
    section = document.querySelectorAll('section'),
    epiLiBox = document.querySelector('#episodeBOX')
    epiLi = document.querySelector('#episodeSlide'),
    epiSlide = epiLi.querySelectorAll('li'),
    epiList = epiLi.querySelectorAll('li'),
    profileWrap = document.querySelector('#profileWrap'),
    profileIMG = document.querySelectorAll('.profileIMG'),
    netflixLogo = document.querySelector('#npLogo'),
    trailerVD = document.querySelectorAll('.tVD'),
    profileScroll = document.querySelector('#profileScroll'),
    lang = document.querySelectorAll('#lang li'),
    videoBT = document.querySelector('#videoBT')


    netflixLogo.addEventListener('click',function() {
        section[0].scrollIntoView({behavior:'smooth'});
    })
    var offColor = 'grey',
        onColor = 'white'

    mask.onmousedown = function(event) {
        mask.style.position = "absolute"
        scrollB.style.opacity = "0"
        firstLogo.style.opacity = "0"
        cursorItemCircle.style.backgroundColor =  "white";
        cursorItemCircle.style.transform = "scale(.5)";
        setInterval(()=> {
            firstLogo.style.display = 'none'
        },500)
        
        function moveM (pageX, pageY) {
            mask.style.left = pageX - mask.offsetWidth/0 + 'px';
            mask.style.top = pageY - mask.offsetHeight/3 + 'px';

            // console.log(pageY - mask.offsetHeight)
            if(pageY - mask.offsetHeight >= -300) {
                mask.style.top ="300%";
                mask.style.opacity = "0";
                roundBt.style.opacity="1"
                indis.style.left="0%"
                nextfirstLogo.style.opacity="1"
                menu.style.opacity="1"
            }
        }
        moveM(event.pageX, event.pageY);

        function onMouseMove(event) {
            moveM(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove',onMouseMove)

        mask.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            mask.onmouseup = null;
            cursorItemCircle.style.backgroundColor =  "#B43131";
            cursorItemCircle.style.transform = "scale(1)"
          };
    }

mask.ondragstart = function() {
    return false;
    }


if (mask.style.top === "200%") {
    console.log('zz')
}

// Javascript
///슬라이드 고정///
scrollDisable()

function scrollDisable(){
    htmls.classList.add('hidden')
}
function scrollAble(){
    htmls.classList.remove('hidden')
}
//////////////
var nowHere = [0,1,2,3];
now = 0;
li[0].style.background = onColor;
menus[0].style.color = onColor;
for(let i=0; i<=3; i++) {
    nowHere.forEach((item)=>{
        menus[i].addEventListener('click',()=>{
            now = i;
            li[i].style.background = onColor;
            menus[i].style.color = onColor;
            section[i].scrollIntoView({behavior:'smooth'});
            if(now == i) {
                li[i].style.background = onColor;
                menus[i].style.color = onColor;
                if (now==0) {
                    li[i+1].style.background = offColor;
                    li[i+2].style.background = offColor;
                    li[i+3].style.background = offColor;
                    menus[i+1].style.color = offColor;
                    menus[i+2].style.color = offColor;
                    menus[i+3].style.color = offColor;
                }
                if (now>=1) {
                    li[i-1].style.background = offColor;
                    menus[i-1].style.color = offColor;
                    if (now==1) {
                        li[i+1].style.background = offColor;
                        li[i+2].style.background = offColor;
                        menus[i+1].style.color = offColor;
                        menus[i+2].style.color = offColor;
                    }
                    if (now>=2) {
                        li[i-2].style.background = offColor;
                        menus[i-2].style.color = offColor;
                        if (now==2) {
                            li[i+1].style.background = offColor;
                            menus[i+1].style.color = offColor;
                        }
                    }
                    if (now >= 3) {
                        li[i-3].style.background = offColor;
                        menus[i-3].style.color = offColor;
                        console.log(now)
                    }
                }
            }
        })
        li[i].addEventListener('click',()=>{
            li[i].style.background = onColor;
            menus[i].style.color = onColor;
            section[i].scrollIntoView({behavior:'smooth'});
            now = i;
            if(now == i) {
                li[i].style.background = onColor;
                menus[i].style.color = onColor;
                if (now==0) {
                    li[i+1].style.background = offColor;
                    li[i+2].style.background = offColor;
                    li[i+3].style.background = offColor;
                    menus[i+1].style.color = offColor;
                    menus[i+2].style.color = offColor;
                    menus[i+3].style.color = offColor;
                }
                if (now>=1) {
                    li[i-1].style.background = offColor;
                    menus[i-1].style.color = offColor;
                    if (now==1) {
                        li[i+1].style.background = offColor;
                        li[i+2].style.background = offColor;
                        menus[i+1].style.color = offColor;
                        menus[i+2].style.color = offColor;
                    }
                    if (now>=2) {
                        li[i-2].style.background = offColor;
                        menus[i-2].style.color = offColor;
                        if (now==2) {
                            li[i+1].style.background = offColor;
                            menus[i+1].style.color = offColor;
                        }
                    }
                    if (now >= 3) {
                        li[i-3].style.background = offColor;
                        menus[i-3].style.color = offColor;
                        console.log(now)
                    }
                }
            }

        })
    })
}
for (let i=0; i<=3; i++) {

}


///////////////////2P 슬라이드////////////////////////////////
function transformTop(t) {
    if(transformT >= 1) {
        transformT=1;
    } else if (transformT<= -69) {
        transformT=-69;
    }
    transformT -= ((t.deltaY * 0.01)*10);
    console.log(transformT)
    epiLi.style.top = `${transformT}vh`

}
let transformT=1;


epiLiBox.onwheel = transformTop;



if(window.location.href =="http://127.0.0.1:5501/moneyHS_jiyu-main/JP_index.html") {
    loadEpi ()
    .then (ep => {
        console.log(ep)
        setClick(ep)
    })

    function loadEpi () {
        return fetch('data/dataJP.json')
        .then(res => res.json())
        .then(jsons => jsons.ep)
    }

    function displayEpi(ep) {
        const jsonContent = document.querySelector('#freevwText');
        const jsonMovie = document.querySelector('#freevwIMG');
        // console.log('skalfkdlkjnfd');
        jsonContent.innerHTML = ep.map(epBox => changeContent(epBox)).join('');
        jsonMovie.style.backgroundImage = ep.map(epBox => changeMovie(epBox)).join('');
        // console.log(ep.map(epBox => changeMovie(epBox)).join(''))
    }

    function changeContent(epBox) {
        return `
        ${epBox.content}
        `
    }

    function changeMovie(epBox) {
        return `
        url(${epBox.image})`
    }

    function setClick(ep) {
        epiLi.addEventListener('click',event => episodeClick(event,ep))
    }

    function episodeClick(event,ep) {
        const dataset = event.target.dataset;
        const key = dataset.key;
        const value = dataset.value;
        const filtered = ep.filter(epBox => epBox[key] == value);
        displayEpi(filtered)
    }
    
} else {
/////////////////////////////////데이터데이터데이터ㅡㅡ//
epiLi.addEventListener('click',function () {
    loadEpi ()
    .then (ep => {
        console.log(ep)
        setClick(ep)
    })


    function loadEpi () {
        return fetch('data/data.json')
        .then(res => res.json())
        .then(jsons => jsons.ep);

        // if (window.location.href="../JPindex.html"){
        // return fetch('data/dataJP.json')
        // .then(res => res.json())
        // .then(jsons => jsons.ep)
        // }
    }

    function displayEpi(ep) {
        const jsonContent = document.querySelector('#freevwText');
        const jsonMovie = document.querySelector('#freevwIMG');
        // console.log(jsonMovie);
        jsonContent.innerHTML = ep.map(epBox => changeContent(epBox)).join('');
        jsonMovie.style.backgroundImage = ep.map(epBox => changeMovie(epBox)).join('');
        // console.log(ep.map(epBox => changeMovie(epBox)).join(''))
    }

    function changeContent(epBox) {
        return `
        ${epBox.content}
        `
    }

    function changeMovie(epBox) {
        return `
        url(${epBox.image})`
    }

    function setClick(ep) {
        epiLi.addEventListener('click',event => episodeClick(event,ep))
    }

    function episodeClick(event,ep) {
        const dataset = event.target.dataset;
        const key = dataset.key;
        const value = dataset.value;
        const filtered = ep.filter(epBox => epBox[key] == value);
        displayEpi(filtered)
    }
    })
}
//우와 드디어 해냈다 !!! ^^^^^^^^^따라쳐본거지만,...^^//////////////
    for(let i=0; i<epiList.length; i++) {
        epiList[i].addEventListener('click',function(event) {
            epiList.forEach((item) => {
                item.classList.contains('on') ? item.classList.remove('on') : epiList[i].classList.add('on')
            })
        })
        epiList[i].addEventListener('mousemove',function(event) {
            epiList.forEach((item) => {
                epiList[i].addEventListener('mousemove',function(e) {
                    cursorItemCircle.style.backgroundColor =  "white";
                    cursorItemCircle.style.transform = "scale(.5)"
                })
                epiList[i].addEventListener('mouseout',function(e) {
                    cursorItemCircle.style.backgroundColor =  "#B43131";
                    cursorItemCircle.style.transform = "scale(1)"
                })
            })
        })
    }


///////////////3pg 휠이벤트////////////
    function wheelEvent(event) {
        scale += event.deltaY * 0.01;
        console.log(scale)
        profileWrap.style.left=`-${scale*5}vw`;
        profileScroll.style.opacity = '0'
    }
    let scale=1;

    profileWrap.onwheel = wheelEvent;

///////////////////////////////////////////////4pg/////////////
let x = 0,
    y = 0,
    mouseX = 0,
    mouseY = 0,
    speed = 0.1;

    const fourthPgBg = document.querySelector('#fourthPgBg')
    console.log(fourthPgBg);

    section[3].addEventListener('mousemove', mouseN3d, false);

    function mouseN3d(event) {
        x = (event.clientX - window.innerWidth / 2);
        y = (event.clientY - window.innerHeight / 2);
    }
    move3d ();

    function move3d() {
        mouseX += (x - mouseX) * speed;
        mouseY += (y- mouseY) * speed;
    
        fourthPgBg.style.transform = "translate3d("+ -(mouseX/20) +"px," + -(mouseY/1000) +"px,0) rotate3d(0,1,0,"+ -mouseX / 1000 +"deg)";
        
        window.requestAnimationFrame(move3d)
    }

    ////////////////////////마우스//////////////////////
    let mx =0, my =0,
        cursorItem = document.querySelector('#mouse');
        cursorItemCircle = document.querySelector('#mouseC')
        console.log(cursorItemCircle)
    window.addEventListener("mousemove",function(e){
        x = e.pageX;
        y = e.pageY;
        // console.log(e.pageX , e.pageY)
    })
    cursors()
    function cursors() {
        mx += (x - mx) * 1;
        my += (y- my) * 1;

        requestAnimationFrame(cursors);
        cursorItem.style.transform =  "translate("+ mx +"px, "+ my + "px )";
    }

    roundBt.addEventListener('mousemove',function(e) {
        cursorItemCircle.style.backgroundColor =  "white";
        cursorItemCircle.style.transform = "scale(.5)"
    })
    roundBt.addEventListener('mouseout',function(e) {
        cursorItemCircle.style.backgroundColor =  "#B43131";
        cursorItemCircle.style.transform = "scale(1)"
    })

    videoBT.addEventListener('mousemove',function(e) {
        cursorItemCircle.style.backgroundColor =  "white";
        cursorItemCircle.style.transform = "scale(.5)"
    })
    videoBT.addEventListener('mouseout',function(e) {
        cursorItemCircle.style.backgroundColor =  "#B43131";
        cursorItemCircle.style.transform = "scale(1)"
    })
    


    for(let i=0; i<li.length; i++) {
        li[i].addEventListener('mousemove',function(event) {
            li.forEach((item) => {
                li[i].addEventListener('mousemove',function(e) {
                    cursorItemCircle.style.backgroundColor =  "white";
                    cursorItemCircle.style.transform = "scale(.5)"
                })
                li[i].addEventListener('mouseout',function(e) {
                    cursorItemCircle.style.backgroundColor =  "#B43131";
                    cursorItemCircle.style.transform = "scale(1)"
                })
            })
        })
    }

    for(let i=0; i<li.length; i++) {
        li[i].addEventListener('mousemove',function(event) {
            li.forEach((item) => {
                li[i].addEventListener('mousemove',function(e) {
                    cursorItemCircle.style.backgroundColor =  "white";
                    cursorItemCircle.style.transform = "scale(.5)"
                })
                li[i].addEventListener('mouseout',function(e) {
                    cursorItemCircle.style.backgroundColor =  "#B43131";
                    cursorItemCircle.style.transform = "scale(1)"
                })
            })
        })
    }

    for(let i=0; i<profileIMG.length; i++) {
        profileIMG[i].addEventListener('mousemove',function(event) {
            profileIMG.forEach((item) => {
                profileIMG[i].addEventListener('mousemove',function(e) {
                    cursorItemCircle.style.backgroundColor =  "white";
                    cursorItemCircle.style.transform = "scale(.5)"
                })
                profileIMG[i].addEventListener('mouseout',function(e) {
                    cursorItemCircle.style.backgroundColor =  "#B43131";
                    cursorItemCircle.style.transform = "scale(1)"
                })
            })
        })
    }

    for(let i=0; i<trailerVD.length; i++) {
       trailerVD[i].addEventListener('mousemove',function(event) {
            trailerVD.forEach((item) => {
                trailerVD[i].addEventListener('mousemove',function(e) {
                    cursorItemCircle.style.backgroundColor =  "white";
                    cursorItemCircle.style.transform = "scale(.5)"
                })
                trailerVD[i].addEventListener('mouseout',function(e) {
                    cursorItemCircle.style.backgroundColor =  "#B43131";
                    cursorItemCircle.style.transform = "scale(1)"
                })
            })
        })
    }

    for(let i=0; i<lang.length; i++) {
        lang[i].addEventListener('mousemove',function(event) {
             lang.forEach((item) => {
                 lang[i].addEventListener('mousemove',function(e) {
                     cursorItemCircle.style.backgroundColor =  "white";
                     cursorItemCircle.style.transform = "scale(.5)"
                 })
                 lang[i].addEventListener('mouseout',function(e) {
                     cursorItemCircle.style.backgroundColor =  "#B43131";
                     cursorItemCircle.style.transform = "scale(1)"
                 })
             })
         })
     }
}

//

