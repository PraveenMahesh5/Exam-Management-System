package com.EMSBE.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.EMSBE.model.Admin;
import com.EMSBE.repository.AdminRepository;



@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class AdminController {
	@Autowired
	 private AdminRepository ar;
	 @GetMapping("/admins")
	 public Page<Admin> getAllAdmins(Pageable pageable) {
		 return ar.findAll(pageable);
	 }
	 @DeleteMapping("/admins/{trainer_Code}")
	 public ResponseEntity<Admin> deleteadmin(@PathVariable("trainer_Code") long trainer_Code){
	  try {
		  System.out.println("inside");
		  ar.deleteById(trainer_Code);
		  return new ResponseEntity<Admin>(HttpStatus.OK);
		  
	  }
	  catch (Exception e) {
		   // TODO: handle exception
		   return new ResponseEntity<Admin>(HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	 }
	 @PostMapping("/admins")
	 public ResponseEntity<Admin> addBooks(@RequestBody Admin admin) {
	  return new ResponseEntity<Admin>(ar.save(admin), HttpStatus.OK);
	 }
	 @GetMapping("/admin/admins/{trainer_Code}")
	 public ResponseEntity<Admin> getBookById(@PathVariable("trainer_Code") long trainer_Code) {
	 System.out.println("here");
	 return new ResponseEntity<Admin>(ar.findById(trainer_Code).get(),HttpStatus.OK);

	 }
	 @PutMapping("/admin/admins/{trainer_Code}")
	 public ResponseEntity<Admin> updateBook(@PathVariable("trainer_Code") long trainer_Code, @RequestBody Admin a){
	 Admin b = ar.findById(trainer_Code).get();
	 if(b.getTrainer_Code()!=0) {
		 b.setEmail_Address(a.getEmail_Address());
		 b.setPassword(a.getPassword());
		 b.setConfirm_Password(a.getConfirm_Password());
	 }
	 return new ResponseEntity<Admin>(ar.save(b),HttpStatus.OK);
	 
	 } 
	 

	

}
