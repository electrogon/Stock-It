var CompName = []


document.ondragstart = function () {
    return false;
}
document.oncontextmenu = function () {
    return false;
}

function play() {
    $("#gameContent").show()
    $("#introMenu").hide()
}

function generateCompany() {
    var companiesNameA = ['Wel', 'Del', 'Mar', 'App', 'Droid', 'Look', 'Doi', 'kin', 'farm', 'tech', 'tect', 'gener', 'con', 'apple', 'dell', 'micro', 'raspbery', 'ware', 'flare', 'loc', 'silver', 'gold', 'diamond', 'platinum', 'move', 'zim', 'yellow', 'blue', 'green', 'orange', 'blue', 'star', 'saber', 'book', 'tronics', 'ink', 'print', 'sub', 'aqua', 'apt', 'touch', 'droid', 'sound', 'mania', 'jump', 'quick', 'start', 'greg', 'john', 'seb', 'toy', 'greet', 'rocket','martin', 'lockheed', 'miss', 'savers', 'build', 'today', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'repair', 'garage', 'googol', 'way', 'street', 'alley', 'maximum', 'rodomont', 'motage', 'filming', 'hut', 'place', 'work', 'every', 'run', 'fast', 'letter', 'senders', 'helpers', 'STEM', 'courses', 'registration', 'an', 'com', 'scape', 'infinity', '100', '400', 'awesome', 'windows', 'door', 'entrance', 'hub', 'pi', 'banana', 'evil', 'farm', 'tractor', 'cow', 'sheep', 'chicken', 'duck', 'quaker', 'bleet', 'mouse', 'keys', 'grapes', 'potatoe', 'bow', 'rainbow', 'math', 'science', 'electronic', 'tronics', 'idea','creative', 'stocker', 'super', 'dis']

    var companiesElec = ['WE-FI', 'Presint', 'Numware', 'Wormtyger', 'loyhost', 'STIEM', 'Softerwares', 'Weldare', 'b3b4t0sh', 'poolerstosh', 'lambdaers', 'yielersinc', 'yelloco', 'weBookware', 'Bionix', 'Ganjatom', 'move-zim', 'Voyataxon', 'Tonlam', 'apperAptouch', 'Subing', '156ABaseplus', 'Vialutyelectronics', 'RadioBuyers', 'Warezone', 'icehouseCoinc', 'Fixwarer', 'Beta warehouse', 'Kaytechno']
    var companiesSoft = ['Unilux', 'Zimplex', 'greenlaOS', 'Hexin', 'volitOS', 'GoldentoneWare', 'biotriomedia', 'GoldenplusOS']
    var companiesFarm = ['FarmDucksinc', 'weareFArmersWare', 'Vivatriphex', 'AnzapFArm', 'SilverFarmers', 'Gravecorporation', 'Zoomtonfax']

    var sentenceIntro = ['this company', 'this organization', 'this group']
    var sentenceBeg = ['is brand new', 'has existed for many years', 'was created last month', 'was created last year', 'was created 2 years ago']
    var sentenceMid = [' and', '. However', ' but']
    var sentenceEnd = ['it has grown rapidly', 'it has sold more products', 'it has sold less products', 'it had more success', 'it has had less income', 'it has had more income', 'it has grown slowly']
    var sentenceOutro = ['in the last week', 'in the last month', 'in the last few days', 'in the last 3 months', 'in the last year']

    introRandomCom = Math.round(Math.random() * 2);
    if (introRandomCom == 0) {
        var chosen = companiesElec;
    }
    if (introRandomCom == 1) {
        var chosen = companiesSoft;
    }
    else {
        var chosen = companiesFarm;
    }

    var introNameA = Math.round(Math.random() * (companiesNameA.length - 1));
    var introNameB = Math.round(Math.random() * (companiesNameA.length - 1));
    var resultName = companiesNameA[introNameA] + companiesNameA[introNameB];

    var introRandom = Math.round(Math.random() * (sentenceIntro.length - 1))
    var begRandom = Math.round(Math.random() * (sentenceBeg.length - 1));
    var midRandom = Math.round(Math.random() * (sentenceMid.length - 1))
    var endRandom = Math.round(Math.random() * (sentenceEnd.length - 1))

   

    var fullSentence = resultName + ": " + sentenceIntro[introRandom] + " " + sentenceBeg[begRandom] + sentenceMid[midRandom] + " " + sentenceEnd[endRandom] + " " + sentenceOutro[introRandom] + ".";
    CompName.push(resultName);
    
    return fullSentence;
}

$(document).ready(function () {
   
    $("#gameContent").hide()

    var companyScores = []
    var companyText = [];

    for (x = 0; x < 9; x++){
    companyText.push(generateCompany());
    }
    //alert(companyText.length);
    
    for (u = 0; u < (CompName.length); u++) {
        //alert(CompName.length)
        $("#stock" + u).html(CompName[u]);
        
    }
});




