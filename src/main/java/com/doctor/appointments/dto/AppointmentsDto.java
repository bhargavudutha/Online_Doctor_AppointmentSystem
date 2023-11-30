package com.doctor.appointments.dto;

import java.time.LocalTime;

public class AppointmentsDto {

	private String patientName;

	private String doctorName;
	private int id;
	private String doctorSpecialization;
	private String date;
	private String time;
	private String endTime;
	private String gender;
	private String status;
	private String cancellationReason;
	public String getPatientName() {
		return patientName;
	}
	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}
	
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	public String getDoctorName() {
		return doctorName;
	}
	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}
	public String getDoctorSpecialization() {
		return doctorSpecialization;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setDoctorSpecialization(String doctorSpecialization) {
		this.doctorSpecialization = doctorSpecialization;
	}
	public String getDate() {
		return date;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String string) {
		this.time = string;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getCancellationReason() {
		return cancellationReason;
	}
	public void setCancellationReason(String cancellationReason) {
		this.cancellationReason = cancellationReason;
	}
	@Override
	public String toString() {
		return "AppointmentsDto [patientName=" + patientName + ", doctorName=" + doctorName + ", doctorSpecialization="
				+ doctorSpecialization + ", date=" + date + ", time=" + time + ", gender=" + gender + ", status="
				+ status + ", cancellationReason=" + cancellationReason + "]";
	}
	



}
