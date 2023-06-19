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
@Table(name ="class_exam_tag")
public class Class {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private long Exam_Code;
	private int Class_Code;
	public Class(int i, int j) {
		
		Exam_Code = i;
		Class_Code = j;
	}
	public Class() {
		
	}
	public long getExam_Code() {
		return Exam_Code;
	}
	public int getClass_Code() {
		return Class_Code;
	}
	public void setExam_Code(long exam_Code) {
		Exam_Code = exam_Code;
	}
	public void setClass_Code(int class_Code) {
		Class_Code = class_Code;
	}
	
	

}
