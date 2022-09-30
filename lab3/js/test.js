board = [
    null, 0, null, 1, null, 2, null, 3,
    4, null, 5, null, 6, null, 7, null,
    null, 8, null, 9, null, 10, null, 11,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    12, null, 13, null, 14, null, 15, null,
    null, 16, null, 17, null, 18, null, 19,
    20, null, 21, null, 22, null, 23, null
]
const map1 = new Map();

map1.set(1, "a8");
map1.set(2, "b8");
map1.set(3, "c8");
map1.set(4, "d8");
map1.set(5, "e8");
map1.set(6, "f8");
map1.set(7, "g8");
map1.set(8, "h8");

map1.set(9, "a7");
map1.set(10, "b7");
map1.set(11, "c7");
map1.set(12, "d7");
map1.set(13, "e7");
map1.set(14, "f7");
map1.set(15, "g7");
map1.set(16, "h7");

map1.set(17, "a6");
map1.set(18, "b6");
map1.set(19, "c6");
map1.set(20, "d6");
map1.set(21, "e6");
map1.set(22, "f6");
map1.set(23, "g6");
map1.set(24, "h6");

map1.set(25, "a5");
map1.set(26, "b5");
map1.set(27, "c5");
map1.set(28, "d5");
map1.set(29, "e5");
map1.set(30, "f5");
map1.set(31, "g5");
map1.set(32, "h5");

map1.set(33, "a4");
map1.set(34, "b4");
map1.set(35, "c4");
map1.set(36, "d4");
map1.set(37, "e4");
map1.set(38, "f4");
map1.set(39, "g4");
map1.set(40, "h4");

map1.set(41, "a3");
map1.set(42, "b3");
map1.set(43, "c3");
map1.set(44, "d3");
map1.set(45, "e3");
map1.set(46, "f3");
map1.set(47, "g3");
map1.set(48, "h3");

map1.set(49, "a2");
map1.set(50, "b2");
map1.set(51, "c2");
map1.set(52, "d2");
map1.set(53, "e2");
map1.set(54, "f2");
map1.set(55, "g2");
map1.set(56, "h2");

map1.set(57, "a1");
map1.set(58, "b1");
map1.set(59, "c1");
map1.set(60, "d1");
map1.set(61, "e1");
map1.set(62, "f1");
map1.set(63, "g1");
map1.set(64, "h1");

cells = document.getElementsByClassName('cell');
let blacksPieces = document.getElementsByClassName('black-piece');
let redsPieces = document.getElementsByClassName('red-piece');
redTurnText = document.querySelectorAll(".red-turn-text");
blackTurntext = document.querySelectorAll(".black-turn-text");

var button = document.getElementById("start");
button.addEventListener("click", function () {

    reset();

});

var ex = document.getElementById("example1");
ex.addEventListener("click", function () {
    console.log("Кнопка нажата.");
    example1();

});

function example1() {
     turn = true; 
    for (let i = 0; i < board.length; i++) {
        cells[i].innerHTML = "";

    }


    cells[37].innerHTML = `<span class="black-piece" id="${[14]}"></span>`;
    redsPieces = document.getElementsByClassName('black-piece');

    cells[39].innerHTML = `<span class="black-piece" id="${[15]}"></span>`;
    redsPieces = document.getElementsByClassName('black-piece');


    cells[1].innerHTML = `<span class="red-piece" id="${[3]}"></span>`;
    blacksPieces = document.getElementsByClassName('red-piece');

    cells[58].innerHTML = `<span class="red-piece king" id="${[4]}"></span>`;
    blacksPieces = document.getElementsByClassName('red-piece');
    document.getElementById(4).classList.add("king");

    cells[26].innerHTML = `<span class="red-piece" id="${[5]}"></span>`;
    blacksPieces = document.getElementsByClassName('red-piece');

    cells[10].innerHTML = `<span class="red-piece" id="${[6]}"></span>`;
    blacksPieces = document.getElementsByClassName('red-piece');

    cells[12].innerHTML = `<span class="red-piece" id="${[7]}"></span>`;
    blacksPieces = document.getElementsByClassName('red-piece');

    cells[23].innerHTML = `<span class="red-piece" id="${[8]}"></span>`;
    blacksPieces = document.getElementsByClassName('red-piece');
    blackScore = 2;
    redScore = 5;
    paint();
  
    board = [
        null, 3, null, null, null, null, null, null,
        null, null, 6, null, 7, null, null, null,
        null, null, null, null, null, null, null, 8,
        null, null, 5, null, null, null, null, null,
        null, null, null, null, null, 14, null, 15,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        null, null, 4, null, null, null, null, null
    ]

    blacksPieces = document.getElementsByClassName('black-piece');
    redsPieces = document.getElementsByClassName('red-piece');

    console.log("ex");

    givePiecesEventListeners();
}

function reset() {
     turn = false; 
    paint();
    const arr = [
        1, 3, 5, 7,
        8, 10, 12, 14,
        17, 19, 21, 23,
        40, 42, 44, 46,
        49, 51, 53, 55,
        56, 58, 60, 62
    ]
    for (let i = 0; i < board.length; i++) {
        cells[i].innerHTML = "";

    }
    for (let i = 0; i < arr.length; i++) {
        if (i < 12) {
            cells[arr[i]].innerHTML = `<span class="red-piece" id="${[i]}"></span>`;
            redsPieces = document.getElementsByClassName('red-piece');
        }
        else {
            cells[arr[i]].innerHTML = `<span class="black-piece" id="${[i]}"></span>`;
            blacksPieces = document.getElementsByClassName('black-piece');
        }
    }
    board = [
        null, 0, null, 1, null, 2, null, 3,
        4, null, 5, null, 6, null, 7, null,
        null, 8, null, 9, null, 10, null, 11,
        null, null, null, null, null, null, null, null,
        null, null, null, null, null, null, null, null,
        12, null, 13, null, 14, null, 15, null,
        null, 16, null, 17, null, 18, null, 19,
        20, null, 21, null, 22, null, 23, null
    ]
    blacksPieces = document.getElementsByClassName('black-piece');
    redsPieces = document.getElementsByClassName('red-piece');

    console.log("clear");

    givePiecesEventListeners();
}



//6*
let findPiece = function (pieceId) {
    let parsed = parseInt(pieceId);
    return board.indexOf(parsed);
};
let turn = false; 
let redScore = 12;
let blackScore = 12;
let playerPieces;


let selectedPiece = {
    pieceId: -1,
    indexOfBoardPiece: -1,
    isKing: false,
    seventhSpace: false,
    ninthSpace: false,
    fourteenthSpace: false,
    eighteenthSpace: false,
    minusSeventhSpace: false,
    minusNinthSpace: false,
    minusFourteenthSpace: false,
    minusEighteenthSpace: false,
    space21: false,
    space28: false,
    space35: false,
    space42: false,
    space49: false,
    space27: false,
    space36: false,
    space45: false,
    space54: false,
    space63: false,
    space_21: false,
    space_28: false,
    space_35: false,
    space_42: false,
    space_49: false,
    space_27: false,
    space_36: false,
    space_45: false,
    space_54: false,
    space_63: false
}



//*16
function changePlayer() {
    if (turn) {
        turn = false;
        for (let i = 0; i < redTurnText.length; i++) {
            redTurnText[i].style.color = "lightGrey";
            blackTurntext[i].style.color = "rgb(255, 167, 34)";
        }
    } else {
        turn = true;
        for (let i = 0; i < blackTurntext.length; i++) {
            blackTurntext[i].style.color = "lightGrey";
            redTurnText[i].style.color = "rgb(255, 167, 34)";
        }
    }
    givePiecesEventListeners();//*0
}



