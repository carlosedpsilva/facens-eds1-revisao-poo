import {Pato} from "./Pato";
import {PadraoGrasnar} from "./PadraoGrasnar";
import {VoaveisAsa} from "./VoaveisAsa";

export class PatoRuivo extends Pato implements PadraoGrasnar {

    constructor() {
        super();
        // Programação em tempo de execução
        this.comportamentoVoar = new VoaveisAsa();
    }

    // Polimorfismo
    public mostrar(): string {
        return "Eu sou o Pato Ruivo.";
    }

    // Polimorfismo
    public grasnar(): string {
        return "Que-Que.";

    }

}
