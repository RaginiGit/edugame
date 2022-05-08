let bool = true;

window.addEventListener("load", () => {
    design();
    charcter();

})

window.addEventListener("orientationchange", () => {
    window.location.reload();
})


function design() {
    let details = navigator.userAgent;
    let regexp = /android|iphone|kindle|ipad/i;
    let isMobileDevice = regexp.test(details);
    if (!isMobileDevice) {
        document.write('<p style="color:#fff;font-size:8vh;">This is only for mobile device</p>');
        document.body.style.backgroundColor = "#d56c1d";
        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.fontFamily = "verdana";
        document.body.style.display = "flex";
        document.body.style.alignItems = "center";
        document.body.style.justifyContent = "center";

    }
    else {
        if (window.innerHeight < window.innerWidth) {
            document.write('<p style="color:#fff;font-size:8vh;">Rotate it</p>');
            document.body.style.backgroundColor = "#d56c1d";
            document.body.style.margin = "0";
            document.body.style.padding = "0";
            document.body.style.fontFamily = "verdana";
            document.body.style.display = "flex";
            document.body.style.alignItems = "center";
            document.body.style.justifyContent = "center";
            window.addEventListener("orientationchange", () => {
                window.location.reload();
            })
        }
    }
}


document.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        charcter();
    }
});
btn.addEventListener('click', function () {

    if (bool == false) {
        btn.classList.remove('active');
    }
    else {
        if (!btn.classList.contains('active')) {
            btn.classList.add('active');
        }
    }
    charcter();
});

let arr = ["क", "का", "कि", "की", "कु", "कू", "के", "कै", "को", "कौ", "कं", "कः", "ख", "खा", "खि", "खी", "खु", "खू", "खे", "खै", "खो", "खौ", "खं", "खः", "ग", "गा", "गि", "गी", "गु", "गू", "गे", "गै", "गो", "गौ", "गं", "गः", "घ", "घा", "घि", "घी", "घु", "घू", "घे", "घै", "घो", "घौ", "घं", "घः", "च", "चा", "चि", "ची", "चु", "चू", "चे", "चै", "चो", "चौ", "चं", "चः", "छ", "छा", "छि", "छी", "छु", "छू", "छे", "छै", "छो", "छौ", "छं", "छः", "ज", "जा", "जि", "जी", "जु", "जू", "जे", "जै", "जो", "जौ", "जं", "जः", "झ", "झा", "झि", "झी", "झु", "झू", "झे", "झै", "झो", "झौ", "झं", "झः", "ट", "टा", "टि", "टी", "टु", "टू", "टे", "टै", "टो", "टौ", "टं", "टः", "ठ", "ठा", "ठि", "ठी", "ठु", "ठू", "ठे", "ठै", "ठो", "ठौ", "ठं", "ठः", "ड", "डा", "डि", "डी", "डु", "डू", "डे", "डै", "डो", "डौ", "डं", "डः", "ढ", "ढा", "ढि", "ढी", "ढु", "ढू", "ढे", "ढै", "ढो", "ढौ", "ढं", "ढः", "ण", "णा", "णि", "णी", "णु", "णू", "णे", "णै", "णो", "णौ", "णं", "णः", "त", "ता", "ति", "ती", "तु", "तू", "ते", "तै", "तो", "तौ", "तं", "तः", "थ", "था", "थि", "थी", "थु", "थू", "थे", "थै", "थो", "थौ", "थं", "थः", "द", "दा", "दि", "दी", "दु", "दू", "दे", "दै", "दो", "दौ", "दं", "दः", "ध", "धा", "धि", "धी", "धु", "धू", "धे", "धै", "धो", "धौ", "धं", "धः", "न", "ना", "नि", "नी", "नु", "नू", "ने", "नै", "नो", "नौ", "नं", "नः", "प", "पा", "पि", "पी", "पु", "पू", "पे", "पै", "पो", "पौ", "पं", "पः", "फ", "फा", "फि", "फी", "फु", "फू", "फे", "फै", "फो", "फौ", "फं", "फः", "ब", "बा", "बि", "बी", "बु", "बू", "बे", "बै", "बो", "बौ", "बं", "बः", "भ", "भा", "भि", "भी", "भु", "भू", "भे", "भै", "भो", "भौ", "भं", "भः", "म", "मा", "मि", "मी", "मु", "मू", "मे", "मै", "मो", "मौ", "मं", "मः", "य", "या", "यि", "यी", "यु", "यू", "ये", "यै", "यो", "यौ", "यं", "यः", "र", "रा", "रि", "री", "रु", "रू", "रे", "रै", "रो", "रौ", "रं", "रः", "ल", "ला", "लि", "ली", "लु", "लू", "ले", "लै", "लो", "लौ", "लं", "लः", "व", "वा", "वि", "वी", "वु", "वू", "वे", "वै", "वो", "वौ", "वं", "वः", "श", "शा", "शि", "शी", "शु", "शू", "शे", "शै", "शो", "शौ", "शं", "शः", "ष", "षा", "षि", "षी", "षु", "षू", "षे", "षै", "षो", "षौ", "षं", "षः", "स", "सा", "सि", "सी", "सु", "सू", "से", "सै", "सो", "सौ", "सं", "सः", "ह", "हा", "हि", "ही", "हु", "हू", "हे", "है", "हो", "हौ", "हं", "हः", "क्ष", "क्षा", "क्षि", "क्षी", "क्षु", "क्षू", "क्षे", "क्षै", "क्षो", "क्षौ", "क्षं", "क्षः", "त्र", "त्रा", "त्रि", "त्री", "त्रु", "त्रू", "त्रे", "त्रै", "त्रो", "त्रौ", "त्रं", "त्रः", "ज्ञ", "ज्ञा", "ज्ञि", "ज्ञी", "ज्ञु", "ज्ञू", "ज्ञे", "ज्ञै", "ज्ञो", "ज्ञौ", "ज्ञं", "ज्ञः",];
let belowMarks = ["कु", "कू", "खु", "खू", "गु", "गू", "घु", "घू", "चु", "चू", "छु", "छू", "जु", "जू", "झु", "झू", "टु", "टू", "ठु", "ठू", "डु", "डू", "ढु", "ढू", "णु", "णू", "तु", "तू", "थु", "थू", "दु", "दू", "धु", "धू", "नु", "नू", "पु", "पू", "फु", "फू", "बु", "बू", "भु", "भू", "मु", "मू", "यु", "यू", "रु", "रू", "लु", "लू", "वु", "वू", "शु", "शू", "षु", "षू", "सु", "सू", "हु", "हू", "क्षु", "क्षू", "त्रु", "त्रू", "ज्ञु", "ज्ञू"];

