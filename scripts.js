function encriptar() {
    let texto = document.getElementById("inputTexto").value;

    if (!/^[a-z\s]+$/.test(texto)) {
        alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("outputTexto").value = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById("inputTexto").value;

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("outputTexto").value = textoDesencriptado;
}

function copiarTexto() {
    let texto = document.getElementById("outputTexto");
    texto.select();
    document.execCommand("copy");
}
