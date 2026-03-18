
// Nhập dữ liệu
let weight = prompt("Nhập cân nặng (kg):");
let height = prompt("Nhập chiều cao (m):");

// Tính BMI
let bmi = weight / (height * height);

// Hiển thị BMI
console.log("BMI của bạn là: " + bmi.toFixed(2));

// Phân loại bằng if
if (bmi < 18.5) {
    console.log("Bạn bị thiếu cân");
} else if (bmi < 25) {
    console.log("Bạn bình thường");
} else if (bmi < 30) {
    console.log("Bạn thừa cân");
} else {
    console.log("Bạn béo phì");
}