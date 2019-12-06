package project_framework.handyman.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project_framework.handyman.models.Project;
import project_framework.handyman.models.Rate;

import java.util.List;
@Repository

public interface RateRepository  extends JpaRepository<Rate,Integer> {

    @Query("Select count(c) from Rate c where c.id_artisan = :artisan AND c.username_client = :client")
    int getRate(@Param("artisan") Long artisan, @Param("client") String client);
}
