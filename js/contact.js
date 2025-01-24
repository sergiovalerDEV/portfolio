document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    formData.append("access_key", "84bfdbe7-8ba2-4a77-a059-edfaf6659a3e");

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    }).then(async (response) => {
        if(response.status == 200) {
            document.getElementById("form-status").textContent = "¡Mensaje enviado con éxito!";
            document.getElementById("form-status").className = "success";
        } else {
            throw new Error("Error en el envío");
        }
    }).catch(error => {
        document.getElementById("form-status").textContent = "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.";
        document.getElementById("form-status").className = "error";
    }).finally(() => {
        this.reset();
    });
});