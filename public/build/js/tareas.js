!function(){!async function(){try{const e="/api/tareas?id="+t(),a=await fetch(e),o=await a.json(),{tareas:n}=o;!function(e){if(0===e.length){const e=document.querySelector("#listado-tareas"),t=document.createElement("LI");return t.textContent="No hay Tareas",t.classList.add("no-tareas"),void e.appendChild(t)}const t={0:"Pendiente",1:"Completa"};e.forEach(e=>{const a=document.createElement("LI");a.dataset.tareaId=e.id,a.classList.add("tarea");document.createElement("P").textContent=e.nombre;document.createElement("DIV").classList.add("opciones");const o=document.createElement("BUTTON");o.classList.add("estado-tarea"),o.classList.add(""+t[e.estado].toLowerCase()),o.textContent=t[e.estado],o.dataset.estadoTarea=e.estado,console.log(o)})}(n)}catch(e){console.log(e)}}();function e(e,t,a){const o=document.querySelector(".alerta");o&&o.remove();const n=document.createElement("DIV");n.classList.add("alerta",t),n.textContent=e,a.parentElement.insertBefore(n,a.nextElementSibling),setTimeout(()=>{n.remove()},5e3)}function t(){const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries()).id}document.querySelector("#agregar-tarea").addEventListener("click",(function(){const a=document.createElement("DIV");a.classList.add("modal"),a.innerHTML='\n        <form class="formulario nueva-tarea">\n            <legend>Añade una nueva tarea</legend>\n            <div class="campo">\n                <label for="tarea">Tarea</label>\n                <input type="text" name="tarea" id="tarea" placeholder="Añadir Tarea al Proyecto Actual">\n            </div>\n            <div class="opciones">\n                <input type="submit" value="Añadir Tarea" class="submit-nueva-tarea">\n                <button type="button" class="cerrar-modal">Cancelar</button>\n            </div>\n        </form>\n        ',setTimeout(()=>{document.querySelector(".formulario").classList.add("animar")},0),a.addEventListener("click",(function(o){if(o.preventDefault(),o.target.classList.contains("cerrar-modal")){document.querySelector(".formulario").classList.add("cerrar"),setTimeout(()=>{a.remove()},500)}o.target.classList.contains("submit-nueva-tarea")&&function(){const a=document.querySelector("#tarea").value.trim();if(""===a)return void e("El Nombre de la Tarea es Obligatorio","error",document.querySelector(".formulario legend"));!async function(a){const o=new FormData;o.append("nombre",a),o.append("proyectoId",t());try{const t="http://localhost:3001/api/tareas",a=await fetch(t,{method:"POST",body:o}),n=await a.json();if(console.log(n),n.mensaje&&e(n.mensaje,n.tipo,document.querySelector(".formulario legend")),"exito"===n.tipo){const e=document.querySelector(".modal");setTimeout(()=>{e.remove()},3e3)}}catch(e){console.log(e)}}(a)}()})),document.querySelector(".dashboard").appendChild(a)}))}();