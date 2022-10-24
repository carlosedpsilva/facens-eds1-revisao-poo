import {Pato} from "./Pato";
import {NaoVoa} from "./NaoVoa";

export class PatoBorracha extends Pato {

    constructor() {
        super();
        this.comportamentoVoar = new NaoVoa();
    }
    public mostrar(): string {
        return "Olá, eu sou de Borracha.";
    }

}