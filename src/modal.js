

let modal = document.getElementById('modal');

let abrirModalAgregarTarea = document.getElementById('btnAgregarTarea');

let cerrarModal = document.getElementById('cerrarModal');

let modalEditarTarea = document.getElementById('modalEditarTarea');

let modalNuevaTarea = document.getElementById('modalNuevaTarea');

let nuevaTareaForm = document.getElementById("nuevaTareaForm");

let msgNuevaTarea = document.getElementById("msgNuevaTarea");




abrirModalAgregarTarea.addEventListener('click', ()=>{
    modal.style.display = "block";    
    modalNuevaTarea.style.display = "flex";
    modalEditarTarea.style.display = "none";

    let selectColors = document.getElementById("todoprioridad");

    
    const defSelectedOption = selectColors.options[selectColors.selectedIndex];
    const defSelectedColor = getComputedStyle(defSelectedOption).backgroundColor;
    selectColors.style.backgroundColor = defSelectedColor;




    selectColors.addEventListener("change", () => {
    
    // Obtener la opción seleccionada
    const selectedOption = selectColors.options[selectColors.selectedIndex];
    
    const selectedColor = getComputedStyle(selectedOption).backgroundColor;
    
    selectColors.style.backgroundColor = selectedColor;
  });



})

cerrarModal.addEventListener('click', ()=>{
    modalNuevaTarea.style.display = "none"
    modal.style.display = "none";
    
    
})

