!function(){!async function(){try{const t="/api/tareas?id="+c(),a=await fetch(t),o=await a.json();e=o.tareas,n()}catch(e){console.log(e)}}();let e=[],t=[];document.querySelector("#agregar-tarea").addEventListener("click",(function(){o()}));function a(a){const o=a.target.value;t=""!==o?e.filter(e=>e.estado===o):[],n()}function n(){!function(){const e=document.querySelector("#listado-tareas");for(;e.firstChild;)e.removeChild(e.firstChild)}(),function(){const t=e.filter(e=>"0"===e.estado),a=document.querySelector("#pendientes");0===t.length?a.disabled=!0:a.disabled=!1}(),function(){const t=e.filter(e=>"1"===e.estado),a=document.querySelector("#completadas");0===t.length?a.disabled=!0:a.disabled=!1}();const a=t.length?t:e;if(0===a.length){const e=document.querySelector("#listado-tareas"),t=document.createElement("LI");return t.textContent="No hay Tareas",t.classList.add("no-tareas"),void e.appendChild(t)}const s={0:"Pendiente",1:"Completa"};a.forEach(t=>{const a=document.createElement("LI");a.dataset.tareaId=t.id,a.classList.add("tarea");const d=document.createElement("P");d.textContent=t.nombre,d.ondblclick=function(){o(editar=!0,{...t})};const i=document.createElement("DIV");i.classList.add("opciones");const l=document.createElement("BUTTON");l.classList.add("estado-tarea"),l.classList.add(""+s[t.estado].toLowerCase()),l.textContent=s[t.estado],l.dataset.estadoTarea=t.estado,l.ondblclick=function(){!function(e){const t="1"===e.estado?"0":"1";e.estado=t,r(e)}({...t})};const u=document.createElement("BUTTON");u.classList.add("eliminar-tarea"),u.dataset.idTarea=t.id,u.textContent="Elminar",u.ondblclick=function(){!function(t){Swal.fire({title:"¿Eliminar Tarea?",showCancelButton:!0,confirmButtonText:"Sí",cancelButtonText:"No"}).then(a=>{a.isConfirmed&&async function(t){const{estado:a,id:o,nombre:r}=t,s=new FormData;s.append("id",o),s.append("nombre",r),s.append("estado",a),s.append("proyectoId",c());try{const a="http://localhost:3001/api/tareas/eliminar",o=await fetch(a,{method:"POST",body:s}),r=await o.json();r.resultado&&(Swal.fire("Eliminado!",r.mensaje,"success"),e=e.filter(e=>e.id!==t.id),n())}catch(e){console.log(e)}}(t)})}(t)},i.appendChild(l),i.appendChild(u),a.appendChild(d),a.appendChild(i);document.querySelector("#listado-tareas").appendChild(a)})}function o(t=!1,a={}){const o=document.createElement("DIV");o.classList.add("modal"),o.innerHTML=`\n        <form class="formulario nueva-tarea">\n            <legend>${t?"Editar Tarea":"Añade una nueva tarea"}</legend>\n            <div class="campo">\n                <label for="tarea">Tarea</label>\n                <input type="text" name="tarea" id="tarea" placeholder="${a.nombre?"Editar la Tarea":"Añadir Tarea al Proyecto Actual"}" value="${a.nombre?a.nombre:""}">\n            </div>\n            <div class="opciones">\n                <input type="submit" value="${t?"Guardar Cambios":"Añadir tarea"}" class="submit-nueva-tarea">\n                <button type="button" class="cerrar-modal">Cancelar</button>\n            </div>\n        </form>\n        `,setTimeout(()=>{document.querySelector(".formulario").classList.add("animar")},0),o.addEventListener("click",(function(s){if(s.preventDefault(),s.target.classList.contains("cerrar-modal")){document.querySelector(".formulario").classList.add("cerrar"),setTimeout(()=>{o.remove()},500)}if(s.target.classList.contains("submit-nueva-tarea")){const o=document.querySelector("#tarea").value.trim();if(""===o)return void function(e,t,a){const n=document.querySelector(".alerta");n&&n.remove();const o=document.createElement("DIV");o.classList.add("alerta",t),o.textContent=e,a.parentElement.insertBefore(o,a.nextElementSibling),setTimeout(()=>{o.remove()},5e3)}("El Nombre de la Tarea es Obligatorio","error",document.querySelector(".formulario legend"));t?(a.nombre=o,r(a)):async function(t){const a=new FormData;a.append("nombre",t),a.append("proyectoId",c());try{const o="http://localhost:3001/api/tareas",r=await fetch(o,{method:"POST",body:a}),c=await r.json();if(c.mensaje&&Swal.fire("Tarea Creada!",c.mensaje,"success"),"exito"===c.tipo){const a=document.querySelector(".modal");a&&a.remove();const o={id:String(c.id),nombre:t,estado:"0",proyectoId:c.proyectoId};e=[...e,o],n()}}catch(e){console.log(e)}}(o)}})),document.querySelector(".dashboard").appendChild(o)}async function r(t){const{estado:a,id:o,nombre:r}=t,s=new FormData;s.append("id",o),s.append("nombre",r),s.append("estado",a),s.append("proyectoId",c());try{const t="http://localhost:3001/api/tareas/actualizar",c=await fetch(t,{method:"POST",body:s}),d=await c.json();if("exito"===d.respuesta.tipo){Swal.fire(d.respuesta.mensaje,d.respuesta.mensaje,"success");const t=document.querySelector(".modal");t&&t.remove(),e=e.map(e=>(e.id===o&&(e.estado=a,e.nombre=r),e)),n()}}catch(e){}}function c(){const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries()).id}document.querySelectorAll('#filtros input[type="radio"').forEach(e=>{e.addEventListener("input",a)})}();