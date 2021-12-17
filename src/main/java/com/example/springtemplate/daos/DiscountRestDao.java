package com.example.springtemplate.daos;

import com.example.springtemplate.models.Discount;
import com.example.springtemplate.models.Product;
import com.example.springtemplate.repositories.DiscountRestRepository;
import com.example.springtemplate.repositories.ProductRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class DiscountRestDao {
    @Autowired
    DiscountRestRepository discountRepository;
    @Autowired
    ProductRestRepository productRepository;

    @GetMapping("/api/discounts")
    public List<Discount> findAllDiscounts(){
        return discountRepository.findAllDiscounts();
    }

    @GetMapping("/api/discounts/productId/{id}")
    public List<Discount> findDiscountByProduct(
            @PathVariable("id") Integer id){
        return discountRepository.findDiscountByProduct(id);
    }

    @GetMapping("/api/discounts/{id}")
    public Discount findDiscountById(
            @PathVariable("id") Integer id){
        return discountRepository.findDiscountById(id);
    }

    @DeleteMapping("/api/discounts/{id}")
    public void deleteDiscount(
            @PathVariable("id") Integer id) {
        discountRepository.deleteById(id);
    }

    @PostMapping("/api/discounts")
    public Discount createDiscount(@RequestBody Discount discount) {
        Discount newDiscount = new Discount();
        newDiscount.setTitle(discount.getTitle());
        newDiscount.setDescription(discount.getDescription());
        newDiscount.setStartDate(discount.getStartDate());
        newDiscount.setEndDate(discount.getEndDate());
        return discountRepository.save(newDiscount);
    }

    @PostMapping("/api/discounts/{id}")
    public Discount addDiscount(@RequestBody Discount discount,
                        @PathVariable("id") Integer id) {
        Product product = productRepository.findProductById(id);
        discount.setProduct(product);
        return discountRepository.save(discount);
    }

    @PutMapping("/api/discounts/{id}")
    public Discount updateDiscount(
            @PathVariable("id") Integer id,
            @RequestBody Discount discountUpdates) {
        Discount discount = discountRepository.findDiscountById(id);
        discount.setTitle(discountUpdates.getTitle());
        discount.setDescription(discountUpdates.getDescription());
        discount.setStartDate(discountUpdates.getStartDate());
        discount.setEndDate(discountUpdates.getEndDate());
        discount.setProduct(discountUpdates.getProduct());
        return discountRepository.save(discount);
    }

}

