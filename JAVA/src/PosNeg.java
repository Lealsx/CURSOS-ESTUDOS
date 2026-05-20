import java.util.Scanner;

public class PosNeg {
    public static void main(String[] args) {

        Scanner leitor = new Scanner(System.in);
        int num;

        System.out.println("Digite um número:");
        num = leitor.nextInt();

        if(num>0){
            System.out.println(" número positivo");
        }else{
            System.out.println("número negativo");
        }
    }
}
