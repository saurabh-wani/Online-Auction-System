package com.example.demo.entities;

import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.util.Arrays;
import java.util.Base64;
import java.util.Random;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.xml.stream.events.Characters;

public class PassBasedEnc 

{
	private static final Random random =new SecureRandom();
	private static final String character="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	private static final int iterations=10000;
	private static final int keylength=256;
	
	public static String getSaltvalue(int length)
	{
		StringBuilder finalval=new StringBuilder(length);
		
		for(int i=0;i<length;i++)
		{
			finalval.append(character.charAt(random.nextInt(character.length())));
			
		}
		System.out.println("salt:"+finalval);
		return new String(finalval);
	}
	
	public static byte[] hash(char[] password,byte[] salt)
	{
		PBEKeySpec spec=new PBEKeySpec(password,salt,iterations,keylength);
		Arrays.fill(password, Character.MIN_VALUE );
		try {
			SecretKeyFactory skf=SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
			return skf.generateSecret(spec).getEncoded();
			
		}
		catch(NoSuchAlgorithmException | InvalidKeySpecException e)
		{
			throw new AssertionError("error while hashing a password :"+e.getMessage(),e);
		}
		finally
		{
			spec.clearPassword();
		}
		
	}
	
	public static String generateSecurePassword(String password ,String salt)
	{
		System.out.println("in generate secure password");
		String finalval=null;
		byte[] securePassword=hash(password.toCharArray(),salt.getBytes());
		finalval=Base64.getEncoder().encodeToString(securePassword);
		System.out.println(finalval);
		return finalval;
	}
	
	public static boolean verifyUserPassword(String providedPassword,String securedPassword,String salt)
	{
		boolean finalval=false;
		String newSecurePassword=generateSecurePassword(providedPassword,salt);
		finalval=newSecurePassword.equalsIgnoreCase(securedPassword);
		return finalval;
	}

}
