const allist = document.querySelector("#al");

function renderAl(doc){
	let row = document.createElement("tr");
	let name = document.createElement("th");
	let freq = document.createElement("th");

	row.setAttribute("data-id", doc.id);
	name.textContent = doc.data().name;
	freq.textContent = doc.data().frequency;

	row.appendChild(name);
	row.appendChild(freq);

	allist.appendChild(row);
}

db.collection("allergies").get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		renderAl(doc);
	})
})