


function ac(){
    document.getElementById("id1").value=""
}
function give(input){
    document.getElementById("id1").value+=input
}
function calci(){
    var result=eval(document.getElementById("id1").value);
    document.getElementById("id1").value=result
}


