var imagenumber = 1;
var imageUrls = [];
const time_box = document.querySelector('.countdown')
const time_day = document.querySelector('#day')
var bgimages = ['./imgs/a.jpg', './imgs/b.jpg', './imgs/c.jpg', './imgs/d.jpg', './imgs/e.jpg', './imgs/f.jpg', './imgs/g.jpg', './imgs/h.jpg', './imgs/i.jpg', './imgs/j.jpg', './imgs/k.jpg','./imgs/l.webp', './imgs/m.webp', './imgs/n.webp'];
const containerId = "tp-weather-widget"; // 将这一行替换成实际的容器ID
const token = "bcbca550-e415-4533-ae02-cadbfa9d0ef7"; // 将这一行替换成实际的token
const animation_time = 600
const pause_time = 160000
const saying = document.querySelector('#saying')
const sentences = [
  "奋斗之心人皆有之。——李叔同",
  "奋斗这一件事是自有人类以来天天不息的。——孙中山",
  "奋斗以求改善生活，是可敬的行为。——茅盾",
  "奋斗是万物之父。——陶行知",
  "凡事皆有极困难之时，打得通的，便是好汉。——曾国藩",
  "凡人要自立，要自强，要求己莫求人。——胡文忠",
  "对真理和知识的追求并为之奋斗，是人的最高境界。——爱因斯坦",
  "对于学者获得的成就，是恭维还是挑战？我需要的是后者，因为前者只能使人陶醉、而后者却是鞭策。——巴斯德",
  "聪明的资质、内在的干劲、勤奋的工作态度和坚韧不拔的精神，这些都是科学研究成功所需要的条件。——贝弗里奇",
  "聪明出于勤奋，天才在于积累。——华罗庚",
  "必须在奋斗中求生存，求发展。——茅盾",
  "办事贵有定见，不贵有成见，定见者，在我之知识学问，不与世为推移者也。——袁枚",
  "不耻最后。即使慢，弛而不息，纵会落后，纵会失败，但一定可以达到他所向的目标。——鲁迅",
  "古之立大事者，不惟有超世之才，亦必有坚韧不拔之志。——苏轼",
  "故天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，增益其所不能。——孟轲",
  "路是脚踏出来的，历史是人写出来的，人的每一步都是在书写自己的历史。——吉鸿昌",
  "泪是酸的，血是红的，奋斗来的生命是美丽的。——陈衡哲",
  "老骥伏枥，志在千里，烈士暮年，壮心不已。——曹操",
  "我宁愿靠自己的力量打开我的前途，而不求权势者垂青。——雨果",
  "我们应当努力奋斗，有所作为。这样，我们就可以说，我们没有虚度年华，并有可能在时间的沙滩上留下我们的足迹。——拿破仑",
  "停止奋斗，生命也就停止了。——卡莱尔",
  "天行健，君子以自强不息。——易经",
  "天才就是无止境刻苦勤奋的能力。——卡莱尔",
  "形成天才的决定因素应该是勤奋。——郭沫若",
  "行动生困难，困难生疑问，疑问生假设，假设生试验，试验生断语，断语又生了行动，如此演进于无穷。——陶行知",
  "想象你对困难作出的反应，不是逃避或绕开它们，而是面对它们，同它们打交道，以一种进取的和明智的方式同它们奋斗。——马克斯威尔——马尔兹",
  "希望是本无所谓有，无所谓无的。这正如地上的路，其实地上本没有路，走的人多了，也便成了路。——鲁迅",
  "物不经冰霜则生意不固，人不经忧患则德慧不成。——杨名时",
  "无论做什么事情，只要肯努力奋斗，是没有不成功的。——牛顿",
  "无论头上是怎样的天空，我准备承受任何风暴。——拜伦",
  "生命的成功，不在聪明和机会，乃在专心和有恒。——俞忒",
  "人类要在竞争中求生存，更要奋斗。——孙中山",
  "青年之文明，奋斗之文明，也与境遇奋斗，与时代奋斗，与经验奋斗。故青年者，生命之玉，生命之春，生命之华也。——李大钊",
  "青春如初春，如朝日，如百卉之萌动，如利刃之新发于硎，生命最宝贵之时期也。青年之于社会，犹新鲜活泼细胞之在身。——陈独秀",
  "进步，意味着目标不断前移，阶段不断更新，它的视影不断变化。——雨果",
  "今日能行之事，勿捱明日，自己能为之事，勿诿他人。——吉福生",
  "脚跟立定以后，你必须拿你的力量和技能，自己奋斗。——萧伯纳",
  "青春是有限的，智慧是无穷的，趁短的青春，去学习无穷的智慧。——高尔基",
  "趁年轻少壮去探求知识吧，它将弥补由于年老而带来的亏损。智慧乃是老年的精神养料，所以年轻时应该努力，这样，年轻时才不致空虚。——达·芬奇",
  "必须在奋斗中求生存，求发展。——茅盾",
  "不耻最后。即使慢，弛而不息，纵会落后，纵会失败，但一定可以达到他所向的目标。——鲁迅",
  "青春须早为，岂能长少年。——孟郊",
  "奋斗之心人皆有之。——李叔同",
  "人生在勤，不索何获。——张衡",
  "一无所有是一种财富，它让穷人产生改变命运的行动。",
  "书山有路勤为径，学海无涯苦作舟。",
  "智者创造机会，强者把握机会，弱者等待机会。",
  "在青春的世界里，沙粒要变成珍珠，石头要化作黄金……青春的魅力，应当叫枯枝长出鲜果，沙漠布满森林……——郭小川",
  "如果青春的时光在闲散中度过，那么回忆岁月将会是一场凄凉的悲剧。——张云可",
  "以青春之我，创造青春之家庭，青春之国家，青春之民族，青春之人类，青春之地球，青春之宇宙，资以乐其无涯之生。——李大钊",
  "青春在人的一生中只有一次，而青春时期比任何时期都最强盛美好。因此千万不要使自己的精神僵化，而要把青春保持永远。——别林斯基",
  "一个人有无成就，决定于他青年时期是不是有志气。——谢觉哉",
  "世界是你们的，也是我们的，但是归根结底是你们的。你们青年人朝气蓬勃，正在兴旺时期，好像早晨八九点钟的太阳。希望寄托在你们身上。——毛泽东",
  "谁勇敢地经受过青春之火的洗礼，谁就毫不惧怕晚年的严寒冰霜。——兰多",
  "痛苦和寂寞对年轻人是一剂良药，它们不仅使灵魂更美好，更崇高，还保持了它青春的色泽。——大仲马",
  "我们必须调整我们的生活形态，使黄金时代藏在未来的老年里，而不藏在过去的青春和天真的时期里。——林语堂",
  "青年应当有朝气，敢作为。——鲁迅",
  "如果我们不能建筑幸福的生活，我们就没有任何权利享受幸福，这正和没有创造财富无权享受财富一样。——萧伯纳",
  "青年之文明，奋斗之文明也。与境遇奋斗与时代奋斗与经验奋斗。故青年者，人生之王人生之春人生之华也。——李大钊",
  "人类要在竞争中求生存，更要奋斗。——孙中山",
  "人，总是要经得起风吹雨打虫蛀，经过奋斗，作过努力，那才能终于以“果子”的形式向自己的青春告别的。——岑桑",
  "与困难作斗争，虽然要历尽艰苦，但苦尽甘来，这也是一种乐事。——徐特立",
  "青年时代太放纵就会失去心灵的滋润，太节制就会变成死脑筋。——圣堤布福",
  "任何人要达到自己的目的，爱也罢，追求也罢，目标必须明确。——林海鑫",
  "如果你浪费了自己的年龄，那是挺可悲的。因为你的青春只能持续一点儿时间——很短的一点儿时间。——王尔德",
  "浪费时间叫虚度，剥用时间叫生活。——扬格",
  "明日复明日，明日何其多！日日待明日，万事成蹉跎。——文嘉",
  "青春啊，永远是美好的，可是真正的青春，只属于这些永远力争上游的人，永远忘我劳动的人，永远谦虚的人！——雷锋",
  "光阴可惜，譬诸逝水，当博览机要，以济功业。——颜之推",
  "奋斗之心人皆有之。——李叔同",
  "即使自己变成一撮泥土，只要它是铺在通往真理的大道上，让自己的伙伴们大踏步地冲过去，也是最大的幸福。——吴运铎",
  "今是生活，今是动力，今是行为，今是创作。——李大钊",
  "据我观察，大部分人都是在别人荒废的时间里崭露头角的。——福特",
  "奋斗以求改善生活，是可敬的行为。——茅盾",
  "奋斗是万物之父。——陶行知",
  "确立起一种正确的人生哲学，于每个人乃是生死攸关的需要。失去了人生目标的人，是最不幸的人。——赵鑫珊",
  "人生太短，要干的事太多，我要争分夺秒。——爱迪生",
  "青春是美妙的，挥霍青春就是犯罪。——萧伯纳",
  "青春如初春，如朝日，如百卉之萌动，如利刃之新发于硎，人生最宝贵之时期也。青年之于社会，犹新鲜活泼细胞之在身。——陈独秀",
  "奋斗这一件事是自有人类以来天天不息的。——孙中山",
  "航海远行的人，比先定个目的地，中途的指针，总是指着这个方向走，恐怕永无达到的日子。——李大钊"
];
function tow(n) {
  return n >= 0 && n < 10 ? '0' + n : '' + n;
}
function log(text){
  console.log('%c Log %c ' + text, 'background: linear-gradient(120deg, #8183ff, #58b3f5);color:#fff;border-radius:2px;', '');
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getDate() {
  let oDate = new Date();
  let oldYear = oDate.getFullYear();
  let oldMonth = oDate.getMonth();
  let oldDay = oDate.getDate();

  // 将目标日期设置为当前时间的后一年
  let newYear = oldYear + 1;
  let newMonth = 5; // 月份从 0 开始，所以6月对应的是5
  let newDay = 7;

  let newDate = new Date(newYear, newMonth, newDay);
  let diffTime = newDate - oDate; // 计算日期的差异，单位为毫秒

  let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  let diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  let diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

  let str = tow(diffHours) + '<span>小时 </span>' +
    tow(diffMinutes) + '<span>分 </span>' +
    tow(diffSeconds) + '<span>秒</span>';

  time_box.innerHTML = str;
  time_day.innerText = tow(diffDays);
}


// console.log(saying);
// const getYiyan = () => {
//   fetch('https://international.v1.hitokoto.cn/?c=d&c=i&encode=json&charset=utf-8')
//   .then(response => response.json())
//   .then(data => {
//     if (data.hitokoto) {
//       // saying.innerHTML = data.hitokoto
//     //   console.log(data);
//       let book
//       let author
//       if (data.from) {
//         book = ' 《'+data.from+ '》   '
//       } else {
//         book = ''
//       }
//       if (data.from_who) {
//         author = '   --'+data.from_who
//       } else {
//         author = ''
//       }
//       $(saying).hide().html(data.hitokoto+book+author).fadeIn(animation_time)
//       setTimeout(() => {
//         $(saying).fadeOut(animation_time)
//       }, pause_time - animation_time)
//     }
// //   console.log(data);
//   })
// }
function isVisible(){
  if($(saying).is(":hidden")){
    $(saying).show()
    log("元素被隐藏，恢复中")
  }
}
function getYiyan(){
  var i = Math.floor(Math.random()*sentences.length)
  while(sentences[i] == $(saying).text()){
    var i = Math.floor(Math.random()*sentences.length)
    log('重复一言，刷新中')
  }
  $(saying).hide().html(sentences[i]).fadeIn(animation_time)
      setTimeout(() => {
        $(saying).fadeOut(animation_time)
        sleep(2000).then(()=>{
          isVisible()
        })
      }, pause_time - animation_time)
  sleep(3000).then(()=>{
    isVisible()
  })
}


function swapBackground() {
  var querySelector1 = document.querySelector(".bgi1");
  if(imageUrls.length != 1){
    var i = Math.floor(Math.random()*(imageUrls.length)+0)
    while(i==imagenumber){
      var i = Math.floor(Math.random()*(imageUrls.length)+0)
      log("重复背景图，刷新中")
    }
  log(i);
  querySelector1.classList.add('out')
  querySelector1.addEventListener('transitionend', function() {
    querySelector1.src = imageUrls[i];
    querySelector1.classList.remove('out')
    imagenumber=i;
  }, {once: true})  
  }
}

function toggleFullScreen() {
  var elem = document.documentElement;
  if (!document.fullscreenElement && !document.mozFullScreenElement &&
      !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
  var button1 = document.querySelector('#button1')
  $(button1).hide()
}

function loadWeatherWidget() {
  // 加载脚本
  (function(a, h, g, f, e, d, c, b) {
      b = function() {
          d = h.createElement(g);
          c = h.getElementsByTagName(g)[0];
          d.src = e;
          d.charset = "utf-8";
          d.async = 1;
          c.parentNode.insertBefore(d, c);
      };

      a["SeniverseWeatherWidgetObject"] = f;
      a[f] || (a[f] = function() {
          (a[f].q = a[f].q || []).push(arguments);
      });
      a[f].l = +new Date();

      if (a.attachEvent) {
          a.attachEvent("onload", b);
      } else {
          a.addEventListener("load", b, false);
      }
  })(window, document, "script", "SeniverseWeatherWidget", "//cdn.sencdn.com/widget2/static/js/bundle.js?t=" + parseInt((new Date().getTime() / 100000000).toString(), 10));

  // 显示小部件
  window.SeniverseWeatherWidget('show', {
      flavor: "bubble",
      location: "WT029G15ETRJ", // 根据需要修改
      geolocation: false,
      language: "zh-Hans",
      unit: "c",
      theme: "auto",
      token: token,
      hover: "always",
      container: containerId
  });
}

function refreshWeather(){
  $("#"+containerId).remove()
  $("main").append(`<div id=${containerId}></div>`)
  window.SeniverseWeatherWidget('show', {
    flavor: "bubble",
    location: "WT029G15ETRJ", // 根据需要修改
    geolocation: false,
    language: "zh-Hans",
    unit: "c",
    theme: "auto",
    token: token,
    hover: "always",
    container: containerId
});
}

async function fetchImageAsBlob(url, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
      try {
          const response = await fetch(url, {
              method: 'GET',
              redirect: 'follow' // 允许重定向
          });

          // 检查响应是否成功
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }

          // 获取 Blob 数据
          const blob = await response.blob();
          const blobUrl = URL.createObjectURL(blob);
          console.log("Blob URL:", blobUrl);
          return blobUrl; // 成功后返回 Blob URL

      } catch (error) {
          console.error(`请求失败: ${error.message}, 重试 ${i + 1}/${retries}`);
          // 等待一段时间后重试
          if (i < retries - 1) {
              await new Promise(res => setTimeout(res, delay));
          }
      }
  }

  return null; // 如果所有重试均失败，返回 null
}

