let perPage = 8;
let currentPage = 1;
let start = 0;
let end = perPage;
// ========================================hiện thị khóa học cơ bản===============================================
const courseBasic = [
    { id: 1, image: "images/teacher-1.png", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
    { id: 2, image: "images/teacher-1.png", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
    { id: 3, image: "images/teacher-1.png", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
    { id: 4, image: "images/teacher-1.png", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
    { id: 5, image: "images/teacher-1.png", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
    { id: 6, image: "images/teacher-1.png", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
    { id: 7, image: "images/teacher-1.png", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
    { id: 8, image: "images/teacher-1.png", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
]


function renderBasic() {
    html = '';
    const content = courseBasic.map((item, index) => {
        if (index >= start && index < end) {
            html += '<div class="box">';
            html += '<div class="image">';
            html += '<img src="' + item.image + '" alt="">';
            html += '<div class="share">';
            html += '<a href="#">';
            html += '<button>Chi Tiết</button>';
            html += '</a>';
            html += '<div class="status"> ';
            html += '' + item.statusCourse + '';
            html += '<br>';
            html += '' + item.dayStart + '';
            html += '<br>';
            html += '' + item.title + '';
            html += '<br>';
            html += '' + item.teach + '';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            console.log(html);
            return html;
        }
    })
    document.getElementById('courseBasic').innerHTML = html;
}
renderBasic();




// =================================================hiện thị danh sách khóa học nâng cao===============================

const courseAdvanced = [
    { id: 1, images: "images/teacher-5.png", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
    { id: 2, image: "images/teacher-5.png", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
    { id: 3, image: "images/teacher-5.png", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
    { id: 4, image: "images/teacher-5.png", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
    { id: 5, image: "images/teacher-5.png", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
    { id: 6, image: "images/teacher-5.png", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
    { id: 7, image: "images/teacher-5.png", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
    { id: 8, image: "images/teacher-5.png", title: "Tên Khóa Học", teach: "Người Dạy", dayStart: "Bắt Đầu: 22/03/2022", statusCourse: "Trạng Thái: Hoàn Thành" },
]


function renderAdvanced() {
    htmls = '';
    const contents = courseAdvanced.map((item, index) => {
        if (index >= start && index < end) {
            htmls += '<div class="box">';
            htmls += '<div class="image">';
            htmls += '<img src="' + item.image + '" alt="">';
            htmls += '<div class="share">';
            htmls += '<a href="#">';
            htmls += '<button>Chi Tiết</button>';
            htmls += '</a>';
            htmls += '<div class="status"> ';
            htmls += '' + item.statusCourse + '';
            htmls += '<br>';
            htmls += '' + item.dayStart + '';
            htmls += '<br>';
            htmls += '' + item.title + '';
            htmls += '<br>';
            htmls += '' + item.teach + '';
            htmls += '</div>';
            htmls += '</div>';
            htmls += '</div>';
            htmls += '</div>';
            console.log(htmls);
            return htmls;
        }
    })
    document.getElementById('courseAdvanced').innerHTML = htmls;
}
renderAdvanced();