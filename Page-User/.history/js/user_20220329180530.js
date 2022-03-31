var app = angular.module('user-app', []);
app.controller('abc', function abc($scope) {
    $scope.insides = [
        {
            img: 'images/blog-1.jpg',
            dayStart: '24/03/2022',
            teach: 'Bởi: Giảng Viên',
            title: 'Tên Khóa Học',
            description: 'Mô Tả: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quaerat!'
        },
        {
            img: 'images/blog-2.jpg',
            dayStart: '24/03/2022',
            teach: 'Bởi: Giảng Viên',
            title: 'Tên Khóa Học',
            description: 'Mô Tả: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quaerat!'
        },
        {
            img: 'images/blog-3.jpg',
            dayStart: '24/03/2022',
            teach: 'Bởi: Giảng Viên',
            title: 'Tên Khóa Học',
            description: 'Mô Tả: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quaerat!'
        },
    ];

});


app.controller('abcd', function abcd($scope) {
    $scope.outsides = [
        {
            img: 'images/blog-1.jpg',
            dayStart: '24/03/2022',
            teach: 'Bởi: Giảng Viên',
            title: 'Tên Khóa Học',
            description: 'Mô Tả: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quaerat!'
        },
        {
            img: 'images/blog-2.jpg',
            dayStart: '24/03/2022',
            teach: 'Bởi: Giảng Viên',
            title: 'Tên Khóa Học',
            description: 'Mô Tả: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quaerat!'
        },
        {
            img: 'images/blog-3.jpg',
            dayStart: '24/03/2022',
            teach: 'Bởi: Giảng Viên',
            title: 'Tên Khóa Học',
            description: 'Mô Tả: Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quaerat!'
        },
    ];
});


angular.module('buttonsDemoBasic', ['ngMaterial'])
.controller('AppCtrl', function($scopes) {
  $scopes.isDisabled = true;
  $scopes.googleUrl = 'http://google.com';
});
