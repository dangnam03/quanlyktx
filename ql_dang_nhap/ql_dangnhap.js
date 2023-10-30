function validateForm() {
    var username = document.getElementById('uname').value;
    var password = document.getElementById('pwd').value;
    if (username === 'quanly' && password === 'password') {
        window.location.href = '../sau_khi_ql_dn/saukhi_ql_dn.html';
        return false;
    } else {
        alert('Tên tài khoản hoặc mật khẩu không đúng. Vui lòng thử lại.');
        return false;
    }
}