package com.doctor.appointments.exceptions;

public class ErrorDetails {

	private String messageString;
	private int statusCode;

	public String getMessage() {
		return messageString;
	}

	public void setMessage(String message) {
		this.messageString = message;
	}
	 public int getStatusCode() {
		 return statusCode;
	 }
	 public void setStatusCode(int status) {
		 this.statusCode = status;
	 }

	 public ErrorDetails() {
		 super();
	 }
}
