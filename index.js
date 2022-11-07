// baitap 1

//mô hình 3 khối
// input: lương 1 ngày, số ngày làm
// giải thuật: lương 1 ngày * số ngày làm
// output: tiền lương

function totalSalary(){
    var salaryPerDay = document.getElementById("salaryPerDay").value * 1;
    var day = document.getElementById("day").value * 1;

    var total = salaryPerDay * day;
    var result1 = "Tổng lương là: " + total;
    document.getElementById("ex1").innerHTML = result1;
}



// baitap 2

//mô hình 3 khối
// input: nhập 5 số bất kì
// giải thuật: trung bình của 5 số = tổng của 5 số chia cho 5
// output: giá trị trung bình của 5 số

function meant(){
    var num1 = document.getElementById("num1").value * 1;
    var num2 = document.getElementById("num2").value * 1;
    var num3 = document.getElementById("num3").value * 1;
    var num4 = document.getElementById("num4").value * 1;
    var num5 = document.getElementById("num5").value * 1;
    var meant = (num1 + num2 + num3 + num4 + num5) / 2;
    var result2 = "Giá trị trung bình là: " + meant;
    document.getElementById("ex2").innerHTML = result2;

}

// batap 3

//mô hình 3 khối
// input: giá USD, số tiên usd
// giải thuật: giá usd nhân cho số tiền
// output: thành tiền vnd

function totalVnd(){
    var usd = document.getElementById("usd").value * 1;
    var money = document.getElementById("money").value * 1;

    var totalVnd = usd * money;
    var result3 = "Tổng tiền đổi được là: " + totalVnd;
    document.getElementById("ex3").innerHTML = result3;
}
// baitap 4

//mô hình 3 khối
// input: chiều dài, chiều rộng
// giải thuật: 
// chu vi = (chiều dài + chiều rộng) * 2
// diện tích = chiều dài * chiều rộng
// output: chu vi, diện tích


function area(){
    var depth = document.getElementById("depth").value * 1;
    var width = document.getElementById("width").value * 1;

    var area = depth * width;
    var result4 = "Diện tích là: " + area;
    document.getElementById("ex4").innerHTML = result4;
}
function perimeter(){
    var depth = document.getElementById("depth").value * 1;
    var width = document.getElementById("width").value * 1;

    var perimeter = 2 * (depth + width);
    var result5 = "Chu vi là: " + perimeter;
    document.getElementById("ex4.1").innerHTML = result5;
}

// baitap 5
// Math.floor: làm tròn xuống

//mô hình 3 khối
// input: nhập 1 số có 2 chữ số
// giải thuật: 
// - chia số vừa nhập cho 10 rồi lấy phần dư, ta được giá trị của ký số hang đơn vị
// - chia số vừa nhập cho 10 rồi làm tròn xuống, ta được giá trị của ký số hàng chục
// - tính tổng 2 ký số vừa tìm được
// output: tổng 2 ký số của số vừa nhập
function sum(){
    var number = document.getElementById("number").value * 1;
    var first = Math.floor(number / 10);
    var second = number % 10;
    var sum = first + second;
    var result = "Tổng 2 kí số là: " + sum;
    document.getElementById("ex5").innerHTML = result;
}



