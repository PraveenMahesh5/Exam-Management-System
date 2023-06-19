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
@Table(name ="students_marks_entry")
public class Students {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private long exam_Code;
	private int student_Code;
	private int marks_Scored_In_Part_A, marks_Scored_In_Part_B, marks_Scored_In_Part_C;
	private int total_Marks_Scored, marks_Code;
	public Students(int i,int j, int k,int l, int m, int n, int o) {
		
		this.exam_Code = i;
		this.student_Code = j;
		this.marks_Scored_In_Part_A = k;
		this.marks_Scored_In_Part_B = l;
		this.marks_Scored_In_Part_C = m;
		this.total_Marks_Scored = n;
		this.marks_Code = o;
	}
	public Students() {
		
	}
	public long getExam_Code() {
		return exam_Code;
	}
	public int getStudent_Code() {
		return student_Code;
	}
	public int getMarks_Scored_In_Part_A() {
		return marks_Scored_In_Part_A;
	}
	public int getMarks_Scored_In_Part_B() {
		return marks_Scored_In_Part_B;
	}
	public int getMarks_Scored_In_Part_C() {
		return marks_Scored_In_Part_C;
	}
	public int getTotal_Marks_Scored() {
		return total_Marks_Scored;
	}
	public int getMarks_Code() {
		return marks_Code;
	}
	public void setExam_Code(long exam_Code) {
		this.exam_Code = exam_Code;
	}
	public void setStudent_Code(int student_Code) {
		this.student_Code = student_Code;
	}
	public void setMarks_Scored_In_Part_A(int marks_Scored_In_Part_A) {
		this.marks_Scored_In_Part_A = marks_Scored_In_Part_A;
	}
	public void setMarks_Scored_In_Part_B(int marks_Scored_In_Part_B) {
		this.marks_Scored_In_Part_B = marks_Scored_In_Part_B;
	}
	public void setMarks_Scored_In_Part_C(int marks_Scored_In_Part_C) {
		this.marks_Scored_In_Part_C = marks_Scored_In_Part_C;
	}
	public void setTotal_Marks_Scored(int total_Marks_Scored) {
		this.total_Marks_Scored = total_Marks_Scored;
	}
	public void setMarks_Code(int marks_Code) {
		this.marks_Code = marks_Code;
	}
	
	
	

}
