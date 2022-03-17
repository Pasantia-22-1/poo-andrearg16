class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;

    }
    set marca(marca) {
        this._marca = marca;
    }

}


class Teclado extends DispositivoEntrada {
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    get idTeclado() {
        return this._idTeclado;
    }
    toString() {
        `Teclado: [idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
    }
}
let raton1 = new Raton('USB', 'HP');
console.log(raton1.toString());
let rato2 = new Raton('Bluetooh', 'Dell');
rato2.marca = 'HP';
console.log(rato2.toString());

let teclado1 = new Teclado('USB', 'HP');
console.log(teclado1.toString());
let teclado2 = new Teclado('Bluetooh', 'Dell');
teclado1.marca = 'HP';
console.log(teclado1.toString());