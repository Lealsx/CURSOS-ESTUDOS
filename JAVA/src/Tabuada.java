import java.util.Scanner;

public class Tabuada {
    public static void main(String[] args) {
        int tabuada;
        Scanner leitor = new Scanner(System.in);
        System.out.print("Digite qual será o número que voce quer da tabuada do 1 ao 10: ");
        tabuada = leitor.nextInt();
        for (int i = 1; i <= 10; i++) {
            int conta = tabuada * i;
            System.out.println(i + " - " + conta);
        }
    }
}
