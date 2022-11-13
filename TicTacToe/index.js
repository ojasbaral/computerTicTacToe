var board = [
    "-", "-", "-",      //  0   1   2
    "-", "-", "-",      //  3   4   5
    "-", "-", "-"       //  6   7   8
];

var totalUserPlaced = 0;
var alreadyClicked = false;
var tot = 0;
var lastCheck = false;
/*
document.querySelectorAll(".empty").forEach(item => {
    item.addEventListener("click", (event)=>{
        event.target.innerHTML = '<p class="placed">X</p>';
        item.classList.add("placed");
        playClicked(item);
        })
})
*/
document.querySelectorAll("p").forEach(item => {
    item.addEventListener("click", (event)=>{
        //item.classList.remove("empty")
        item.classList.add("placed");
        playClicked(item);    })
})

function playClicked(item){
    totalUserPlaced++;
    item.classList.remove("empty");
    if(item.classList.contains("top-left-text")){
        board[0] = "X";
    }else if(item.classList.contains("top-middle-text")){
        board[1] = "X";
    }else if(item.classList.contains("top-right-text")){
        board[2] = "X";
    }else if(item.classList.contains("middle-left-text")){
        board[3] = "X";
    }else if(item.classList.contains("middle-middle-text")){
        board[4] = "X";
    }else if(item.classList.contains("middle-right-text")){
        board[5] = "X";
    }else if(item.classList.contains("bottom-left-text")){
        board[6] = "X";
    }else if(item.classList.contains("bottom-middle-text")){
        board[7] = "X";
    }else if(item.classList.contains("bottom-right-text")){
        board[8] = "X";
    }
    tot++;
    checkIfOver();
    if(!lastCheck)
    computerGeneratedResponse();
}

function computerGeneratedResponse(){
    //ROW CHECKER
    var count = 0;
    var added = false;
    var endResult;
    if(!added&&tot>=2){
    for(var j = 0; j < 9; j+=3){
        count = 0;
    for(var i = j; i < (j+3);i++){
        if(board[i] == "X")
            count++;
    }
    if(count == 2){
        for(var i = j; i < (j+3); i++){
            if(board[i]=="-"){
                totalUserPlaced++;
                endResult = i;
                added = true;
                console.log("1");
            }
        }
    }
}
    }
    

    //COLOMN CHECKDR
    if(!added&&tot>=2){
        count = 0;

        for(var j = 0; j < 3; j++){
            count = 0;
        for(var i = j; i < (j+7);i+=3){
            if(board[i] == "X")
                count++;
        }
        if(count == 2){
                for(var i = j; i < (j+7); i+=3){
                    if(board[i]=="-"){
                        totalUserPlaced++;
                        endResult = i;
                        console.log(j);
                        added = true;
                        console.log("2");
                    }
                }
            }
            }
        }

    //DIAGNAL CHECKER
     if(!added&&tot>=2){
        count = 0;
    for(var i = 0; i < 9; i+=4){
        if(board[i]=="X")
            count++;
    }

    if(count==2){
        for(var i = 0; i < 9; i+=4){
            if(board[i]=="-"){
                totalUserPlaced++;

                endResult = i;
                added = true;
                console.log("3");
            }
    }
}
    }

     if(!added&&tot>=2){
        count = 0;
        for(var i = 2; i < 7; i+=2){
            if(board[i]=="X")
                count++;
        }
    
        if(count==2){
            for(var i = 2; i < 7; i+=2){
                if(board[i]=="-"){
                    totalUserPlaced++;

                    endResult = i;
                    added = true;
                    console.log("4");
                }
        }
    }
}

    if(!added){
    if(board[4] == "-"){
        endResult = 4;
        totalUserPlaced++;
        added=true;
        console.log("5");
    } else {
        var placeFound = false;
        if(board[0]=="-"||board[2]=="-"||board[6]=="-"||board[8]=="-")
            placeFound = true;

        if(placeFound){
        while(!added){
        var random = Math.floor(Math.random()*4);
        if(random == 0){
            if(board[0] == "-"){
                totalUserPlaced++;

                endResult = 0;
                added = true;
                console.log("6");
            }
        }

        if(random == 1){
            if(board[2] == "-"){
                totalUserPlaced++;

                endResult = 2;
                added = true;
                console.log("7");
            }
        }

        if(random == 2){
            if(board[6] == "-"){
                totalUserPlaced++;

                endResult = 6;
                added = true;
                console.log("8");
            }
        }

        if(random == 3){
            if(board[8] == "-"){
                totalUserPlaced++;

                endResult = 8;
                added = true;
                console.log("9");
            }
        }
        }
    } else {
        while(!added){
            var random = Math.floor(Math.random()*4);
            if(random == 0){
                if(board[1] == "-"){
                    totalUserPlaced++;
                    endResult = 1;
                    added = true;
                    console.log("10");
                }
            }
    
            if(random == 1){
                if(board[3] == "-"){
                    totalUserPlaced++;

                    endResult = 3;
                    added = true;
                    console.log("11");
                }
            }
    
            if(random == 2){
                if(board[7] == "-"){
                    totalUserPlaced++;

                    endResult = 7;
                    added = true;
                    console.log("12");
                }
            }
    
            if(random == 3){
                if(board[5] == "-"){
                    totalUserPlaced++;

                    endResult = 5;
                    added = true;
                    console.log("13");
                }
            }
            }
    }
    }
}
addCircle(endResult);
}
    

