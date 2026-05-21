import java.awt.print.Printable;
import java.util.Scanner;

public class escolhas {
    public static void main(String[] args) {

        int opcao;
        Scanner leitor = new Scanner(System.in);

        System.out.print("=====Menu de Opções=====\n");
        System.out.print("1. Calcular área do quadrado\n");
        System.out.print("2. Calcular área do circulo\n");
        System.out.print("Escolha uma opção: ");
        opcao = leitor.nextInt();

        switch (opcao) {
            case 1:{
                System.out.print("Digite o valor de um dos lados do quadrado: ");
                int lado=leitor.nextInt();

                double area = lado*lado;

                System.out.println("A área do seu quadrado: "+area);
                break;
            }
            case 2:{
                System.out.print("Digite o raio do circulo: ");
                int raio=leitor.nextInt();

                double area = 3.14 * (raio*raio);

                System.out.print("Esse é o seu raio/área do circulo: "+area);
            }
            default:{
                System.out.print("Numero invalido");
            }
        }
    }
}
