function Projects() {
    return (
        <section className="section">
            <h2>Kinh nghiệm dự án</h2>
            <p><strong>Hệ thống Website Thương mại điện tử – Fullstack Developer (2024 – 2025)</strong></p>
            <ul>
                <li>Xây dựng hệ thống mua bán thiết bị điện tử trực tuyến: quản lý sản phẩm, giỏ hàng, đơn hàng, tài khoản, đánh giá sản phẩm.</li>
                <li>Nổi bật: gợi ý sản phẩm thông minh, phân quyền người dùng, đa ngôn ngữ, chatbot AI, live chat, thanh toán an toàn.</li>
                <li>Công nghệ:</li>
                <ul style={{ marginLeft: '24px' }}>
                    <li>Frontend: ReactJS, Redux Toolkit, Ant Design, Axios, nprogress, react-toastify</li>
                    <li>Backend: Node.js, Express.js, MySQL, JWT, Multer, Nodemailer, bcryptjs</li>
                    <li>Thanh toán: VNPAY, PayPal</li>
                </ul>
            </ul>
            <p><strong>Các dự án khác:</strong></p>
            <ul>
                <li>App học tiếng Anh TOEIC – thiết kế và thuyết trình.</li>
                <li>Hackathon sinh viên – xây dựng prototype web ứng dụng.</li>
            </ul>
        </section>
    );
}

export default Projects;
