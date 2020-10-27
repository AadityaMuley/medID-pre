const allist = document.querySelector("#allergies");

function renderAl(doc){
	let li = document.createElement("li");
	let name = document.createElement("span");
	let freq = document.createElement("span");

	li.setAttribute("data-id", doc.id);
	name.textContent = doc.data().name;
	freq.textContent = doc.data().frequency;

	li.appendChild(name);
	li.appendChild(freq);

	allist.appendChild(li);
}

db.collection("allergies").get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		renderAl(doc);
	})
})