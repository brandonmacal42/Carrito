function init() {
	const carrito = document.getElementsByClassName("carrito")[0];
	const carritoIcon = document.getElementsByClassName("fa-shopping-cart")[0];

	const tbody = document.getElementById("tbodyCarrito");
	const btnVaciar = document.getElementById("vaciarCarrito");
	const cursos = document.getElementsByClassName("cursos")[0];
	let listaCarrito = [];


	
	// --------------AGREGAR EVENT LISTENERS-----------
	agregarEventListeners();

	function agregarEventListeners() {
		carritoIcon.addEventListener("click", carritoShow);
		btnVaciar.addEventListener("click", vaciarCarrito)
		cursos.addEventListener("click", botonAgregar);
		carrito.addEventListener("click",eliminarCurso);
	}


	// EMPEZAMOS A HACER LA FUNCION DONDE SELECCIONAMOS EL DIV DEL CURSO

	// LEEMOS LOS DATOS DEL CURSO



		// AGREGAMOS LOS DATOS A UN ARREGLO

			// Aumentamos la cantidad si esta repetida
		const existe= listaCarrito.some( curso => curso.id===infoCurso.id);
		if (existe){
			const losCursos=listaCarrito.forEach( curso =>{
			if(curso.id===infoCurso.id){

				curso.cantidad++;
				return curso;	
			}
			// curso.cantidad++;
		})
		}
		else{
		listaCarrito = [...listaCarrito, infoCurso];
		}
		carritoHTML();
	}




		// EL CARRITO LO IMPRIMIMOS EN HTML

	function carritoHTML() {
		limpiarCarrito();
		listaCarrito.forEach((curso) => {
			const row = document.createElement("tr");
			row.class.add("elementos");
			row.innerHTML = `
	<td class="elemento imagen"> 
		<img src ='${curso.imagen}' width='100'>
	</td>
	<td class="elemento titulo">${curso.titulo}</td>
	<td class="elemento">${curso.precio}</td>
	<td class="elemento">${curso.cantidad}</td>
	<td class="elemento cross" data-id="${curso.id}"><i class="fas fa-times-circle cross"></i></td>

	`;
	// 
			//Ponemos el html en el tbody
			tbody.appendChild(row);	
		});
	}

		// ------------------VACIAR Y LIMPIAR CARRITO----------------

	function limpiarCarrito() {
		//  tbody.innerHTML='';
		while (tbody.firstChild) {
			tbody.removeChild(tbody.firstChild);
		}	
	}
		//BOTON VACIAR CARRITO

	function vaciarCarrito() {
		limpiarCarrito();
		listaCarrito = [];
	}

	function eliminarCurso(e){
		e.preventDefault();
		if(e.target.classList.contains('cross')){
			const cursoId=e.target.getAttribute('data-id')
			listaCarrito=listaCarrito.filter(curso => curso.id !== cursoId)
			carritoHTML();
		}

	}

		

