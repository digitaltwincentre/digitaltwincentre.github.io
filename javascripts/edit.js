function setEditButonNm() {
 $(document).ready(function () {

 var style = document.createElement("link");
 style.href="https://digitaltwincentre.github.io/css/releases.css";
 style.rel="stylesheet";
 	document.head.appendChild(style);

        var node = document.getElementById("edit_page_div");
       	var n =location.pathname.split("/").slice(-1)+"";
		var link ="https://github.com/digitaltwincentre/digitaltwincentre.github.io/edit/master/_biweeklies/"+n.substring(0,n.lastIndexOf("."))+".md";
    node.innerHTML  = "<a class=\"button primary\" href=\""+ link+"\">Edit</a>" ;
    });
	
	
 };
