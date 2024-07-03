let title = document.querySelector('#title')
let turn = 'x';
let squares = []

function win(num1,num2,num3){
    title.innerHTML= `${squares[num1]} is winner`
    document.getElementById('sq' + num1).style.background= "#e74c3c"
    document.getElementById('sq' + num2).style.background= "#e74c3c"
    document.getElementById('sq' + num3).style.background= "#e74c3c"
    setInterval(() => {
        title.innerHTML += "."
    }, 1000);

    setTimeout(() => {
        location.reload()
    }, 3500);
}

function winner(){
    for (i=1 ; i<10 ; i++)
    {
    squares[i] = document.getElementById('sq' + i).innerHTML; 
    }


    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != ''  ){
       win(1,2,3)
    }
    else  if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != ''  ){
      win(4,5,6)
    }

    else  if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != ''  ){
        win(7,8,9)
    }

    else  if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != ''  ){
        win(1,4,7)
    }

    else  if(squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != ''  ){
        win(2,5,8)
    }

    else  if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != ''  ){
        win(3,6,9)
    }

    else  if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != ''  ){
        win(1,5,9)
      
    }

    else  if(squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != ''  ){
        win(3,5,7)
    }

}
function game(id){
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == ''){
        element.innerHTML="X";
        turn = 'o';
        title.innerHTML='O'
    } 
    else if(turn === 'o' && element.innerHTML == '') {
        element.innerHTML="O";
        turn = 'x';
        title.innerHTML='X'

    }
    winner()
}



