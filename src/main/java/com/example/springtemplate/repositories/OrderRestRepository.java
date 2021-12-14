package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Order;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrderRestRepository extends CrudRepository<Order, Integer> {

    @Query(value = "SELECT * FROM orders ",
            nativeQuery = true)
    List<Order> findAllOrders();

    @Query(value = "SELECT * FROM orders WHERE orders.product_id=:id",
            nativeQuery = true)
    List<Order> findOrdersByProduct(@Param("id") Integer id);

    @Query(value = "SELECT * FROM orders WHERE orders.cart_id=:id",
            nativeQuery = true)
    List<Order> findOrdersByCart(@Param("id") Integer id);

    @Query(value = "SELECT * FROM orders\n" +
            "WHERE orders.order_id=:orderId",
            nativeQuery = true)
    Order findOrderById(@Param("orderId") Integer id);

}

