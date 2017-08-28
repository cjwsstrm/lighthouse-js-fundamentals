// MODULE 5: The Browser - </> Changing Elements JS Fiddles

var elm = document.getElementById("info");
alert (elm.innerHTML);


var elm = document.getElementsByTagName("p");
alert (elm[1].innerHTML);


var elm = document.getElementById("info");
elm.innerHTML = 'Javascript rocks!';
alert(elm.innerHTML);


var elm = document.getElementsByClassName('name');
var names= [];
for (var i=0; i<elm.length; i++) {
  names.push(elm[i].innerHTML);
}

alert(names);



var logo = document.getElementById('lhl-logo');
logo.width = '200';
setTimeout(function(){logo.width = '400'; }, 1000)

document.querySelector("#name").setAttribute('placeholder', '10-5');