import java.util.Random;
import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);
        Random aleatorio = new Random();
        int tentativas=0;
        int num=0;
        int NumRandom = aleatorio.nextInt(100);

        System.out.println(NumRandom);
        while (tentativas < 5) {
            System.out.print("Digite um número entre 0 e 100: ");
            num = teclado.nextInt();
            tentativas++;

            if (num == NumRandom) {
                System.out.println("Parabéns, você acertou o número em " + tentativas + " tentativas!");
                break;
            } else if (num > NumRandom) {
                System.out.println("O número digitado é menor que o número gerado.");
            } else {
                System.out.println("O número digitado é maior que o número gerado.");
            }
        }

        if (tentativas == 5 && num != NumRandom) {
            System.out.println("Você não conseguiu acertar o número em 05 tentativas. O número era: " + NumRandom);
        }
    }
}