public class number_of_Vowel {
    public static void main(String[] args) {
        String name = "Hello world";

        int count = 0;
        String lc = name.toLowerCase();

        for (int i = 0; i <= lc.length()-1; i++) {
           char ch = lc.charAt(i);

           if (ch == 'a'|| ch == 'e'|| ch == 'i'|| ch == 'o'|| ch == 'u') {
                count++;
           }
        }
        System.out.print(count);
    }
}