
var select = document.getElementById("select"),
arr = ["Bolivia", "Uruguay", "USA", "Panama"];

for(var i=0; i<arr.length; i++)
  {
    var option = document.createElement("OPTION"),
    txt = document.createTextNode(arr[i]);
    option.appendChild(txt);
    select.insertBefore(option,select.lastChild);

  }

  var select = document.getElementById("score"),
array = [0, 1, 2, 3,4,5, 6, 7,8, 9, 10];

for(var i=0; i<array.length; i++)
  {
    var option = document.createElement("OPTION"),
    txt2 = document.createTextNode(array[i]);
    option.appendChild(txt2);
    select.insertBefore(option,select.lastChild);
    
  }