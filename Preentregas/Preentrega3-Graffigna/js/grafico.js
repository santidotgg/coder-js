let myChart = document.getElementById("myChart").getContext('2d');
const update_button = document.getElementById("grafico");

//let taxedAmount = document.getElementById("amount").value;




// estaba probando un poco el uso de chart js, tengo que hacer que se actualice el grafico
// segun lo que ingresa el usuario
let pieChart = new Chart(myChart, {
    type: 'doughnut',
    data:{
        labels:['Precio Original', 'Impuestos'],
        datasets:[{
            label: 'Dataset 1',
            data:[
                100,
                75
            ],
            backgroundColor: [
                'yellow',
                'rgba(255, 67, 0, 0.81)'
            ],
            borderWith: 1,
            borderColor: 'rgba(178, 178, 178, 0.81)',
            hoverBorderWidth: 3,
            hoverBorderColor: 'black',
        }],
        
        
    },
    options:{
        
        responsive: true,
        plugins: {
        legend: {
            position: 'bottom',
      },
      title: {
        display: true,
        text: 'Porcentaje de Impuestos'
      }
    }
    }
})
