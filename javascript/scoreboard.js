function showscore(){
    var xmlhttp;    
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        document.getElementById("scorelist").innerHTML=xmlhttp.responseText;
        }
      }
    //This is our request.. we'll figure out how to do it later.. 
    //xmlhttp.open("GET","getcustomer.asp?q="+str,true);
    xmlhttp.send();
}