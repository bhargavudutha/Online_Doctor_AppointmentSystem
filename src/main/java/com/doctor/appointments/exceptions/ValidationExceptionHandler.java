package com.doctor.appointments.exceptions;

public class ValidationExceptionHandler extends Throwable {

	/**
	 *
	 */
	private static final long serialVersionUID = 1L;
	private String message;

	@Override
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public ValidationExceptionHandler(String message) {
		super();
		this.message = message;
	}
}