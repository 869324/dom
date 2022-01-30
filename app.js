const links = document.getElementById("primary").children;

for (let i = 0; i < links.length; i++) {
    if ((i + 1) % 2 != 0) {
        const elem = links[i];
        elem.style.backgroundColor = "teal";
        elem.style.color = "whitesmoke";
    }
}