
document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var numeroBoleta = document.getElementById('txtnumboleta').value;
  var nombreCliente = document.getElementById('txtnombre').value;
  var montoPagar = parseFloat(document.getElementById('txtmonto').value);

  var numeroBoletaValido = /^B-\d{3}$/.test(numeroBoleta);
  var nombreClienteValido = /^[a-zA-Z0-9]+( [a-zA-Z0-9]+)*$/.test(nombreCliente);
  var montoPagarValido = montoPagar >= 0;

  document.getElementById('numeroBoletaError').textContent = numeroBoletaValido ? '' : 'Número de boleta inválido';
  document.getElementById('nombreClienteError').textContent = nombreClienteValido ? '' : 'Nombre de cliente inválido';
  document.getElementById('montoPagarError').textContent = montoPagarValido ? '' : 'Monto a pagar inválido';

  // var result = confirm("Esta seguro de grabar?");
  // console.log(result);

  Swal.fire({
    title: 'Mensaje del sistema',
    text: "Guardar datos?",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si!',
    cancelButtonText: 'No!!'
  }).then((result) => {
    if (result.value) {   // si el value es true!!
      if (numeroBoletaValido && nombreClienteValido && montoPagarValido) {
        let filaDetalle = document.createElement("tr");
        let celdaBoleta = document.createElement("td");
        celdaBoleta.innerHTML = numeroBoleta;
        let celdaProducto = document.createElement("td");
        celdaProducto.innerHTML = nombreCliente;
        let celdaMonto = document.createElement("td");
        celdaMonto.innerHTML = montoPagar;
      
        filaDetalle.appendChild(celdaBoleta);
        filaDetalle.appendChild(celdaProducto);
        filaDetalle.appendChild(celdaMonto);
      
        document.getElementById("detalle").appendChild(filaDetalle);
      }
    }
  })


  
  
});

