package com.example.springtemplate.daos;

import com.example.springtemplate.repositories.CustomerRestRepository;
import com.example.springtemplate.repositories.FollowRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class FollowCustomerDao {
    @Autowired
    FollowRestRepository followRepository;
    @Autowired
    CustomerRestRepository customerRepository;

}
