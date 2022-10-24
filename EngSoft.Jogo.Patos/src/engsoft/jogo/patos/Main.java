package engsoft.jogo.patos;

public class Main {

    public static void main(String[] args) {
        Pato pt = new Pato_Ruivo(); // Tempo de compilação // Composição

        System.out.println(pt.mostrar()); // Tempo de execução
        System.out.println(pt.nadar()); // Tempo de execução
        System.out.println(pt.comportamento_pato()); // Tempo de execução

        pt.setComportamento(new Voar_Foguete()); // Tempo de compilação // Delegação

        System.out.println(pt.comportamento_pato()); // Tempo de execução
    }

}
