package com.EMSBE.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.EMSBE.model.User;

public interface UserRepository  extends JpaRepository<User, Long>{

}
