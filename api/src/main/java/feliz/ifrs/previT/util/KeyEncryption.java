package feliz.ifrs.previT.util;

import javax.crypto.*;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;
import java.util.Base64;

public class KeyEncryption {
    private static final String password = "apiWeather123";
    static String IV = "AAAAAAAAAAAAAAAA";

    public static String decrypt(String encryptedString){
        try{
            Cipher decripta = Cipher.getInstance("AES/CBC/PKCS5Padding");

            byte[] keyBytes = new byte[16];
            byte[] passwordBytes = password.getBytes("UTF-8");
            System.arraycopy(passwordBytes, 0, keyBytes, 0, Math.min(passwordBytes.length, keyBytes.length));
            SecretKeySpec key = new SecretKeySpec(keyBytes, "AES");

            decripta.init(Cipher.DECRYPT_MODE, key,new IvParameterSpec(IV.getBytes("UTF-8")));
            byte[] decryptedBytes = decripta.doFinal(Base64.getDecoder().decode(encryptedString));
            String decryptedString = new String(decryptedBytes, "UTF-8");
            return decryptedString;
        } catch (Exception e){
            return null;
        }
    }
}
