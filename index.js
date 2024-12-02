let guess=Math.floor((Math.random()*100)+1)
console.log(guess)

const hints=document.getElementById('hint')
const attempts=document.getElementById('attempt')

let count=0;
let game_status=1


    function check(){
        count++
        const obj1=document.forms[0]
        let val=Number(obj1.val.value)
        console.log(val)
        if(game_status==1){     
            if(val == guess){
                hints.innerHTML="Guess is Correct"
                attempt.innerHTML='Attempts : '+count
                console.log('Guess is Correct')
                count=0
                document.getElementById('Check_btn').innerHTML='Reset'
                game_status=0
                }

            else if(val < guess){
                hints.innerHTML="Guess is Lower"
                attempt.innerHTML='Attempts : '+count
                console.log('Guess is lower')
                }

            else{
                hints.innerHTML="Guess is Higher"
                attempt.innerHTML='Attempts : '+count
                console.log('Guess is Higher')
                }
        }
    
else{
    reset()
    game_status=1
    }
    }


function reset(){
    document.getElementById('Check_btn').innerHTML='Check'
    guess=Math.floor((Math.random()*100)+1)
    console.log(guess)
    document.getElementsByTagName('input')[0].value = null
    count=0
    attempt.innerHTML='Attempts : '+count
    hints.innerHTML="GUESS IT !!"
}
