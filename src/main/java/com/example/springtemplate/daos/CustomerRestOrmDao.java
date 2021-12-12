package com.example.springtemplate.daos;

import com.example.springtemplate.models.Customer;
import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.CartRestRepository;
import com.example.springtemplate.repositories.CustomerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CustomerRestOrmDao {
    @Autowired
    CustomerRestRepository customerRepository;
    @Autowired
    CartRestRepository cartRepository;

    @GetMapping("/api/customers")
    public List<Customer> findAllCustomers(){
        return customerRepository.findAllCustomers();
    }

    @GetMapping("/api/customers/cartId/{id}")
    public Customer findCustomerById(
            @PathVariable("id") Integer id){
        Integer customerId = cartRepository.findCartById(id).getCustomer().getId();
        return customerRepository.findCustomerById(customerId);
    }

    @GetMapping("/api/customers/{id}")
    public Customer findCustomerByCartId(
            @PathVariable("id") Integer id){
        return customerRepository.findCustomerById(id);
    }

    @DeleteMapping("/api/customers/{id}")
    public void deleteCustomer(
            @PathVariable("id") Integer id) {
        customerRepository.deleteById(id);
    }

    @PostMapping("/api/customers")
    public User createCustomer(@RequestBody Customer customer) {
        return customerRepository.save(customer);
    }

    @PutMapping("/api/customers/{id}")
    public User updateCustomer(
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
