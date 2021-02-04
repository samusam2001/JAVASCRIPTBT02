/*
	Đầu vô: 3 cạnh
	Thực Hiện:
		- B1: khai báo 3 biến
		- B2: kiểm tra ko nhập rỗng
		- B3: kiểm tra nhập kiểu number
		- B4: canh1*canh1 == canh2*canh2 + canh3*canh3 ==> tam giac vuong
		- B5: canh1 == canh2 && canh2 == canh3 ==> tam giác đều
		- B6: canh1 == canh2 || canh2 == canh3 || canh3 == canh1 ==> tam giác cân
		- B7: còn lại tam giác nhọn
	
	Đầu ra: Kiểm Tra Tam Giác gì
*/


//BT04: Kiểm Tra Tam Giác
var btnKiemTra = document.getElementById("btnKiemTra").addEventListener("click",function(e){
	e.preventDefault();
	var canh1 		= document.getElementById("inputNumberOne").value;
	var canh2 		= document.getElementById("inputNumberTwo").value;
	var canh3 		= document.getElementById("inputNumberThree").value;
	var txtThongBao	= document.getElementById("txtThongBao");
	var result;
	

	if(canh1 == "" && canh2 == "" && canh3 == ""){
		result = "chưa nhập đủ số";
		txtThongBao.setAttribute("class","alert alert-danger");
		txtThongBao.innerHTML = result;
	}else{
		canh1 	= parseInt(canh1);
		canh2	= parseInt(canh2);
		canh3	= parseInt(canh3);
		if(!Number.isInteger(canh1) || !Number.isInteger(canh2) || !Number.isInteger(canh3)){
			result = "ko phải là kiểu số";
			txtThongBao.setAttribute("class","alert alert-danger");
			txtThongBao.innerHTML = result;
		}else{
			if((canh1*canh1 == canh2*canh2 + canh3*canh3) || (canh2*canh2 == canh1*canh1 + canh3*canh3) || (canh3*canh3 == canh1*canh1 + canh2*canh2)){
				result = "tam giác vuông";
			}else if(canh1 == canh2 && canh2 == canh3){
				result = "tam giác đều";
			}else if(canh1 == canh2 || canh2 == canh3 || canh3 == canh1){
				result = "tam giác cân";
			}else{
				result = "tam giac nhọn";
			}
			
			txtThongBao.setAttribute("class","alert alert-success");
			txtThongBao.innerHTML = result;		
		}
	}
	
});


//=================================================================================
/*
	Đầu vô: 3 số
	Thực Hiện:
		- B1: khai báo 3 biến
		- B2: kiểm tra ko nhập rỗng
		- B3: kiểm tra nhập kiểu number
		- B4: kiểm tra 3 số nếu so % 2 == 0 thì i tăng 1 và ngược lại số % 2 != 0 thì j tăng lên 1
	
	Đầu ra: Kiểm Tra Tam Giác gì
*/


//BT03: Kiểm Tra Có Bao Nhiêu Số Chẵn Và Số Lẻ
var btnKiemTraChanLe = document.getElementById("btnKiemTraChanLe").addEventListener("click",function(e){
	e.preventDefault();
	var so1 			= document.getElementById("inputNO").value;
	var so2 			= document.getElementById("inputNT").value;
	var so3 			= document.getElementById("inputNTh").value;
	var txtThongBao2	= document.getElementById("txtThongBao2");
	var i = 0,j = 0;
	var result2;
	

	if(so1 == "" && so2 == "" && so3 == ""){
		result2 = "chưa nhập đủ số";
		txtThongBao2.setAttribute("class","alert alert-danger");
		txtThongBao2.innerHTML = result2;
	}else{
		so1 = parseInt(so1);
		so2	= parseInt(so2);
		so3	= parseInt(so3);
		if(!Number.isInteger(so1) || !Number.isInteger(so2) || !Number.isInteger(so3)){
			result2 = "ko phải là kiểu số";
			txtThongBao2.setAttribute("class","alert alert-danger");
			txtThongBao2.innerHTML = result2;
		}else{
			if(so1 % 2 == 0){
				i++;
			}else{
				j++;
			}
			
			if(so2 % 2 == 0){
				i++;
			}else{
				j++;
			}
			
			if(so3 % 2 == 0){
				i++;
			}else{
				j++;
			}
			
			result2 	= "Có "+i+" số chẵn";
			resresult2ult += "<br/>Có "+j+" số lẻ";
			
			txtThongBao2.setAttribute("class","alert alert-success");
			txtThongBao2.innerHTML = result2;		
		}
	}
	
});