//*15
function checkForWin() {
    if (blackScore === 0) {
        for (let i = 0; i < redTurnText.length; i++) {
            redTurnText[i].style.color = "rgb(255, 167, 34)";
            blackTurntext[i].style.display = "none";
            redTurnText[i].textContent = "RED WINS!";
        }
    } else if (redScore === 0) {
        for (let i = 0; i < blackTurntext.length; i++) {
            blackTurntext[i].style.color = "rgb(255, 167, 34)";
            redTurnText[i].style.display = "none";
            blackTurntext[i].textContent = "BLACK WINS!";
        }
    }
    changePlayer();//*16
}

//*14
function removeEventListeners() {
    if (turn) {
        for (let i = 0; i < redsPieces.length; i++) {
            redsPieces[i].removeEventListener("click", getPlayerPieces);
        }
    } else {
        for (let i = 0; i < blacksPieces.length; i++) {
            blacksPieces[i].removeEventListener("click", getPlayerPieces);
        }
    }
    checkForWin();//*15
}

//*13
function changeData(indexOfBoardPiece, modifiedIndex, removePiece) {
    board[indexOfBoardPiece] = null;
    board[modifiedIndex] = parseInt(selectedPiece.pieceId);






    const node = document.createElement("li");
    if (selectedPiece.pieceId <= 11) {

        const textnode = document.createTextNode("red  ");
        node.appendChild(textnode);
    } else {
        const textnode = document.createTextNode("black  ");
        node.appendChild(textnode);
    }

    const textnode = document.createTextNode(map1.get(indexOfBoardPiece + 1));
    node.appendChild(textnode);
    const textnode2 = document.createTextNode(':' + map1.get(modifiedIndex + 1));

    node.appendChild(textnode2);
    document.getElementById("myList").appendChild(node);

    if (turn && selectedPiece.pieceId < 12 && modifiedIndex >= 57) {
        document.getElementById(selectedPiece.pieceId).classList.add("king")
    }
    if (turn === false && selectedPiece.pieceId >= 12 && modifiedIndex <= 7) {
        document.getElementById(selectedPiece.pieceId).classList.add("king");
    }
    if (removePiece) {
        let r=modifiedIndex-indexOfBoardPiece
        if(r>=14||r<=-14){
         
            if(r%7==0){

                if(r>0){
                  while(r!=0){
                    r-=7;
                    board[indexOfBoardPiece+r] = null;
                    cells[indexOfBoardPiece+r].innerHTML = "";
                       
                  }
                }
                if(r<0){
                    while(r!=0){
                        r+=7;
                        board[indexOfBoardPiece+r] = null;
                        cells[indexOfBoardPiece+r].innerHTML = "";
                    }
                }
                    
            }
            if(r%9==0){
                if(r>0){
                    while(r!=0){
                      r-=9;
                      board[indexOfBoardPiece+r] = null;
                      cells[indexOfBoardPiece+r].innerHTML = "";
                    }
                  }
                  if(r<0){
                      while(r!=0){
                          r+=9;
                          board[indexOfBoardPiece+r] = null;
                          cells[indexOfBoardPiece+r].innerHTML = "";
                      }
                  }
            }

        }
        board[removePiece] = null;
        if (turn && selectedPiece.pieceId < 12) {
            cells[removePiece].innerHTML = "";
            blackScore--
        }
        if (turn === false && selectedPiece.pieceId >= 12) {
            cells[removePiece].innerHTML = "";
            redScore--
        }
    }
    resetSelectedPieceProperties();//*14
    removeCellonclick();
    removeEventListeners();
}

//*12
function makeMove(number) {
    paint();

    //обработка щелчка на квадрат, куда поставить шашку
    document.getElementById(selectedPiece.pieceId).remove();
    cells[selectedPiece.indexOfBoardPiece].innerHTML = "";
    if (turn) {
        if (selectedPiece.isKing) {
            cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `<span class="red-piece king" id="${selectedPiece.pieceId}"></span>`;
            redsPieces = document.getElementsByClassName('red-piece');
        } else {
            cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `<span class="red-piece" id="${selectedPiece.pieceId}"></span>`;
            redsPieces = document.getElementsByClassName('red-piece');
        }
    } else {
        if (selectedPiece.isKing) {
            cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `<span class="black-piece king" id="${selectedPiece.pieceId}"></span>`;
            blacksPieces = document.getElementsByClassName('black-piece');
        } else {
            cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `<span class="black-piece" id="${selectedPiece.pieceId}"></span>`;
            blacksPieces = document.getElementsByClassName('black-piece');
        }
    }

    let indexOfPiece = selectedPiece.indexOfBoardPiece
    if (number === 14 || number === -14 || number === 18 || number === -18) {
        changeData(indexOfPiece, indexOfPiece + number, indexOfPiece + number / 2);//*13
    } else if (number == 21 || number == 28 || number == 35 || number == 42 || number == 49) {
        changeData(indexOfPiece, indexOfPiece + number, indexOfPiece + number - 7);//*13

    } else if (number == 27 || number == 36 || number == 45 || number == 54 || number == 63) {
        changeData(indexOfPiece, indexOfPiece + number, indexOfPiece + number - 9);//*13
    }
    else if (number == -21 || number == -28 || number == -35 || number == -42 || number == -49) {
        changeData(indexOfPiece, indexOfPiece + number, indexOfPiece + number +7);//*13

    } else if (number == -27 || number == -36 || number == -45 || number == -54 || number == -63) {
        changeData(indexOfPiece, indexOfPiece + number, indexOfPiece + number + 9);//*13

    }else {
        changeData(indexOfPiece, indexOfPiece + number);//*13
    }
}

//*11
function giveCellsClick() {
    if (selectedPiece.seventhSpace) {
        cells[selectedPiece.indexOfBoardPiece + 7].setAttribute("onclick", "makeMove(7)");//*12
    }
    if (selectedPiece.ninthSpace) {
        cells[selectedPiece.indexOfBoardPiece + 9].setAttribute("onclick", "makeMove(9)");//*12
    }
    if (selectedPiece.fourteenthSpace) {
        cells[selectedPiece.indexOfBoardPiece + 14].setAttribute("onclick", "makeMove(14)");//*12
    }
    if (selectedPiece.eighteenthSpace) {
        cells[selectedPiece.indexOfBoardPiece + 18].setAttribute("onclick", "makeMove(18)");//*12
    }
    if (selectedPiece.minusSeventhSpace) {
        cells[selectedPiece.indexOfBoardPiece - 7].setAttribute("onclick", "makeMove(-7)");//*12
    }
    if (selectedPiece.minusNinthSpace) {
        cells[selectedPiece.indexOfBoardPiece - 9].setAttribute("onclick", "makeMove(-9)");//*12
    }
    if (selectedPiece.minusFourteenthSpace) {
        cells[selectedPiece.indexOfBoardPiece - 14].setAttribute("onclick", "makeMove(-14)");//*12
    }
    if (selectedPiece.minusEighteenthSpace) {
        cells[selectedPiece.indexOfBoardPiece - 18].setAttribute("onclick", "makeMove(-18)");//*12
    }

    if (selectedPiece.space_21) {
        cells[selectedPiece.indexOfBoardPiece - 21].setAttribute("onclick", "makeMove(-21)");//*12
    }
    if (selectedPiece.space_28) {
        cells[selectedPiece.indexOfBoardPiece - 28].setAttribute("onclick", "makeMove(-28)");//*12
    }
    if (selectedPiece.space_35) {
        cells[selectedPiece.indexOfBoardPiece - 35].setAttribute("onclick", "makeMove(-35)");//*12
    }
    if (selectedPiece.space_42) {
        cells[selectedPiece.indexOfBoardPiece - 42].setAttribute("onclick", "makeMove(-42)");//*12
    }
    if (selectedPiece.space_49) {
        cells[selectedPiece.indexOfBoardPiece - 49].setAttribute("onclick", "makeMove(-49)");//*12
    }
    if (selectedPiece.space_27) {
        cells[selectedPiece.indexOfBoardPiece - 27].setAttribute("onclick", "makeMove(-27)");//*12
    }
    if (selectedPiece.space_36) {
        cells[selectedPiece.indexOfBoardPiece - 36].setAttribute("onclick", "makeMove(-36)");//*12
    }

    if (selectedPiece.space_45) {
        cells[selectedPiece.indexOfBoardPiece - 45].setAttribute("onclick", "makeMove(-45)");//*12
    }
    if (selectedPiece.space_54) {
        cells[selectedPiece.indexOfBoardPiece - 54].setAttribute("onclick", "makeMove(-54)");//*12
    }
    if (selectedPiece.space_63) {
        cells[selectedPiece.indexOfBoardPiece - 63].setAttribute("onclick", "makeMove(-63)");//*12
    }
    if (selectedPiece.space21) {
        cells[selectedPiece.indexOfBoardPiece + 21].setAttribute("onclick", "makeMove(21)");//*12
    }
    if (selectedPiece.space28) {
        cells[selectedPiece.indexOfBoardPiece + 28].setAttribute("onclick", "makeMove(28)");//*12
    }
    if (selectedPiece.space35) {
        cells[selectedPiece.indexOfBoardPiece + 35].setAttribute("onclick", "makeMove(35)");//*12
    }
    if (selectedPiece.space42) {
        cells[selectedPiece.indexOfBoardPiece + 42].setAttribute("onclick", "makeMove(42)");//*12
    }
    if (selectedPiece.space49) {
        cells[selectedPiece.indexOfBoardPiece + 49].setAttribute("onclick", "makeMove(49)");//*12
    }
    if (selectedPiece.space27) {
        cells[selectedPiece.indexOfBoardPiece + 27].setAttribute("onclick", "makeMove(27)");//*12
    }
    if (selectedPiece.space36) {
        cells[selectedPiece.indexOfBoardPiece + 36].setAttribute("onclick", "makeMove(36)");//*12
    }

    if (selectedPiece.space45) {
        cells[selectedPiece.indexOfBoardPiece + 45].setAttribute("onclick", "makeMove(45)");//*12
    }
    if (selectedPiece.space54) {
        cells[selectedPiece.indexOfBoardPiece + 54].setAttribute("onclick", "makeMove(54)");//*12
    }
    if (selectedPiece.space63) {
        cells[selectedPiece.indexOfBoardPiece + 63].setAttribute("onclick", "makeMove(63)");//*12
    }
}

