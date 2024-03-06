const hobbiesCode = `package com.mindprod.example;

import javax.swing.JEditorPane;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JScrollPane;
import javax.swing.SwingUtilities;
import java.awt.Color;
import java.awt.Container;
import java.io.IOException;

import static java.lang.System.*;

/**
 *
 * @author Pantera
 */
@SuppressWarnings( { "UnusedDeclaration" } )
final class HTMLRendering
    {
    @SuppressWarnings( { "UnusedParameters" } )
    public static void main( String args[] )
        {
        SwingUtilities.invokeLater( new Runnable()
            {
            /**
             * } fire up a JFrame on the Swing thread
             */
            public void run()
                {
                out.println( "Starting" );
                final JFrame jframe =
                        new JFrame( TITLE_STRING + " " + VERSION_STRING );
                Container contentPane = jframe.getContentPane();
                jframe.setSize( width, height );
                contentPane.setBackground( Color.YELLOW );
                contentPane.setForeground( Color.BLUE );
                jframe.setDefaultCloseOperation( JFrame.EXIT_ON_CLOSE );
                try
                    {
                    out.println( "acquiring URL" );
                    JEditorPane jep = new JEditorPane( URL );
                    out.println( "URL acquired" );
                    JScrollPane jsp =
                            new JScrollPane( jep,
                                    JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED,
                                    JScrollPane.HORIZONTAL_SCROLLBAR_AS_NEEDED );
                    contentPane.add( jsp );
                    }
                catch ( IOException e )
                    {
                    err.println( "can't find URL" );
                    contentPane.add( new JLabel( "can't find URL" ) );
                    }
                jframe.validate();
                jframe.setVisible( true );
                // Shows page, with HTML comments erroneously displayed.
                // The links are not clickable.
                }
            } );
        } // end main
    } // end TestHTMLRendering`

    export default hobbiesCode