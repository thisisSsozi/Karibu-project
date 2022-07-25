// Login validation
const firstfocus= ()=>{
     document.loginform.email.focus();
    return false;
}

// const valEmail = (inputField, emailerror)=>{
//     let emailad =  /^[A-Z0-9]+$/i;
//     let emaillen = inputField.value.length;
//     if (inputField.value.match(emailad) && emaillen != '') {
//         return true;
//     }
//     else {
//         emailerror.innerHTML = 'Enter valid email'
//         emailerror.style.color = 'red';
//         emailerror.style.fontSize = '12px';
//         return false;
//     }
    
// } 
const valPswd = (inputField, errormessage2,)=>{
    let loginPsd = /^[A-Z0-9]+$/i;
    let lgpsdlen = inputField.value.length;
    if(inputField.value.match(loginPsd) && lgpsdlen > 5){
        return true;
    }
    else {
        errormessage2.innerHTML = 'Not less than 5 characters';
        errormessage2.style.color = 'red';
        errormessage2.style.fontSize = '12px';
        return false;
    }
}

// // User register validation
let regfocus = ()=>{
    let firstname = document.getElementById("firstname").focus();
    return true;
}

const valFirstName = (inputField, errormessage3)=>{
    let firstname = /^[A-Za-z]+$/;
    let fnlen = inputField.value.length;
    if (inputField.value.match(firstname) && fnlen != "" && fnlen > 3){
        errormessage3.innerHTML = '';
        return true;
    }
    else {
        errormessage3.innerHTML = 'Not less than 3 characters, Alphanumeric';
        errormessage3.style.color = 'red';
        errormessage3.style.fontSize = '12px';
        return false;
    }
}

const valLastname = (inputField, errormessage4)=>{
    let lastName = /^[A-Za-z]+$/;
    let lnlen = inputField.value.length;
    if (inputField.value.match(lastName) && lnlen != "" && lnlen > 3){
        errormessage4.innerHTML = '';
        return true;
    }
    else {
        errormessage4.innerHTML = 'Not less than 3 characters, Alphanumeric';
        errormessage4.style.color = 'red';
        errormessage4.style.fontSize = '12px';
        return false;
    }
}

const valPassword = (inputField, errormessage6)=>{
    let psd = /^[A-Z0-9]+$/i;
    let psdlen = inputField.value.length;
    if (inputField.value.match(psd) && psdlen > 5 && inputField != ""){
        errormessage6.innerHTML = '';
        return true;
    }
    else{
        errormessage6.innerHTML = 'Password should have more than 5 characters';
        errormessage6.style.color = 'red';
        errormessage6.style.fontSize = '12px';
    }
}


// sales records validation
let salefocus = ()=>{
    let ap = document.getElementById('nameofproduct').focus();
    return true
}

const valap = (inputField, apaid)=>{
    var num = /^[0-9]+$/;
    let aplen = inputField.value.length;
    if (inputField.value.match(num) && inputField != ""){
        return true;  
    }
    else if (aplen > 5){
        return true;
    }
    else {
        apaid.innerHTML = 'Not less than 5 characters';
        apaid.style.fontSize = '12px';
        apaid.style.color = 'red';
        return false;
    }
}


const valuprice = (inputField, uperror)=>{

}

let valBname =(inputField, bname)=>{
    let byname = /^[A-Z0-9]+$/i;
    let bynlen = inputField.value.length;
    if (inputField.value.match(byname) && bynlen >= 2){
        return true;
    }
    else {
        bname.innerHTML = 'Not less than 2 characters';
        bname.style.color = 'red';
        bname.style.fontSize = '12px';
        return false;
    }
}

let valSname = (inputField, sname)=>{
    let sagent = /^[A-Z0-9]+$/i;
    let saglen = inputField.value.length;
    if (inputField.value.match(sagent) && saglen >= 2){
        return true;
    }
    else {
        sname.innerHTML = 'Not less than 2 characters';
        sname.style.color = 'red';
        sname.style.fontSize = '12px';
        return false;
    }
}

// deferred records validation
let validateNop = (inputField, noperror) =>{
    let nameofprod = /^[A-Z0-9]+$/i;
    let nofprlen = inputField.value.length;
    if(inputField.value.match(nameofprod) && nofprlen > 2 && inputField != ''){
        return true;
    } 
    else {
        noperror.innerHTML = 'Alphanumeric, not less than 2 characters';
        noperror.style.color = 'red';
        noperror.style.fontSize = '12px';
        return false;
    }
}