//=================================================================================
/*
	Đầu vô: nhập tên
	Thực Hiện:
		- B1: khai báo 1 biến
		- B2: kiểm tra ko nhập rỗng
		- B3: kiểm tra khớp thì xuất ra
	
	Đầu ra: xin chào
*/


//BT02: Viết Chương Trình Chào Hỏi
var btnChao = document.getElementById("btnChao").addEventListener("click",function(e){
	e.preventDefault();
	var inputChao 		= document.getElementById("inputChao").value;
	var txtThongBao3	= document.getElementById("txtThongBao3");
	var result3;
	
	if(inputChao == ""){
		result3 = "chưa nhập thông tin";
		txtThongBao3.setAttribute("class","alert alert-danger");
		txtThongBao3.innerHTML = result3;
	}else{
		switch(inputChao){
			case "ba" :
				result3 = "xin chào ba";
				break;
			case "me" :
				result3 = "xin chào me";
				break;
			case "con trai" :
				result3 = "xin chào con trai";
				break;
			case "con gai" :
				result3 = "xin chào con gai";
				break;
			default:
				result3 = "xin chào người lạ";
				break;
		}
		txtThongBao3.setAttribute("class","alert alert-success");
		txtThongBao3.innerHTML = result3;
		
	}
});


//=================================================================================
/*
	Đầu vô: nhập 3 số
	Thực Hiện:
		- B1: khai báo 3 biến
		- B2: kiểm tra ko nhập rỗng
		- B3: kiểm tra nó có phải là số ko
		- B4: so sánh các kết quả
		- B5: xuất ra kết quả
	
	Đầu ra: sắp xếp
*/


// BT01: Viết Chương Trình Xuất Ba Số Theo Thứ Tự Tăng Dần
var btnSapXep = document.getElementById("btnSapXep").addEventListener("click",function(e){
	e.preventDefault();
	var a 			= document.getElementById("num1").value;
	var b 			= document.getElementById("num2").value;
	var c 			= document.getElementById("num3").value;
	var txtThongBao4	= document.getElementById("txtThongBao4");
	var result4;
	var soLon, soNho, soGiua;
	
	if(a == "" && b == "" && c == ""){
		result4 = "chưa nhập thông tin";
		txtThongBao4.setAttribute("class","alert alert-danger");
		txtThongBao4.innerHTML = result4;
	}else{
		a 	= parseInt(a);
		b	= parseInt(b);
		c	= parseInt(c);
		if(!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)){
			result4 = "ko phải là kiểu số";
			txtThongBao4.setAttribute("class","alert alert-danger");
			txtThongBao4.innerHTML = result4;
		}else{
			soLon = a;
			soNho = a;
			if(soLon < b){
				soLon = b;
				if(a <= c){
					soGiua = c;
					soNho  = a;
				}else{
					soGiua = a;
					soNho  = c;
				}
			}

			if(soLon < c){
				soLon = c;
				if(a <= b){
					soGiua = b;
					soNho  = a;
				}else{
					soGiua = a;
					soNho  = b;
				}
			}

			if(soNho > b){
				soNho = b;
				if(a <= c){
					soGiua = a;
					soLon  = c;
				}else{
					soGiua = c;
					soLon  = a;
				}
			}

			if(soNho > c){
				soNho = c;
				if(a <= b){
					soGiua = a;
					soLon  = b;
				}else{
					soGiua = b;
					soLon  = a;
				}
			}

			result4 = "Sắp xếp: "+soNho+" - "+soGiua+" - "+soLon;
			txtThongBao4.setAttribute("class","alert alert-success");
			txtThongBao4.innerHTML = result4;
		}
	}
});