//*10
function givePieceBorder() {

    for (var el = 0; el < document.getElementsByClassName("black-piece").length; el++) {
        document.getElementsByClassName("black-piece")[el].style.background = "red";
    }
    for (var el = 0; el < document.getElementsByClassName("red-piece").length; el++) {
        document.getElementsByClassName("red-piece")[el].style.background = "black";
    }
    for (var el = 0; el < document.getElementsByClassName("red-piece king").length; el++) {
        document.getElementsByClassName("red-piece king")[el].style.background = " purple";
    }
    for (var el = 0; el < document.getElementsByClassName("black-piece king").length; el++) {
        document.getElementsByClassName("black-piece king")[el].style.background = "orange";
    }

    if (selectedPiece.seventhSpace || selectedPiece.ninthSpace || selectedPiece.fourteenthSpace || selectedPiece.eighteenthSpace
        || selectedPiece.minusSeventhSpace || selectedPiece.minusNinthSpace || selectedPiece.minusFourteenthSpace || selectedPiece.minusEighteenthSpace||
        selectedPiece.space_21 ||
        selectedPiece.space_28 ||
        selectedPiece.space_35 ||
        selectedPiece.space_42 ||
        selectedPiece.space_49 ||
        selectedPiece.space_27 ||
        selectedPiece.space_36 ||
        selectedPiece.space_45 ||
        selectedPiece.space_54 ||
        selectedPiece.space_63 ||
        selectedPiece.space21 ||
        selectedPiece.space28 ||
        selectedPiece.space35 ||
        selectedPiece.space42 ||
        selectedPiece.space49 ||
        selectedPiece.space27 ||
        selectedPiece.space36 ||
        selectedPiece.space45 ||
        selectedPiece.space54 ||
        selectedPiece.space63) {

            var clas=document.getElementById(selectedPiece.pieceId).getAttribute('class');
        if (clas===('black-piece cur')||clas===('red-piece cur')) {

            paint();
            for (var el = 0; el < document.getElementsByClassName("black-piece cur").length; el++) {
                document.getElementsByClassName("black-piece cur")[el].style.background = "red";
                document.getElementById(selectedPiece.pieceId).classList.remove('cur');
            }
            for (var el = 0; el < document.getElementsByClassName("red-piece cur").length; el++) {

                document.getElementsByClassName("red-piece cur")[el].style.background = "black";
                document.getElementById(selectedPiece.pieceId).classList.remove('cur');

            }
            paint();
        }else if(clas=='red-piece king cur'){
            paint();
            for (var el = 0; el < document.getElementsByClassName(clas).length; el++) {
                document.getElementsByClassName(clas)[el].style.background = "purple";
                document.getElementById(selectedPiece.pieceId).classList.remove('cur');
            }

        } else if(clas=='black-piece king cur'){
            paint();
            for (var el = 0; el < document.getElementsByClassName(clas).length; el++) {
                document.getElementsByClassName(clas)[el].style.background = "orange";
                document.getElementById(selectedPiece.pieceId).classList.remove('cur');
            }}
         else {
            console.log(document.getElementById(selectedPiece.pieceId).getAttribute('class'))
            document.getElementById(selectedPiece.pieceId).style.border = "3px solid rgb(45, 79, 102)";
            document.getElementById(selectedPiece.pieceId).style.background = "rgb(255, 210, 8)";
            document.getElementById(selectedPiece.pieceId).classList.add('cur');
        }




        giveCellsClick();//*11

    } else {
        return;
    }

}


//*9
function checkPieceConditions() {

    if (selectedPiece.isKing) {
        givePieceBorder();//*10
    } else {
        if (turn) {
            selectedPiece.minusSeventhSpace = false;
            selectedPiece.minusNinthSpace = false;
            selectedPiece.minusFourteenthSpace = false;
            selectedPiece.minusEighteenthSpace = false;

            selectedPiece.space_21 = false;
            selectedPiece.space_28 = false;
            selectedPiece.space_35 = false;
            selectedPiece.space_42 = false;
            selectedPiece.space_49 = false;
            selectedPiece.space_27 = false;
            selectedPiece.space_36 = false;
            selectedPiece.space_45 = false;
            selectedPiece.space_54 = false;
            selectedPiece.space_63 = false;
        } else {
            selectedPiece.seventhSpace = false;
            selectedPiece.ninthSpace = false;
            selectedPiece.fourteenthSpace = false;
            selectedPiece.eighteenthSpace = false;
            selectedPiece.space21 = false;
            selectedPiece.space28 = false;
            selectedPiece.space35 = false;
            selectedPiece.space42 = false;
            selectedPiece.space49 = false;
            selectedPiece.space27 = false;
            selectedPiece.space36 = false;
            selectedPiece.space45 = false;
            selectedPiece.space54 = false;
            selectedPiece.space63 = false;
        }
        givePieceBorder();//*10
    }
}

