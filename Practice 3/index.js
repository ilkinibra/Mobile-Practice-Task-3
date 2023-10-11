///Siz Hansı Nəsilsiniz?
//Arqumentində x rəqəmi və y simvolu (kişi üçün "m", qadın üçün "f") qəbul edən və əcdadın (m/f) və ya nəslin (m/f) adını qaytaran funksiya yaradın.
//● Rəqəm mənfi olarsa, əlaqəli əcdadı qaytarın.
//● Müsbət olarsa, əlaqəli nəslini qaytarın.
//● Siz 0 nəsilsiniz. 0 (kişi və ya qadın) vəziyyətində "me!" qaytarın.

function generation (_x,y){
    const man="m"
    const woman="f"
    if(_x===-3 && y===man){
        console.log("great grandfather")
    }
    else if(_x===-3 && y===woman){
        console.log("great grandmother")
    }
    else if(_x===-2 && y===man){
        console.log("grandfather")
    }
    else if(_x===-2 && y===woman){
        console.log("grandmother")
    }
    else if(_x===-1 && y===man){
        console.log("father")
    }
    else if(_x===-1 && y===woman){
        console.log("mother")
    }
    else if(_x===0 && y === man){
        console.log("ME!!!")
    }
    else if(_x===0 && y===woman){
        console.log("ME!!!")
    }
    else if(_x===1 && y===man){
        console.log("son")
    }
    else if(_x===1 && y===woman){
        console.log("doughter")
    }
    else if(_x===2 && y===man){
        console.log("grandson")
    }
    else if(_x===2 && y===woman){
        console.log("granddoughter")
    }
    else if(_x===3 && y===man){
        console.log("great grandson")
    }
    else if(_x===3 && y===woman){
        console.log("great granddoughter")
    }


}
generation(0,"f")