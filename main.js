document.addEventListener("DOMContentLoaded", function(event){
  document.getElementById("cheerButton").addEventListener("click", function(event){
    event.preventDefault();
    var name = document.getElementById("cheersInput").value;
    var nameUpper = name.toUpperCase();
    var nameLength = name.length;
    var div = document.getElementById("printCheer");
    div.innerHTML ="Your name is " + name + "!<br>";
    var $ul = document.getElementById("spellCheer")
    // while($ul.firstChild ){
    //   $ul.removeChild(ul.firstChild);
    // }
    $ul.innerHTML = "";
    for (var i = 0; i < nameLength; i++) {
      var $li = document.createElement("li");
      var grammar = ['A','E','F','H','I', 'L', 'M', 'N','O', 'U', 'R', 'S', 'X'];
      if($.inArray(nameUpper.trim().charAt(i), grammar)> -1){
        $li.innerHTML = "Give me an ... " + nameUpper.charAt(i)+"!";
        $ul.appendChild($li);
      } else if ($.inArray(nameUpper.trim().charAt(i), grammar) === -1){
        $li.innerHTML = "Give me a ... " + nameUpper.charAt(i)+"!";
        $ul.appendChild($li);
      }
    }
    var divFinal = document.getElementById("finalCheer");
    divFinal.innerHTML = name + " is Awesome!";
  })
})
