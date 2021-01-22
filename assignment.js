//kilometer to meter
function kilometerToMeter(meter){
    var  kilometer = meter * 1000;
    return kilometer;
}

//mega Friend

function megaFriend(beegName){
    for (var i = 0; i <beegName.length; i++){
        var element = beegName [i];
        var result = element;
    }
    return result;
    }
    var beegName = [];
//hotel cost
function hotelCost(day){
    var vara = 0;
    if (day <= 10){
        vara = day * 100;
    }else if (day <= 20){
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        var vara = firstPart + secondPart;
    }else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        var vara = firstPart + secondPart + thirdPart;
    }
    return vara;
}
