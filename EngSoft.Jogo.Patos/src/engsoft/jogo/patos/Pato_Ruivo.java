package engsoft.jogo.patos;

// Concreta
// Herança
// Polimorfismo
public class Pato_Ruivo extends Pato implements Padrao_Grasnar {

    public Pato_Ruivo() {
        // Programação em tempo de execução
        setComportamento(new Voaveis_Asa());
    }

    // Polimorfismo
    public String mostrar() {
        return "Eu sou o Pato Ruivo.";
    }

    // Polimorfismo
    public String grasnar() {
        return "Que-Que.";

    }

}
