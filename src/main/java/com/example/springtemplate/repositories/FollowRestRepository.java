package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Follow;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Set;

public interface FollowRestRepository extends CrudRepository<Follow, Integer> {

    @Query(value = "SELECT * FROM follows",
            nativeQuery = true)
    public List<Follow> findAllFollows();

    @Query(value = "SELECT * FROM follows WHERE follows.customer_id=:id",
            nativeQuery = true)
    public List<Follow> findFollowsByCustomer(@Param("id") Integer id);
}
