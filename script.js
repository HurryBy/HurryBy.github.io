var imagenumber = 1;
var imageUrls = [];
var LinkPrefix;
const time_box = document.querySelector(".countdown");
const time_day = document.querySelector("#day");
const time_day1 = document.querySelector("#day1");
var bgimages = [
  "/imgs/a.jpg",
  "/imgs/b.jpg",
  "/imgs/c.jpg",
  "/imgs/d.jpg",
  "/imgs/e.jpg",
  "/imgs/f.jpg",
  "/imgs/g.jpg",
  "/imgs/h.jpg",
  "/imgs/i.jpg",
  "/imgs/j.jpg",
  "/imgs/k.jpg",
  "/imgs/l.webp",
  "/imgs/m.webp",
  "/imgs/n.webp",
];
const containerId = "tp-weather-widget"; // 将这一行替换成实际的容器ID
const token = "bcbca550-e415-4533-ae02-cadbfa9d0ef7"; // 将这一行替换成实际的token
const animation_time = 600;
const pause_time = 160000;
const saying = document.querySelector("#saying");
const sentences = [
  "人们奋斗所争取的一切，都同他们的利益有关。——马克思",
  "并非每一个灾难都是祸；早临的逆境常是幸福。经过克服的困难不但给了我们教训，并且对我们未来的奋斗有所激励。——波普",
  "不满烦闷，只应该使我们更坚决地向前奋斗；不应该使我们逃避困难，一瞑不视。——邹韬奋",
  "勇敢来自于斗争，勇敢在同困难顽强奋斗中渐形成。我们青年人的座右铭就是勇敢、顽强、坚定，就是克服艰难险阻……——奥斯特洛夫斯基",
  "孜孜矻矻，死而后已。——韩愈",
  "曾子曰：‘士不可以不弘毅，任重而道远。仁以为己任，不亦重乎？死而后已，不亦远乎？’——孔子",
  "一个有志气的人，他为之奋斗的目标应该是远大的，高尚的，而决不是被私利障住眼睛的懦夫。——殷庆功",
  "只有奋斗可以给我们出路，而且只有奋斗可以给我们快乐。——恽代英",
  "一个在奋斗途径上努力的人，要是不把步骤分清楚，等于你旅行一个地方，不先规定睡眠和行程一般。分清步骤，是十分重要的。——戴尔·卡耐基",
  "有的人奋斗一生，终于得到了他所需要的声名、地位与财富，但回首以前，做事却充满了卑贱与痛苦；有的人碌碌终生，但等到年老将要死去时，却有许多甜蜜往事值得回忆，这两种人，到底哪一种较为幸福？——古龙",
  "我们的奋斗目标，不是长寿，而是活得正直。——塞内加",
  "在全力以赴的努力奋斗中，在人的心中会建立起坚定的信心和信念。——德田虎雄",
  "做一个积极主动的人，最重要的是奋斗心，热爱生命，勤奋实干，开放进取。",
  "别人后退，我不退；别人前进，我更进。要攀登这座山的人，起初在下部是艰难的，越上升越没有痛苦，最后就和坐着顺流而下的小船一样。——但丁",
  "青春的光辉，理想的钥匙，生命的意义，乃至人类的生存、发展……全包含在这两个字之中……奋斗！只有奋斗，才能治愈过去的创伤；只有奋斗，才是我们民族的希望和光明所在。——马克思",
  "当学生向老俞提问时，老俞会给他讲个他自己奋斗的小故事，把学生都感动坏了，就忘了刚才的问题了。——罗永浩",
  "青年人首先要树雄心，立大志；其次要度衡量力，决心为国家、人民作一个有用的人才；为此就要选择一个奋斗的目标来努力学习和实践。——吴玉章",
  "奋斗以求改善生活，是可敬的行为。——茅盾",
  "人生一征途耳，其长百年，我已走过十之七八。回首前尘，历历在目。崎岖多于平坦，忽深谷，忽洪涛，幸赖桥梁以渡。桥何名欲？曰奋斗。——茅以升",
  "理想是需要的，是我们前进的方向。现实有理想的指导才有前途；反过来，也必须从现实的努力奋斗中才能实现理想。——周恩来",
  "这世界是个好地方，值得为它奋斗！——海明威",
  "衣不求华，食不厌蔬。——王安石",
  "不断的奋斗就是走上成功之路。——孙中山",
  "奋斗是万物之父。--陶行知",
  "无论做什么事情，只要肯努力奋斗，是没有不成功的。——牛顿",
  "青年最要紧的精神，是要与命运奋斗。——恽代英",
  "人类要在竞争中求生存，便要奋斗。——孙中山",
  "没有一种不通过蔑视、忍受和奋斗就可以征服的命运。——力成文学",
  "生活就是战斗。--柯罗连科",
  "凡事欲其成功，必须付出代价——奋斗。——爱默生",
  "高中刚毕业你不会成为一个公司的副总裁，直到你将此职位挣到手。——比尔·盖茨",
  "生活不是苦难，也不是享乐，而是我们应当为之奋斗并坚持到底的事业。——托克维尔",
  "开拓者的足迹是历史前进的起点；奋斗者的肩头是科学登高的阶梯。",
  "只有向自己提出伟大理想，并以自己全部的力量为之奋斗的人，才是最幸福的。——加里宁",
  "人不能在他的历史中表现出他自己，他在历史中奋斗着露出头角。——泰戈尔",
  "成功是战胜艰难险阻的奋斗结晶。——史密斯",
  "奋苦而求速效，只落得少日浮夸，老来窘隘而已。——郑板桥",
  "我们有力的道德就是通过奋斗取得物质上的成功；这种道德既适用于国家，也适用于个人。——罗素",
  "生命对某些人来说是美丽的，这些人的一生都为某个目标而奋斗。——力成文学",
  "对乐于奋斗的人来说，奋斗不是憾事，而是乐事。——托马斯",
  "后悔过去，不如奋斗将来。——马克思",
  "我是否曾主张，我们应对向着我们而来的一切灾难低头屈服？绝不！那只是宿命论的主张。只要有让我们解救情况的一丝机会，我们便要奋斗。——戴尔·卡耐基",
  "即使没有典范标准，我们也奋斗生存过来了，对于坚毅强劲的年轻人来说，没有标准典范可循也许更好。——辛克莱·刘易斯",
  "我认为有为爱而活着努力奋斗一辈子的人，同样自然会重视努力工作的人。因而，没有爱的人，他虽然一时可以巧妙地欺骗别人，或用金钱和权势使用人，可决不能成为真正的领导者。——德田虎雄",
  "一往无前，愈挫愈奋。——孙中山",
  "青年之文明，奋斗之文明也。与境遇奋斗、与时代奋斗、与经验奋斗。故青年者，人生之王、人生之春、人生之华也。——李大钊",
  "一息尚存，此志不容稍懈。——程允升",
  "对于每一个人，他所能选择的奋斗方向是宽广的。——爱因斯坦",
  "成功之花，人们往往惊羡它现时的明艳，然而当初，它的芽儿却浸透了奋斗的泪泉，洒满了牺牲的血雨。——冰心",
  "我始终不愿抛弃我的奋斗生活，我极端重视奋斗得来的经验，尤其是战胜困难后所得到的愉快，一个人要先经过困难，然后踏进顺境，才觉得受用、舒适。——爱迪生",
  "成功的花，人们只惊慕她现时的明艳！然而当初她的芽儿，浸透了奋斗的泪泉，洒遍了牺牲的血雨。——冰心",
  "奋斗在人，成功在天。——荷马",
  "我始终不愿抛弃我的奋斗的生活，一个应该避免恶行，像爱惜生命的人避免毒物一般。——别林斯基",
  "一个人如果不到最高峰，他就没有片刻的安宁，他也就不会感到生命的恬静的光荣。——萧伯纳",
  "随着白日的流逝和清晨激动心情的消失，你会感到有种徒劳无功的想法压上心头。这种想法必须奋力克服，对你唯一的鞭策是你坚信你正在为活的灵魂而与魔鬼周旋。——吉卜林",
  "攻城不怕坚，攻书莫畏难。科学有险阻，苦战能过关。——剑英",
  "生活好比橄榄球比赛，原则就是：奋力冲向底线。——西·罗斯福",
  "你是否愿意扬名？面对着那些可歌可泣的壮举，勇敢的人们定会奋起，不管它满城风雨。——爱·扬格",
  "任何事业都可能受挫折，虽然为事业而奋斗的人是伟大的。——本涅特",
  "子女中那种得不到遗产继承权的幼子，常常会通过自身奋斗获得好的发展。而坐享其成者，却很少能成大业。——培根",
  "有些事情是不能等待的。假如你必须战斗或者在市场上取得最有利的地位，你就不能不冲锋、奔跑和大步行进。——泰戈尔",
  "坚硬优质的钢条，是经过千锤百炼而成的；瑰丽美观的贝壳是经过水冲日曝而得的。我们的意志和毅力也必须在火热的斗争中接受严峻的考验，去接受长期的锻炼。只有这样才能使自己在困难面前，永远热情奋发，斗志昂扬。——里宁",
  "真正的乐观主义的人是用积极的精神向前奋斗的人，是战胜愁虑穷苦的人。——邹韬奋",
  "他吃苦在前，享受在后，不同别人计较享受的优劣，而同别人比较革命工作的多少和艰苦奋斗的精神。——刘少奇",
  "他不断地处于与人奋斗、与天地奋斗之中，没有功夫去尽情卖弄。只有花花公子才会大肆卖弄，迫不及待地将转瞬即逝的一季庄稼收割下来，那种自尊与不管是什么东西，凡从它手下经过就要抽税的海关相差无几。——巴尔扎克",
  "所有坚韧不拔的努力迟早会取得报酬的。——安格尔",
  "主要是不能对腐蚀你们的疾病闭上眼睛，也不能灰心，应当振作精神，为了你们民族的生存跟荣誉而奋斗。——罗曼·罗兰",
  "奋斗这一件事是自有人类以来天天不息的。——孙中山",
  "重要的不是成功，而是奋斗。——乔·赫伯特",
  "客观地衡量，一个人以热情奋斗所获得的真理实在微乎其微；但奋斗能使我们解脱自身的束缚，并使我们成为最优秀、最伟大的人物的同伴。——爱因斯坦",
  "生活的初级阶段是酸甜苦辣、喜怒哀乐；生活的高级阶段是奋斗、是燃烧、是自我感受。——字严",
  "人，总是要经得起风吹雨打虫蛀，经过奋斗，作过努力，那才能终于以果子的形式向自己的青春告别的。——岑桑",
  "一个人不能没有生活，而生活的内容，也不能使它没有意义。做一件事，说一句话，无论事情的大小，说话的多少，你都得自己先有了计划，先问问自己做这件事、说这句话，有没有意义？你能这样做，就是奋斗基础的开始奠定。——戴尔·卡耐基",
  "人在他的历史中表现不出他自己，他在历史中奋斗着露出头角。——泰戈尔",
  "目标既定，在学习和实践过程中无论遇到什么困难、曲折都不灰心丧气，不轻易改变自己决定的目标，而努力不懈地去学习和奋斗，如此才会有所成就，而达到自己的目的。——吴玉章",
  "只有这样的人才配生活和自由，假如他每天为之而奋斗。——歌德",
  "我们应当努力奋斗，有所作为。这样，我们就可以说，我们没有虚度年华，并有可能在时间的沙滩上留下我们的足迹。——拿破仑",
  "在艰苦奋斗的环境中锻炼出来的文人，总比生长在温暖逸乐的环境中的人，要坚强伟大。——郁达夫",
  "没有奋斗，人生便寂寞难忍。——莱蒙托夫",
  "爱祖国，为祖国的前途而奋斗，是时代赋予我们的神圣职责。——苏步青",
  "人类的心理统统就是这样，而且，似乎永远是这样；愈是得不到手的东西，就愈是想得到它，而且在实现这一愿望的过程中所遇到的困难愈大，奋斗的意志就愈是坚强。——乔万尼奥里",
  "严冬不肃杀，何以见阳春。——吕温",
  "世界上最快乐的事，莫过于为理想而奋斗。——苏格拉底",
  "攀登顶峰，这种奋斗的本身就足以充实人的心。人们必须相信，垒山不止就是幸福。——加缪",
  "只要持续地努力，不懈地奋斗，就没有征服不了的东西。——塞内加",
  "我尊敬的就是那些独立奋斗着的人。那些凭自己本身的价值无法站立起来的人是不值得尊敬的。那些踏着别人的肩膀往上爬的家伙更是一摊狗屎！——小路实笃",
  "奋斗只是一种行动的昭示，而实际的行动却应该有详细的计划，清楚的段落，坚定的意志和力量。——戴尔·卡耐基",
  "勤劳致富是千古不变的真理。无论当学徒还是做老板，一样要拚、要博、要奋斗。一件任务交给我，不管多么困难，我都要把它做好。工作是我最大兴趣，勤劳是我创业的源头。——陈绍良",
  "有的人本领平庸，但做事尽心竭力，他们比那些本领出众但做事敷衍塞责的人强。——简·奥斯丁",
  "泉水，奋斗之路越曲折，心灵越纯洁。——徐志摩",
  "奋斗就是生活，人生惟有前进。——巴金",
  "奋斗者在汗水汇集的江河里，将事业之舟驶到了理想的彼岸。——徐志摩",
  "世界上最快乐的事，莫过于为理想而奋斗。——徐志摩",
  "来吧——挫折，这挫折使平坦的大地艰险难行！来吧——锥刺，这锥刺使你坐卧不宁，只有前进！任凭我们的欢乐中含有三分不幸，奋斗吧，咬紧牙关使足全身的劲；求知吧，哪怕历经千险，困难重重；鼓起勇气吧，决不抱怨临终前的苦痛！——勃朗宁",
  "我不相信条件说。生活在这个世界的人们是奋起寻觅他们所需条件的人们。——萧伯纳",
  "人类的幸福和欢乐在于奋斗，而最有价值的是为理想而奋斗。——苏格拉底",
  "艺术是精神和物质的奋斗。——宗白华",
  "懈意一生，便是自弃自暴。——程颐",
  "人生的每一天都在胜负中度过，一切都以竞争形式出现。每天都是为在竞争中取胜，或者至少不败给对方而进行奋斗。因此若有一天懈怠，便要落后，要失败。人生就是这样严峻。——大松博文",
  "物竞天择势必至，不优则劣兮不兴则亡。——梁启超",
  "我认为胜利是可以得到的，而且勇敢地为它奋斗，我的后代将会说：他不知道死的恐惧，比任何人都刚毅，并认为为真理而斗争是人类最大的乐趣。——布鲁诺",
  "少年辛苦终身事，莫向光阴惰寸功。——杜荀鹤",
  "具有伟大的理想，出以坚定的信心，施以努力的奋斗，才有惊人的成就。——马尔顿",
  "为了人类的伟大事业，应当去私心，以勤奋的精神为之奋斗到底。贡献没有够，也永远做不够。",
  "上帝制造人类的时候就把我们制造成不完美的人，我们一辈子努力的过程就是使自己变得更加完美的过程，我们的一切美德都来自于克服自身缺点的奋斗。——俞敏洪",
  "拥护一项非凡的事业并为之奋斗终生，——这就是我对那些追求不朽之名的年轻人的忠告。——柯蒂斯",
  "志气这东西是能传染的，你能感染着笼罩在你的环境中的精神。那些在你周围不断向上奋发的人的胜利，会鼓励激发你作更艰苦的奋斗，以求达到如象他们所做的样子。——斯蒂文",
  "我没有别的东西奉献，唯有辛劳泪水和血汗。——丘吉尔",
];

