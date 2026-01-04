//14个通用技能+49人类*3=161
//更新至行尸走肉DLC
const perks = [ "毛骨悚然", "不祥预感", "百折不饶", "难以置信", "马到功成", "强盗直觉", "狩猎经验", "轻如鸿毛", "逃之夭夭", "似曾相识",
    "同族", "同生共死", "希冀之翼", "暗黑感知", "携手合作", "证明自己", "领袖群雄", "急速静谧", "冲刺爆发", "肾上腺素", "心灵共鸣", "精研百草",
    "自我疗愈", "钢铁意志", "安抚生灵", "破坏手", "平稳着陆", "暴走族", "都市生存", "末日残兵", "时不我待", "坚不可摧", "不痛不痒", "生死与共", "钢筋铁骨",
    "最后的生还者", "魂牵梦绕", "果断反击", "稳操胜券", "好运会传染", "锦囊妙计", "技术员", "轻盈敏捷", "警戒", "醒醒", "药到病除", "守夜人", "永不言弃",
    "警探直觉", "破案心切", "与我共舞", "机遇之窗", "脱缰野马", "声东击西", "善有善报", "自学成才", "分崩离析", "劫后余生", "气场失真", "团结一致",
    "蓄势待发", "勇往直前", "并行进展", "未雨绸缪", "人之勇气", "齐心协力", "认定目标", "内心之力", "保姆", "同志情谊", "复苏之风", "幸运喘息",
    "不惜一切", "挣脱激励", "非正式调查", "转移注意", "舍己为人", "灵魂守卫", "鲜血契约", "压抑同盟", "远见卓识", "绝境对策", "经久耐用", "明察秋毫",
    "兵不厌诈", "强力挣扎", "成功捷径", "轰动演出", "自我保护", "咬紧牙关", "闪光弹", "新人精神", "反制之力", "东山再起", "爆炸地雷", "千里眼",
    "恩赐-治疗之环", "恩赐-暗影步", "克服难关", "矫正措施", "恩赐-指数增长", "亡父警言", "感同身受", "恩赐-黑暗理论", "内在专注", "余光长存", "急于求成",
    "窃听器", "对策治疗", "低调行事", "焕然一新", "定心丸", "聚精会神", "潜力无限", "迷雾慧眼", "快速策略", "友谊赛", "团队合作-二人之力", "当机立断",
    "滴血冲刺", "团队合作-全体隐蔽", "幕后玩家", "答疑解惑", "为生而生", "清道夫", "即兴表演", "联袂主演", "跌宕剧情", "幸运星", "化学陷阱", "轻盈猫步",
    "光明勇士", "恩赐-明亮", "交稿日", "祈祷-织网蜘蛛", "隐匿之势", "邪祟之力", "吟游诗人激励", "心静眼明", "镜影幻象","矫健身手","求生欲","老本行",
    "祈祷-险恶乌鸦","各自为安","肩负重担","切勿伤害","谨慎责任","快速反应","奔波演出","一二三四","鬼音","信念感","背水一战","团队合作-奋力一搏",
    "末世智谋","有胆来战","团队合作-咬紧牙关","贝尔蒙特之眼","胜利喜悦","荣耀时刻"];

//console.log(perks.length);
const button1 = document.querySelector('#button1');

const perk11 = document.querySelector("#perk11");
const perk12 = document.querySelector("#perk12");
const perk13 = document.querySelector("#perk13");
const perk14 = document.querySelector("#perk14");

const perk21 = document.querySelector("#perk21");
const perk22 = document.querySelector("#perk22");
const perk23 = document.querySelector("#perk23");
const perk24 = document.querySelector("#perk24");

const perk31 = document.querySelector("#perk31");
const perk32 = document.querySelector("#perk32");
const perk33 = document.querySelector("#perk33");
const perk34 = document.querySelector("#perk34");

const perk41 = document.querySelector("#perk41");
const perk42 = document.querySelector("#perk42");
const perk43 = document.querySelector("#perk43");
const perk44 = document.querySelector("#perk44");

const result = document.querySelector('.result')

button1.onclick = randomPerks;


//console.log(perks.length);


//一键生成4组随机技能给4个逃生者
function randomPerks() {
    const randomPerksGroup = [[], [], [], []];
    for (let i = 0; i < 4; i++) {
        const randomPerks = [];
        while (randomPerks.length < 4) {
            const index = Math.floor(Math.random() * perks.length);
            if (!randomPerks.includes(perks[index])) {
                randomPerks.push(perks[index]);
            }
        }
        randomPerksGroup[i] = randomPerks;
    }
    //把得到的randomPerkGroup变量传给displayPerks函数
    displayPerks(randomPerksGroup);
}

function displayPerks(random) {
    result.style.display = "block";
    //group1
    let perks1 = [random[0][0], random[0][1], random[0][2], random[0][3]];
    perk11.innerText = perks1[0];
    perk12.innerText = perks1[1];
    perk13.innerText = perks1[2];
    perk14.innerText = perks1[3];
    perk11.addEventListener('click', function () {
        singlePerks(perks1, perk11);
    });
    perk12.addEventListener('click', function () {
        singlePerks(perks1, perk12);
    });
    perk13.addEventListener('click', function () {
        singlePerks(perks1, perk13);
    });
    perk14.addEventListener('click', function () {
        singlePerks(perks1, perk14);
    });

    //group2
    let perks2 = [random[1][0], random[1][1], random[1][2], random[1][3]];
    perk21.innerText = perks2[0];
    perk22.innerText = perks2[1];
    perk23.innerText = perks2[2];
    perk24.innerText = perks2[3];
    perk21.addEventListener('click', function () {
        singlePerks(perks2, perk21);
    });
    perk22.addEventListener('click', function () {
        singlePerks(perks2, perk22);
    });    
    perk23.addEventListener('click', function () {
        singlePerks(perks2, perk23);
    });    
    perk24.addEventListener('click', function () {
        singlePerks(perks1, perk24);
    });

    //group3
    let perks3 = [random[2][0], random[2][1], random[2][2], random[2][3]];
    perk31.innerText = perks3[0];
    perk32.innerText = perks3[1];
    perk33.innerText = perks3[2];
    perk34.innerText = perks3[3];
    perk31.addEventListener('click', function () {
        singlePerks(perks3, perk31);
    });
    perk32.addEventListener('click', function () {
        singlePerks(perks3, perk32);
    });
    perk33.addEventListener('click', function () {
        singlePerks(perks3, perk33);
    });
    perk34.addEventListener('click', function () {
        singlePerks(perks3, perk34);
    });
    
    //group4
    let perks4 = [random[3][0], random[3][1], random[3][2], random[3][3]];
    perk41.innerText = perks4[0];
    perk42.innerText = perks4[1];
    perk43.innerText = perks4[2];
    perk44.innerText = perks4[3];
    perk41.addEventListener('click', function () {
        singlePerks(perks4, perk41);
    });
    perk42.addEventListener('click', function () {
        singlePerks(perks4, perk42);
    });
    perk43.addEventListener('click', function () {
        singlePerks(perks4, perk43);
    });
    perk44.addEventListener('click', function () {
        singlePerks(perks4, perk44);
    });

}

//没有的技能可以单个重新随机
function singlePerks(currentperks, perk) {
    const index = Math.floor(Math.random() * perks.length);
    if (!currentperks.includes(perks[index])) {
        perk.innerText = perks[index];
        currentperks.push(perks[index]);
    }
}


