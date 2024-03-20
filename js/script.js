const encriptacion = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encrypt(texto) {
    // Replace vowels in the input text with corresponding values from encriptacion object
    return texto.replace(/[eioua]/g, letra => encriptacion[letra]);
}

function encryptText() {
    let texto = document.getElementById("Code").value;
    let textoEncriptado = encrypt(texto);
    // Hide external image and display the encrypted text
    document.getElementById("imgexternal").style.display = "none";
    document.getElementById("ExitCode").style.display = "block";
    document.getElementById("ExitCode").value = textoEncriptado;
}

function decrypt(texto) {
    // Replace mapped strings with corresponding vowels
    return texto.replace(/(enter|imes|ai|ober|ufat)/g, letra => Object.keys(encriptacion).find(key => encriptacion[key] === letra));
}

function decryptText() {
    let texto = document.getElementById("Code").value;
    let textoDesencriptado = decrypt(texto);
    // Hide external image and display the decrypted text
    document.getElementById("imgexternal").style.display = "none";
    document.getElementById("ExitCode").style.display = "block";
    document.getElementById("ExitCode").value = textoDesencriptado;
}

/* Clear textarea */

function emptyfields() {
    // Get all input and textarea inside a form
    var fields = document.querySelectorAll('textarea:not(form textarea)');

    // Loop through all input and textarea and set their value to empty string
    fields.forEach(function (element) {
        element.value = '';
    });
}

// Run emptyfields function when clicking a button with id="empty"
document.getElementById('clear').addEventListener('click', emptyfields);

/* Copy textarea Input */
function copyTextInput() {
    const textarea = document.getElementById('Code');
    textarea.select();
    // Copy the selected text
    navigator.clipboard.writeText(textarea.value)
        .then(() => {
            // Display the alert
            var alerta = document.getElementById("alerta");
            var textoCopiado = document.getElementById("copytext");
            textoCopiado.innerText = textarea.value;
            alerta.style.display = "block";

            // Hide the alert after 3 seconds
            setTimeout(function(){
                alerta.style.display = "none";
            }, 3000);
        })
        .catch(err => {
            console.error('Error copying the text: ', err);
        });
}

/* Copy textarea Output */
function copyTextOutput() {
    const textarea = document.getElementById('ExitCode');
    textarea.select();
    // Copy the selected text
    navigator.clipboard.writeText(textarea.value)
    .then(() => {
        // Display the alert
        var alerta = document.getElementById("alerta");
        var textoCopiado = document.getElementById("copytext");
        textoCopiado.innerText = textarea.value;
        alerta.style.display = "block";

        // Hide the alert after 3 seconds
        setTimeout(function(){
            alerta.style.display = "none";
        }, 3000);
    })
        .catch(err => {
            console.error('Error copying the text: ', err);
        });
}
