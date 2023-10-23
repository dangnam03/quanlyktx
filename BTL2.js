let check_phone = /^\(\d{2,4}\)[\s\.-]\d{3}[\s\.-]\d{3}$/;
let check_email = /^([\w-]+(\?\:\.[\w-]+)*)@((\?\:[\w-]+\.)*\w[\w-]{0-66})\.([a-z]{2,6}(\?\:\.[a-z]{2})?)$/;
function checknull(txt) {
  if (txt.value.length === 0)
    return true;
  else
    return false;
}
function isInterger(txt) {
  if ((!isNaN(txt.value)) && (parseInt(txt.value) === Number(txt.value)))
    return true;
  else
    return false;
}
function notcheck(radio) {
  let rt = true;
  for (i = 0; i < radio.length; i++)
    if (radio[i].checked)
      rt = false;
  return rt;
}
function StringMatch(txt, reg) {
  return reg.test(txt.value);
}
function validForm(myForm) {
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
  
  if(!(StringMatch(phoneInput,check_phone))){
    alert("Sai số điện thoại");
    return;   
  }

  let y = notcheck(genderInput);
  if (y === true) {
    alert("Chọn giới tính");
    return;   
  }

  let z = notcheck(QdcttInput);
  if (z === true) {
    alert("Chọn địa chỉ thường trú của người thân");
    return;    
  }
}