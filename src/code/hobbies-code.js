const hobbiesCode = `import java.util.List;

public class HobbiesPanel {
  enum Hobby {
    CODING("HackerRank", "Codewars", "LeetCode"),
    GAMING("League of Legends", "VALORANT", "Legends of Runeterra");

    private final List<String> favorites;

    Hobby(String... favorite) {
      this.favorites = List.of(favorite);
    }

    List<String> favorites() {
      return favorites;
    }
  }

  public static void main(String[] args) {
    for (Hobby hobby : Hobby.values()) {
      System.out.println(hobby + " -> " + String.join(", ", hobby.favorites()));
    }
  }
}
`
export default hobbiesCode;