package com.example.springtemplate.daos;

import com.example.springtemplate.models.Customer;
import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.CustomerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CustomerRestOrmDao {
    @Autowired
    CustomerRestRepository customerRepository;

    @GetMapping("/api/customers")
    public List<Customer> findAllSellers(){
        return customerRepository.findAllCustomers();
    }

    @GetMapping("/api/customers/{id}")
    public Customer findSellerById(
            @PathVariable("id") Integer id){
        return customerRepository.findCustomerById(id);
    }

    @DeleteMapping("/api/customers/{id}")
    public void deleteSeller(
            @PathVariable("id") Integer id) {
        customerRepository.deleteById(id);
    }

    @PostMapping("/api/customers")
    public User createUser(@RequestBody Customer customer) {
        return customerRepository.save(customer);
    }

    @PutMapping("/api/customers/{id}")
    public User updateSeller(
            @PathVariable("id") Integer id,
            @RequestBody Customer customerUpdates) {
        Customer customer = customerRepository.findCustomerById(id);
        customer.setFirstName(customerUpdates.getFirstName());
        customer.setLastName(customerUpdates.getLastName());
        customer.setUsername(customerUpdates.getUsername());
        customer.setPassword(customerUpdates.getPassword());
        customer.setEmail(customerUpdates.getEmail());
        customer.setDateOfBirth(customerUpdates.getDateOfBirth());
        customer.setStreetAddress(customerUpdates.getStreetAddress());
        customer.setCity(customerUpdates.getCity());
        customer.setState(customerUpdates.getState());
        customer.setZipCode(customerUpdates.getZipCode());
        customer.setPhoneNumber(customerUpdates.getPhoneNumber());
        customer.setAge(customerUpdates.getAge());
        customer.setProfilePicture(customerUpdates.getProfilePicture());
        return customerRepository.save(customer);
    }

}
