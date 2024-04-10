package com.crud.CRUD1.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.crud.CRUD1.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    // You can add custom queries here if needed
}