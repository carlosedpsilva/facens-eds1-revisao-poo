package engsoft.jogo.patos;

// Classe abstrata
// Programar para supertipo
public abstract class Pato {

	// Programar para supertipo
	protected Padrao_Voaveis comportamento_pato;

	abstract String mostrar();

	// Este método sempre retorna a mesma coisa, logo, não é polimórfico
	public String nadar() {
		return "Pato Nadando.";
	}	
	
	public void setComportamento(Padrao_Voaveis padrao ) {
		comportamento_pato = padrao;
	}
	
	public String comportamento_pato() {
		return comportamento_pato.voar();
	}

}
