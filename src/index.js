const Img1 = document.getElementById("img1");
const Img2 = document.getElementById("img2");
const Img3 = document.getElementById("img3");
const Button = document.getElementById("myBtn");
let random1;
let random2;
let random3;


const props = [
    "https://porngif.co/wp-content/uploads/2024/07/224815-slamming-donk-culo-butt-plug-in-her-tight-bunghole-feat-hailey-moon.gif",
    "https://el.phncdn.com/pics/gifs/040/235/411/(m=ldpwiqacxtE_Ai)(mh=cKGfEZX6YK3ji0Ci)40235411b.gif",
    "https://analporngifs.com/content/2022/02/choking_001.gif",
    "https://porngif.co/wp-content/uploads/2021/08/18339-pushing-ass-plug-in-out.gif",
    "https://gifcandy.net/wp-content/uploads/2016/04/gifcandy-masturbation-68.gif",
    "https://el.phncdn.com/pics/gifs/036/180/451/(m=ldpwiqacxtE_Ai)(mh=2uzysj2XX1moOPpz)36180451b.gif",
    "https://el.phncdn.com/pics/gifs/038/983/011/(m=ldpwiqacxtE_Ai)(mh=rX2GsqE4hsXNeU9N)38983011b.gif",
    "https://el.phncdn.com/pics/gifs/033/614/171/(m=ldpwiqacxtE_Ai)(mh=FRvWLj1vou5gqmel)33614171b.gif",
    "https://el.phncdn.com/pics/gifs/038/848/681/(m=ldpwiqacxtE_Ai)(mh=jq0_vzTsYaFOgHUP)38848681b.gif",
    "https://el.phncdn.com/pics/gifs/035/706/142/(m=ldpwiqacxtE_Ai)(mh=Gz8fzhbOWKJRLB_L)35706142b.gif",
    "https://el.phncdn.com/pics/gifs/042/157/071/(m=ldpwiqacxtE_Ai)(mh=8HppGWkH69ZxahFl)42157071b.gif",
    "https://el.phncdn.com/pics/gifs/000/727/481/(m=ldpwiqacxtE_Ai)(mh=GZFFufr_OiUFodqV)727481b.gif",
    "https://static-ca-cdn.eporner.com/gallery/GH/L4/TV0z89wL4GH/112635-big-breasted-girl-masturbating-with-a-vibrator.gif",
    "https://myteenwebcam.com/fapp/gifs/3331772baf1f3d35b87a89e0a531f7bd.gif",
    "https://spankgifs.com/wp-content/uploads/2015/08/love-and-spanking.gif",
    "https://spankgifs.com/wp-content/uploads/2015/12/naked-slave-flogged-tits.gif",
    "https://spankgifs.com/wp-content/uploads/2015/05/spanked-OTK.gif",
    "https://spankgifs.com/wp-content/uploads/2017/06/Ass-spanked-OTK.gif",
    "https://spankgifs.com/wp-content/uploads/2015/12/ass-brunette-slapped2.gif",
    "https://imagex1.sx.cdn.live/images/pinporn/2017/05/08/17739201.gif?width=460",
    "https://himg.nl/images/sex/2d9d87a4c9169fa23d4bd85841817475/original.gif",
    "https://freakydeakygifs.com/wp-content/uploads/2018/12/asa-akira-oil-overload-7_001.gif",
    "https://freakydeakygifs.com/wp-content/uploads/2018/12/puma-swede_001.gif",
    "https://freakydeakygifs.com/content/2018/12/kiara-mia-oil-overload-8_003.gif",
    "https://porngifs.ca/wp-content/uploads/2020/08/gif-gotta-get-that-oil-on-there_5f393e9b4f927.gif",
    "https://porngipfy.com/wp-content/uploads/2019/11/handjob_001.gif",
    "https://bestsexgif.com/wp-content/uploads/2019/05/Incredible-handjob-animated-picture.gif",
    "https://porngipfy.com/wp-content/uploads/2018/12/handjob_001-29.gif",
    "https://porngipfy.com/wp-content/uploads/2018/12/handjob_001-9.gif",
    "https://porngipfy.com/wp-content/uploads/2018/12/handjob_001-5.gif",
    "https://porngipfy.com/wp-content/uploads/2018/12/handjob_001-14.gif",
    "https://porngipfy.com/wp-content/uploads/2018/12/couple-sex_001-186.gif",
    "https://porngipfy.com/wp-content/uploads/2018/12/t-stone_001.gif",
    "https://porngipfy.com/wp-content/uploads/2018/12/dowwwwwn_001.gif",
    "https://porngipfy.com/wp-content/uploads/2018/12/chupando-polla_001.gif",
    "https://porngipfy.com/wp-content/uploads/2018/12/becauseboobs_001-7.gif",
    "https://porngipfy.com/wp-content/uploads/2018/12/tetona_001-30.gif",
    "https://porngipfy.com/wp-content/uploads/2018/12/big-tits_001-13.gif",
    "https://porngipfy.com/wp-content/uploads/2018/12/sucked_001.gif",
    "https://porngipfy.com/wp-content/uploads/2018/12/busty_001-43.gif",
    "https://porngipfy.com/wp-content/uploads/2018/12/jav_001-31.gif",
    "https://porngipfy.com/wp-content/uploads/2018/12/aimi-yoshikawa_001-4.gif",
    "https://porngipfy.com/wp-content/uploads/2016/04/twerk-it.gif",
    "https://porngifer.com/content/2019/11/kelsi-monroe-twerking-2_001.gif",
    "https://el.phncdn.com/pics/gifs/043/075/151/(m=ldpwiqacxtE_Ai)(mh=bY3VSjOmzVWtVvzK)43075151b.gif",
    "https://porngifmag.com/content/2018/12/kelsi-monroe-twerking-hotties-anal-pounding-gifset_002.gif",
    "https://el.phncdn.com/pics/gifs/003/832/851/(m=ldpwiqacxtE_Ai)(mh=XtFKWGX8uPs-RHKF)3832851b.gif",
    "https://myteenwebcam.com/fapp/gifs/8ab728beb7561a27080bd7b1355e7a0f.gif",
    "https://myteenwebcam.com/fapp/gifs/31d7f371e2b62e5844390d3d37d23d1d.gif"
    
    


]

