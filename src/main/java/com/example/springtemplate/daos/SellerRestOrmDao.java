package com.example.springtemplate.daos;

import com.example.springtemplate.models.Seller;
import com.example.springtemplate.models.User;
import com.example.springtemplate.repositories.SellerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SellerRestOrmDao {
    @Autowired
    SellerRestRepository sellerRepository;

    @GetMapping("/api/sellers")
    public List<Seller> findAllSellers(){
        return sellerRepository.findAllSellers();
    }

    @GetMapping("/api/sellers/{id}")
    public Seller findSellerById(
            @PathVariable("id") Integer id){
        return sellerRepository.findSellerById(id);
    }

    @DeleteMapping("/api/sellers/{id}")
    public void deleteSeller(
            @PathVariable("id") Integer id) {
        sellerRepository.deleteById(id);
    }

    @PostMapping("/api/sellers")
    public User createUser(@RequestBody Seller seller) {
        return sellerRepository.save(seller);
    }

    @PutMapping("/api/sellers/{id}")
    public User updateSeller(
            @PathVariable("id") Integer id,
            @RequestBody Seller sellerUpdates) {
        Seller seller = sellerRepository.findSellerById(id);
        seller.setFirstName(sellerUpdates.getFirstName());
        seller.setLastName(sellerUpdates.getLastName());
        seller.setUsername(sellerUpdates.getUsername());
        seller.setPassword(sellerUpdates.getPassword());
        seller.setEmail(sellerUpdates.getEmail());
        seller.setDateOfBirth(sellerUpdates.getDateOfBirth());
        seller.setStreetAddress(sellerUpdates.getStreetAddress());
        seller.setCity(sellerUpdates.getCity());
        seller.setState(sellerUpdates.getState());
        seller.setZipCode(sellerUpdates.getZipCode());
        seller.setPhoneNumber(sellerUpdates.getPhoneNumber());
        seller.setCompanyName(sellerUpdates.getCompanyName());
        seller.setYearFounded(sellerUpdates.getYearFounded());
        return sellerRepository.save(seller);
    }

}
