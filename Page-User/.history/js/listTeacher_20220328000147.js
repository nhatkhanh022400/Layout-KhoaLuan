

// ========================================hiện thị khóa học cơ bản===============================================
var app = angular.module('myapp', ['angularUtils.directives.dirPagination'])
app.controller('myCtrl', function myCtrl($scope) {
$scope.courses=[
    { id: 1, image: "images/teacher-1.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy A", },
    { id: 2, image: "images/teacher-2.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy B", },
    { id: 3, image: "images/teacher-3.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy C", },
    { id: 4, image: "images/teacher-4.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy D", },
    { id: 5, image: "images/teacher-5.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy E", },
    { id: 6, image: "images/teacher-6.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy F", },
    { id: 7, image: "images/teacher-7.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy G", },
    { id: 8, image: "images/teacher-8.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 9, image: "images/teacher-8.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 10, image: "images/teacher-8.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 11, image: "images/teacher-3.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 12, image: "images/teacher-1.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 13, image: "images/teacher-7.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 14, image: "images/teacher-2.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 15, image: "images/teacher-5.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 16, image: "images/teacher-8.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 17, image: "images/teacher-7.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 18, image: "images/teacher-6.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 19, image: "images/teacher-5.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 21, image: "images/teacher-5.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 22, image: "images/teacher-4.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 23, image: "images/teacher-3.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 24, image: "images/teacher-2.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 25, image: "images/teacher-1.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 26, image: "images/teacher-7.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 27, image: "images/teacher-8.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 28, image: "images/teacher-1.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 29, image: "images/teacher-2.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 30, image: "images/teacher-3.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 31, image: "images/teacher-4.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 32, image: "images/teacher-5.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 33, image: "images/teacher-6.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 34, image: "images/teacher-8.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 35, image: "images/teacher-7.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 36, image: "images/teacher-6.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 37, image: "images/teacher-5.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 38, image: "images/teacher-4.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 39, image: "images/teacher-3.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 40, image: "images/teacher-2.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", },
    { id: 41, image: "images/teacher-1.png", department: "Tên Phòng Ban", nameTeacher: "Người Dạy H", }
]})
