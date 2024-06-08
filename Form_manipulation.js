let box = document.createElement("div");
document.body.append(box);
box.className = "box";

let container = document.createElement("div");
box.append(container);
container.classList.add("container");
container.classList.add("mycontainer");

let innerbox = document.createElement("div");
container.append(innerbox);
innerbox.className = "innerbox";

let firstname = document.createElement("div");
innerbox.append(firstname);
firstname.innerHTML = `<br><label for="firstname">First Name</label><br>
<input type="text" id="firstname" class="firstname">`;

let firstname_disp = document.getElementById("firstname");
//firstname_disp.defaultValue = "LAKSHMANAKUMAR K";

let lastname = document.createElement("div");
innerbox.append(lastname);
lastname.innerHTML = `<br><label for="lastname">Last Name</label><br>
<input type="text" id="lastname" class="lastname">`;

let lastname_disp = document.getElementById("lastname");
//lastname_disp.defaultValue = "LAKSHMANAKUMAR K";

let email = document.createElement("div");
innerbox.append(email);
email.innerHTML = `<br><label for="email">Email</label><br>
<input type="text" id="email" class="email">`;

let email_disp = document.getElementById("email");
//email_disp.defaultValue = "LAKSHMANAKUMAR K";

let address = document.createElement("div");
innerbox.append(address);
address.innerHTML = `<br><label for="address">Address</label><br>
<input type="text" id="address" class="address">`;

let address_disp = document.getElementById("address");
//address_disp.defaultValue = "D-205, Urbanrise";

let pincode = document.createElement("div");
innerbox.append(pincode);
pincode.innerHTML = `<br><label for="pincode">Pincode</label><br>
<input type="text" id="pincode" class="pincode">`;

let pincode_disp = document.getElementById("pincode");
//pincode_disp.defaultValue = "603202";

let gender = document.createElement("div");
innerbox.append(gender);
gender.innerHTML = `<br><label for="gender">Gender</label><br>
<select id="gender" class="gender">
<option value="not willing to disclose"></option>
<option value="Male">Male</option>
<option value="Female">Female</option>
<option value="Transgender">Transgender</option>
</select>`;

let gender_disp = document.getElementById("gender");
//gender_disp.value = "Male";

let food = document.createElement("div");
innerbox.append(food);
food.innerHTML = `<br><p> Choice of Food </p>
<input type="checkbox" id="indian" value="Indian cuisine" class="food">
<label for="indian">Indian Cuisine</label><br>
<input type="checkbox" id="italian" value="Italian cuisine" class="food">
<label for="italian">Italian Cuisine</label><br>
<input type="checkbox" id="japanese" value="Japanese cuisine" class="food">
<label for="japanese">Japanese Cuisine</label><br>
<input type="checkbox" id="thai" value="Thai cuisine" class="food">
<label for="thai">Thai Cuisine</label><br>
<input type="checkbox" id="chinese" value="Chinese cuisine" class="food">
<label for="chinese">Chinese Cuisine</label>`;

//let food_disp = document.querySelectorAll(".food");
//for (let i=0; i<food_disp.length; i++){
//console.log(food_disp[i].checked);
//}

let state = document.createElement("div");
innerbox.append(state);
state.innerHTML = `<br><label for="state">State</label><br>
<input type="text" id="state" class="state">`;

let state_disp = document.getElementById("state");
//state_disp.defaultValue = "Tamilnadu";

let country = document.createElement("div");
innerbox.append(country);
country.innerHTML = `<br><label for="country">Country</label><br>
<input type="text" id="country" class="state">`;

let country_disp = document.getElementById("country");
//country_disp.defaultValue = "India";

let submit = document.createElement("div");
innerbox.append(submit);
submit.className="button";
submit.innerHTML = `<br><button type="button" class="submit" onclick="entry()">Submit</button>`;

let table = document.createElement("table");
innerbox.append(table);
table.className="tab";

let thead = document.createElement("thead");
table.append(thead);
thead.innerHTML =`<tr>
<th>First Name</th>
<th>Last Name</th>
<th>Email</th>
<th>Address</th>
<th>Pincode</th>
<th>Gender</th>
<th>Choice of Food</th>
<th>State</th>
<th>Country</th>`;

let tbody = document.createElement("tbody");
table.append(tbody);
tbody.className="tbody";
tbody.setAttribute("id","0");
console.log(tbody.textcontent);



function entry(){
	let cof = document.querySelectorAll(".food")
	let cnt = 0;
	let arr = [];
	let str = "0"; 
	for (let i=0; i<cof.length; i++){
		if(cof[i].checked){
			cnt = cnt + 1;
			arr.push(cof[i].value);
		}
	}
	if(cnt < 2){
		alert("Select atleat two choices for food");
	}
	else{
		str = arr.join(",");
		console.log(str);
		if(tbody.id == "0"){
		tbody.innerHTML=`<tr><td>${firstname_disp.value}</td>
		<td>${lastname_disp.value}</td>
		<td>${email_disp.value}</td>
		<td>${address_disp.value}</td>
		<td>${pincode_disp.value}</td>
		<td>${gender_disp.value}</td>
		<td>${str}</td>
		<td>${state_disp.value}</td>
		<td>${country_disp.value}</td></tr>`;
		console.log(tbody.id);
		tbody.id++;
		firstname_disp.value = "";
		lastname_disp.value = "";
		email_disp.value = "";
		address_disp.value = "";
		pincode_disp.value = "";
		gender_disp.value = "not willing to disclose";
		state_disp.value = "";
		country_disp.value = "";
		for (let i=0; i<cof.length; i++){
		cof[i].checked = false;
		}
		}
		else{
		tbody.innerHTML = `${tbody.innerHTML}
		<tr><td>${firstname_disp.value}</td>
		<td>${lastname_disp.value}</td>
		<td>${email_disp.value}</td>
		<td>${address_disp.value}</td>
		<td>${pincode_disp.value}</td>
		<td>${gender_disp.value}</td>
		<td>${str}</td>
		<td>${state_disp.value}</td>
		<td>${country_disp.value}</td></tr>`;
		firstname_disp.value = "";
		lastname_disp.value = "";
		email_disp.value = "";
		address_disp.value = "";
		pincode_disp.value = "";
		gender_disp.value = "not willing to disclose";
		state_disp.value = "";
		country_disp.value = "";
		for (let i=0; i<cof.length; i++){
		cof[i].checked = false;
		}
		}
	}
	
}



