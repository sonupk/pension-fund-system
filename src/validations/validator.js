

//_________________________________________email validation_________________________________________
let isValidEmail = function(email){
    let emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return emailRegex.test(email)
}
//_________________________________________mobile number validation_________________________________________
const isValidMobile = function (mobile) {
    const regexForMobile = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    return regexForMobile.test(mobile);
  };
//_________________________________________contact person number validation_________________________________________
  const isValidcontactPersonNumber = function (contactPersonNumber) {
    const regexForcontactPersonNumber = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;
    return regexForcontactPersonNumber.test(contactPersonNumber);
  };
  //_________________________________________pincode validation_________________________________________
  const isValidPinCode=function (pinCode){
    const regexForPinCode=/[0-9]/;
    return regexForPinCode.test(pinCode)
  }

module.exports={isValidEmail,isValidMobile,isValidcontactPersonNumber,isValidPinCode}