valadue = (inputField, amountdue)=>{
    let amoud = document.getElementById('amountd').value;
    let adue = /^[0-9]+$/;
    if(inputField.value.match(adue) || inputField >=5){
        inputField.innerHTML = '';
        return true;
    }
    else {
        amountdue.innerHTML = 'Not less than 5 characters';
        amountdue.style.color = 'red';
        amountdue.style.fontSize = '12px';
        return false
    }
}

validByname = (inputField, buyrname)=>{
    let bynexp = /^[A-Z0-9]+$/i;
    let bylen = inputField.value.length;
    if(inputField.value.match(bynexp) || bylen >= 2){
        buyrname.innerHTML = '';
        return true
        
      }
    else {
        buyrname.innerHTML = 'Alphanumeric, not less than 2 characters';
        buyrname.style.color = 'red';
        buyrname.style.fontSize = '12px';
        return false;
        }
    }

valSaleAg = (inputField, saleA)=>{
    let saG = /^[A-Z0-9]+$/;
    if (inputField.value.match(saG) && inputField >= 2){
        inputField.innerHTML = '';
        return true;
    }
    else {
        saleA.innerHTML = 'Alphanumeric, not less than 2 characters';
        saleA.style.color = 'red';
        saleA.style.fontSize = '12px';
        return false;
    }
}

let valLocation = (inputField, locaerror)=>{
    let location = /^[A-Z0-9]+$/i;
    let locationlen = inputField.value.length;
    if (inputField.value.match(location) && locationlen >= 2){
        return true;
    }
    else {
        locaerror.innerHTML = 'Alphanumeric, not less than 2 characters';
        locaerror.style.color = 'red';
        locaerror.style.fontSize = '12px';
        return false;
    }
}

let valNIN = (inputField, ninerror) =>{
    let Nin = /^[A-Z0-9]+$/;
    let NinLen = inputField.value.length;
    if (inputField.value.match(Nin) && inputField != '' && NinLen === 14){
        return true;
    }
    else {
        ninerror.innerHTML = 'Enter valid NIN format, 14 characters strictly';
        ninerror.style.color = 'red';
        ninerror.style.fontSize = '12px';
        return false;
    }
}

// procurement form validation
let valNofP = (inputField, namprod)=>{
    let np = /^[A-Z0-9]+$/;
    if (inputField.value.match(np)){
        return true;
    }
    else {
        namprod.innerHTML = 'Alphanumeric characters only';
        namprod.style.color = 'red';
        namprod.style.fontSize = '12px';
        return false;
    }
}
let valtoproduce = (produceField, erro8) =>{
    let typroduce = /^[A-Za-z]+$/;
    let typlen = produceField.value.length;
    if (!produceField.value.match(typroduce) || typlen < 2 || typlen == 0){
        erro8.innerHTML = 'Alphabets only, 2 or more values';
        erro8.style.color = 'red';
        erro8.style.fontSize = '12px';
        return false
    }
    else {
        return true
    }
}
// Date validation
let valDate = (inputField, errormessage11) =>{
    if (inputField == ""){
        errormessage11.innerHTML = 'Select date';
        return false
    }
    else if (inputField.value.match(dat)){
        return true
    }
}

let validateTon = (inputField, er111) =>{
    let proton = /^[0-9]+$/;
    let protonlen = inputField.value.length;
    if (inputField.value.match(proton) && protonlen != "" && protonlen > 3){
        return true;
    }
    else {
        er111.innerHTML = 'Numeric, not less than 3 characters';
        er111.style.color = 'red';
        er111.style.fontSize = '12px';
    }
}

let valcoprocurement= (inputField, errrr) =>{
    let coproc = /^[0-9]+$/;
    let coproclen = inputField.value.length;
    if (inputField.value.match(coproc) && inputField != "" && coproclen >= 5){
        return true
    }
    else {
        errrr.innerHTML = 'Numeric and not less than 5 characters';
        errrr.style.color = 'red';
        errrr.style.fontSize = '12px';
    }
}

let validateContact = (inputField, conterr)=>{
    let contact = /^[0-9]+$/;
    let contactlen = inputField.value.length;
    if (inputField.value.match(contact) && contactlen >= 10 && contactlen < 14){
        return true;
    }
    else {
        conterr.innerHTML = 'Enter valid phone numbers, (10-14 characters)';
        conterr.style.color = 'red';
        conterr.style.fontSize = '12px';
        return false;
    }
}
