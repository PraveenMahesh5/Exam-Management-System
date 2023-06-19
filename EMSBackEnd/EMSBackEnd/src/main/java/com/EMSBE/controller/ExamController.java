package com.EMSBE.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;


import com.EMSBE.model.Exam;

import com.EMSBE.repository.ExamRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class ExamController {
	@Autowired
	 private ExamRepository ar;
	 @GetMapping("/exams")
	 public Page<Exam> getAllAdmins(Pageable pageable) {
		 return ar.findAll(pageable);
	 }
	 @DeleteMapping("/exams/{question_Paper_Code}")
	 public ResponseEntity<Exam> deleteadmin(@PathVariable("question_Paper_Code") long question_Paper_Code){
	  try {
		  System.out.println("inside");
		  ar.deleteById(question_Paper_Code);
		  return new ResponseEntity<Exam>(HttpStatus.OK);
		  
	  }
	  catch (Exception e) {
		   // TODO: handle exception
		   return new ResponseEntity<Exam>(HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	 }
	 @PostMapping("/exams")
	 public ResponseEntity<Exam> addBooks(@RequestBody Exam exam) {
	  return new ResponseEntity<Exam>(ar.save(exam), HttpStatus.OK);
	 }
	 @GetMapping("/exam/exams/{question_Paper_Code}")
	 public ResponseEntity<Exam> getBookById(@PathVariable("question_Paper_Code") long question_Paper_Code) {
	 System.out.println("here");
	 return new ResponseEntity<Exam>(ar.findById(question_Paper_Code).get(),HttpStatus.OK);

	 }
	 @PutMapping("/exam/exams/{question_Paper_Code}")
	 public ResponseEntity<Exam> updateBook(@PathVariable("question_Paper_Code") long question_Paper_Code, @RequestBody Exam e){
	 Exam b = ar.findById(question_Paper_Code).get();
	 if (b.getQuestion_Paper_Code()!=0) {
		 b.setSubject_Code(e.getSubject_Code());
		 b.setSubject_Name(e.getSubject_Name());
		 b.setMaximum_Score_For_Part_A(e.getMaximum_Score_For_Part_A());
		 b.setMaximum_Score_For_Part_B(e.getMaximum_Score_For_Part_B());
		 b.setMaximum_Score_For_Part_C(e.getMaximum_Score_For_Part_C());
		 b.setNumber_Of_Question_in_Part_A(e.getNumber_Of_Question_in_Part_A());
		 b.setNumber_Of_Question_in_Part_B(e.getNumber_Of_Question_in_Part_B());
		 b.setNumber_Of_Question_in_Part_C(e.getNumber_Of_Question_in_Part_C());
		 b.setTotal_Score(e.getTotal_Score());
		 
	 }
	 return new ResponseEntity<Exam>(ar.save(b),HttpStatus.OK);

}
}
