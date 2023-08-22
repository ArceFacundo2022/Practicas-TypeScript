// Trabajo Practico Nº1 TypeScript

//CALCULADORA SIMPLE
const operacion = (ope:string):boolean => {
  
  let inputnum01 = document.getElementById('num01') as HTMLInputElement
  let inputnum02 = document.getElementById('num02') as HTMLInputElement
  let inputResult = document.getElementById('result01') as HTMLInputElement
  let labelResult = document.getElementById('labelResult01') as HTMLLabelElement

  let num01: number = parseFloat(inputnum01.value)
  let num02: number = parseFloat(inputnum02.value)

  switch(ope){
    case "+":
      labelResult.innerText = "¡Suma Exitosa!"
      inputResult.value = (num01 + num02)+""
      break
    case "-":
      labelResult.innerText = "¡Resta Existosa!"
      inputResult.value = (num01 - num02)+""
      break
    case "/":
      labelResult.innerText = "¡Division Exitosa!"
      inputResult.value = (num01 / num02)+""
      break
    case "*":
      labelResult.innerText = "¡Multiplicacion Existosa!"
      inputResult.value = (num01 * num02)+""
      break
    default:
      labelResult.innerText = "¡Syntax Error! 😵‍💫"
      inputResult.value = "0"
      break
  }
  return true
}

document.querySelector<HTMLButtonElement>('#suma')!.addEventListener('click', () => {
  operacion("+");
});
document.querySelector<HTMLButtonElement>('#resta')!.addEventListener('click', () => {
  operacion("-");
});
document.querySelector<HTMLButtonElement>('#division')!.addEventListener('click', () => {
  operacion("/");
});
document.querySelector<HTMLButtonElement>('#multi')!.addEventListener('click', () => {
  operacion("*");
});

// CONTADOR DE NUMEROS PARES E IMPARES

const Contar = ():boolean => {
  let InputRMin = document.getElementById('RMin') as HTMLInputElement
  let InputRMax = document.getElementById('RMax') as HTMLInputElement
  let PARES = document.getElementById('pares') as HTMLParagraphElement
  let IMPARES = document.getElementById('impares') as HTMLParagraphElement

  let RMin: number = parseInt(InputRMin.value)
  let RMax: number = parseInt(InputRMax.value)
  let numPares: string =""
  let numImpares: string =""
  let array01: number[] = [0,0,0]

  if(RMax < RMin || RMin == RMax){
    PARES.innerHTML = `<b>Pares: </b> Error al ingresar los rangos`
    IMPARES.innerHTML = `<b>Impares: </b> Error al ingresar los rangos`
    return false
  }

  for (let i: number = RMin; i <= RMax; i++){
    if ((i % 2) == 0){
      numPares += " ["+ i + "] "
      array01[0] ++
    }else{
      numImpares += " ["+ i + "] "
      array01[1] ++
    }
    if (array01[2] == 20){
      numPares += `\n`
      numImpares += `\n`
      array01[2] = 0
    }
    array01[2] ++
  }

  PARES.innerHTML = `<b>Pares: ${array01[0]} \n</b> ${numPares}`
  IMPARES.innerHTML = `<b>Impares: ${array01[1]} \n</b> ${numImpares}`
  return true
}

document.querySelector<HTMLButtonElement>('#contar')!.addEventListener('click', () => {
  Contar();
});

//TABLA DE MULTIPLICAR


const tablaMulti = ():boolean => {
  let InputNumTabla = document.getElementById('numTabla') as HTMLInputElement
  let InputNumHasta = document.getElementById('numHasta') as HTMLInputElement
  let TABLA = document.getElementById('Tabla01') as HTMLTableElement
  
  let numTabla:number = parseInt(InputNumTabla.value)
  let numHasta:number = parseInt(InputNumHasta.value)
  let bodyTable:string = `<tr>
    <th scope="rowgroup" colspan="2">${numTabla}</th>
  </tr>`
  
  if(numHasta < 1){
    alert("ingrese un número mayor a uno para crear la tabla")
    return false
  }

  for(let i:number = 1; i <= numHasta; i++){
    bodyTable += `<tr><td>${i}</td><td>${numTabla * i}</td></tr>\n`
  }

  TABLA.innerHTML = bodyTable
  TABLA.hidden = false
  return true
}

document.querySelector<HTMLButtonElement>('#buttonTabla')!.addEventListener('click', () => {
  tablaMulti();
});


//NÚMEROS FIBONACCI


const Fibonacci = (): boolean => {
  
  let inputLimitFibo = document.getElementById('limitFibo') as HTMLInputElement
  let PResult = document.getElementById('result02') as HTMLParagraphElement
  
  let limitFibo:number = parseInt(inputLimitFibo.value)
  let PNum: string = ``
  let fibonacciArray: number [] = [0,1,0]

  for (let i: number = 1; i<= limitFibo; i++){
    console.log(fibonacciArray[0] + " | " + fibonacciArray[1])
    PNum += ` ${fibonacciArray[0]+fibonacciArray[1]};`
    fibonacciArray[2] = fibonacciArray[1]
    fibonacciArray[1] = fibonacciArray[0]+fibonacciArray[1]
    fibonacciArray[0] = fibonacciArray[2]
  }
  PResult.innerText = PNum
  return true
}

document.querySelector<HTMLButtonElement>('#Fibo')!.addEventListener('click', () => {
  Fibonacci();
});


//COMVERTIDOR DE TEMPERATURA

const Temperatura = ():boolean => {
  let inputTemp = document.getElementById('temp01') as HTMLInputElement
  let select01 = document.getElementById('select01') as HTMLSelectElement
  let inputTemp2 = document.getElementById('temp02') as HTMLInputElement

  let temp: number = parseInt(inputTemp.value)

  switch(select01.value){
    case "F -> C":
      inputTemp2.value = ((temp - 32) * 5/9)+""
      break
    case "C -> F":
      inputTemp2.value = ((temp * 9/5) + 32)+""
      break
    default:
      alert("Seleccione una forma de convertir")
      return false
      break
  }

  return true
}

document.querySelector<HTMLButtonElement>('#buttonTemp')!.addEventListener('click', () => {
  Temperatura();
});

// CONTADOR DE PALABRAS

const ContadorPalabras = ():boolean => {
  let texto = document.getElementById('texto') as HTMLTextAreaElement
  let cant = document.getElementById('cant') as HTMLInputElement
  
  let palabras: string [] = texto.value.split(" ")

  cant.value = palabras.length+""
  return true
}

document.querySelector<HTMLButtonElement>('#ContPalabras')!.addEventListener('click', () => {
  ContadorPalabras();
});


export {}