// 主函数使用示例
async function fetchImages(imageUrls) {
  const results = [];
  for (const url of imageUrls) {
      const blobUrl = await fetchImageAsBlob(url);
      results.push({ url, blobUrl }); // 存储原始 URL 和 Blob URL
  }
  return results;
}


fetchImages(bgimages).then(imageData => {
  imageData.forEach(({ url, blobUrl }) => {
      if (blobUrl) {
          imageUrls.push(blobUrl);
      } else {
          console.error(`获取 Blob URL 失败: ${url}`);
      }
  });
  setInterval(swapBackground(),600000)
  log("已加载完毕所有背景图")
  if(imageUrls.length==0){
    alert("加载失败！点击确认重新加载")
    window.location.reload()
  }
  $(loading).hide()
});
getYiyan()
setInterval(getYiyan, pause_time)

getDate()
setInterval(getDate, 1000)

loadWeatherWidget()
setInterval(refreshWeather,1800000)

// preloadImages(bgimages)
//   .then((images) => {
//     bgimages.splice(0, bgimages.length, ...images);
//     setInterval(swapBackground(),600000)
//     log("已加载全部背景图")
//     console.log("加载成功的背景图:",bgimages)
//     if(bgimages.length==0){
//       alert("背景图片加载失败，请重试!")
//     }
//     else $(loading).hide()
//   })
//   .catch(error => {
//     console.error(error);
//   });
