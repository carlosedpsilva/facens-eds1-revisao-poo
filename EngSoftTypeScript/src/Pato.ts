import {PadraoVoaveis} from "./Padro_Voaveis";

export abstract class Pato {

    protected _comportamentoVoar!: PadraoVoaveis;

    abstract mostrar(): string;

    public nadar(): string {
        return "Pato Nadando.";
    }

    set comportamentoVoar(value: PadraoVoaveis) {
        this._comportamentoVoar = value;
    }

    public voar(): string {
        return this._comportamentoVoar.voar();
    }

}
