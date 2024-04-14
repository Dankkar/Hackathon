function retrievePassword() {
    var password = document.getElementById("passwordInput").value;
    var specialCharacters = "!@#$%^&*?_~";
    var passwordValid = true;
    var missingElements = "";

    // Kiểm tra độ dài mật khẩu
    if(password.length < 8) {
        passwordValid = false;
        missingElements += "Mật khẩu phải có ít nhất độ dài 8 ký tự.\n";
    }

    // Kiểm tra các ký tự không được phép
    var illegalCharacters = ".\\/ ,";
    for(var i = 0; i < password.length; i++) {
        if(illegalCharacters.includes(password[i])) {
            passwordValid = false;
            missingElements += "Mật khẩu không được chứa các ký tự sau: '.', '\\', '/', ' ', ','.\n";
            break;
        }
    }

    // Kiểm tra các ký tự đặc biệt
    var containsSpecialCharacter = false;
    for(var i = 0; i < password.length; i++) {
        if(specialCharacters.includes(password[i])) {
            containsSpecialCharacter = true;
            break;
        }
    }
    if(!containsSpecialCharacter) {
        passwordValid = false;
        missingElements += "Mật khẩu phải chứa ít nhất một ký tự đặc biệt sau: '!@#$%^&*?_~'.\n";
    }

    // Hiển thị thông báo
    if(passwordValid) {
        alert("Mật khẩu hợp lệ");
    } else {
        alert("Mật khẩu không hợp lệ. Vui lòng kiểm tra lại:\n" + missingElements);
    }


    console.log(password);
}