//*8
function checkAvailableJumpSpaces() {
    var curSH = document.getElementById(selectedPiece.pieceId).getAttribute('class');
    if (turn) {

        var res = false;

        if (board[selectedPiece.indexOfBoardPiece + 14] === null
            && cells[selectedPiece.indexOfBoardPiece + 14].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 7] >= 12) {
            selectedPiece.fourteenthSpace = true;
            document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 14)).style.background = "rgb(189, 0, 0)";
            res = true;

        }

        if (board[selectedPiece.indexOfBoardPiece + 18] === null
            && cells[selectedPiece.indexOfBoardPiece + 18].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 9] >= 12) {
            selectedPiece.eighteenthSpace = true;
            document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 18)).style.background = "rgb(189, 0, 0)";
            res = true;
        }
        ///////////
        if (board[selectedPiece.indexOfBoardPiece - 14] === null
            && cells[selectedPiece.indexOfBoardPiece - 14].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 7] >= 12 && board[selectedPiece.indexOfBoardPiece - 7] !== null) {
            selectedPiece.minusFourteenthSpace = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 14)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 21] === null
            && cells[selectedPiece.indexOfBoardPiece - 21].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 14] >= 12 && (board[selectedPiece.indexOfBoardPiece - 7] !== null || board[selectedPiece.indexOfBoardPiece - 14] !== null)) {
            selectedPiece.space_21 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 21)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 28] === null
            && cells[selectedPiece.indexOfBoardPiece - 28].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 21] >= 12 && (board[selectedPiece.indexOfBoardPiece - 7] !== null || board[selectedPiece.indexOfBoardPiece - 14] !== null || board[selectedPiece.indexOfBoardPiece - 21] !== null)) {
            selectedPiece.space_28 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 28)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 35] === null
            && cells[selectedPiece.indexOfBoardPiece - 35].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 28] >= 12 && (board[selectedPiece.indexOfBoardPiece - 7] !== null || board[selectedPiece.indexOfBoardPiece - 14] !== null || board[selectedPiece.indexOfBoardPiece - 21] !== null || board[selectedPiece.indexOfBoardPiece - 28] !== null)) {
            selectedPiece.space_35 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 35)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 42] === null
            && cells[selectedPiece.indexOfBoardPiece - 42].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 35] >= 12 && (board[selectedPiece.indexOfBoardPiece - 7] !== null || board[selectedPiece.indexOfBoardPiece - 14] !== null || board[selectedPiece.indexOfBoardPiece - 21] !== null || board[selectedPiece.indexOfBoardPiece - 28] !== null || board[selectedPiece.indexOfBoardPiece - 35] !== null)) {
            selectedPiece.space_42 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 42)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 49] === null
            && cells[selectedPiece.indexOfBoardPiece - 49].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 42] >= 12 && (board[selectedPiece.indexOfBoardPiece - 7] !== null || board[selectedPiece.indexOfBoardPiece - 14] !== null || board[selectedPiece.indexOfBoardPiece - 21] !== null || board[selectedPiece.indexOfBoardPiece - 28] !== null || board[selectedPiece.indexOfBoardPiece - 35] !== null || board[selectedPiece.indexOfBoardPiece - 42] !== null)) {
            selectedPiece.space_49 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 49)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        ////////////////
        if (board[selectedPiece.indexOfBoardPiece - 18] === null
            && cells[selectedPiece.indexOfBoardPiece - 18].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 9] >= 12 && board[selectedPiece.indexOfBoardPiece - 9] !== null) {
            selectedPiece.space_18 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 18)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 27] === null
            && cells[selectedPiece.indexOfBoardPiece - 27].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 18] >= 12 && (board[selectedPiece.indexOfBoardPiece - 9] !== null || board[selectedPiece.indexOfBoardPiece - 18] !== null)) {
            selectedPiece.space_27 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 27)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 36] === null
            && cells[selectedPiece.indexOfBoardPiece - 36].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 27] >= 12 && (board[selectedPiece.indexOfBoardPiece - 9] !== null || board[selectedPiece.indexOfBoardPiece - 18] !== null || board[selectedPiece.indexOfBoardPiece - 27] !== null)) {
            selectedPiece.space_36 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 36)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 45] === null
            && cells[selectedPiece.indexOfBoardPiece - 45].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 36] >= 12 && (board[selectedPiece.indexOfBoardPiece - 9] !== null || board[selectedPiece.indexOfBoardPiece - 18] !== null || board[selectedPiece.indexOfBoardPiece - 27] !== null || board[selectedPiece.indexOfBoardPiece - 36] !== null)) {
            selectedPiece.space_45 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 45)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 54] === null
            && cells[selectedPiece.indexOfBoardPiece - 54].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 45] >= 12 && (board[selectedPiece.indexOfBoardPiece - 9] !== null || board[selectedPiece.indexOfBoardPiece - 18] !== null || board[selectedPiece.indexOfBoardPiece - 27] !== null || board[selectedPiece.indexOfBoardPiece - 36] !== null || board[selectedPiece.indexOfBoardPiece - 45] !== null)) {
            selectedPiece.space_54 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 54)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 63] === null
            && cells[selectedPiece.indexOfBoardPiece - 63].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 54] >= 12 && (board[selectedPiece.indexOfBoardPiece - 9] !== null || board[selectedPiece.indexOfBoardPiece - 18] !== null || board[selectedPiece.indexOfBoardPiece - 27] !== null || board[selectedPiece.indexOfBoardPiece - 36] !== null || board[selectedPiece.indexOfBoardPiece - 45] !== null || board[selectedPiece.indexOfBoardPiece - 54] !== null)) {
            selectedPiece.space_63 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 63)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }

        ///////+_+_+
        if (board[selectedPiece.indexOfBoardPiece + 14] === null
            && cells[selectedPiece.indexOfBoardPiece + 14].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 7] >= 12 && board[selectedPiece.indexOfBoardPiece + 7] !== null) {
            selectedPiece.fourteenthSpace = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 14)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 21] === null
            && cells[selectedPiece.indexOfBoardPiece + 21].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 14] >= 12 && (board[selectedPiece.indexOfBoardPiece + 7] !== null || board[selectedPiece.indexOfBoardPiece + 14] !== null)) {
            selectedPiece.space21 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 21)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 28] === null
            && cells[selectedPiece.indexOfBoardPiece + 28].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 21] >= 12 && (board[selectedPiece.indexOfBoardPiece + 7] !== null || board[selectedPiece.indexOfBoardPiece + 14] !== null || board[selectedPiece.indexOfBoardPiece + 21] !== null)) {
            selectedPiece.space28 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 28)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 35] === null
            && cells[selectedPiece.indexOfBoardPiece + 35].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 28] >= 12 && (board[selectedPiece.indexOfBoardPiece + 7] !== null || board[selectedPiece.indexOfBoardPiece + 14] !== null || board[selectedPiece.indexOfBoardPiece + 21] !== null || board[selectedPiece.indexOfBoardPiece + 28] !== null)) {
            selectedPiece.space35 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 35)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 42] === null
            && cells[selectedPiece.indexOfBoardPiece + 42].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 35] >= 12 && (board[selectedPiece.indexOfBoardPiece + 7] !== null || board[selectedPiece.indexOfBoardPiece + 14] !== null || board[selectedPiece.indexOfBoardPiece + 21] !== null || board[selectedPiece.indexOfBoardPiece + 28] !== null || board[selectedPiece.indexOfBoardPiece + 35] !== null)) {
            selectedPiece.space42 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 42)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 49] === null
            && cells[selectedPiece.indexOfBoardPiece + 49].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 42] >= 12 && (board[selectedPiece.indexOfBoardPiece + 7] !== null || board[selectedPiece.indexOfBoardPiece + 14] !== null || board[selectedPiece.indexOfBoardPiece + 21] !== null || board[selectedPiece.indexOfBoardPiece + 28] !== null || board[selectedPiece.indexOfBoardPiece + 35] !== null || board[selectedPiece.indexOfBoardPiece + 42] !== null)) {
            selectedPiece.space49 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 49)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        /////
        if (board[selectedPiece.indexOfBoardPiece + 18] === null
            && cells[selectedPiece.indexOfBoardPiece + 18].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 9] >= 12 && board[selectedPiece.indexOfBoardPiece + 9] !== null) {
            selectedPiece.eighteenthSpace = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 18)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 27] === null
            && cells[selectedPiece.indexOfBoardPiece + 27].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 18] >= 12 && (board[selectedPiece.indexOfBoardPiece + 9] !== null || board[selectedPiece.indexOfBoardPiece + 18] !== null)) {
            selectedPiece.space27 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 27)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 36] === null
            && cells[selectedPiece.indexOfBoardPiece + 36].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 27] >= 12 && (board[selectedPiece.indexOfBoardPiece + 9] !== null || board[selectedPiece.indexOfBoardPiece + 18] !== null || board[selectedPiece.indexOfBoardPiece + 27] !== null)) {
            selectedPiece.space36 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 36)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 45] === null
            && cells[selectedPiece.indexOfBoardPiece + 45].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 36] >= 12 && (board[selectedPiece.indexOfBoardPiece + 9] !== null || board[selectedPiece.indexOfBoardPiece + 18] !== null || board[selectedPiece.indexOfBoardPiece + 27] !== null || board[selectedPiece.indexOfBoardPiece + 36] !== null)) {
            selectedPiece.space45 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 45)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 54] === null
            && cells[selectedPiece.indexOfBoardPiece + 54].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 45] >= 12 && (board[selectedPiece.indexOfBoardPiece + 9] !== null || board[selectedPiece.indexOfBoardPiece + 18] !== null || board[selectedPiece.indexOfBoardPiece + 27] !== null || board[selectedPiece.indexOfBoardPiece + 36] !== null || board[selectedPiece.indexOfBoardPiece + 45] !== null)) {
            selectedPiece.space54 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 54)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 63] === null
            && cells[selectedPiece.indexOfBoardPiece + 63].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 54] >= 12 && (board[selectedPiece.indexOfBoardPiece + 9] !== null || board[selectedPiece.indexOfBoardPiece + 18] !== null || board[selectedPiece.indexOfBoardPiece + 27] !== null || board[selectedPiece.indexOfBoardPiece + 36] !== null || board[selectedPiece.indexOfBoardPiece + 45] !== null || board[selectedPiece.indexOfBoardPiece + 54] !== null)) {
            selectedPiece.space63 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 63)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        return res;
    } else {
        var res = false;
        if (board[selectedPiece.indexOfBoardPiece - 14] === null
            && cells[selectedPiece.indexOfBoardPiece - 14].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 7] < 12 && board[selectedPiece.indexOfBoardPiece - 7] !== null) {
            selectedPiece.minusFourteenthSpace = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 14)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 21] === null
            && cells[selectedPiece.indexOfBoardPiece - 21].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 14] < 12 && (board[selectedPiece.indexOfBoardPiece - 7] !== null || board[selectedPiece.indexOfBoardPiece - 14] !== null)) {
            selectedPiece.space_21 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 21)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 28] === null
            && cells[selectedPiece.indexOfBoardPiece - 28].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 21] < 12 && (board[selectedPiece.indexOfBoardPiece - 7] !== null || board[selectedPiece.indexOfBoardPiece - 14] !== null || board[selectedPiece.indexOfBoardPiece - 21] !== null)) {
            selectedPiece.space_28 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 28)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 35] === null
            && cells[selectedPiece.indexOfBoardPiece - 35].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 28] <12 && (board[selectedPiece.indexOfBoardPiece - 7] !== null || board[selectedPiece.indexOfBoardPiece - 14] !== null || board[selectedPiece.indexOfBoardPiece - 21] !== null || board[selectedPiece.indexOfBoardPiece - 28] !== null)) {
            selectedPiece.space_35 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 35)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 42] === null
            && cells[selectedPiece.indexOfBoardPiece - 42].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 35] < 12 && (board[selectedPiece.indexOfBoardPiece - 7] !== null || board[selectedPiece.indexOfBoardPiece - 14] !== null || board[selectedPiece.indexOfBoardPiece - 21] !== null || board[selectedPiece.indexOfBoardPiece - 28] !== null || board[selectedPiece.indexOfBoardPiece - 35] !== null)) {
            selectedPiece.space_42 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 42)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 49] === null
            && cells[selectedPiece.indexOfBoardPiece - 49].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 42] < 12 && (board[selectedPiece.indexOfBoardPiece - 7] !== null || board[selectedPiece.indexOfBoardPiece - 14] !== null || board[selectedPiece.indexOfBoardPiece - 21] !== null || board[selectedPiece.indexOfBoardPiece - 28] !== null || board[selectedPiece.indexOfBoardPiece - 35] !== null || board[selectedPiece.indexOfBoardPiece - 42] !== null)) {
            selectedPiece.space_49 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 49)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        ////////////////
        if (board[selectedPiece.indexOfBoardPiece - 18] === null
            && cells[selectedPiece.indexOfBoardPiece - 18].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 9] < 12 && board[selectedPiece.indexOfBoardPiece - 9] !== null) {
            selectedPiece.space_18 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 18)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 27] === null
            && cells[selectedPiece.indexOfBoardPiece - 27].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 18] < 12 && (board[selectedPiece.indexOfBoardPiece - 9] !== null || board[selectedPiece.indexOfBoardPiece - 18] !== null)) {
            selectedPiece.space_27 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 27)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 36] === null
            && cells[selectedPiece.indexOfBoardPiece - 36].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 27] < 12 && (board[selectedPiece.indexOfBoardPiece - 9] !== null || board[selectedPiece.indexOfBoardPiece - 18] !== null || board[selectedPiece.indexOfBoardPiece - 27] !== null)) {
            selectedPiece.space_36 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 36)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 45] === null
            && cells[selectedPiece.indexOfBoardPiece - 45].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 36] < 12 && (board[selectedPiece.indexOfBoardPiece - 9] !== null || board[selectedPiece.indexOfBoardPiece - 18] !== null || board[selectedPiece.indexOfBoardPiece - 27] !== null || board[selectedPiece.indexOfBoardPiece - 36] !== null)) {
            selectedPiece.space_45 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 45)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 54] === null
            && cells[selectedPiece.indexOfBoardPiece - 54].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 45] < 12 && (board[selectedPiece.indexOfBoardPiece - 9] !== null || board[selectedPiece.indexOfBoardPiece - 18] !== null || board[selectedPiece.indexOfBoardPiece - 27] !== null || board[selectedPiece.indexOfBoardPiece - 36] !== null || board[selectedPiece.indexOfBoardPiece - 45] !== null)) {
            selectedPiece.space_54 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 54)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece - 63] === null
            && cells[selectedPiece.indexOfBoardPiece - 63].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 54] < 12 && (board[selectedPiece.indexOfBoardPiece - 9] !== null || board[selectedPiece.indexOfBoardPiece - 18] !== null || board[selectedPiece.indexOfBoardPiece - 27] !== null || board[selectedPiece.indexOfBoardPiece - 36] !== null || board[selectedPiece.indexOfBoardPiece - 45] !== null || board[selectedPiece.indexOfBoardPiece - 54] !== null)) {
            selectedPiece.space_63 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 63)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 14] === null
            && cells[selectedPiece.indexOfBoardPiece + 14].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 7] < 12 && board[selectedPiece.indexOfBoardPiece + 7] !== null) {
            selectedPiece.fourteenthSpace = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 14)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 21] === null
            && cells[selectedPiece.indexOfBoardPiece + 21].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 14] < 12 && (board[selectedPiece.indexOfBoardPiece + 7] !== null || board[selectedPiece.indexOfBoardPiece + 14] !== null)) {
            selectedPiece.space21 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 21)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 28] === null
            && cells[selectedPiece.indexOfBoardPiece + 28].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 21] < 12 && (board[selectedPiece.indexOfBoardPiece + 7] !== null || board[selectedPiece.indexOfBoardPiece + 14] !== null || board[selectedPiece.indexOfBoardPiece + 21] !== null)) {
            selectedPiece.space28 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 28)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 35] === null
            && cells[selectedPiece.indexOfBoardPiece + 35].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 28] < 12 && (board[selectedPiece.indexOfBoardPiece + 7] !== null || board[selectedPiece.indexOfBoardPiece + 14] !== null || board[selectedPiece.indexOfBoardPiece + 21] !== null || board[selectedPiece.indexOfBoardPiece + 28] !== null)) {
            selectedPiece.space35 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 35)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 42] === null
            && cells[selectedPiece.indexOfBoardPiece + 42].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 35] < 12 && (board[selectedPiece.indexOfBoardPiece + 7] !== null || board[selectedPiece.indexOfBoardPiece + 14] !== null || board[selectedPiece.indexOfBoardPiece + 21] !== null || board[selectedPiece.indexOfBoardPiece + 28] !== null || board[selectedPiece.indexOfBoardPiece + 35] !== null)) {
            selectedPiece.space42 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 42)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 49] === null
            && cells[selectedPiece.indexOfBoardPiece + 49].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 42] < 12 && (board[selectedPiece.indexOfBoardPiece + 7] !== null || board[selectedPiece.indexOfBoardPiece + 14] !== null || board[selectedPiece.indexOfBoardPiece + 21] !== null || board[selectedPiece.indexOfBoardPiece + 28] !== null || board[selectedPiece.indexOfBoardPiece + 35] !== null || board[selectedPiece.indexOfBoardPiece + 42] !== null)) {
            selectedPiece.space49 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 49)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        /////
        if (board[selectedPiece.indexOfBoardPiece + 18] === null
            && cells[selectedPiece.indexOfBoardPiece + 18].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 9] < 12 && board[selectedPiece.indexOfBoardPiece + 9] !== null) {
            selectedPiece.eighteenthSpace = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 18)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 27] === null
            && cells[selectedPiece.indexOfBoardPiece + 27].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 18] < 12 && (board[selectedPiece.indexOfBoardPiece + 9] !== null || board[selectedPiece.indexOfBoardPiece + 18] !== null)) {
            selectedPiece.space27 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 27)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 36] === null
            && cells[selectedPiece.indexOfBoardPiece + 36].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 27] < 12 && (board[selectedPiece.indexOfBoardPiece + 9] !== null || board[selectedPiece.indexOfBoardPiece + 18] !== null || board[selectedPiece.indexOfBoardPiece + 27] !== null)) {
            selectedPiece.space36 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 36)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 45] === null
            && cells[selectedPiece.indexOfBoardPiece + 45].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 36] < 12 && (board[selectedPiece.indexOfBoardPiece + 9] !== null || board[selectedPiece.indexOfBoardPiece + 18] !== null || board[selectedPiece.indexOfBoardPiece + 27] !== null || board[selectedPiece.indexOfBoardPiece + 36] !== null)) {
            selectedPiece.space45 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 45)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 54] === null
            && cells[selectedPiece.indexOfBoardPiece + 54].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 45] < 12 && (board[selectedPiece.indexOfBoardPiece + 9] !== null || board[selectedPiece.indexOfBoardPiece + 18] !== null || board[selectedPiece.indexOfBoardPiece + 27] !== null || board[selectedPiece.indexOfBoardPiece + 36] !== null || board[selectedPiece.indexOfBoardPiece + 45] !== null)) {
            selectedPiece.space54 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 54)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        if (board[selectedPiece.indexOfBoardPiece + 63] === null
            && cells[selectedPiece.indexOfBoardPiece + 63].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece + 54] < 12 && (board[selectedPiece.indexOfBoardPiece + 9] !== null || board[selectedPiece.indexOfBoardPiece + 18] !== null || board[selectedPiece.indexOfBoardPiece + 27] !== null || board[selectedPiece.indexOfBoardPiece + 36] !== null || board[selectedPiece.indexOfBoardPiece + 45] !== null || board[selectedPiece.indexOfBoardPiece + 54] !== null)) {
            selectedPiece.space63 = true;
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 63)).style.background = "rgb(189, 0, 0)";
                res = true;
            }
        }
        //////
        if (board[selectedPiece.indexOfBoardPiece - 14] === null && cells[selectedPiece.indexOfBoardPiece - 14].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 7] < 12
            && board[selectedPiece.indexOfBoardPiece - 7] !== null) {
            selectedPiece.minusFourteenthSpace = true;
            document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 14)).style.background = "rgb(189, 0, 0)";
            res = true;
        }
        if (board[selectedPiece.indexOfBoardPiece - 18] === null && cells[selectedPiece.indexOfBoardPiece - 18].classList.contains("noPieceHere") !== true
            && board[selectedPiece.indexOfBoardPiece - 9] < 12
            && board[selectedPiece.indexOfBoardPiece - 9] !== null) {
            selectedPiece.minusEighteenthSpace = true;
            document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 18)).style.background = "rgb(189, 0, 0)";
            res = true;
        }
        return res;
    }
    // checkPieceConditions();//*9
}
function paint(){
    for (var el = 0; el < document.getElementsByClassName("cell").length; el++) {
        document.getElementsByClassName("cell")[el].style.background = "linear-gradient(45deg, rgb(136, 200, 236), rgb(45, 79, 102))";

    }
    for (var el = 0; el < document.getElementsByClassName("noPieceHere").length; el++) {
        document.getElementsByClassName("noPieceHere")[el].style.background = "linear-gradient(45deg, rgb(136, 200, 236), rgb(235, 180, 97))";

    }
}

