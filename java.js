//JordanAfrikaner

//if randomNum = x then change video element src = "xA.mp4"
var randomNum = Math.floor(Math.random() * 50) + 1
console.log(randomNum)
// var randomNum = 6;
console.log(randomNum)

if(randomNum == 1){
    document.getElementById('videoB').src="./Videos/1A.mp4"
}
if(randomNum == 2){
    document.getElementById('videoB').src="./Videos/2A.mp4"
}
if(randomNum == 3){
    document.getElementById('videoB').src="./Videos/3A.mp4"
}
if(randomNum == 4){
    document.getElementById('videoB').src="./Videos/4A.mp4"
}
if(randomNum == 5){
    document.getElementById('videoB').src="./Videos/5A.mp4"
}
if(randomNum == 6){
    document.getElementById('videoB').src="./Videos/6A.mp4"
}
if(randomNum == 7){
    document.getElementById('videoB').src="./Videos/7A.mp4"
}
if(randomNum == 8){
    document.getElementById('videoB').src="./Videos/8A.mp4"
}
if(randomNum == 9){
    document.getElementById('videoB').src="./Videos/9A.mp4"
}
if(randomNum == 10){
    document.getElementById('videoB').src="./Videos/10A.mp4"
}
if(randomNum == 11){
    document.getElementById('videoB').src="./Videos/11A.mp4"
}
if(randomNum == 12){
    document.getElementById('videoB').src="./Videos/12A.mp4"
}
if(randomNum == 13){
    document.getElementById('videoB').src="./Videos/13A.mp4"
}
if(randomNum == 14){
    document.getElementById('videoB').src="./Videos/14A.mp4"
}
if(randomNum == 15){
    document.getElementById('videoB').src="./Videos/15A.mp4"
}
if(randomNum == 16){
    document.getElementById('videoB').src="./Videos/16A.mp4"
}
if(randomNum == 17){
    document.getElementById('videoB').src="./Videos/17A.mp4"
}
if(randomNum == 18){
    document.getElementById('videoB').src="./Videos/18A.mp4"
}
if(randomNum == 19){
    document.getElementById('videoB').src="./Videos/19A.mp4"
}
if(randomNum == 20){
    document.getElementById('videoB').src="./Videos/20A.mp4"
}
if(randomNum == 21){
    document.getElementById('videoB').src="./Videos/21A.mp4"
}
if(randomNum == 22){
    document.getElementById('videoB').src="./Videos/22A.mp4"
}
if(randomNum == 23){
    document.getElementById('videoB').src="./Videos/23A.mp4"
}
if(randomNum == 24){
    document.getElementById('videoB').src="./Videos/24A.mp4"
}
if(randomNum == 25){
    document.getElementById('videoB').src="./Videos/25A.mp4"
}
if(randomNum == 26){
    document.getElementById('videoB').src="./Videos/26A.mp4"
}
if(randomNum == 27){
    document.getElementById('videoB').src="./Videos/27A.mp4"
}
if(randomNum == 28){
    document.getElementById('videoB').src="./Videos/28A.mp4"
}
if(randomNum == 29){
    document.getElementById('videoB').src="./Videos/29A.mp4"
}
if(randomNum == 30){
    document.getElementById('videoB').src="./Videos/30A.mp4"
}
if(randomNum == 31){
    document.getElementById('videoB').src="./Videos/31A.mp4"
}
if(randomNum == 32){
    document.getElementById('videoB').src="./Videos/32A.mp4"
}
if(randomNum == 33){
    document.getElementById('videoB').src="./Videos/33A.mp4"
}
if(randomNum == 34){
    document.getElementById('videoB').src="./Videos/34A.mp4"
}
if(randomNum == 35){
    document.getElementById('videoB').src="./Videos/35A.mp4"
}
if(randomNum == 36){
    document.getElementById('videoB').src="./Videos/36A.mp4"
}
if(randomNum == 37){
    document.getElementById('videoB').src="./Videos/37A.mp4"
}
if(randomNum == 38){
    document.getElementById('videoB').src="./Videos/38A.mp4"
}
if(randomNum == 39){
    document.getElementById('videoB').src="./Videos/39A.mp4"
}
if(randomNum == 40){
    document.getElementById('videoB').src="./Videos/40A.mp4"
}
if(randomNum == 41){
    document.getElementById('videoB').src="./Videos/41A.mp4"
}
if(randomNum == 42){
    document.getElementById('videoB').src="./Videos/42A.mp4"
}
if(randomNum == 43){
    document.getElementById('videoB').src="./Videos/43A.mp4"
}
if(randomNum == 44){
    document.getElementById('videoB').src="./Videos/44A.mp4"
}
if(randomNum == 45){
    document.getElementById('videoB').src="./Videos/45A.mp4"
}
if(randomNum == 46){
    document.getElementById('videoB').src="./Videos/46A.mp4"
}
if(randomNum == 47){
    document.getElementById('videoB').src="./Videos/47A.mp4"
}
if(randomNum == 48){
    document.getElementById('videoB').src="./Videos/48A.mp4"
}
if(randomNum == 49){
    document.getElementById('videoB').src="./Videos/49A.mp4"
}
if(randomNum == 50){
    document.getElementById('videoB').src="./Videos/50A.mp4"
}

