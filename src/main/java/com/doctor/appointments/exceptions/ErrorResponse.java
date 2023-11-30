package com.doctor.appointments.exceptions;

import java.util.HashMap;
import java.util.Map;

public class ErrorResponse {

	private Map<String, String> errorMaps = new HashMap<>();
	public Map<String, String> getErrorMaps() {
		return errorMaps;
		}

	public void seterrorMaps(Map<String, String> errorMap) {
		this.errorMaps = errorMap;
	}

}
