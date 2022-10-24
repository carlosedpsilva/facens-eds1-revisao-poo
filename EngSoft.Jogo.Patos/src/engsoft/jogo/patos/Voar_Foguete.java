package engsoft.jogo.patos;

// Classe concreta
// Polimorfismo
public class Voar_Foguete implements Padrao_Voaveis {

    private final double velocidade;

    public Voar_Foguete() {
        velocidade = 1000;
    }

    public String voar() {
        return "Voando como um foguete. Velocidade: " + getVelocidade();
    }

    public double getVelocidade() {
        return velocidade;
    }

}
