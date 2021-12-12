package com.example.springtemplate.daos;

import com.example.springtemplate.models.Cart;
import com.example.springtemplate.repositories.CartRestRepository;
import com.example.springtemplate.repositories.CustomerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CartRestDao {
    @Autowired
    CartRestRepository cartRepository;
    @Autowired
    CustomerRestRepository customerRepository;

    @GetMapping("/api/carts")
    public List<Cart> findAllCarts(){
        return cartRepository.findAllCarts();
    }

    @GetMapping("/api/carts/customerId/{id}")
    public List<Cart> findCartsByCustomer(
                    @PathVariable("id") Integer id){
        return customerRepository.findCustomerById(id).getCarts();
    }

    @GetMapping("/api/carts/{id}")
    public Cart findSellerById(
            @PathVariable("id") Integer id){
        return cartRepository.findCartById(id);
    }

    @DeleteMapping("/api/carts/{id}")
    public void deleteSeller(
            @PathVariable("id") Integer id) {
        cartRepository.deleteById(id);
    }

    @PostMapping("/api/carts")
    public Cart createUser(@RequestBody Cart cart) {
        return cartRepository.save(cart);
    }

    @PutMapping("/api/carts/{id}")
    public Cart updateSeller(
            @PathVariable("id") Integer id,
            @RequestBody Cart cartUpdates) {
        Cart cart = cartRepository.findCartById(id);
        cart.setId(cartUpdates.getId());
        cart.setCreatedDate(cartUpdates.getCreatedDate());
        cart.setOrders(cartUpdates.getOrders());
        cart.setPayment(cartUpdates.getPayment());
        cart.setCustomer(cartUpdates.getCustomer());
        return cartRepository.save(cart);
    }

}

