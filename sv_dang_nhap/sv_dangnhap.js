function validateForm() {
    var username = document.getElementById('uname').value;
    var password = document.getElementById('pwd').value;
    if (username === 'tendangnhap' && password === 'matkhau') {
        window.location.href = '/sau_khi_sv_dn/saukhi_sv_dn.html';
        return false;
    } else {
        alert('Tên tài khoản hoặc mật khẩu không đúng. Vui lòng thử lại.');
        return false;
    }
}