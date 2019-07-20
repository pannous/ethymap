let svgNS="http://www.w3.org/2000/svg"
function createText(p)
{
	text=p.id
    var t = document.createElementNS(svgNS, "text");
    var b = p.getBBox();
    let x_shift = b.x + b.width/(text.length-2)
    t.setAttribute("transform", "translate(" + x_shift + " " + (b.y + b.height/2) + ")");
    t.textContent = text;
    t.setAttribute("fill", "black");
    size=3 * (100+b.width)/150

    t.setAttribute("font-size", size);
    t.setAttribute("font-family","Sans-Serif")
    p.parentNode.insertBefore(t, p.nextSibling);
}


window.onload=function () {
	svg = document.getElementById("map").contentDocument;
    var delta = svg.getElementById("Tunisie");
    delta.addEventListener("mousedown", function(){ alert('hello world!')}, false);
    for(country of svg.getElementsByTagName("path")){
    	country.addEventListener("mousedown", (x)=> createText(x.target))
    }
};