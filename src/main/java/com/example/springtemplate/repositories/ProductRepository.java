package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Product;
import com.example.springtemplate.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository
        extends CrudRepository<Product, Integer> {
    @Query(value = "SELECT * FROM products",
            nativeQuery = true)
    public List<Product> findAllProducts();
    @Query(value = "SELECT * FROM products WHERE id=:productId",
            nativeQuery = true)
    public Product findProductById(@Param("productId") Integer id);
}

