document.addEventListener('DOMContentLoaded', function() {
    var remaining = document.getElementById('remaining');
    chrome.storage.sync.get(['currentWater'],function(data){
        remaining.innerHTML = data.currentWater + " oz";
    });
    var inputbar = document.getElementById('refill');
    var currentWater = inputbar.value;
    var go = document.getElementById('go');
    var five = document.getElementById('5');
    var ten = document.getElementById('10');
    var fifteen = document.getElementById('15');
    var twenty = document.getElementById('20');
    var twentyfive = document.getElementById('25');


    go.addEventListener('click', function() {
        var input = document.getElementById('refill').value;
        setRefill(input);    
    });

    inputbar.addEventListener('keyup',function(event){
        if (event.key == 'Enter'){
            console.log('entered');
            var input = document.getElementById('refill').value;
            setRefill(input);    
        }
    });

    function setRefill(text) {
        if (text>0){
            document.getElementById("remaining").innerHTML = text + " oz";
            currentWater = text;
            chrome.storage.sync.set({'currentWater':currentWater});
        } 
        else {
            alert('Positive inputs only!');
        }   
    }



    five.addEventListener('click',function(){
        changeBy(5);       
    });
    ten.addEventListener('click',function(){
        changeBy(10);       
    });
    fifteen.addEventListener('click',function(){
        changeBy(15);       
    });
    twenty.addEventListener('click',function(){
        changeBy(20);       
    });
    twentyfive.addEventListener('click',function(){
        changeBy(25);       
    });

    function changeBy(i){
        if (currentWater - i >= 0){
            currentWater = currentWater - i;
        }
        document.getElementById("remaining").innerHTML = currentWater + " oz"; 
        chrome.storage.sync.set({'currentWater':currentWater});
    }

});

