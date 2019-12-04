//假装是服务器获得的数据
const used = ['马化腾', '雷军', '刘强东' ,'j&#xe614;er', 'Kevin', 'Durant', 'Leonardo', '那撸多'];
(function event_bind () {
	let userAccount = document.querySelector("#Account"),
	userPass = document.querySelector("#password"), 
    userPass_ = document.querySelector("#ensure_password"), 
    userName = document.querySelector("#name"),
    information = document.querySelector("#hobby"),
    email = document.querySelector("#e-mail"), 
    telephone = document.querySelector("#PhoneNumber");
    aCho = document.querySelector("#choose"),
    oBtn = document.querySelector("#handup");
	let Error = 0x3f;
	function success_tip(reminder, mark_color, str, flag){
		reminder.innerHTML = str;
		reminder.style.color = "green";
		mark_color.style.color = "#6385d1";
		Error &= (~flag);
	}
	function false_tip(reminder, mark_color, str, flag){
		reminder.innerHTML = str;
		mark_color.style.color = reminder.style.color = "red";
		Error |= flag;
	}
	userAccount.onblur = function() {
		let reminder = this.parentNode.nextElementSibling;
		let mark_color = this.previousElementSibling.previousElementSibling;
		if (used.indexOf(this.value) == -1) {
			success_tip(reminder, mark_color, "恭喜，用户名可用", 0x01);
			/*reminder.innerHTML = "恭喜，用户名可用";
			reminder.style.color = "green";
			mark_color.style.color = "#6385d1";
			Error &= (~0x01);*/
		} else {
			false_tip(reminder, mark_color, "用户名已被注册", 0x01);
			/*reminder.innerHTML = "用户名已被注册"
			mark_color.style.color = reminder.style.color = "red";
			Error |= 0x01;*/
		}
		//console.log(Error);
	}
	
	userPass.onblur = function() {
		let reminder = this.parentNode.nextElementSibling;
		let mark_color = this.previousElementSibling.previousElementSibling;
		let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,24}$/;
		//var reg = /^\w{6,30}$/;
		if (reg.test(this.value)) {
			success_tip(reminder, mark_color, "&#xe614;", 0x02);
		} else {
			false_tip(reminder, mark_color, "密码必须包含大写、小写字母、数字；长度8-24", 0x02);
		}
	}
	userPass.onfocus = function() {
		let reminder = this.parentNode.nextElementSibling;
		reminder.innerHTML = "密码必须包含大写、小写字母、数字；长度8-24"
	}	
	
	userPass_.onblur = function() {
		let reminder = this.parentNode.nextElementSibling;
		let mark_color = this.previousElementSibling.previousElementSibling;	
		if (userPass.value) {
			if (this.value == userPass.value) {
				success_tip(reminder, mark_color, "&#xe614;", 0x04);
			} else {
				false_tip(reminder, mark_color, "两次密码不一致", 0x04);
			}
		}
	}
	
	userName.onblur = function() {
		let reminder = this.parentNode.nextElementSibling;
		let mark_color = this.previousElementSibling.previousElementSibling;
		let reg = /^[\u4e00-\u9fa5]{2,5}$/;
		if (/*this.value == "" && */!reg.test(this.value)) {
			false_tip(reminder, mark_color, "请输入您的中文名字", 0x08);
		} else {
			success_tip(reminder, mark_color, "&#xe614;", 0x08);
		}
	}
	
	telephone.onblur = function() {
		let reminder = this.parentNode.nextElementSibling;
		let mark_color = this.previousElementSibling.previousElementSibling;
		let reg = /^1[3-5789]\d{9}$/
		if (reg.test(this.value)) {
			success_tip(reminder, mark_color, "&#xe614;", 0x10);
		} else {
			false_tip(reminder, mark_color, "请输入正确的手机号", 0x10);
		}
	}
	
	email.onblur = function() {
		let reminder = this.parentNode.nextElementSibling;
		let mark_color = this.previousElementSibling.previousElementSibling;
		let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
		if (reg.test(this.value)) {
			success_tip(reminder, mark_color, "&#xe614;", 0x20);
		} else {
			false_tip(reminder, mark_color, "请输入正确的邮箱地址", 0x20);
		}
	}
	
	oBtn.onclick = function() {
		if ( aCho.checked == false || Error ) {
			alert(" 您 的 信 息 有 误 ")
		} else {
			alert(" 登 记 成 功 ! ")
		}
	}
})()