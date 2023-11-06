let check_phone = /^0\d{9}$/;
let check_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let check_cccd = /^\d{12}$/;
function checknull(txt) {
  if (txt.value.length === 0)
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
function validForm(f) {
  if(checknull(f.nameInput)){
    alert("Bạn chưa nhập họ tên");
    f.nameInput.focus();
    return;
  }
  if(checknull(f.studentIdInput)){
    alert("Bạn chưa nhập mã sinh viên");
    f.studentIdInput.focus();
    return;
  }
  if(notcheck(f.genderInput)){
    alert("Bạn chưa chọn giới tính");
    return;
  }
  if(checknull(f.phoneInput)){
    alert("Bạn chưa nhập số điện thoại");
    f.phoneInput.focus();
    return;
  }
  if(!StringMatch(f.phoneInput, check_phone)){
    alert("Số điện thoại bạn nhập không đúng");
    f.phoneInput.value="";
    f.phoneInput.focus();
    return;
  }
  if(checknull(f.addressInput)){
    alert("Bạn chưa nhập địa chỉ");
    f.addressInput.focus();
    return;
  }
  if(checknull(f.emailInput)){
    alert("Bạn chưa nhập email");
    f.emailInput.focus();
    return;
  }
  if(!StringMatch(f.emailInput, check_email)){
    alert("email bạn nhập không đúng");
    f.emailInput.value="";
    f.emailInput.focus();
    return;
  }
  if(checknull(f.uyearInput)){
    alert("Bạn chưa nhập khóa");
    f.uyearInput.focus();
    return;
  }
  if(checknull(f.khoaInput)){
    alert("Bạn chưa nhập khoa");
    f.khoaInput.focus();
    return;
  }
  if(checknull(f.nganhInput)){
    alert("Bạn chưa nhập ngành");
    f.nganhInput.focus();
    return;
  }
  if(checknull(f.classInput)){
    alert("Bạn chưa nhập lớp");
    f.classInput.focus();
    return;
  }
  if(checknull(f.IDInput)){
    alert("Bạn chưa nhập CMND/CCCD");
    f.IDInput.focus();
    return;
  }
  if(!StringMatch(f.IDInput, check_cccd)){
    alert("CMND/CCCD bạn nhập không đúng, CMND/CCCD phải có 12 số");
    f.IDInput.value="";
    f.IDInput.focus();
    return;
  }
  if(checknull(f.dcttInput)){
    alert("Bạn chưa nhập địa chỉ thường trú");
    f.dcttInput.focus();
    return;
  }
  if(checknull(f.ngt_nameInput)){
    alert("Bạn chưa nhập họ tên cho người thân");
    f.ngt_nameInput.focus();
    return;
  }
  if(checknull(f.ngt_phoneInput)){
    alert("Bạn chưa nhập số điện thoại");
    f.ngt_phoneInput.focus();
    return;
  }
  if(!StringMatch(f.ngt_phoneInput, check_phone)){
    alert("Số điện thoại bạn nhập không đúng");
    f.ngt_phoneInput.value="";
    f.ngt_phoneInput.focus();
    return;
  }
  if(notcheck(f.QdcctInput)){
    alert("Bạn chưa chọn địa chỉ thường trú cho người thân");
    return;
  }
  alert("Đăng kí thành công");
}