document.getElementById('calc').onclick = function() {run()};

function run(){
    let func = document.getElementById("diff_func").value;
    let dx = Number(document.getElementById('delta_x').value);
    let x_not = Number(document.getElementById('x_not').value);
    let y_not = Number(document.getElementById('y_not').value);
    let end = Number(document.getElementById('end').value);
    eulers_method(dx, x_not, y_not, func, end);
}

function eulers_method(dx, x_not, y_not, Diff, end){
    let scope = {
        x: x_not,
        y: y_not
    }
    const x_len = (dx+"").split(".")[1].length;
    const node = math.parse(Diff);
    const f = node.compile();
    let ans = "";
    let count = 0;
    while(scope.x < end){
        document.getElementById("answer").innerHTML += "x"+count+": "+scope.x.toFixed(x_len)+" | y"+count+": "+scope.y+"<br>";
        scope.y = scope.y + (dx*f.evaluate(scope));
        scope.x = scope.x + dx;
        count = count + 1;
    }
}