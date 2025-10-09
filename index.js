document.getElementById('convertBtn').addEventListener('click', function(event) {
  event.preventDefault();

  const valor = parseFloat(document.getElementById('inputValue').value);
  const unidadeEntrada = document.getElementById('fromUnit').value;
  const unidadeSaida = document.getElementById('toUnit').value;

  if (isNaN(valor)) {
    alert('Por favor, insira um valor válido.');
    return;
  }

  let resultado;

  switch (`${unidadeEntrada}-${unidadeSaida}`) {
    case 'metro-centimetro':
      resultado = valor * 100;
      break;
    case 'metro-milimetro':
      resultado = valor * 1000;
      break;
    case 'centimetro-metro':
      resultado = valor / 100;
      break;
    case 'centimetro-milimetro':
      resultado = valor * 10;
      break;
    case 'milimetro-metro':
      resultado = valor / 1000;
      break;
    case 'milimetro-centimetro':
      resultado = valor / 10;
      break;
    default:
      resultado = valor;
  }

  document.getElementById('resultValue').textContent = resultado.toFixed(2);
});
