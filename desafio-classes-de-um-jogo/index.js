//Criando classe Heroi:
class Heroi {
    //Declarando as propriedades(parametros):
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    //Criando metodo atacar:
    atacar(){
        //ataque seguindo descricao conforme o tipo:
        let ataque;
        switch (this.tipo){
            case 'mago':
                ataque = "magia!";
                break;
            case 'guerreiro':
                ataque = "espada!";
                break;
            case 'monge':
                ataque = "artes marciais!";
                break;
            case 'ninja':
                ataque = "shuriken!";
                break;
            default:
                ataque = "Usou um ataque desconhecido!";
        }

        //Exibindo a mensagem: 
            //tipo sendo concatenado com o tipo da classe;
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    };
}

//Instanciando a classe:
let heroi1 = new Heroi("Felipao", 150, "mago" );
let heroi2 = new Heroi("Fernando", 43, "guerreiro" );
let heroi3 = new Heroi("DIO", 10, "monge" );
let heroi4 = new Heroi("Programador", 25, "ninja" );

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();