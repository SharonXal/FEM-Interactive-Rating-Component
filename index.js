// function clicked(target) {
//     target.style.background = "#FB7718";
//     target.style.color = "#FFFFFF";
// }

var pp;

function clicked(id) {
    pp = id;
    var divs = document.getElementById('ratings').getElementsByTagName('div');  //get all divs from div called container
    for(var i = 0;i < divs.length; i++) {
        if(divs[i] != id) {  //if not selected div set .items css
            divs[i].className = 'num';
        }
    }
    id.className = 'selnum';  //set different css for selected one
}


function pageChange(){
    var x = document.getElementById('review-page');
    var y = document.getElementById('thankyou-page');
    x.style.display = 'none';
    y.style.display = 'block';
    const para = document.createElement("p");
    const node = document.createTextNode("You selected "+pp.textContent+" out of 5");
    para.appendChild(node);
    const element = document.getElementById("rate-cmt");
    element.append(para);
}