const position = [
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/the-buffet-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/the-pin-up-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/double-dare-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/the-headlock-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/the-rocker-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/hula-girl-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/reverse-69-back-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/up-against-the-wall-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/lazy-69-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/sword-swallower-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/two-4-one-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/reverse-69-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/the-tumbler-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/dirty-doggy-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/the-flat-back-animated.gif"
]

const sex = [
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/speed-bump-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/easy-rider-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/sitting-bull-animated-1.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/spooning-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/stand-and-deliver-animated-1.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/desk-set-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/butter-churner-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/turtle-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/the-crab-animated-1.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/cowgirl-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/legs-up-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/necking-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/table-top-animated-1.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/elephant-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/full-nelson-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/squat-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/the-throne-animated-1.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/anvil-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/spread-eagle-animated-1.gif",
    "https://el.phncdn.com/pics/gifs/038/086/701/(m=ldpwiqacxtE_Ai)(mh=3pcr1UVFXSt93z9l)38086701b.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/lotus-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/pretzel-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/face-to-face-animated.gif",
    "https://sex-positions.online/en-GB/wp-content/uploads/sites/30/2020/12/whos-your-daddy-animated.gif"
]


// Button.onclick = function(){
//     random1 = Math.floor(Math.random() * props.length);
//     random2 = Math.floor(Math.random() * position.length);
//     random3 = Math.floor(Math.random() * sex.length); 
//     Img1.src = props[random1];
//     Img2.src = position[random2];
//     Img3.src = sex[random2];
// }

function rollImage(imgElement, imagesArray, duration) {
    let interval = setInterval(() => {
        imgElement.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    }, 30); // change every 100ms

    // stop after given duration
    setTimeout(() => {
        clearInterval(interval);
        imgElement.src = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    }, duration);
}

Button.onclick = function() {
    // roll each slot with a delay like jackpot
    rollImage(Img1, props, 4000);      // stops after 2s
    rollImage(Img2, position, 6000);   // stops after 3s
    rollImage(Img3, sex, 8000);        // stops after 4s
};