package com.doctor.appointments.entity;

//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.Table;
//import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "patient")
public class Patient {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int ID;

	@NotNull(message = "Name must not be null")
	private String name;

	@NotNull
	@Column(name = "age")
	private String age;

	@NotNull
	private String bloodgroup;

	@NotNull(message = "Password must not be null")
	private String password;

	@NotNull(message = "Email must not be null")
	private String email;

	@NotNull(message = "Phone number must not be null")
	@Column(name = "phone_number", columnDefinition = "VARCHAR(20) DEFAULT 'unknown'")
	private String phoneNumberString;

	@NotNull
	@Column(name = "address")
	private String address;

	public int getID() {
		return ID;
	}

	public void setID(int iD) {
		ID = iD;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhoneNumberString() {
		return phoneNumberString;
	}

	public void setPhoneNumberString(String phoneNumberString) {
		this.phoneNumberString = phoneNumberString;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getBloodgroup() {
		return bloodgroup;
	}

	public void setBloodgroup(String bloodgroup) {
		this.bloodgroup = bloodgroup;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "Patient [ID=" + ID + ", name=" + name + ", age=" + age + ", bloodgroup=" + bloodgroup + ", password="
				+ password + ", email=" + email + ", phoneNumberString=" + phoneNumberString + ", address=" + address
				+ "]";
	}

}
