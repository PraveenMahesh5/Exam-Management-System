package com.EMSBE.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name ="admin")

public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private long trainer_Code;
	private String email_Address, password, confirm_Password;
	
	public Admin(int i, String string, String string2,String string3 ) {
		
		this.trainer_Code = i;
		this.email_Address = string;
		this.password = string2;
		this.confirm_Password = string3;
	}
	public Admin() {
	
	}
	public long getTrainer_Code() {
		return trainer_Code;
	}
	public String getEmail_Address() {
		return email_Address;
	}
	public String getPassword() {
		return password;
	}
	public String getConfirm_Password() {
		return confirm_Password;
	}
	public void setTrainer_Code(long trainer_Code) {
		this.trainer_Code = trainer_Code;
	}
	public void setEmail_Address(String email_Address) {
		this.email_Address = email_Address;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public void setConfirm_Password(String confirm_Password) {
		this.confirm_Password = confirm_Password;
	}
	
	
	
}