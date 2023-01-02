let out = document.getElementById("output");

function display(num){
    out.value += num;
}

function Calculate(){
    try{
        out.value = eval(out.value);

    }
    catch(e){
        alert("Invalid");
    }

}

function Clear(){
    out.value = "";
}

function del(){
    out.value = out.value.slice(0,-1);
}