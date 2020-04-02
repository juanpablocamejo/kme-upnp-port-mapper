// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const { ipcRenderer } = require('electron');
const btn1 = document.querySelector("#btn1");
const msg1 = document.querySelector("#msg")

btn1.addEventListener("click", () => {
    const port = document.querySelector("#txt1").value;
    const val = parseInt(`${txt1.value}`)
    const esPuertoValido = val && val > 0 && val <= 65535
        msg1.innerHTML = esPuertoValido ? ipcRenderer.sendSync("open-port", port) : "Número de puerto inválido."
}
)
const txt1 = document.querySelector("#txt1")

txt1.addEventListener("keyup",()=>{
    btn1.disabled = !parseInt(txt1.value)
})

txt1.addEventListener("keydown", (evt) => {
    const teclaPermitida = evt.keyCode < 57
    const val = parseInt(`${txt1.value}${evt.key}`)
    const esPuertoValido = val && val > 0 && val <= 65535
    if (!teclaPermitida || !esPuertoValido) {
        evt.preventDefault();
    }

})
