package com.doctor.appointments.service.Implementations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.doctor.appointments.exceptions.ValidationExceptionHandler;

@Service
public class EmailService {
	

	@Autowired
	private JavaMailSender javaMailSender;

	@Value("${spring.mail.username}")
	private String sender;

	public String sendEmail(String email, String message) throws ValidationExceptionHandler {
		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setFrom(sender);
		System.out.println(sender);
		mailMessage.setTo(email);
		System.out.println(email);
		mailMessage.setText(message);
		mailMessage.setSubject("Appointment Details");
		javaMailSender.send(mailMessage);
		System.out.println("Mail sent successfully");
		return "email sent successfully";
	}


}
