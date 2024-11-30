function namecal() {
    if (document.getElementById("name").value === "10201020") {
        alert("downloading...")

        var link = document.createElement('a');
        link.href = 'Riazi-g.pdf'; 
        link.download = 'Riazi-q.pdf'; 


        document.body.appendChild(link);

        link.click();

        
}}
