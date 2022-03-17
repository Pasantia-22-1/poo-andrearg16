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

class Monitor extends DispositivoEntrada {
    static contadorMonitor = 0;
    constructor(marca, tamanio) {
        super(marca);
        this._tamanio = tamanio;
        this._idMonitor = ++Monitor.contadorMonitor;
    }
    get idMonitor() {
        return this._idMonitor;
    }
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    get tamanio() {
        return this._tamanio;
    }
    set tamanio(tamanio) {
        this._tamanio = tamanio;
    }
    toString() {
        `Monitor: [idMonitor: ${this._idMonitor},
         marca: ${this._marca}, tamanio: ${this._tamanio}]`;
    }
}


let monitor1 = new Monitor('HP', '2');
console.log(monitor1.toString());
let monitor2 = new Monitor('Bluetooh', '3');
console.log(monitor2.toString());