function checkAvailableJumpSpaces11(curIndex) {
    // console.log("\n ! "+curIndex)
 
    var curSH = document.getElementById(curIndex).getAttribute('class');
    let boardCurInd = board.indexOf(curIndex);
    if (curIndex < 12) {
 
        var res = false;
 
        if (board[boardCurInd + 14] === null
            && cells[boardCurInd + 14].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 7] >= 12) {
            res = true;
 
        }
 
        if (board[boardCurInd + 18] === null
            && cells[boardCurInd + 18].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 9] >= 12) {
            res = true;
        }
        ///////////
        if (board[boardCurInd - 14] === null
            && cells[boardCurInd - 14].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 7] >= 12 && board[boardCurInd - 7] !== null) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 21] === null
            && cells[boardCurInd - 21].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 14] >= 12 && (board[boardCurInd - 7] !== null || board[boardCurInd - 14] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 28] === null
            && cells[boardCurInd - 28].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 21] >= 12 && (board[boardCurInd - 7] !== null || board[boardCurInd - 14] !== null || board[boardCurInd - 21] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 35] === null
            && cells[boardCurInd - 35].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 28] >= 12 && (board[boardCurInd - 7] !== null || board[boardCurInd - 14] !== null || board[boardCurInd - 21] !== null || board[boardCurInd - 28] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 42] === null
            && cells[boardCurInd - 42].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 35] >= 12 && (board[boardCurInd - 7] !== null || board[boardCurInd - 14] !== null || board[boardCurInd - 21] !== null || board[boardCurInd - 28] !== null || board[boardCurInd - 35] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 49] === null
            && cells[boardCurInd - 49].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 42] >= 12 && (board[boardCurInd - 7] !== null || board[boardCurInd - 14] !== null || board[boardCurInd - 21] !== null || board[boardCurInd - 28] !== null || board[boardCurInd - 35] !== null || board[boardCurInd - 42] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        ////////////////
        if (board[boardCurInd - 18] === null
            && cells[boardCurInd - 18].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 9] >= 12 && board[boardCurInd - 9] !== null) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 27] === null
            && cells[boardCurInd - 27].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 18] >= 12 && (board[boardCurInd - 9] !== null || board[boardCurInd - 18] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 36] === null
            && cells[boardCurInd - 36].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 27] >= 12 && (board[boardCurInd - 9] !== null || board[boardCurInd - 18] !== null || board[boardCurInd - 27] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 45] === null
            && cells[boardCurInd - 45].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 36] >= 12 && (board[boardCurInd - 9] !== null || board[boardCurInd - 18] !== null || board[boardCurInd - 27] !== null || board[boardCurInd - 36] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 54] === null
            && cells[boardCurInd - 54].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 45] >= 12 && (board[boardCurInd - 9] !== null || board[boardCurInd - 18] !== null || board[boardCurInd - 27] !== null || board[boardCurInd - 36] !== null || board[boardCurInd - 45] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 63] === null
            && cells[boardCurInd - 63].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 54] >= 12 && (board[boardCurInd - 9] !== null || board[boardCurInd - 18] !== null || board[boardCurInd - 27] !== null || board[boardCurInd - 36] !== null || board[boardCurInd - 45] !== null || board[boardCurInd - 54] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
 
        ///////+_+_+
        if (board[boardCurInd + 14] === null
            && cells[boardCurInd + 14].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 7] >= 12 && board[boardCurInd + 7] !== null) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 21] === null
            && cells[boardCurInd + 21].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 14] >= 12 && (board[boardCurInd + 7] !== null || board[boardCurInd + 14] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 28] === null
            && cells[boardCurInd + 28].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 21] >= 12 && (board[boardCurInd + 7] !== null || board[boardCurInd + 14] !== null || board[boardCurInd + 21] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 35] === null
            && cells[boardCurInd + 35].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 28] >= 12 && (board[boardCurInd + 7] !== null || board[boardCurInd + 14] !== null || board[boardCurInd + 21] !== null || board[boardCurInd + 28] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 42] === null
            && cells[boardCurInd + 42].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 35] >= 12 && (board[boardCurInd + 7] !== null || board[boardCurInd + 14] !== null || board[boardCurInd + 21] !== null || board[boardCurInd + 28] !== null || board[boardCurInd + 35] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 49] === null
            && cells[boardCurInd + 49].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 42] >= 12 && (board[boardCurInd + 7] !== null || board[boardCurInd + 14] !== null || board[boardCurInd + 21] !== null || board[boardCurInd + 28] !== null || board[boardCurInd + 35] !== null || board[boardCurInd + 42] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        /////
        if (board[boardCurInd + 18] === null
            && cells[boardCurInd + 18].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 9] >= 12 && board[boardCurInd + 9] !== null) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 27] === null
            && cells[boardCurInd + 27].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 18] >= 12 && (board[boardCurInd + 9] !== null || board[boardCurInd + 18] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 36] === null
            && cells[boardCurInd + 36].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 27] >= 12 && (board[boardCurInd + 9] !== null || board[boardCurInd + 18] !== null || board[boardCurInd + 27] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 45] === null
            && cells[boardCurInd + 45].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 36] >= 12 && (board[boardCurInd + 9] !== null || board[boardCurInd + 18] !== null || board[boardCurInd + 27] !== null || board[boardCurInd + 36] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 54] === null
            && cells[boardCurInd + 54].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 45] >= 12 && (board[boardCurInd + 9] !== null || board[boardCurInd + 18] !== null || board[boardCurInd + 27] !== null || board[boardCurInd + 36] !== null || board[boardCurInd + 45] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 63] === null
            && cells[boardCurInd + 63].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 54] >= 12 && (board[boardCurInd + 9] !== null || board[boardCurInd + 18] !== null || board[boardCurInd + 27] !== null || board[boardCurInd + 36] !== null || board[boardCurInd + 45] !== null || board[boardCurInd + 54] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        return res;
    } else {
        var res = false;
        if (board[boardCurInd - 14] === null
            && cells[boardCurInd - 14].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 7] < 12 && board[boardCurInd - 7] !== null) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 21] === null
            && cells[boardCurInd - 21].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 14] < 12 && (board[boardCurInd - 7] !== null || board[boardCurInd - 14] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 28] === null
            && cells[boardCurInd - 28].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 21] < 12 && (board[boardCurInd - 7] !== null || board[boardCurInd - 14] !== null || board[boardCurInd - 21] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 35] === null
            && cells[boardCurInd - 35].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 28] < 12 && (board[boardCurInd - 7] !== null || board[boardCurInd - 14] !== null || board[boardCurInd - 21] !== null || board[boardCurInd - 28] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 42] === null
            && cells[boardCurInd - 42].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 35] < 12 && (board[boardCurInd - 7] !== null || board[boardCurInd - 14] !== null || board[boardCurInd - 21] !== null || board[boardCurInd - 28] !== null || board[boardCurInd - 35] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 49] === null
            && cells[boardCurInd - 49].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 42] < 12 && (board[boardCurInd - 7] !== null || board[boardCurInd - 14] !== null || board[boardCurInd - 21] !== null || board[boardCurInd - 28] !== null || board[boardCurInd - 35] !== null || board[boardCurInd - 42] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        ////////////////
        if (board[boardCurInd - 18] === null
            && cells[boardCurInd - 18].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 9] < 12 && board[boardCurInd - 9] !== null) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 27] === null
            && cells[boardCurInd - 27].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 18] < 12 && (board[boardCurInd - 9] !== null || board[boardCurInd - 18] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 36] === null
            && cells[boardCurInd - 36].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 27] < 12 && (board[boardCurInd - 9] !== null || board[boardCurInd - 18] !== null || board[boardCurInd - 27] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 45] === null
            && cells[boardCurInd - 45].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 36] < 12 && (board[boardCurInd - 9] !== null || board[boardCurInd - 18] !== null || board[boardCurInd - 27] !== null || board[boardCurInd - 36] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 54] === null
            && cells[boardCurInd - 54].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 45] < 12 && (board[boardCurInd - 9] !== null || board[boardCurInd - 18] !== null || board[boardCurInd - 27] !== null || board[boardCurInd - 36] !== null || board[boardCurInd - 45] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd - 63] === null
            && cells[boardCurInd - 63].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 54] < 12 && (board[boardCurInd - 9] !== null || board[boardCurInd - 18] !== null || board[boardCurInd - 27] !== null || board[boardCurInd - 36] !== null || board[boardCurInd - 45] !== null || board[boardCurInd - 54] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 14] === null
            && cells[boardCurInd + 14].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 7] < 12 && board[boardCurInd + 7] !== null) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 21] === null
            && cells[boardCurInd + 21].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 14] < 12 && (board[boardCurInd + 7] !== null || board[boardCurInd + 14] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 28] === null
            && cells[boardCurInd + 28].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 21] < 12 && (board[boardCurInd + 7] !== null || board[boardCurInd + 14] !== null || board[boardCurInd + 21] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 35] === null
            && cells[boardCurInd + 35].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 28] < 12 && (board[boardCurInd + 7] !== null || board[boardCurInd + 14] !== null || board[boardCurInd + 21] !== null || board[boardCurInd + 28] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 42] === null
            && cells[boardCurInd + 42].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 35] < 12 && (board[boardCurInd + 7] !== null || board[boardCurInd + 14] !== null || board[boardCurInd + 21] !== null || board[boardCurInd + 28] !== null || board[boardCurInd + 35] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 49] === null
            && cells[boardCurInd + 49].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 42] < 12 && (board[boardCurInd + 7] !== null || board[boardCurInd + 14] !== null || board[boardCurInd + 21] !== null || board[boardCurInd + 28] !== null || board[boardCurInd + 35] !== null || board[boardCurInd + 42] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        /////
        if (board[boardCurInd + 18] === null
            && cells[boardCurInd + 18].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 9] < 12 && board[boardCurInd + 9] !== null) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 27] === null
            && cells[boardCurInd + 27].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 18] < 12 && (board[boardCurInd + 9] !== null || board[boardCurInd + 18] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 36] === null
            && cells[boardCurInd + 36].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 27] < 12 && (board[boardCurInd + 9] !== null || board[boardCurInd + 18] !== null || board[boardCurInd + 27] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 45] === null
            && cells[boardCurInd + 45].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 36] < 12 && (board[boardCurInd + 9] !== null || board[boardCurInd + 18] !== null || board[boardCurInd + 27] !== null || board[boardCurInd + 36] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 54] === null
            && cells[boardCurInd + 54].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 45] < 12 && (board[boardCurInd + 9] !== null || board[boardCurInd + 18] !== null || board[boardCurInd + 27] !== null || board[boardCurInd + 36] !== null || board[boardCurInd + 45] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        if (board[boardCurInd + 63] === null
            && cells[boardCurInd + 63].classList.contains("noPieceHere") !== true
            && board[boardCurInd + 54] < 12 && (board[boardCurInd + 9] !== null || board[boardCurInd + 18] !== null || board[boardCurInd + 27] !== null || board[boardCurInd + 36] !== null || board[boardCurInd + 45] !== null || board[boardCurInd + 54] !== null)) {
            if (curSH === 'red-piece king' || curSH === 'black-piece king') {
                res = true;
            }
        }
        //////
        if (board[boardCurInd - 14] === null && cells[boardCurInd - 14].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 7] < 12
            && board[boardCurInd - 7] !== null) {
            res = true;
        }
        if (board[boardCurInd - 18] === null && cells[boardCurInd - 18].classList.contains("noPieceHere") !== true
            && board[boardCurInd - 9] < 12
            && board[boardCurInd - 9] !== null) {
            res = true;
        }
        return res;
    }
    // checkPieceConditions();//*9
}

