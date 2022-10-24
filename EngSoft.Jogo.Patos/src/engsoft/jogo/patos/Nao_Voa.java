package engsoft.jogo.patos;

// Classe concreta
// Polimorfismo
public class Nao_Voa implements Padrao_Voaveis {


    public Nao_Voa() { }

    public String voar() {
        return "Esse pato não Voa. Velocidade: " + getVelocidade();
    }

    public double getVelocidade() {
        return 0;
    }

}
