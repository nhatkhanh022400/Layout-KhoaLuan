// ========================================hiện thị khóa học cơ bản===============================================
var myapp = angular.module('myapp', ['angularUtils.directives.dirPagination'])
myapp.controller('myCtrl', function myCtrl($scope) {
    $scope.courses = [
        {
            image: "images/blog-1.jpg", title: "Tên Khóa Khánh", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành"
        },
        {
            image: "images/blog-2.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành"
        },
        { id: 1, image: "images/blog-1.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 2, image: "images/blog-2.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 3, image: "images/blog-3.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 4, image: "images/blog-4.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 5, image: "images/blog-5.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 6, image: "images/blog-6.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 7, image: "images/blog-7.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 8, image: "images/blog-8.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 9, image: "images/blog-7.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 10, image: "images/blog-6.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" }

    ]
});

var myapps = angular.module('myapps', ['angularUtils.directives.dirPagination'])
myapps.controller('myCtrls', function myCtrls($scope) {
    $scope.sooncourses = [
        {
            image: "images/blog-1.jpg", title: "Tên Khóa Khánh", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành"
        },
        {
            image: "images/blog-2.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành"
        },
        { id: 1, image: "images/blog-1.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 2, image: "images/blog-2.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 3, image: "images/blog-3.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 4, image: "images/blog-4.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 5, image: "images/blog-5.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 6, image: "images/blog-6.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 7, image: "images/blog-7.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 8, image: "images/blog-8.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 9, image: "images/blog-7.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
        { id: 10, image: "images/blog-6.jpg", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" }

    ]
});






