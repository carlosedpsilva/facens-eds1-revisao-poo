import {Pato} from "./Pato";
import {PatoRuivo} from "./PatoRuivo";
import {VoarFoguete} from "./VoarFoguete";

let pt: Pato = new PatoRuivo(); // Tempo de compilação // Composição

console.log(pt.mostrar()); // Tempo de execução
console.log(pt.nadar()); // Tempo de execução
console.log(pt.voar()); // Tempo de execução

pt.comportamentoVoar = new VoarFoguete(); // Tempo de compilação // Delegação

console.log(pt.voar()); // Tempo de execução
