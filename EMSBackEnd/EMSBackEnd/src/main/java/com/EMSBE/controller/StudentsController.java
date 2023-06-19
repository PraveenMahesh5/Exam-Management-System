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


import com.EMSBE.model.Students;

import com.EMSBE.repository.StudentsRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class StudentsController {
	@Autowired
	 private StudentsRepository ar;
	 @GetMapping("/studentss")
	 public Page<Students> getAllAdmins(Pageable pageable) {
		 return ar.findAll(pageable);
	 }
	 @DeleteMapping("/students/{exam_Code}")
	 public ResponseEntity<Students> deleteadmin(@PathVariable("exam_Code") long exam_Code){
	  try {
		  System.out.println("inside");
		  ar.deleteById(exam_Code);
		  return new ResponseEntity<Students>(HttpStatus.OK);
		  
	  }
	  catch (Exception e) {
		   // TODO: handle exception
		   return new ResponseEntity<Students>(HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	 }
	 @PostMapping("/studentss")
	 public ResponseEntity<Students> addBooks(@RequestBody Students st) {
	  return new ResponseEntity<Students>(ar.save(st), HttpStatus.OK);
	 }
	 @GetMapping("/student/studentss/{exam_Code}")
	 public ResponseEntity<Students> getBookById(@PathVariable("exam_Code") long exam_Code) {
	 System.out.println("here");
	 return new ResponseEntity<Students>(ar.findById(exam_Code).get(),HttpStatus.OK);

	 }
	 @PutMapping("/student/studentss/{exam_Code}")
	 public ResponseEntity<Students> updateBook(@PathVariable("exam_Code") long exam_Code, @RequestBody Students s){
	 Students b = ar.findById(exam_Code).get();
	 if(b.getExam_Code()!=0)
	 {
		 b.setStudent_Code(s.getStudent_Code());
		 b.setMarks_Scored_In_Part_A(s.getMarks_Scored_In_Part_A());
		 b.setMarks_Scored_In_Part_B(s.getMarks_Scored_In_Part_B());
		 b.setMarks_Scored_In_Part_C(s.getMarks_Scored_In_Part_C());
		 b.setTotal_Marks_Scored(s.getTotal_Marks_Scored());
		 b.setTotal_Marks_Scored(s.getMarks_Code());
	 }
	 return new ResponseEntity<Students>(ar.save(b),HttpStatus.OK);
}
}
