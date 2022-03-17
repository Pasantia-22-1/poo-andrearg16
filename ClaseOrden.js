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

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton() {
        return this._idRaton;
    }
    toString() {
        return `Raton: [idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`;
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

class Computador {
    static contadorComputador = 0;
    constructor(nombre, monitor, teclado, raton){

        this.idComputador = ++Computador.contadorComputador;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    get idComputador(){
        return this._idComputador;
    }
    get nombre(){
        return this._nombre;
    }

    toString(){
        return  `Computador: [idComputador: ${this._idComputadorr}, nombre ${this.nombre}, idMonitor: ${this._idMonitor},
            idTeclado: ${this._idTeclado}, idRaton: ${this._idRaton}]`;
    }


}