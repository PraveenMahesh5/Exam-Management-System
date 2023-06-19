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


import com.EMSBE.model.User;
import com.EMSBE.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class UserController {
	@Autowired
	 private UserRepository ar;
	 @GetMapping("/users")
	 public Page<User> getAllAdmins(Pageable pageable) {
		 return ar.findAll(pageable);
	 }
	 @DeleteMapping("/users/{student_Code}")
	 public ResponseEntity<User> deleteadmin(@PathVariable("student_Code") long student_Code){
	  try {
		  System.out.println("inside");
		  ar.deleteById(student_Code);
		  return new ResponseEntity<User>(HttpStatus.OK);
		  
	  }
	  catch (Exception e) {
		   // TODO: handle exception
		   return new ResponseEntity<User>(HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	 }
	 @PostMapping("/users")
	 public ResponseEntity<User> addBooks(@RequestBody User user) {
	  return new ResponseEntity<User>(ar.save(user), HttpStatus.OK);
	 }
	 @GetMapping("/user/users/{student_Code}")
	 public ResponseEntity<User> getBookById(@PathVariable("student_Code") long student_Code) {
	 System.out.println("here");
	 return new ResponseEntity<User>(ar.findById(student_Code).get(),HttpStatus.OK);

	 }
	 @PutMapping("/user/users/{student_Code}")
	 public ResponseEntity<User> updateBook(@PathVariable("student_Code") long student_Code, @RequestBody User u){
	 User b = ar.findById(student_Code).get();
	 if(b.getStudent_Code()!=0) {
		 b.setEmail_Address(u.getEmail_Address());
		 b.setPassword(u.getPassword());
		 b.setConfirm_Password(u.getConfirm_Password());
	 }
	 return new ResponseEntity<User>(ar.save(b),HttpStatus.OK);
	 
	 } 
	
	

}
