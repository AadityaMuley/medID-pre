// const htmllist = document.querySelector("#al");
var allist = [];

// function renderAl(i){
// 	let ta = document.createElement("table");
// 	let row = document.createElement("tr");
// 	let name = document.createElement("th");
// 	// let freq = document.createElement("th");

// 	row.setAttribute("data-id", allist[i][0]);
// 	name.textContent = allist[i][1];
// 	// freq.textContent = doc.data().frequency;

// 	row.appendChild(name);
// 	// row.appendChild(freq);
// 	ta.appendChild(row);

// 	htmllist.appendChild(ta);
// }

db.collection("allergies").get().then((snapshot) => {
	var i = 0;
	snapshot.docs.forEach(doc => {
		var temp = [doc.data().name, doc.data().frequency];
		allist.push(temp);

		// renderAl(i);
		// i++;
	})
	allist.sort(function(a, b) {
		return b[1]-a[1];
	  })
	console.table(allist);
})



function suggest(input, suggestion) {
	var objip = document.getElementById(input);
	var strip = objip.value;

	var objsu = document.getElementById(suggestion);

	if(strip.length > 0) {
		objsu.innerHTML = "";
		var sulist = document.createElement("ul");

		for (var i=0; i<allist.length; i++) {
			var allergy = allist[i][0];
			var alpart = allergy.substring(0,strip.length);
			if(allergy.length > strip.length && alpart === strip) {
				var lists = document.createElement("li");
				lists.setAttribute("onclick", "complete('" + allergy + "', '" + input + "', '" + suggestion + "');");
                lists.innerHTML = allergy;
                sulist.appendChild(lists);
			}
		}

		objsu.appendChild(sulist);
	}
	else {
		objsu.innerHTML = "";
	}
}

// function complete()