function tow(n) {
  return n >= 0 && n < 10 ? "0" + n : "" + n;
}

function log(text) {
  console.log(
    "%c Log %c " + text,
    "background: linear-gradient(120deg, #8183ff, #58b3f5);color:#fff;border-radius:2px;",
    ""
  );
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getDate() {
  let oDate = new Date();
  let oldYear = oDate.getFullYear();
  let oldMonth = oDate.getMonth();
  let oldDay = oDate.getDate();

  // 将目标日期设置为当前时间的后一年
  let newYear = oldYear ;
  let newMonth = 5; // 月份从 0 开始，所以6月对应的是5
  let newDay = 7;

  let newMonth1 = 0;
  let newDay1 = 12;

  let newDate = new Date(newYear, newMonth, newDay);
  let diffTime = newDate - oDate; // 计算日期的差异，单位为毫秒

  let newDate1 = new Date(newYear, newMonth1, newDay1);
  let diffTime1 = newDate1 - oDate; // 计算日期的差异，单位为毫秒

  let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  let diffDays1 = Math.floor(diffTime1 / (1000 * 60 * 60 * 24));
  if(time_day1 != null){  time_day1.innerText = tow(diffDays1);
  }
  let diffHours = Math.floor(
    (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  let diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

  let str =
    tow(diffHours) +
    "<span>小时 </span>" +
    tow(diffMinutes) +
    "<span>分 </span>" +
    tow(diffSeconds) +
    "<span>秒</span>";

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
function isVisible() {
  let quoteContainer = document.querySelector('.quote-container');
  if (quoteContainer && $(quoteContainer).is(":hidden")) {
    $(quoteContainer).show();
    log("元素被隐藏，恢复中");
  }
}

function getYiyan() {
  var i = Math.floor(Math.random() * sentences.length);
  
  // 确保倒计时和名言有各自的容器
  let sayingContainer = document.querySelector('#saying');
  if (!sayingContainer.querySelector('.countdown-container')) {
    // 创建倒计时容器
    let countdownContainer = document.createElement('div');
    countdownContainer.className = 'countdown-container';
    // 移动现有的倒计时元素到新容器
    countdownContainer.appendChild(document.querySelector('.msg'));
    countdownContainer.appendChild(document.querySelector('.countdown'));
    sayingContainer.insertBefore(countdownContainer, sayingContainer.firstChild);
  }
  
  // 创建或获取显示名言的专门容器
  let quoteContainer = document.querySelector('.quote-container');
  if (!quoteContainer) {
    quoteContainer = document.createElement('div');
    quoteContainer.className = 'quote-container';
    sayingContainer.appendChild(quoteContainer);
  }
  
  while (sentences[i] == quoteContainer.textContent) {
    i = Math.floor(Math.random() * sentences.length);
    log("重复一言，刷新中");
  }
  
  $(quoteContainer).hide().html(sentences[i]).fadeIn(animation_time);
  setTimeout(() => {
    $(quoteContainer).fadeOut(animation_time);
  }, pause_time - animation_time);
}
getYiyan();
setInterval(getYiyan, pause_time);

getDate();
setInterval(getDate, 1000);

function swapBackground() {
  var querySelector1 = document.querySelector(".bgi1");
  if (imageUrls.length != 1) {
    var i = Math.floor(Math.random() * imageUrls.length + 0);
    while (i == imagenumber) {
      var i = Math.floor(Math.random() * imageUrls.length + 0);
      log("重复背景图，刷新中");
    }
    log(i);
    querySelector1.classList.add("out");
    querySelector1.addEventListener(
      "transitionend",
      function () {
        querySelector1.src = imageUrls[i];
        querySelector1.classList.remove("out");
        imagenumber = i;
      },
      {
        once: true,
      }
    );
  }
}

function toggleFullScreen() {
  var elem = document.documentElement;
  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
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
  var button1 = document.querySelector("#button1");
  $(button1).hide();
}

function loadWeatherWidget() {
  // 加载脚本
  (function (a, h, g, f, e, d, c, b) {
    b = function () {
      d = h.createElement(g);
      c = h.getElementsByTagName(g)[0];
      d.src = e;
      d.charset = "utf-8";
      d.async = 1;
      c.parentNode.insertBefore(d, c);
    };

    a["SeniverseWeatherWidgetObject"] = f;
    a[f] ||
      (a[f] = function () {
        (a[f].q = a[f].q || []).push(arguments);
      });
    a[f].l = +new Date();

    if (a.attachEvent) {
      a.attachEvent("onload", b);
    } else {
      a.addEventListener("load", b, false);
    }
  })(
    window,
    document,
    "script",
    "SeniverseWeatherWidget",
    "//cdn.sencdn.com/widget2/static/js/bundle.js?t=" +
      parseInt((new Date().getTime() / 100000000).toString(), 10)
  );

  // 显示小部件
  window.SeniverseWeatherWidget("show", {
    flavor: "bubble",
    location: "WT029G15ETRJ",
    geolocation: false,
    language: "zh-Hans",
    unit: "c",
    theme: "auto",
    token: "bcbca550-e415-4533-ae02-cadbfa9d0ef7",
    hover: "always",
    container: "tp-weather-widget",
  });
}

function refreshWeather() {
  $("#" + containerId).remove();
  $("main").append(`<div id=${containerId}></div>`);
  window.SeniverseWeatherWidget("show", {
    flavor: "bubble",
    location: "WT029G15ETRJ", // 根据需要修改
    geolocation: false,
    language: "zh-Hans",
    unit: "c",
    theme: "auto",
    token: token,
    hover: "always",
    container: containerId,
  });
}
var requestsUrl;
async function fetchImageAsBlob(url, retries = 2, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      requestsUrl = LinkPrefix + url;
      const response = await fetch(requestsUrl, {
        method: "GET",
        redirect: "follow", // 允许重定向
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
        await new Promise((res) => setTimeout(res, delay));
      }
    }
  }

  return null; // 如果所有重试均失败，返回 null
}

async function fetchImages(bgimages) {
  const totalImages = bgimages.length;
  let loadedImages = 0;

  const imageData = await Promise.all(
    bgimages.map(async (url) => {
      const blobUrl = await fetchImageAsBlob(url);
      loadedImages++;

      // 计算并输出加载进度
      const progress = Math.round((loadedImages / (totalImages + 3)) * 100);
      console.log(`加载进度: ${progress}%`);
      // $(loading).html = `加载进度: ${progress}%`

      document.getElementById(
        "progress"
      ).textContent = `加载中..请耐心等待..${progress}%`;

      return {
        url,
        blobUrl,
      };
    })
  );

  return imageData;
}

const totalstart = Date.now();
// 优选线
async function selectFastestURL(urls) {
  // 超时时间设置为8秒
  const TIMEOUT = 8000;

  // 创建一个测试单个URL的函数
  function testURL(url) {
    return new Promise((resolve, reject) => {
      const start = Date.now();

      fetch(url + "/testfile.png", {
        method: "HEAD",
      })
        .then(() => {
          const duration = Date.now() - start;
          resolve({
            url,
            duration,
          });
        })
        .catch(() =>
          reject({
            url,
            duration: Infinity,
          })
        );
      // 设置超时
      setTimeout(
        () =>
          reject({
            url,
            duration: Infinity,
          }),
        TIMEOUT
      );
    });
  }

  // 并行测试所有URL
  const results = await Promise.all(
    urls.map((url) => testURL(url).catch((error) => error))
  );

  // 找出响应最快的URL
  const fastestResult = results.reduce((fastest, current) =>
    current.duration < fastest.duration ? current : fastest
  );
  console.log("所有测试结果:", results);
  console.log("最快的URL:", fastestResult.url);
  console.log("响应时间:", fastestResult.duration, "ms");
  return fastestResult.url;
}

// 使用示例
let currectUrl = window.location.href
let lastStr = currectUrl.slice(currectUrl.length-1,currectUrl.length)
if(lastStr == "/"){currectUrl = currectUrl.slice(0,currectUrl.length-1)}
const urls = [
  "https://ghproxy.reflect.us.kg/https://raw.githubusercontent.com/HurryBy/HurryBy.github.io/refs/heads/main",
  "https://gh.sixyin.com/https://raw.githubusercontent.com/HurryBy/HurryBy.github.io/refs/heads/main",
  "https://ghproxy.cc/https://raw.githubusercontent.com/HurryBy/HurryBy.github.io/refs/heads/main",
  "https://github.muou666.com/https://raw.githubusercontent.com/HurryBy/HurryBy.github.io/refs/heads/main",
  "https://gh.222322.xyz/https://raw.githubusercontent.com/HurryBy/HurryBy.github.io/refs/heads/main",
  "https://gh.pylas.xyz/https://raw.githubusercontent.com/HurryBy/HurryBy.github.io/refs/heads/main",
  "https://gh.catmak.name/https://raw.githubusercontent.com/HurryBy/HurryBy.github.io/refs/heads/main",
  "https://ghproxy.cianogame.top/https://raw.githubusercontent.com/HurryBy/HurryBy.github.io/refs/heads/main",
  "https://ghp.miaostay.com/https://raw.githubusercontent.com/HurryBy/HurryBy.github.io/refs/heads/main",
  "https://gh-proxy.ygxz.in/https://raw.githubusercontent.com/HurryBy/HurryBy.github.io/refs/heads/main",
  "https://ghpr.cc/https://raw.githubusercontent.com/HurryBy/HurryBy.github.io/refs/heads/main",
  "https://raw.githubusercontent.com/HurryBy/HurryBy.github.io/refs/heads/main",
  currectUrl
  // 添加更多的URL...
];

selectFastestURL(urls)
  .then((fastestURL) => {
    LinkPrefix = fastestURL;
    fetchImages(bgimages).then((imageData) => {
      let loadedCount = 0;
      const totalImages = imageData.length;

      imageData.forEach(({ url, blobUrl }) => {
        if (blobUrl) {
          imageUrls.push(blobUrl);
          loadedCount++;
        } else {
          console.error(`获取 Blob URL 失败: ${url}`);
        }
      });

      // 输出最终加载结果
      console.log(`成功加载 ${loadedCount} 张图片，共 ${totalImages} 张`);

      setInterval(swapBackground, 600000);
      swapBackground();
      log("已加载完毕所有背景图");

      if (imageUrls.length === 0) {
        alert("加载背景图片失败！点击确认重新加载");
        window.location.reload();
      }

      async function loadFontWithRetry(fontName, url, maxRetries = 3) {
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
          try {
            const font = new FontFace(fontName, `url(${url})`);
            const loadedFont = await font.load();
            document.fonts.add(loadedFont);
            console.log(
              `Font ${fontName} loaded successfully on attempt ${attempt}`
            );
            return loadedFont;
          } catch (error) {
            if (attempt === maxRetries) {
              throw new Error(
                `Failed to load font after ${maxRetries} attempts: ${error.message}`
              );
            }
            console.warn(`Attempt ${attempt} failed. Retrying...`);
            await new Promise((resolve) => setTimeout(resolve, 1000)); // 等待1秒后重试
          }
        }
      }

      async function loadFontWithRetryWrapper(fontName, url, maxRetries = 3) {
        try {
          await loadFontWithRetry(fontName, url, maxRetries);
          console.log("Font loaded successfully");
        } catch (error) {
          console.error("Error in loadFontWithRetryWrapper:", error);
          throw error; // 重新抛出错误，允许调用者处理
        }
      }

      // 使用示例
      async function main() {
        try {
          await loadFontWithRetryWrapper("xi", LinkPrefix + "/font1.ttf");
          var progress = Math.round(
            ((bgimages.length + 1) / (totalImages + 3)) * 100
          );
          document.getElementById(
            "progress"
          ).textContent = `加载中..请耐心等待..${progress}%`;
          await loadFontWithRetryWrapper("zhong", LinkPrefix + "/font2.ttf");
          progress = Math.round(
            ((bgimages.length + 2) / (totalImages + 3)) * 100
          );
          document.getElementById(
            "progress"
          ).textContent = `加载中..请耐心等待..${progress}%`;
          var querySelector = document.querySelector(".schoollogo");
          var blobUrl = await fetchImageAsBlob("/schoollogo.png");
          querySelector.src = blobUrl;
          progress = Math.round(
            ((bgimages.length + 3) / (totalImages + 3)) * 100
          );
          document.getElementById(
            "progress"
          ).textContent = `加载中..请耐心等待..${progress}%`;
          loadWeatherWidget();
          setInterval(refreshWeather, 1800000);
          var totalnumber = imageUrls.length;
          var totalspeed = (Date.now() - totalstart) / 1000;
          totalspeed.toFixed(3);
          var totalnumber1 = bgimages.length;
          var xianlu;
          urls.forEach(function (a, b, c) {
            if (a == LinkPrefix) {
              xianlu = b;
            }
          });
          document.getElementById(
            "information"
          ).textContent = `已加载背景图 ${totalnumber}/${totalnumber1}张 | 加载时长 ${totalspeed}s | 线路${xianlu}`;
          $(loading).hide();
          // 在这里执行后续操作
        } catch (error) {
          alert(`加载失败！点击确认重新加载 ${error}`);
          window.location.reload();
        }
      }

      main();
    });
  })
  .catch((error) => {
    alert(`加载失败！点击确认重新加载 ${error}`);
    window.location.reload();
  });
