document.getElementById("submit").onclick = function (myForm) {
  myForm.preventDefault(); // Ngăn chặn gửi biểu mẫu mặc định
  function checknull(txt) {
      return txt.value.trim() === "";
  }

  function notcheck(radio) {
      for (let i = 0; i < radio.length; i++) {
          if (radio[i].checked) {
              return false;
          }
      }
      return true;
  }

  function StringMatch(txt, reg) {
      return reg.test(txt.value);
  }

  function isValidYear(year) {
      const currentYear = new Date().getFullYear();
      return year >= 1950 && year <= currentYear;
  }

  let name = document.getElementById("nameInput");
  let studentID = document.getElementById("studentIdInput");
  let phone = document.getElementById("phoneInput");
  let address = document.getElementById("addressInput");
  let email = document.getElementById("emailInput");
  let uyear = document.getElementById("uyearInput");
  let khoa = document.getElementById("khoaInput");
  let nganh = document.getElementById("nganhInput");
  let clas = document.getElementById("classInput");
  let id = document.getElementById("IDInput");
  let dctt = document.getElementById("dcttInput");

  if (name.value === "" || studentID.value === "" || phone.value === "" || address.value === "" || email.value === "" ||
  uyear.value === "" || khoa.value === "" || nganh.value === "" || clas.value === "" || id.value === "" ||
  dctt.value === "") {
  alert("Thiếu thông tin");
  return;
}

  let genderInput = document.getElementsByName("genderInput");
  if (notcheck(genderInput)) {
      alert("Chọn giới tính");
      return;
  }

  let QdcctInput = document.getElementsByName("QdcctInput");
  if (notcheck(QdcctInput)) {
      alert("Chọn địa chỉ thường trú của người thân");
      return;
  }

  if ((StringMatch(phone, check_phone)) === false) {
      alert("Sai định dạng số điện thoại");
      return;
  }

  if ((!StringMatch(email, check_email))=== false) {
      alert("Sai định dạng e-mail");
      return;
  }

  if (!StringMatch(uyear, check_uyear)) {
      alert("Sai định dạng Khóa");
      return;
  }

  const bDate = document.getElementById("bDateInput").value;
  if (!bDate) {
      alert("Vui lòng nhập ngày sinh");
      return;
  }

  const birthYear = new Date(bDate).getFullYear();
  if (!isValidYear(birthYear)) {
      alert("Năm sinh phải từ 1950 đến " + currentYear);
      return;
  }

  alert("Đăng ký thành công");
  // Thêm mã JavaScript khác (nếu cần) cho xử lý sau khi đăng ký thành công
}
