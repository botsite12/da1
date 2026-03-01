function checkAccess() {
    let input = document.getElementById('interview-password').value;
    let correctPassword = "123"; // Mật khẩu của bạn ở đây

    if (input === correctPassword) {
        // Mật khẩu đúng: Ẩn modal, hiện nội dung
        document.getElementById('password-modal').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert("Sai mật khẩu! Cút!");
        document.getElementById('interview-password').value = '';
    }
}

// Cho phép nhấn Enter
function checkEnter(event) {
    if (event.key === "Enter") {
        checkAccess();
    }
}