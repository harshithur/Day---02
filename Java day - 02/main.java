import java.util.Scanner;

public class main {
 public static void main(String[] args) {
      
      Scanner sc = new Scanner(System.in);
      int num = sc.nextInt();
      int original = num;
      int sum = 0 ;

      while(num != 0) {
        int digit = num % 10;
        sum = sum * 10  + digit;
        num = num / 10;

      }
      if (sum == original) {
        System.out.println(sum +" Its an prime number ");
      }  else {
        System.out.println(sum +" Its not prime number ");
      }
 }


}