function getAvailableSpaces() {
    let map = new Map();
 
    let hasPrivileg = false;
 
    for (let i = 0; i < 24; i++) {
        if (board.indexOf(i) != -1) {
            // console.log("\ni "+i+" "+board.indexOf(i))
            if (checkAvailableJumpSpaces11(i)) {
                hasPrivileg = true;
                console.log("\ni "+i+" "+"  hasPrivileg: "+hasPrivileg)
 
            }
            map.set(i, checkAvailableJumpSpaces11(i));
        }
    }
 
if (hasPrivileg) {
    //console.log("hasPrivileg: "+hasPrivileg)
    for (let i = 0; i < 24; i++) {
      //  console.log("map.get(i): "+map.keys.contains(i))
        if (map.get(i) === true) {
            console.log("selectedPiece.pieceId: "+selectedPiece.pieceId)
            if (selectedPiece.pieceId === i){
                // console.log("\n\n\n\n\n "+checkAvailableJumpSpaces())
                if(!checkAvailableJumpSpaces()){
                    paint();
                var curSH=document.getElementById(selectedPiece.pieceId).getAttribute('class');
                if (board[selectedPiece.indexOfBoardPiece + 7] === null &&
                    cells[selectedPiece.indexOfBoardPiece + 7].classList.contains("noPieceHere") !== true) {
                    selectedPiece.seventhSpace = true;
                   
                    if (turn|| curSH==='red-piece king'||curSH==='black-piece king') {
                        document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 7)).style.background = "rgb(19, 124, 19)";
                      
                    }
                }
                if (board[selectedPiece.indexOfBoardPiece + 9] === null &&
                    cells[selectedPiece.indexOfBoardPiece + 9].classList.contains("noPieceHere") !== true) {
                    selectedPiece.ninthSpace = true;
                    if (turn|| curSH==='red-piece king'||curSH==='black-piece king') {
                        document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 9)).style.background = "rgb(19, 124, 19)";
                    }
                 
                }
                if (board[selectedPiece.indexOfBoardPiece - 7] === null &&
                    cells[selectedPiece.indexOfBoardPiece - 7].classList.contains("noPieceHere") !== true) {
                    selectedPiece.minusSeventhSpace = true;
                    if ((!turn)|| curSH==='red-piece king'||curSH==='black-piece king') {
                        document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 7)).style.background = "rgb(19, 124, 19)";
                    }
                 
                }
                if (board[selectedPiece.indexOfBoardPiece - 9] === null &&
                    cells[selectedPiece.indexOfBoardPiece - 9].classList.contains("noPieceHere") !== true) {
                    selectedPiece.minusNinthSpace = true;
                    if ((!turn)|| curSH==='red-piece king'||curSH==='black-piece king') {
                        document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 9)).style.background = "rgb(19, 124, 19)";
                    }
                
                }
            }
            checkPieceConditions();//*9
            }
        }
    }
}else{
    if(!checkAvailableJumpSpaces()){
        paint();
    var curSH=document.getElementById(selectedPiece.pieceId).getAttribute('class');
    if (board[selectedPiece.indexOfBoardPiece + 7] === null &&
        cells[selectedPiece.indexOfBoardPiece + 7].classList.contains("noPieceHere") !== true) {
        selectedPiece.seventhSpace = true;
       
        if (turn|| curSH==='red-piece king'||curSH==='black-piece king') {
            document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 7)).style.background = "rgb(19, 124, 19)";
          
        }
    }
    if (board[selectedPiece.indexOfBoardPiece + 9] === null &&
        cells[selectedPiece.indexOfBoardPiece + 9].classList.contains("noPieceHere") !== true) {
        selectedPiece.ninthSpace = true;
        if (turn|| curSH==='red-piece king'||curSH==='black-piece king') {
            document.getElementById("c" + (selectedPiece.indexOfBoardPiece + 9)).style.background = "rgb(19, 124, 19)";
        }
     
    }
    if (board[selectedPiece.indexOfBoardPiece - 7] === null &&
        cells[selectedPiece.indexOfBoardPiece - 7].classList.contains("noPieceHere") !== true) {
        selectedPiece.minusSeventhSpace = true;
        if ((!turn)|| curSH==='red-piece king'||curSH==='black-piece king') {
            document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 7)).style.background = "rgb(19, 124, 19)";
        }
     
    }
    if (board[selectedPiece.indexOfBoardPiece - 9] === null &&
        cells[selectedPiece.indexOfBoardPiece - 9].classList.contains("noPieceHere") !== true) {
        selectedPiece.minusNinthSpace = true;
        if ((!turn)|| curSH==='red-piece king'||curSH==='black-piece king') {
            document.getElementById("c" + (selectedPiece.indexOfBoardPiece - 9)).style.background = "rgb(19, 124, 19)";
        }
    
    }
}
checkPieceConditions();//*9
}
}

