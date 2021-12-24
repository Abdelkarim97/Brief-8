var input1 = document.getElementById('nameinput');
var input2 = document.getElementById('authorinput');
var input3 = document.getElementById('priceinput');
var input4 = document.getElementById('dateinput');
var input5 = document.getElementById('languageinput');
var input6 = document.getElementById('emailinput');
var butt = document.getElementById('button');
var table = document.getElementById('myTable')
var inputcheck1 = document.getElementById('inputcheck1')
var inputcheck2 = document.getElementById('inputcheck2')
var inputcheck3 = document.getElementById('inputcheck3')
var inputcheck4 = document.getElementById('inputcheck4')
var inputcheck5 = document.getElementById('inputcheck5')
var inputcheck6 = document.getElementById('inputcheck6')



class books {
	constructor(name, authorName, price, date, language, email){
		this.name = name
		this.authorName = authorName
		this.price = price
		this.date = date
		this.language = language
		this.email = email
	}

	// Details(){
 //            return "L'ouvrage" + this.name + "en langue" + this.language +
 //             ", écrit par" + this.authorName + "et publié le"+ this.date +". Le prix de"+ this.Titre +
 //              "est de "+ this.Price + "Dhs.";
 //              {
}
var list = []

var valide = true
let alphabet = /^[a-zA-Z]+$/;
let numbers = /^[0-9]+$/
let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function addToTable(){
	// bookname
	valide = false;
	if (input1.value == ""){
		inputcheck1.innerText = "please enter a value"
		return valide
	}
	else if(alphabet.test(input1.value) == false){
		inputcheck1.innerText = "Alphabet only"
		return valide
	}
	else {
		inputcheck1.innerText ="submitted!"
		valide = true
	}
	//Author name

	if (input2.value == ""){
		inputcheck2.innerText = "please enter a value"
		return valide
	}
	else if(alphabet.test(input2.value) == false){
		inputcheck2.innerText = "Alphabet only"
		return valide
	}
	else {
		inputcheck2.innerText ="submitted!"
		valide = true
	}

	//Price


	if (input3.value == ""){
		inputcheck3.innerText = "please enter a value"
		return valide
	}
	else if(numbers.test(input3.value) == false){
		inputcheck3.innerText = "enter valid number"
		return valide
	}
	else {
		inputcheck3.innerText ="submitted!"
		valide = true
	}
	//Date
	if (input4.value == ""){
		inputcheck4.innerText = "please enter date"
		return valide
	}
	else {
		inputcheck4.innerText ="submitted!"
		valide = true
	}
	//Language

	if (input5.value == ""){
		inputcheck5.innerText = "please enter language"
		return valide
	}
	else {
		inputcheck5.innerText = "submitted!"
		valide = true
	}
	//Email
	if (input6.value == ""){
		inputcheck6.innerText = "please enter a value"
		return valide
	}
	else if(email.test(input6.value) == false){
		inputcheck6.innerText = "Invalid Email"
		return valide
	}
	else {
		inputcheck6.innerText ="submitted!"
		valide = true
	}




    


	if (valide == true){
	table.innerHTML = ""
	var book = new books (input1.value,input2.value,input3.value,input4.value,input5.value,input6.value);
	list.push(book);
	charger();
}
}
	function charger(){
	for (var i = 0 ; i < list.length ; i++){
	var currentObj = list[i]
	var row = myTable.insertRow()
	var cell1 = row.insertCell(0)
	var	cell2 = row.insertCell(1)
	var	cell3 = row.insertCell(2)
	var	cell4 = row.insertCell(3)
	var	cell5 = row.insertCell(4)
	var	cell6 = row.insertCell(5)
	var cell7 = row.insertCell(6)

	cell1.innerHTML = currentObj.name
	cell2.innerHTML = currentObj.authorName
	cell3.innerHTML = currentObj.price
	cell4.innerHTML = currentObj.date
	cell5.innerHTML = currentObj.language
	cell6.innerHTML = currentObj.email
	cell7.innerHTML = `<input type="submit" onclick="edit(this)" value="edit" id="editbtn">` +
						`<input type="submit" onclick="Delete(this)" value="delete" id="deletebtn">`
						

	}
}

function Delete(btn){
    const confirmText = "are you sure you want to delete this row?"
    if(confirm(confirmText) == true){
    var row = btn.parentNode.parentNode,rowIndex;
     list.splice(row, 1);
     table.innerHTML = "";
     charger()
}}



