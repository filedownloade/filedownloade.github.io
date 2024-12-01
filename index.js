function namecal() {
    if (document.getElementById("name").value === "10201020") {
        alert("downloading...")

        var link = document.createElement('a');
        link.innerText = "Riazi"
        link.href = 'Riazi-q.pdf'; 
        link.download = 'Riazi-q.pdf'; 


        document.body.appendChild(link);

        link.click();

        
}}