//*6
function isPieceKing() {
    selectedPiece.isKing = document.getElementById(selectedPiece.pieceId).classList.contains("king"); //true or false
    getAvailableSpaces();//*7
}

//*5
function getSelectedPiece() {
    selectedPiece.pieceId = parseInt(event.target.id);
    selectedPiece.indexOfBoardPiece = findPiece(selectedPiece.pieceId);
    isPieceKing();//*6
}

//*4
function resetSelectedPieceProperties() {
    selectedPiece.pieceId = -1;
    selectedPiece.pieceId = -1;
    selectedPiece.isKing = false;
    selectedPiece.seventhSpace = false;
    selectedPiece.ninthSpace = false;
    selectedPiece.fourteenthSpace = false;
    selectedPiece.eighteenthSpace = false;
    selectedPiece.minusSeventhSpace = false;
    selectedPiece.minusNinthSpace = false;
    selectedPiece.minusFourteenthSpace = false;
    selectedPiece.minusEighteenthSpace = false;
    selectedPiece.space21 = false;
    selectedPiece.space28 = false;
    selectedPiece.space35 = false;
    selectedPiece.space42 = false;
    selectedPiece.space49 = false;
    selectedPiece.space27 = false;
    selectedPiece.space36 = false;
    selectedPiece.space45 = false;
    selectedPiece.space54 = false;
    selectedPiece.space63 = false;
    selectedPiece.space_21 = false;
    selectedPiece.space_28 = false;
    selectedPiece.space_35 = false;
    selectedPiece.space_42 = false;
    selectedPiece.space_49 = false;
    selectedPiece.space_27 = false;
    selectedPiece.space_36 = false;
    selectedPiece.space_45 = false;
    selectedPiece.space_54 = false;
    selectedPiece.space_63 = false;
}

//*3
function resetBorders() {
    for (let i = 0; i < playerPieces.length; i++) {
        playerPieces[i].style.border = "1px solid white";
    }
    resetSelectedPieceProperties();//*4
    getSelectedPiece();//*5
}


//*2
function removeCellonclick() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeAttribute("onclick");
    }
}

//*1
function getPlayerPieces() {
    if (turn) {
        playerPieces = redsPieces;
    } else {
        playerPieces = blacksPieces;
    }
    removeCellonclick();//*2
    resetBorders();//*3
}

//*0
function givePiecesEventListeners() {
    if (turn) {

        for (let i = 0; i < redsPieces.length; i++) {
            redsPieces[i].addEventListener("click", getPlayerPieces);//*1

        }
    } else {

        for (let i = 0; i < blacksPieces.length; i++) {
            blacksPieces[i].addEventListener("click", getPlayerPieces);//*1
        }
    }

}

givePiecesEventListeners();//*0
