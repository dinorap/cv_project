# CV Portfolio - Đinh Minh Phương

Một CV portfolio hiện đại được xây dựng bằng React.js với thiết kế responsive và animation mượt mà.

## Live Demo

Đã deploy lên Vercel: [https://cv-project-fawn.vercel.app/](https://cv-project-fawn.vercel.app/)

## Tính năng

- **Thiết kế 2 cột**: Sidebar tối với thông tin cá nhân và nội dung chính bên phải
- **Responsive**: Tự động điều chỉnh layout trên mobile và tablet
- **Animation**: Hiệu ứng fade-in và slide-up mượt mà khi load trang
- **Component-based**: Cấu trúc component rõ ràng, dễ bảo trì
- **Print-friendly**: Tối ưu cho in ấn

## Công nghệ sử dụng

- **Frontend**: React.js, CSS3
- **Styling**: CSS Grid, Flexbox, CSS Animations
- **Build Tool**: Create React App
- **Version Control**: Git

## Cấu trúc dự án

```
src/
├── components/
│   ├── About/           # Mục tiêu nghề nghiệp
│   ├── Education/       # Trình độ học vấn
│   ├── Projects/        # Kinh nghiệm dự án
│   ├── Skills/          # Chứng chỉ & Hoạt động
│   └── Sidebar/         # Thông tin sidebar
│       ├── SidebarAvatar.jsx
│       ├── SidebarContact.jsx
│       ├── SidebarSkills.jsx
│       └── SidebarAwards.jsx
├── App.js              # Component chính
├── App.css             # Styles chính
└── index.js            # Entry point
```

##  Cài đặt và chạy

### Yêu cầu hệ thống

- Node.js >= 14.0.0
- npm

### Cài đặt

```bash
# Clone repository
git clone <repository-url>
cd phuong-cv

# Cài đặt dependencies
npm install
```

### Chạy dự án

#### `npm start`

Chạy ứng dụng ở chế độ development.
Mở [http://localhost:3000](http://localhost:3000) để xem trong trình duyệt.

Trang sẽ tự động reload khi bạn thay đổi code.
Bạn cũng có thể thấy các lỗi lint trong console.

#### `npm test`

Khởi chạy test runner ở chế độ interactive watch.
Xem phần về running tests để biết thêm thông tin.

#### `npm run build`

Build ứng dụng cho production vào thư mục `build`.
Nó sẽ bundle React đúng cách ở production mode và tối ưu build để có hiệu suất tốt nhất.

Build được minify và tên file bao gồm hash.
Ứng dụng của bạn đã sẵn sàng để deploy!

