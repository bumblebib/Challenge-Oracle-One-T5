const textarea = document.querySelector(".encriptador");
const mensagem = document.querySelector(".texto-copiar");
const titulotexto = document.querySelector(".titulo-copiar")
const boxtexto = document.querySelector(".box-texto");
const imgtexto = document.querySelector(".img-semresultado");
const botaocopia = document.querySelector(".copiar");

function alteraArea(){
    titulotexto.innerHTML = "Aqui está seu texto:";
    boxtexto.classList.add("ativado");
    imgtexto.classList.add("ativada");
    botaocopia.classList.add("aparece");

}   

function btEncriptar(){
    const textoEncriptado = encriptar(textarea.value);
    mensagem.innerHTML = textoEncriptado;
    alteraArea();
    textarea.value = "";
}

function encriptar(stringEncriptada){
    let criptografia = [["a", "ampppd"], ["e", "epsxv"], ["i","iqsxz"], ["o", "oçmsdf"], ["u", "upswq"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0;  i < criptografia.length; i++){
        if(stringEncriptada.includes(criptografia[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(criptografia[i][0], criptografia[i][1]);
        }
    }

    return stringEncriptada;
    
}

function descriptar(stringDescriptada){
    let criptografia = [["a", "ampppd"], ["e", "epsxv"], ["i","iqsxz"], ["o", "oçmsdf"], ["u", "upswq"]];
    stringDescriptada = stringDescriptada.toLowerCase();

    for (let i = 0;  i < criptografia.length; i++){
        if(stringDescriptada.includes(criptografia[i][0])){
            stringDescriptada = stringDescriptada.replaceAll(criptografia[i][1], criptografia[i][0]);
        }
    }

    return stringDescriptada;
    
}

function btDescriptar(){
    const textoDescriptado = descriptar(textarea.value);
    mensagem.innerHTML = textoDescriptado;
    alteraArea();
    textarea.value = "";
}

function copiaTexto(){
    let textocopiado = mensagem.innerHTML;

    navigator.clipboard.writeText(textocopiado);
}