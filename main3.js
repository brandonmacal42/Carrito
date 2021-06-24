// Constantes
const CarritoIcon = document.querySelector('header i')
const carrito = document.getElementsByClassName('carrito')[0];
const tbody = document.querySelector('#tbodyCarrito');
const cursos=document.getElementsByClassName('cursos')[0];
const btnVaciar=document.getElementById('vaciarCarrito');
let listaCurso=[];

// Add event listeners
document.addEventListener('DOMContentLoaded', function () {
	CarritoIcon.addEventListener('click', abrirCarrito);
	cursos.addEventListener('click',botonAgregar)	
})
// Funciones

function abrirCarrito() {
	 if(carrito.classList.contains('Inactive')){
		 carrito.classList.remove('Inactive');	
	 }	
	else{
	 	carrito.classList.add('Inactive');
	 }	
}

function botonAgregar(e){
	e.preventDefault();
		if(e.target.classList.contains('agregarCarrito')){
			const elemento= e.target.parentElement.parentElement;
			obtenerDatos(elemento);
		}
}

function obtenerDatos(elemento){
	const datos={
		imagen: elemento.querySelector('img').src,
		titulo: elemento.querySelector('p[a]').textContent,
		precio: elemento.querySelector('span[b]').textContent,
		id: elemento.querySelector('button').getAttribute('data-id'),
		cantidad: 1
	}
	const existe = listaCurso.some(curso=> curso.id===datos.id);
	if(existe){
		const losCursos= listaCurso.forEach(curso=>{
			if(curso.id===datos.id){
				curso.cantidad++
				return curso;
			}
			});
	}
	else{
		listaCurso=[...listaCurso,datos];
	}
	
	agregarElemento();
}

function agregarElemento(){
	limpiarCarrito();
	listaCurso.forEach((curso) =>{
		const row = document.createElement("tr");
		row.classList.add('elementos');
		row.innerHTML = `
			<td class="elemento imagen">
				<img src="${curso.imagen}" width="100">
			</td>
			<td class="elemento titulo">${curso.titulo}</td>
			<td class="elemento">${curso.precio}</td>
			<td class="elemento">${parseInt(curso.cantidad)}</td>
			<td class="elemento cross" data-id="${curso.id}"><i class="fas fa-times-circle"></i></td>
		`;
		tbody.appendChild(row);
	})		
}

function limpiarCarrito(){
	while(tbody.firstChild){
		tbody.removeChild(tbody.firstChild);
	}
}