speakerbtn.addEventListener('click', () => {
    if (bool == true) {
        let imgs = ['small', 'bigger', 'biggest'];
        let index = 0;
        let time = 100;
        vibration(100);

        const myInterval = setInterval(() => {
            document.getElementById(imgs[index]).classList.add("animate__fadeInLeft");
            document.getElementById(imgs[index]).style.visibility = 'visible';
            time += time;
            index++;
        }, time);
        setTimeout(() => {
            clearInterval(myInterval);
        }, 300);
    }
})


function vibration(duration = 200) {
    if (navigator) {
        navigator.vibrate(duration);
    }
}

function getRandom() {
    return Math.floor(Math.random() * arr.length);
}

function charcter() {
    document.body.style.height = document.documentElement.clientHeight + 'px';
    infomodal.style.width = (document.body.clientWidth - 40) + 'px';
    if (bool == true) {
        let rand = getRandom();
        vibration();


        new Audio('./assets/sounds/btnclick2.mp3').play();


        document.querySelector('span').innerHTML = arr[rand];
        if (belowMarks.includes(document.querySelector('span').innerText)) {
            document.querySelector('span').style.verticalAlign = "8%";
            document.querySelector('span').style.marginLeft = "-15%";
        }
        else {
            document.querySelector('span').style.verticalAlign = "middle";
            document.querySelector('span').style.marginLeft = "auto";
        }

        let audio = new Audio('./assets/sounds/' + document.querySelector('span').innerText + '.mp3');

        speakerbtn.onclick = () => {
            if (bool == true) {
                audio.play();
                document.querySelector('#speaker img:nth-child(1)').style.marginLeft = '0'
            }
        }
        audio.addEventListener('ended', () => {
            let imgs = ['biggest', 'bigger', 'small'];
            let index = 0;
            let time = 100;
            let endInterval = setInterval(() => {
                document.getElementById(imgs[index]).style.visibility = 'hidden';
                document.querySelector('#speaker img:nth-child(1)').style.marginLeft = '50%'

                time += time;
                index++;
            }, time)
            setTimeout(() => {
                clearInterval(endInterval);
            }, 300);
        })
    }

}

function infoClick() {
    vibration(100);
    if (infomodal.style.display == 'block') {
        infomodal.style.display = 'none';
        bool = true;
    } else {
        infomodal.style.display = 'block';
        bool = false;
    }


}

cross.addEventListener('click', () => {
    if (infomodal.style.display == 'block') {
        vibration(100);
        infomodal.style.display = 'none';
        bool = true;
    }
})