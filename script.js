let myform=document.getElementById("myform")
let btn=document.getElementById("btn")
// var array=[];
// var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
// for (var i = 0; i < checkboxes.length; i++) {
//   array.push(checkboxes[i].value)
//   console.log(array)
// }
// console.log(array)

function adddata(event){
    event.preventDefault()
    let mytable=document.getElementById("mytable");   
    var row=mytable.insertRow();
    var cell1=row.insertCell();
    var cell2=row.insertCell();
    var cell3=row.insertCell();
    var cell4=row.insertCell();
    var cell5=row.insertCell();
    var cell6=row.insertCell();
    var cell7=row.insertCell();
    var cell8=row.insertCell();
    cell1.innerHTML=document.getElementById("fnametext").value
    cell2.innerHTML=document.getElementById("lnametext").value
    cell3.innerHTML=document.getElementById("address").value
    cell4.innerHTML=document.getElementById("pincode").value
    cell5.innerHTML=document.querySelector('input[name=gender]:checked').value
    cell6.innerHTML=Array.from(document.querySelectorAll("input[type=checkbox][name=food]:checked"), e => e.value);
    cell7.innerHTML=document.getElementById("state").value
    cell8.innerHTML=document.getElementById("country").value
    formToReset.reset();
}



const formToReset = document.getElementById('myform');
formToReset.addEventListener('submit', (e) => {
   e.preventDefault();
   formToReset.reset();
//    output.innerHTML += "The form is resetted successfully!"
});