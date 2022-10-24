import {PadraoVoaveis} from "./PadraoVoaveis";

export class VoaveisAsa implements PadraoVoaveis {

    private readonly velocidade: number;

    constructor() {
        this.velocidade = 10;
    }

    public voar(): string {
        return "Voando como um pássaro que voa. Velocidade: " + this.getVelocidade();
    }

    public getVelocidade(): number {
        return this.velocidade;
    }

}