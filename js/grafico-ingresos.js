// Datos ficticios para el gráfico
var datosGrafico = {
  labels: ["SUBTOTAL", "DESCUENTO"],
  datasets: [
    {
      data: [500,50],
      backgroundColor: ["#013878", "#E46732"],
    },
  ],
};

// Configuración del gráfico
var opcionesGrafico = {
  responsive: true
};

// Obtén el elemento canvas y crea el gráfico de pastel
var ctx = document.getElementById("grafico-pastel").getContext("2d");
var grafico = new Chart(ctx, {
  type: "pie",
  data: datosGrafico,
  options: opcionesGrafico,
});
