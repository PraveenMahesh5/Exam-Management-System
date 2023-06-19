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
@Table(name ="set_exam_information")
public class Exam {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private long question_Paper_Code;
	private int subject_Code, maximum_Score_For_Part_A,maximum_Score_For_Part_B,maximum_Score_For_Part_C;
	private String Subject_Name;
	private int number_Of_Question_in_Part_A, number_Of_Question_in_Part_B, number_Of_Question_in_Part_C;
	private int total_Score;
	public Exam(int i,int j, int k,int l, int m, int n, int o, int p,int r, String string) {
		
		this.question_Paper_Code = i;
		this.subject_Code = j;
		this.maximum_Score_For_Part_A = k;
		this.maximum_Score_For_Part_B = l;
		this.maximum_Score_For_Part_C = m;
		Subject_Name = string;
		this.number_Of_Question_in_Part_A = n;
		this.number_Of_Question_in_Part_B = o;
		this.number_Of_Question_in_Part_C = p;
		this.total_Score = r;
	}
	public Exam(){
		
	}
	public long getQuestion_Paper_Code() {
		return question_Paper_Code;
	}
	public int getSubject_Code() {
		return subject_Code;
	}
	public int getMaximum_Score_For_Part_A() {
		return maximum_Score_For_Part_A;
	}
	public int getMaximum_Score_For_Part_B() {
		return maximum_Score_For_Part_B;
	}
	public int getMaximum_Score_For_Part_C() {
		return maximum_Score_For_Part_C;
	}
	public String getSubject_Name() {
		return Subject_Name;
	}
	public int getNumber_Of_Question_in_Part_A() {
		return number_Of_Question_in_Part_A;
	}
	public int getNumber_Of_Question_in_Part_B() {
		return number_Of_Question_in_Part_B;
	}
	public int getNumber_Of_Question_in_Part_C() {
		return number_Of_Question_in_Part_C;
	}
	public int getTotal_Score() {
		return total_Score;
	}
	public void setQuestion_Paper_Code(long question_Paper_Code) {
		this.question_Paper_Code = question_Paper_Code;
	}
	public void setSubject_Code(int subject_Code) {
		this.subject_Code = subject_Code;
	}
	public void setMaximum_Score_For_Part_A(int maximum_Score_For_Part_A) {
		this.maximum_Score_For_Part_A = maximum_Score_For_Part_A;
	}
	public void setMaximum_Score_For_Part_B(int maximum_Score_For_Part_B) {
		this.maximum_Score_For_Part_B = maximum_Score_For_Part_B;
	}
	public void setMaximum_Score_For_Part_C(int maximum_Score_For_Part_C) {
		this.maximum_Score_For_Part_C = maximum_Score_For_Part_C;
	}
	public void setSubject_Name(String subject_Name) {
		Subject_Name = subject_Name;
	}
	public void setNumber_Of_Question_in_Part_A(int number_Of_Question_in_Part_A) {
		this.number_Of_Question_in_Part_A = number_Of_Question_in_Part_A;
	}
	public void setNumber_Of_Question_in_Part_B(int number_Of_Question_in_Part_B) {
		this.number_Of_Question_in_Part_B = number_Of_Question_in_Part_B;
	}
	public void setNumber_Of_Question_in_Part_C(int number_Of_Question_in_Part_C) {
		this.number_Of_Question_in_Part_C = number_Of_Question_in_Part_C;
	}
	public void setTotal_Score(int total_Score) {
		this.total_Score = total_Score;
	}
	
	

}
