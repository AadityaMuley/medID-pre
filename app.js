src="https://code.jquery.com/jquery-1.12.4.js"
src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"


const form = document.querySelector("#user-form");
var allist = [];
var namelist = [];



//getting suggestions from firestore database
db.collection("allergies").get().then((snapshot) => {
	var i = 0;
	snapshot.docs.forEach(doc => {
		var temp = [doc.data().name, doc.data().frequency];
		allist.push(temp);
	})
	allist.sort(function(a, b) {
		return b[1]-a[1];
	  })
	console.table(allist);
	for(var i=0; i<allist.length; i++) {
		namelist.push(allist[i][0]);
	}
	console.log(namelist);
})

//auto suggestions while giving  input
$("#allergies").autocomplete({
	source: namelist
});



//submit form and send data to firestore
form.addEventListener("submit", (el)=>{
	el.preventDefault();
	db.collection("user").add({
		name: form.name.value,
		dob: form.dob.value,
		gender: form.gen.value,
		allergy: form.allergies.value
	});
	form.name.value = "";
	form.dob.value = "";
	form.gen.value = "";
	form.allergies.value = "";
})