function back(){
    window.location = "index.html"
}


//Note all videos from 1 to 25 are baskets, all videos 26 to 50 are fails

if(randomNum == 1){
function Yes(){
    document.getElementById('videoB').src="./Videos/1B.mp4"
    document.getElementById('body').classList.remove('base')
    document.getElementById('body').classList.add('win')
    document.getElementById('yesbtn').disabled=true
    document.getElementById('nobtn').disabled=true
    document.getElementById('title').innerText = 'You Win!'
    setTimeout( back, 15000)
}
function No(){
    document.getElementById('videoB').src="./Videos/1B.mp4"
    document.getElementById('body').classList.remove('base')
    document.getElementById('body').classList.add('lose')
    document.getElementById('yesbtn').disabled=true
    document.getElementById('nobtn').disabled=true
    document.getElementById('title').innerText = 'You lose!'
    setTimeout( back, 15000)
}
}

if(randomNum == 2){
    function Yes(){
        document.getElementById('videoB').src="./Videos/2B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/2B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You lose!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 3){
    function Yes(){
        document.getElementById('videoB').src="./Videos/3B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/3B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You lose!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 4){
    function Yes(){
        document.getElementById('videoB').src="./Videos/4B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/4B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You lose!'
        setTimeout( back, 15000)
    }
    }

if(randomNum == 5){
    function Yes(){
        document.getElementById('videoB').src="./Videos/5B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/5B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You lose!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 6){
    function Yes(){
        document.getElementById('videoB').src="./Videos/6B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/6B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You lose!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 7){
    function Yes(){
        document.getElementById('videoB').src="./Videos/7B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/7B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You lose!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 8){
    function Yes(){
        document.getElementById('videoB').src="./Videos/8B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/8B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You lose!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 9){
    function Yes(){
        document.getElementById('videoB').src="./Videos/9B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/9B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You lose!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 10){
    function Yes(){
        document.getElementById('videoB').src="./Videos/10B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/10B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You lose!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 11){
    function Yes(){
        document.getElementById('videoB').src="./Videos/11B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/11B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You lose!'
        setTimeout( back, 15000)
    }
    }
    
    if(randomNum == 12){
        function Yes(){
            document.getElementById('videoB').src="./Videos/12B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('win')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You Win!'
            setTimeout( back, 15000)
        }
        function No(){
            document.getElementById('videoB').src="./Videos/12B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('lose')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You lose!'
            setTimeout( back, 15000)
        }
    }
    
    if(randomNum == 13){
        function Yes(){
            document.getElementById('videoB').src="./Videos/13B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('win')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You Win!'
            setTimeout( back, 15000)
        }
        function No(){
            document.getElementById('videoB').src="./Videos/13B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('lose')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You lose!'
            setTimeout( back, 15000)
        }
    }
    
    if(randomNum == 14){
        function Yes(){
            document.getElementById('videoB').src="./Videos/14B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('win')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You Win!'
            setTimeout( back, 15000)
        }
        function No(){
            document.getElementById('videoB').src="./Videos/14B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('lose')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You lose!'
            setTimeout( back, 15000)
        }
        }
    
    if(randomNum == 15){
        function Yes(){
            document.getElementById('videoB').src="./Videos/15B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('win')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You Win!'
            setTimeout( back, 15000)
        }
        function No(){
            document.getElementById('videoB').src="./Videos/15B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('lose')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You lose!'
            setTimeout( back, 15000)
        }
    }
    
    if(randomNum == 16){
        function Yes(){
            document.getElementById('videoB').src="./Videos/16B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('win')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You Win!'
            setTimeout( back, 15000)
        }
        function No(){
            document.getElementById('videoB').src="./Videos/16B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('lose')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You lose!'
            setTimeout( back, 15000)
        }
    }
    
    if(randomNum == 17){
        function Yes(){
            document.getElementById('videoB').src="./Videos/17B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('win')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You Win!'
            setTimeout( back, 15000)
        }
        function No(){
            document.getElementById('videoB').src="./Videos/17B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('lose')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You lose!'
            setTimeout( back, 15000)
        }
    }
    
    if(randomNum == 18){
        function Yes(){
            document.getElementById('videoB').src="./Videos/18B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('win')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You Win!'
            setTimeout( back, 15000)
        }
        function No(){
            document.getElementById('videoB').src="./Videos/18B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('lose')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You lose!'
            setTimeout( back, 15000)
        }
    }
    
    if(randomNum == 19){
        function Yes(){
            document.getElementById('videoB').src="./Videos/19B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('win')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You Win!'
            setTimeout( back, 15000)
        }
        function No(){
            document.getElementById('videoB').src="./Videos/19B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('lose')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You lose!'
            setTimeout( back, 15000)
        }
    }
    
    if(randomNum == 20){
        function Yes(){
            document.getElementById('videoB').src="./Videos/20B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('win')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You Win!'
            setTimeout( back, 15000)
        }
        function No(){
            document.getElementById('videoB').src="./Videos/20B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('lose')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You lose!'
            setTimeout( back, 15000)
        }
    }

    if(randomNum == 21){
        function Yes(){
            document.getElementById('videoB').src="./Videos/21B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('win')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You Win!'
            setTimeout( back, 15000)
        }
        function No(){
            document.getElementById('videoB').src="./Videos/21B.mp4"
            document.getElementById('body').classList.remove('base')
            document.getElementById('body').classList.add('lose')
            document.getElementById('yesbtn').disabled=true
            document.getElementById('nobtn').disabled=true
            document.getElementById('title').innerText = 'You lose!'
            setTimeout( back, 15000)
        }
        }
        
        if(randomNum == 22){
            function Yes(){
                document.getElementById('videoB').src="./Videos/22B.mp4"
                document.getElementById('body').classList.remove('base')
                document.getElementById('body').classList.add('win')
                document.getElementById('yesbtn').disabled=true
                document.getElementById('nobtn').disabled=true
                document.getElementById('title').innerText = 'You Win!'
                setTimeout( back, 15000)
            }
            function No(){
                document.getElementById('videoB').src="./Videos/22B.mp4"
                document.getElementById('body').classList.remove('base')
                document.getElementById('body').classList.add('lose')
                document.getElementById('yesbtn').disabled=true
                document.getElementById('nobtn').disabled=true
                document.getElementById('title').innerText = 'You lose!'
                setTimeout( back, 15000)
            }
        }
        
        if(randomNum == 23){
            function Yes(){
                document.getElementById('videoB').src="./Videos/23B.mp4"
                document.getElementById('body').classList.remove('base')
                document.getElementById('body').classList.add('win')
                document.getElementById('yesbtn').disabled=true
                document.getElementById('nobtn').disabled=true
                document.getElementById('title').innerText = 'You Win!'
                setTimeout( back, 15000)
            }
            function No(){
                document.getElementById('videoB').src="./Videos/23B.mp4"
                document.getElementById('body').classList.remove('base')
                document.getElementById('body').classList.add('lose')
                document.getElementById('yesbtn').disabled=true
                document.getElementById('nobtn').disabled=true
                document.getElementById('title').innerText = 'You lose!'
                setTimeout( back, 15000)
            }
        }
        
        if(randomNum == 24){
            function Yes(){
                document.getElementById('videoB').src="./Videos/24B.mp4"
                document.getElementById('body').classList.remove('base')
                document.getElementById('body').classList.add('win')
                document.getElementById('yesbtn').disabled=true
                document.getElementById('nobtn').disabled=true
                document.getElementById('title').innerText = 'You Win!'
                setTimeout( back, 15000)
            }
            function No(){
                document.getElementById('videoB').src="./Videos/24B.mp4"
                document.getElementById('body').classList.remove('base')
                document.getElementById('body').classList.add('lose')
                document.getElementById('yesbtn').disabled=true
                document.getElementById('nobtn').disabled=true
                document.getElementById('title').innerText = 'You lose!'
                setTimeout( back, 15000)
            }
            }
        
        if(randomNum == 25){
            function Yes(){
                document.getElementById('videoB').src="./Videos/25B.mp4"
                document.getElementById('body').classList.remove('base')
                document.getElementById('body').classList.add('win')
                document.getElementById('yesbtn').disabled=true
                document.getElementById('nobtn').disabled=true
                document.getElementById('title').innerText = 'You Win!'
                setTimeout( back, 15000)
            }
            function No(){
                document.getElementById('videoB').src="./Videos/25B.mp4"
                document.getElementById('body').classList.remove('base')
                document.getElementById('body').classList.add('lose')
                document.getElementById('yesbtn').disabled=true
                document.getElementById('nobtn').disabled=true
                document.getElementById('title').innerText = 'You lose!'
                setTimeout( back, 15000)
            }
        }
        
if(randomNum == 26){
    function Yes(){
        document.getElementById('videoB').src="./Videos/26B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/26B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 27){
    function Yes(){
        document.getElementById('videoB').src="./Videos/27B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/27B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 28){
    function Yes(){
        document.getElementById('videoB').src="./Videos/28B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/28B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 29){
    function Yes(){
        document.getElementById('videoB').src="./Videos/29B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/29B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 30){
    function Yes(){
        document.getElementById('videoB').src="./Videos/30B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/30B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 31){
    function Yes(){
        document.getElementById('videoB').src="./Videos/31B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/31B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 32){
    function Yes(){
        document.getElementById('videoB').src="./Videos/32B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/32B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 33){
    function Yes(){
        document.getElementById('videoB').src="./Videos/33B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/33B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 34){
    function Yes(){
        document.getElementById('videoB').src="./Videos/34B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/34B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 35){
    function Yes(){
        document.getElementById('videoB').src="./Videos/35B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/35B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 36){
    function Yes(){
        document.getElementById('videoB').src="./Videos/36B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/36B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 37){
    function Yes(){
        document.getElementById('videoB').src="./Videos/37B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/37B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 38){
    function Yes(){
        document.getElementById('videoB').src="./Videos/38B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/38B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 39){
    function Yes(){
        document.getElementById('videoB').src="./Videos/39B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/39B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 30){
    function Yes(){
        document.getElementById('videoB').src="./Videos/30B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/30B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 41){
    function Yes(){
        document.getElementById('videoB').src="./Videos/41B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/41B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 42){
    function Yes(){
        document.getElementById('videoB').src="./Videos/42B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/42B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 43){
    function Yes(){
        document.getElementById('videoB').src="./Videos/43B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/43B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 44){
    function Yes(){
        document.getElementById('videoB').src="./Videos/44B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/44B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 45){
    function Yes(){
        document.getElementById('videoB').src="./Videos/45B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/45B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 46){
    function Yes(){
        document.getElementById('videoB').src="./Videos/46B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/46B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 47){
    function Yes(){
        document.getElementById('videoB').src="./Videos/47B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/47B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 48){
    function Yes(){
        document.getElementById('videoB').src="./Videos/48B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/48B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 49){
    function Yes(){
        document.getElementById('videoB').src="./Videos/49B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/49B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}

if(randomNum == 50){
    function Yes(){
        document.getElementById('videoB').src="./Videos/50B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('lose')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Lose!'
        setTimeout( back, 15000)
    }
    function No(){
        document.getElementById('videoB').src="./Videos/50B.mp4"
        document.getElementById('body').classList.remove('base')
        document.getElementById('body').classList.add('win')
        document.getElementById('yesbtn').disabled=true
        document.getElementById('nobtn').disabled=true
        document.getElementById('title').innerText = 'You Win!'
        setTimeout( back, 15000)
    }
}
        
        
        
        
        