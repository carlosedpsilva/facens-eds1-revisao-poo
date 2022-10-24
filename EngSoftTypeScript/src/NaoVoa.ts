import {PadraoVoaveis} from "./PadraoVoaveis";

export class NaoVoa implements PadraoVoaveis {

        public voar(): string {
            return "Esse pato não Voa. Velocidade: " + this.getVelocidade();
        }

        public getVelocidade(): number {
            return 0;
        }

}
