package com.example.springtemplate.daos;

import com.example.springtemplate.models.Product;
import com.example.springtemplate.models.Seller;
import com.example.springtemplate.repositories.DiscountRestRepository;
import com.example.springtemplate.repositories.OrderRestRepository;
import com.example.springtemplate.repositories.ProductRestRepository;
import com.example.springtemplate.repositories.SellerRestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProductRestDao {
    @Autowired
    ProductRestRepository productRestRepository;
    @Autowired
    SellerRestRepository sellerRepository;
    @Autowired
    OrderRestRepository orderRepository;
    @Autowired
    DiscountRestRepository discountRepository;

    @PostMapping("/api/products/{id}")
    public Product createProduct(@RequestBody Product product,
                                 @PathVariable("id") Integer sellerId) {
        Product newProduct = new Product();
        Seller seller = sellerRepository.findSellerById(sellerId);
        newProduct.setName(product.getName());
        newProduct.setAgeGroup(product.getAgeGroup());
        newProduct.setCategory(product.getCategory());
        newProduct.setPrice(product.getPrice());
        newProduct.setInventory(product.getInventory());
        newProduct.setSeller(seller);
        return productRestRepository.save(newProduct);
    }

    @GetMapping("/api/products")
    public List<Product> findAllProducts() {
        return productRestRepository.findAllProducts();
    }

    @GetMapping("/api/products/{id}")
    public Product findProductById(
            @PathVariable("id") Integer id) {
        return productRestRepository.findProductById(id);
    }

    @GetMapping("/api/products/sellerId/{id}")
    public List<Product> findProductsBySeller(
            @PathVariable("id") Integer id){
        return productRestRepository.findProductsBySeller(id);
    }

    @PutMapping("/api/products/{id}")
    public Product updateProduct(
            @PathVariable("id") Integer id,
            @RequestBody Product productUpdates) {
        Product product = productRestRepository.findProductById(id);
        product.setName(productUpdates.getName());
        product.setCategory(productUpdates.getCategory());
        product.setPrice(productUpdates.getPrice());
        product.setInventory(productUpdates.getInventory());
        product.setWeight(productUpdates.getWeight());
        product.setAgeGroup(productUpdates.getAgeGroup());
        return productRestRepository.save(product);
    }

    @DeleteMapping("/api/products/{id}")
    public void deleteProduct(
            @PathVariable("id") Integer id) {
        productRestRepository.deleteById(id);
    }

    @GetMapping("/api/products/orderId/{id}")
    public Product findProductByOrderId(
            @PathVariable("id") Integer id){
        Integer productId = orderRepository.findOrderById(id).getProduct().getId();
        return productRestRepository.findProductById(productId);
    }

    @GetMapping("/api/products/discountId/{id}")
    public Product findProductByDiscountId(
            @PathVariable("id") Integer id){
        Integer productId = discountRepository.findDiscountById(id).getProduct().getId();
        return productRestRepository.findProductById(productId);
    }


}