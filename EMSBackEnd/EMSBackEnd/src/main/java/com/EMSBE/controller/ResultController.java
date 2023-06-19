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


import com.EMSBE.model.Result;

import com.EMSBE.repository.ResultRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class ResultController {
	@Autowired
	 private ResultRepository ar;
	 @GetMapping("/results")
	 public Page<Result> getAllAdmins(Pageable pageable) {
		 return ar.findAll(pageable);
	 }
	 @DeleteMapping("/results/{student_Code}")
	 public ResponseEntity<Result> deleteadmin(@PathVariable("student_Code") long student_Code){
	  try {
		  System.out.println("inside");
		  ar.deleteById(student_Code);
		  return new ResponseEntity<Result>(HttpStatus.OK);
		  
	  }
	  catch (Exception e) {
		   // TODO: handle exception
		   return new ResponseEntity<Result>(HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	 }
	 @PostMapping("/results")
	 public ResponseEntity<Result> addBooks(@RequestBody Result rs) {
	  return new ResponseEntity<Result>(ar.save(rs), HttpStatus.OK);
	 }
	 @GetMapping("/result/results/{student_Code}")
	 public ResponseEntity<Result> getBookById(@PathVariable("student_Code") long student_Code) {
	 System.out.println("here");
	 return new ResponseEntity<Result>(ar.findById(student_Code).get(),HttpStatus.OK);

	 }
	 @PutMapping("/result/results/{student_Code}")
	 public ResponseEntity<Result> updateBook(@PathVariable("student_Code") long student_Code, @RequestBody Result r){
	 Result b = ar.findById(student_Code).get();
	 if(b.getStudent_Code()!=0) {
		 b.setClass_Code(r.getClass_Code());
		 b.setExam_Code(r.getExam_Code());
		 b.setTotal_Marks_Scored(r.getTotal_Marks_Scored());
		 b.setGrade(r.getGrade());
		 b.setRemarks(r.getRemarks());
	 }
	  
	 return new ResponseEntity<Result>(ar.save(b),HttpStatus.OK);
	 }
}
