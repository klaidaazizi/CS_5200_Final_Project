package com.example.springtemplate.daos;

import com.example.springtemplate.models.Customer;
import com.example.springtemplate.models.Follow;
import com.example.springtemplate.models.Seller;
import com.example.springtemplate.repositories.CustomerRestRepository;
import com.example.springtemplate.repositories.FollowRestRepository;
import com.example.springtemplate.repositories.SellerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class FollowDao {
    @Autowired
    FollowRestRepository followRepository;
    @Autowired
    CustomerRestRepository customerRepository;
    @Autowired
    SellerRestRepository sellerRepository;

    @GetMapping("/api/follows")
    public List<Follow> findAllFollows(){
        return followRepository.findAllFollows();
    }

    @GetMapping("/api/follows/byCustomer/{id}")
    public List<Follow> findFollowsByCustomer(
            @PathVariable("id") Integer id) {
        Customer customer = customerRepository.findCustomerById(id);
        return customer.getFollows();
    }

    @GetMapping("/api/follows/bySeller/{id}")
    public List<Follow> findFollowsBySeller(
            @PathVariable("id") Integer id) {
        Seller seller = sellerRepository.findSellerById(id);
        return seller.getFollows();
    }

    @DeleteMapping("/api/follows/{id}")
    public void deleteProduct(
            @PathVariable("id") Integer id) {
        followRepository.deleteById(id);
    }

    @PostMapping("/api/follows/newFollow/{sellerId}/{customerId}")
    public Follow createFollow(@PathVariable("sellerId") Integer sellerId,
                             @PathVariable("customerId") Integer customerId){
        Follow follow = new Follow();
        Customer customer = customerRepository.findCustomerById(customerId);
        Seller seller = sellerRepository.findSellerById(sellerId);
        Date date = new Date();
        follow.setCustomer(customer);
        follow.setSeller(seller);
        follow.setDateCreated(date);
        followRepository.save(follow);
        return follow;
    }

}
