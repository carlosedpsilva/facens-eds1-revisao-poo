import {Pato} from "./Pato";
import {PadraoGrasnar} from "./PadraoGrasnar";
import {VoaveisAsa} from "./VoaveisAsa";

export class PatoBravo extends Pato implements PadraoGrasnar {

    constructor() {
        super();
        this.comportamentoVoar = new VoaveisAsa();
    }

    public mostrar(): string {
        return "Eu sou o Pato Bravo.";
    }

    public grasnar(): string {
        return "Que-Que. Grrrrrrrrr.";
    }

}