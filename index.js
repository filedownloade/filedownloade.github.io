function namecal() {
    f_name = document.getElementById("name").value
    if (document.getElementById("name").value === "10201020") {
        alert("hello")

        var link = document.createElement('a');
        link.href = '220_62621644033289.pdf'; 
        link.download = '220_62621644033289.pdf'; 


        document.body.appendChild(link);

        link.click();

        
}}