function addCircle(index){

    board[index] = "O";

    var x;

        if(index=="0"){
            x = ["top-left", "top-left-text"];
        }
        else if(index=="1"){
            x = ["top-middle", "top-middle-text"];
        }
        else if(index=="2"){
            x = ["top-right", "top-right-text"];
        }
        else if(index=="3"){
            x = ["middle-left", "middle-left-text"];
        }
        else if(index=="4"){
            x = ["middle-middle","middle-middle-text"];
        }
        else if(index=="5"){
            x = ["middle-right", "middle-right-text"];
        }
        else if(index=="6"){
            x = ["bottom-left","bottom-left-text"];
        }
        else if(index=="7"){
            x = ["bottom-middle","bottom-middle-text"];
        }
        else if(index=="8"){
            x = ["bottom-right", "bottom-right-text"];
        }
    

    var temp = document.getElementsByClassName(x[0]);
    //console.log(x);
    var element = document.createElement("p")
    var att = document.createAttribute("class");
    att.value = "placed";
    element.setAttributeNode(att);
    element.innerHTML = "O";
    //var name = indexame+"-text";
    var name = document.getElementsByClassName(x[1]);
    temp[0].removeChild(name[0]);
    temp[0].append(element);

    //temp.innerHTML = '<p class="placed">O</p>';
    checkIfOver();
}

function checkIfOver(){
    //CHECK FOR TIE

    //ROW CHECKERS

    var temp;
    var found = false;

    if(!found){
    for(var j = 0; j < 9; j+=3){
        temp = "";
    for(var i = j; i < (j+3);i++){
        temp += board[i];
    }

    if(temp == "XXX"){
        displayWinner("X");
        found = true;
    } else if(temp == "OOO"){
        displayWinner("O");
        found = true;
    }
}
    }
    
    
    //COLOUMNS CHECKERS
    if(!found){
        temp = "";

        for(var j = 0; j < 3; j++){
            temp = "";
        for(var i = j; i < (j+7);i+=3){
            temp += board[i];       
        }
        if(temp == "XXX"){
            displayWinner("X");
            found = true;
        } else if(temp == "OOO"){
            displayWinner("O");
            found = true;
        }
    }
    }


    //DIAGONAL CHECKERS
    if(!found){
        temp = "";
        for(var i = 0; i < 9; i+=4){
            temp += board[i];
        }
        if(temp == "XXX"){
            displayWinner("X");
            found = true;
        } else if(temp == "OOO"){
            displayWinner("O");
            found = true;
        }
    }

    if(!found){
        temp = "";
        for(var i = 2; i < 7; i+=2){
            temp += board[i];
        }
        if(temp == "XXX"){
            displayWinner("X");
            found = true;
        } else if(temp == "OOO"){
            displayWinner("O");
            found = true;
        }
    }

    if(!found){
        var num = 0;
        for(var i = 0; i < 9; i++){
            if(board[i]=="-")
                num++;
        }

        if(num == 0){
            displayWinner("-");
        }
    }
}

function displayWinner(winner){
    lastCheck = true;
    console.log(winner);
    var container = document.getElementsByClassName("container");
    container[0].style.height = "650px";

    var msg = document.querySelector(".winner-msg");
    if(winner =="X")
    msg.innerHTML = "You Win! Click to reset.";
    else if(winner == "O")
    msg.innerHTML = "Computer Wins! Click to reset.";
    else 
    msg.innerHTML = "Tie! Click to reset.";
    msg.style.display = "block";
    var btn = document.querySelector("button");
    btn.style.display = "block";
}

var resetBtn = document.querySelector("button");

resetBtn.addEventListener("click", ()=>{
    location.reload();
});
