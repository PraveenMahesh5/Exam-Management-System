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
@Table(name ="process_result")
public class Result {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private long student_Code;
	private int class_Code, exam_Code, total_Marks_Scored;
	private String grade, remarks;
	public Result(int i,int j, int k,int l, String string, String string1) {
		
		this.student_Code = i;
		this.class_Code = j;
		this.exam_Code = k;
		this.total_Marks_Scored = l;
		this.grade = string;
		this.remarks = string1;
	}
	public Result() {
		
	}
	public long getStudent_Code() {
		return student_Code;
	}
	public int getClass_Code() {
		return class_Code;
	}
	public int getExam_Code() {
		return exam_Code;
	}
	public int getTotal_Marks_Scored() {
		return total_Marks_Scored;
	}
	public String getGrade() {
		return grade;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setStudent_Code(long student_Code) {
		this.student_Code = student_Code;
	}
	public void setClass_Code(int class_Code) {
		this.class_Code = class_Code;
	}
	public void setExam_Code(int exam_Code) {
		this.exam_Code = exam_Code;
	}
	public void setTotal_Marks_Scored(int total_Marks_Scored) {
		this.total_Marks_Scored = total_Marks_Scored;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	
	
	

}
