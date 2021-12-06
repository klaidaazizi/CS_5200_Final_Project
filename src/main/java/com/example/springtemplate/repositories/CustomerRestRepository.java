package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Customer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerRestRepository
        extends CrudRepository<Customer, Integer> {

    @Query(value = "SELECT * FROM users " +
            "WHERE users.user_type = 2",
            nativeQuery = true)
    List<Customer> findAllCustomers();

    @Query(value = "SELECT * FROM users\n" +
            "WHERE users.user_type = 2 AND users.id=:userId",
            nativeQuery = true)
    Customer findCustomerById(@Param("userId") Integer id);

}
