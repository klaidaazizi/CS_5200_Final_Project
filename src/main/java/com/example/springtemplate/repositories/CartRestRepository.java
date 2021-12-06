package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Cart;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CartRestRepository extends CrudRepository<Cart, Integer> {

    @Query(value = "SELECT * FROM carts ",
            nativeQuery = true)
    List<Cart> findAllCarts();

    @Query(value = "SELECT * FROM carts\n" +
            "WHERE carts.cart_id=:cartId",
            nativeQuery = true)
    Cart findCartById(@Param("cartId") Integer id);

}

