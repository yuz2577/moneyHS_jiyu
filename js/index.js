
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
    epiLi = document.querySelector('#episodeSlide'),
    epiList = epiLi.querySelectorAll('li'),
    profileWrap = document.querySelector('#profileWrap'),
    profileIMG = document.querySelectorAll('.profileIMG'),
    netflixLogo = document.querySelector('#npLogo'),
    trailerVD = document.querySelectorAll('.tVD'),
    profileScroll = document.querySelector('#profileScroll'),
    lang = document.querySelectorAll('#lang li'),
    videoBT = document.querySelector('#videoBT');
    console.log(videoBT)

    console.log(lang)

    console.log(netflixLogo)

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
        cursorItemCircle.style.transform = "scale(.5)"
        
        function moveM (pageX, pageY) {
            mask.style.left = pageX - mask.offsetWidth/0 + 'px';
            mask.style.top = pageY - mask.offsetHeight/3 + 'px';

            console.log(pageY - mask.offsetHeight)
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
////////////////
li[0].addEventListener('click', (self) => {
    section[0].scrollIntoView({behavior:'smooth'});
    li[0].style.background=onColor;
    li[1].style.background=offColor;
    li[2].style.background=offColor;
    li[3].style.background=offColor;

    menus[0].style.color = onColor;
    menus[1].style.color=offColor;
    menus[2].style.color=offColor;
    menus[3].style.color=offColor;
})
li[1].addEventListener('click', () => {
    section[1].scrollIntoView({behavior:'smooth'})
    li[1].style.background=onColor;
    li[0].style.background=offColor;
    li[2].style.background=offColor;
    li[3].style.background=offColor;

    menus[1].style.color = onColor;
    menus[0].style.color=offColor;
    menus[3].style.color=offColor;
    menus[2].style.color=offColor;
})
li[2].addEventListener('click', () => {
    section[2].scrollIntoView({behavior:'smooth'})
    li[2].style.background=onColor;
    li[1].style.background=offColor;
    li[3].style.background=offColor;
    li[0].style.background=offColor;

    menus[2].style.color = onColor;
    menus[1].style.color=offColor;
    menus[0].style.color=offColor;
    menus[3].style.color=offColor;
})
li[3].addEventListener('click', () => {
    section[3].scrollIntoView({behavior:'smooth'})
    li[3].style.background=onColor;
    li[1].style.background=offColor;
    li[2].style.background=offColor;
    li[0].style.background=offColor;

    menus[3].style.color = onColor;
    menus[1].style.color=offColor;
    menus[2].style.color=offColor;
    menus[0].style.color=offColor;
})
///////////////////2P 슬라이드////////////////////////////////
const seasonBox = document.querySelector('#seasonBOX'),
      seasonSlide = document.querySelector('#seasonSlide'),
      season = document.querySelectorAll('.season');
console.log(season)

seasonBox.addEventListener('scroll',function() {
    console.log(this.scrollTop)
})


if(window.location =="http://127.0.0.1:5500/%EC%A2%85%EC%9D%B4%EC%9D%98%EC%A7%91/JPindex.html") {
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

} else if (window.location !="http://127.0.0.1:5500/%EC%A2%85%EC%9D%B4%EC%9D%98%EC%A7%91/JPindex.html"){
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
        .then(jsons => jsons.ep)

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
    speed = 0.009;

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
    
        fourthPgBg.style.transform = "translate3d("+ -(mouseX/10) +"px," + -(mouseY/1000) +"px,0) rotate3d(0,1,0,"+ -mouseX / 500 +"deg)";
        
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


//

