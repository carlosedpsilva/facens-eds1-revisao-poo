package engsoft.jogo.patos;

// Classe concreta
// Polimorfismo
public class Voaveis_Asa implements Padrao_Voaveis {

    private final double velocidade;

    public Voaveis_Asa() {
        velocidade = 10;
    }

    public String voar() {
        return "Voando como um p�ssaro que voa. Velocidade: " + getVelocidade();
    }

    public double getVelocidade() {
        return velocidade;
    }

}
