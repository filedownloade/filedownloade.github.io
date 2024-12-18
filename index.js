function namecal() {
    if (document.getElementById("name").value === "10201020") {
        alert("downloading...Farsi")

        var link = document.createElement('a');
        link.innerText = "Farsi"
        link.href = 'new_farsi.pdf'; 
        link.download = 'new_farsi.pdf'; 


        document.body.appendChild(link);

        link.click();

        
}}
