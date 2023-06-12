function saveFormData(event) {
    event.preventDefault(); // Formun varsayılan gönderimini engelle

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var data = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message + "\n\n";

    var file = new Blob([data], { type: "text/plain" }); // Metin dosyası oluştur
    var a = document.createElement("a");
    var url = URL.createObjectURL(file);
    a.href = url;
    a.download = "form_data.txt";
    a.click();
    URL.revokeObjectURL(url);
}

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = " Hey I'm here :(";
});

window.addEventListener("focus",() => {
    document.title = docTitle;
} );

