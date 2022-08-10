const siswaXiirpl2 = [
	{ nama: "Alvy", gender: "Laki-laki" },
	{ nama: "Fahmi", gender: "Laki-laki" },
	{ nama: "Anggita", gender: "Perempuan" },
	{ nama: "Fitriani", gender: "Perempuan" },
];

siswaXiirpl2.forEach(function (ambilData) {
	var li = document.createElement("li");
	li.className = "flex m-5 bg-orange-200 rounded-md  w-3/12";
	li.innerHTML =
		"<div class='flex items-center ml-2 p-2 font-semibold text-blue-500'>" +
		"<div>" +
		ambilData.nama +
		"</div>" +
		"<div>" +
		"<div class='ml-3 text-xs italic bg-white p-1 align-items-right rounded-md'>" +
		ambilData.gender +
		"</div>" +
		"</div>" +
		"</div>";
	document.getElementById("list").appendChild(li);
});
