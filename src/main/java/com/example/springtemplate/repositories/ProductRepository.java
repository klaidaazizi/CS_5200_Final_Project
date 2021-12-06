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
    List<Product> findAllProducts();

    @Query(value = "SELECT * FROM products WHERE product_id=:id",
            nativeQuery = true)
    Product findProductById(@Param("id") Integer id);
}

