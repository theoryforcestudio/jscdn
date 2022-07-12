/*
 * To compile (you need a JDK from http://java.sun.com/):
 *   javac QuickBot.java
 * To run with a Sun VM:
 *   java QuickBot http://www.searchlores.org/
 * through an HTTP proxy:
 *   java -Dhttp.proxySet=true -Dhttp.proxyHost=my.proxy.com -Dhttp.proxyPort=8080 QuickBot http://www.searchlores.org/ 
 * or with a Microsoft VM (bundled with IE):
 *   jview QuickBot http://www.searchlores.org/
 */

import java.net.*;
import java.io.BufferedInputStream;

public class QuickBot {
	public static void main(String[] args) {
		try {
			URLConnection cnn = new URL(args[0]).openConnection();
			cnn.setDoOutput(false);
			cnn.setDoInput(true);

			cnn.connect();

			int i = 1;
			String headerFieldKey;
			while ((headerFieldKey = cnn.getHeaderFieldKey(i)) != null) {
				System.out.println(headerFieldKey+": "+cnn.getHeaderField(i));
				i++;
			}
			if (i > 1)
				System.out.println();

			BufferedInputStream in = new BufferedInputStream(cnn.getInputStream());
			int b;
			while ((b = in.read()) != -1)
				System.out.write(b);
		} catch (Throwable t) {
			t.printStackTrace();
		}
	}
}