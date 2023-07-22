function triangulo() {
    var a, b, c, h, perimetro, area;
    a = parseInt(prompt("Ingresar El Valor De A"));
    b = parseInt(prompt("Ingresar El Valor De B"));
    c = parseInt(prompt("Ingresar El Valor De C"));
    h = parseInt(prompt("Ingresar El Valor De H"));
    // alert("El Valor De A Es: "+a)
    // alert("El Valor De B Es: "+b)
    // alert("El Valor De C Es: "+c)
    // alert("El Valor De H Es: "+h)
    perimetro = a + b + c;
    alert("El Perimetro De " + a + " + " + b + " + " + c + " = " + perimetro)
    area = (b * h) / 2;
    alert("El Area De (" + b + " * " + h + ") /2 = " + area)
}

function rectangulo() {
    var a, b, perimetro, area;
    a = parseInt(prompt("Ingresar El Valor De A"));
    b = parseInt(prompt("Ingresar El Valor De B"));
    // alert("El Valor De A Es: "+a)
    // alert("El Valor De B Es: "+b)
    perimetro = 2 * (b + a);
    alert("El Perimetro De 2* (" + b + " + " + a + ") = " + perimetro);
    area = b * a;
    alert("El Area De " + b + " * " + a + " = " + area);
}

function cuadrado() {
    var a, perimetro, area;
    a = parseInt(prompt("Ingresar El Valor De A"));
    //alert("El Valor De A Es:" = a)
    perimetro = 4 * a;
    alert("El Perimetro De Cuadrado Es = " + perimetro)
    area = Math.pow(a, 2);
    alert("El Area De Cuadrado Es = " + area)
}

function circulo() {
    var r, perimetro, area;
    r = parseInt(prompt("Ingresar El Valor De R"));
    perimetro = 2 * Math.PI * Math.pow(r, 2);
    alert("El Perimetro De Ciculo Es = " + perimetro)
    area = Math.PI * Math.pow(r, 2);
    alert("El Area De Circulo Es = " + area)
}