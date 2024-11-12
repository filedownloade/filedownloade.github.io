function namecal() {
    f_name = document.getElementById("name").value
    if (document.getElementById("name").value === "10201020") {
        alert("ok!")

        var link = document.createElement('a');
        link.href = '168_64152172221323.pdf'; 
        link.download = '168_64152172221323.pdf'; 


        document.body.appendChild(link);

        link.click();

        
}}
