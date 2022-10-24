import {PadraoVoaveis} from "./PadraoVoaveis";

export class VoarFoguete implements PadraoVoaveis {

        private readonly velocidade: number;

        constructor() {
            this.velocidade = 1000;
        }

        voar(): string {
            return "Voando como um foguete. Velocidade: " + this.getVelocidade();
        }

        getVelocidade(): number {
            return this.velocidade;
        }

}
