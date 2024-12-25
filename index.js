function namecal() {
    if (document.getElementById("name").value === "10201020") {
        alert("downloading...Farsi")

        var link = document.createElement('a');
        link.innerText = "Farsi"
        link.href = 'Document.pdf'; 
        link.download = 'Document.pdf'; 


        document.body.appendChild(link);

        link.click();

        
}}
