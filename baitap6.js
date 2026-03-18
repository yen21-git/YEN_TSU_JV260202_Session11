// Nhập số a và b
let a = parseFloat(prompt("Nhập số a:"));
let b = parseFloat(prompt("Nhập số b:"));

// Nhập phép toán
let operator = prompt("Nhập phép toán (+, -, *, /):");

// Tính toán kết quả
let result;

if (operator === "+") {
    result = a + b;
} else if (operator === "-") {
    result = a - b;
} else if (operator === "*") {
    result = a * b;
} else if (operator === "/") {
    if (b !== 0) {
        result = a / b;
    } else {
        alert("Không thể chia cho 0!");
    }
} else {
    alert("Phép toán không hợp lệ!");
}

// Hiển thị kết quả
if (result !== undefined) {
    alert("ket qua cua phep tinh tren la:"+ a + operator + b + "=" + result);
}