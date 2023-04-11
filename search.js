function search(event) {
    if (event.keyCode == 13) {
	var searchTerm = document.getElementById("searchbox").value;
	if (searchTerm === "kids") {
		window.location.href = "kids.html";
	}
    else {
		alert("No results found for '" + searchTerm + "'");
	}
}
}