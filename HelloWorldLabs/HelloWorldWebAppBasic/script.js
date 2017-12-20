	function submit() {
	    document.studentForm.submit();
	}

	function hideResult() {

	    if (validate()) {

	        document.getElementById("result").style.display = "none";
	    }

	}

	function showResult(result) {
	    document.getElementById("result").innerHTML = result;
	    document.getElementById("result").style.display = "block";
	}

	function checkEmail() {
	    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.studentForm.sEmail.value)) {
	        return true;
	    }
	    return false;

	}

	function IsNumeric(e) {
	    var keyCode = e.which ? e.which : e.keyCode
	    var number = ((keyCode >= 48 && keyCode <= 57));
	    if (!number) {

	        val = "Please enter only numbers";
	        showResult(val);
	        return false;
	    }

	    if (checkLength() > 9) {
	        val = "Mobile number should be <10";
	        showResult(val);
	        return false;
	    }
	}

	function checkLength() {
	    return document.studentForm.sPhone.value.length;
	}

	function validate() {
	    var name = document.studentForm.sName.value;
	    var email = document.studentForm.sEmail.value;
	    var phoneNumber = document.studentForm.sPhone.value;
	    var address = document.studentForm.sAddress.value;
	    var department = document.studentForm.sDepartment.value;


	    if (email == "" || email == null) {
	        var val = "Email address should not be empty";
	        showResult(val);
	        return false;
	    } else if (!checkEmail()) {
	        var val = "Invalid Email Address";
	        showResult(val);
	        return false;
	    } else if (name == "" || name == null) {
	        var val = "name should not be empty";

	        showResult(val);

	        return false;
	    } else if (phoneNumber == "" || phoneNumber == null) {
	        var val = "phone number should not be empty";
	        showResult(val);
	        return false;
	    } else if (address == "" || address == null) {
	        var val = "address should not be empty";
	        showResult(val);
	        return false;
	    } else if (department == "" || department == null) {
	        var val = "department should not be empty";
	        showResult(val);
	        return false;
	    }

	    return true;

	}
