var arregloEstudiantes = [];

function addEstudiante(){

  function student(name, techPoints, lifePoints, status){
    this.name = name;
    this.techPoints = techPoints;
    this.lifePoints = lifePoints;
    this.status = status;
    this.mostrar = function(){
      var contenedor = document.getElementById('mostrar');
      contenedor.innerHTML = this.name.toUpperCase() + "<br>Tech Skills: " + this.techPoints + "<br>Life Skills: " + this.lifePoints
       + "<br>Status: " + this.status;
    };
  };

  var name = prompt("Ingrese nuevo estudiante");
  var techSkills = prompt("Ingrese porcentaje técnico");
  var lifePoints = prompt("Ingrese habilidades socioemocionales");

  var estudiante = new student(name, techSkills, lifePoints, "Active");
  arregloEstudiantes.push(estudiante);
  estudiante.mostrar();

};

function imprimirTodas(){
	var printAll = document.getElementById("imprimir-todo");
	arregloEstudiantes.forEach(function(el){
		printAll.innerHTML+= el.name.toUpperCase() + "<br>Tech Skills: " + el.techPoints + "<br>Life Skills: " + el.lifePoints
     + "<br>Status: " + el.status + "<br><br>";
	});
}
