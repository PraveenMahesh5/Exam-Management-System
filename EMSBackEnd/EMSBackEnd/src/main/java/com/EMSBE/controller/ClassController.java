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


import com.EMSBE.repository.ClassRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class ClassController {
	@Autowired
	 private ClassRepository ar;
	 @GetMapping("/classes")
	 public Page<com.EMSBE.model.Class> getAllAdmins(Pageable pageable) {
		 return ar.findAll(pageable);
	 }
	 @DeleteMapping("/classes/{Exam_Code}")
	 public ResponseEntity<com.EMSBE.model.Class> deleteadmin(@PathVariable("Exam_Code") long Exam_Code){
	  try {
		  System.out.println("inside");
		  ar.deleteById(Exam_Code);
		  return new ResponseEntity<com.EMSBE.model.Class>(HttpStatus.OK);
		  
	  }
	  catch (Exception e) {
		   // TODO: handle exception
		   return new ResponseEntity<com.EMSBE.model.Class>(HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	 }
	 @PostMapping("/classes")
	 public ResponseEntity<com.EMSBE.model.Class> addBooks(@RequestBody com.EMSBE.model.Class cl) {
	  return new ResponseEntity<com.EMSBE.model.Class>(ar.save(cl), HttpStatus.OK);
	 }
	 @GetMapping("/class/classes/{Exam_Code}")
	 public ResponseEntity<com.EMSBE.model.Class> getBookById(@PathVariable("Exam_Code") long Exam_Code) {
	 System.out.println("here");
	 return new ResponseEntity<com.EMSBE.model.Class>(ar.findById(Exam_Code).get(),HttpStatus.OK);

	 }
	 @PutMapping("/class/classes/{Exam_Code}")
	 public ResponseEntity<com.EMSBE.model.Class> updateBook(@PathVariable("Exam_Code") long Exam_Code, @RequestBody com.EMSBE.model.Class cls){
		 com.EMSBE.model.Class b = ar.findById(Exam_Code).get();
		 if (b.getExam_Code()!=0) {
			 b.setClass_Code(cls.getClass_Code());
		 }
		 return new ResponseEntity<com.EMSBE.model.Class>(ar.save(b),HttpStatus.OK);
	 }
}
