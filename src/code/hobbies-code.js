const hobbiesCode = `package com.pantera.portfolio;

import javax.swing.JPanel;
import javax.swing.JLabel;
import javax.swing.JTextArea;
import javax.swing.SwingUtilities;
import static java.lang.System.out;

public final class HobbiesPanel extends JPanel {
    public HobbiesPanel() {
        setLayout(new BoxLayout(this, BoxLayout.Y_AXIS));

        JLabel title = new JLabel("Hobbies");
        add(title);

        JPanel games = new JPanel();
        games.add(new JLabel("Games"));
        JTextArea gamesText = new JTextArea(
            "In addition to coding, I enjoy gaming, particularly titles " +
            "from Riot Games, like League of Legends, Valorant, and Legends " +
            "of Runeterra. However, I haven't gotten into mobile games yet.");
        games.add(gamesText);

        add(games);

        JPanel code = new JPanel();
        code.add(new JLabel("Code"));
        JTextArea codeText = new JTextArea(
            "My passion for coding lies in the constant opportunity to " +
            "explore new challenges. In my free time, I actively engage in " +
            "online coding platforms like HackerRank, Codewars, and LeetCode " +
            "to tackle diverse problems and hone my programming abilities.");
        code.add(codeText);

        add(code);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            out.println("rendering hobbies page");
            new HobbiesPage().setVisible(true);
        });
    }
}`
export default hobbiesCode;