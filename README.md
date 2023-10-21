<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    *{
        box-sizing: border-box;
    }
    input{
        width: 40%;
        height: 30px;
        border: 2px solid rgb(112, 112, 138);

    }
    button{
        width: 100px;
        height: 30px;
        border-radius: 10px;
        background: #006241;
        border: none;
        font-family:monospace;
    }
</style>
<script>
    function cheack(){
        let id = document.querySelector('input').value;
        let pattern1 = /^\d{9}$/;
        let pattern2 = /^\d{10}$/;
       if (pattern1.test(id) || pattern2.test(id)){
         return true;
       }
       else if(!pattern1.test(id) || !pattern2.test(id)){
        alert("invalid");
        return false;
       }
    }
    function sendout(){
        let text = document.querySelector('input').value;
        let data = [
            {Name: "Nguyễn  Văn A", id: "123456789", idNumber: "0123456789",gender: "nam",class: "CNTT3", PhoneNumber: "1234567890",Khoa: "k63", address: "HÀ NỘI"},
            {Name: "Nguyễn Văn  B", id: "221231034", idNumber: "1000000000",gender:"nữ",class: "CNTT4", PhoneNumber: "3000000000",Khoa: "k60", address: "Hồ Chí Minh" }
        ];
        let student = null;
        for(let i = 0; i < data.length; i++){
            if(data[i].id === text || data[i].idNumber === text){
                student = data[i];
                break;
            }
        }
        if(student){
            document.getElementById('entrange').innerHTML = "Tên: " + student.Name + "<br>" + "Mã sinh viên: " + student.id + "<br>" + "Số căn cước: " + student.idNumber + "<br>" +"Giới tính: "+student.gender+"<br>"+"Lớp: "+student.class + "<br>"+"Số điện thoại: "+ student.PhoneNumber+"<br>"+ "Khoá: " + student.Khoa + "<br>" + "Địa chỉ: "+student.address;
        }
        else{
            document.getElementById('entrange').innerHTML = "Không tìm thấy sinh viên này!";
        }
    }
</script>
<body>
    <form onsubmit="event.preventDefault();if(cheack()){
        return sendout();
    }">
        <input type="text" placeholder="Nhập số căn cước hoặc mã sinh viên">
        <button type="submit">Tra cứu</button>
        <div id="entrange"></div>
   </form>
</body>
</html>
