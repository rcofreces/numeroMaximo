let controlIngresado: boolean = false;
let númeroIngresado: number = Number(prompt("Ingrese un número"));
let númeroMáximo: number = númeroIngresado;

while (númeroIngresado !== 0) {
  controlIngresado = true;
  if (númeroIngresado > númeroMáximo) {
    númeroMáximo = númeroIngresado;
  }
  númeroIngresado = Number(prompt("Ingrese un número"));
}

if (controlIngresado) {
  console.log("El número máximo es: " + númeroMáximo);
}

let númeroMínimo: number = númeroIngresado;

while (númeroIngresado !== 0) {
  controlIngresado = true;
  if (númeroIngresado < númeroMínimo) {
    númeroMínimo = númeroIngresado;
  }
  númeroIngresado = Number(prompt("Ingrese un número"));
}

if (controlIngresado) {
  console.log("El número mínimo es: " + númeroMínimo);
}
