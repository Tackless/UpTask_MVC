document.querySelector("#agregar-tarea").addEventListener("click",(function(){const a=document.createElement("DIV");a.classList.add("modal"),a.innerHTML='\n        <form class="formulario nueva-tarea">\n            <legend>Añade una nueva tarea</legend>\n            <div class="campo">\n                <label for="tarea">Tarea</label>\n                <input type="text" name="tarea" placeholder="Añadir Tarea al Proyecto Actual">\n            </div>\n            <div class="opciones">\n                <input type="submit" value="Añadir Tarea" class="submit-nueva-tarea">\n                <button type="button" class="cerrar-modal">Cancelar</button>\n            </div>\n        </form>\n        ',setTimeout(()=>{document.querySelector(".formulario").classList.add("animar")},0),document.querySelector("body").appendChild(a)}));