/* ========================================= CODIGO ========================================= */

// Cargar Codigo al Entrar a la Pagina
window.onload = function codigoJS()
{
    abrirMenuLateral();
    abrirSubMenus();
}

// Cargar Codigo al Redimensionar la Pagina
window.addEventListener("resize", ()=>
{
    abrirSubMenus();
    cerrarSubmenus();
});

/* ========================================= FUNCIONES ========================================= */

// Funcion Abrir Menu Lateral
function abrirMenuLateral()
{
    // Variables
    const btnsMenu = document.querySelector(".bienvenida-btns-menu");
    const nav = document.querySelector("nav");

    btnsMenu.addEventListener("click", ()=>                     // Evento Cambiar Icono y Mostrar Menu
    {
        btnsMenu.classList.toggle("cambiar-icono");
        nav.classList.toggle("activo");

        if(nav.className == "activo")
        {
            document.body.style = `overflow-y:hidden;`;         // Desactivo Scroll al Abrir Menu Lateral
        }
        else
        {
            document.body.style = `overflow-y:initial;`;        // Activo Scroll al Cerrar Menu Lateral
            cerrarSubmenus();                                   // Cierro los Submenus al Cerrar el Menu Lateral
        }
    });
}

// Funcion Abrir Submenus
function abrirSubMenus()
{
    if(window.innerWidth < 1081)                                            // Compruebo si la Ventana es Menor a 1081px
    {
        const items = document.querySelectorAll(".item-abrir-sub-menu");     // Selecciono Todos los Elementos

        items.forEach(item =>                                               // Itero los Elementos
        {
            // Variables
            const submenu = item.nextElementSibling;
            const flecha = item.children[0].children[0];

            item.addEventListener("click", ()=>             // Agrego Evento al Item clickeado
            {
                cerrarSubmenus();                           // Cierro los Submenus al dar Click

                if(submenu.clientHeight == 0)
                {
                    submenu.classList.add("activo");        // Muestro Submenu Cerrado
                    flecha.classList.add("activo");         // Activo la Flecha del Menu
                }
            });
        });
    }
}

// Funcion Cerrar Submenus
function cerrarSubmenus()
{
    const flechas = document.querySelectorAll(".icono-menu-desplegar");
    const submenu2 = document.querySelectorAll(".menu-2");
    const submenu3 = document.querySelectorAll(".menu-3");

    flechas.forEach(a=>
    {
        a.classList.remove("activo");           // Regreso las Flechas a su Estado Desactivado
    })

    submenu2.forEach(a =>
    {
        a.classList.remove("activo");           // Cerrar Submenus 2
        a.addEventListener("click",()=>
        {
            a.classList.add("activo");          // Abrir Submenu 2 Clickeado   
        });

        submenu3.forEach(b =>
        {
            b.classList.remove('activo');       // Cerrar Submenus 3
        });
    })
}

// Funcion Copiar al Portapapeles
function copiarPortapapeles(ruta)                           // Funcion que recibe 1 parametro
{
	let aux = document.createElement("textarea");           // Creo variable que guarda un "textarea"
	aux.value = document.getElementById(ruta).innerText;    // Agrego el valor que quiero copiar al "textarea"
	document.body.appendChild(aux);                         // Agrego el "textarea" al body
	aux.select();                                           // Selecciono lo que tiene el "textarea"
	document.execCommand("copy");                           // Ejecuto comando para copiar
	document.body.removeChild(aux);                         // Elimino "textarea" del body
    alert("Copiado al Portapales");                         // Muestro mensaje
}