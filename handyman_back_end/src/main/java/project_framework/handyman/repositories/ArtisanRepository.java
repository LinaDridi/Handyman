package project_framework.handyman.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import project_framework.handyman.models.Artisan;
import project_framework.handyman.models.Project;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface ArtisanRepository extends JpaRepository<Artisan, Integer> {
    Optional<Artisan> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

    void deleteById(long theId);

    Optional<Artisan> findById(Long theId);

    @Query("Select a from Artisan a inner join a.services s where s.name = :keyword")
    List<Artisan> filterByService(@Param("keyword") String keyword);

    @Query(value = "SELECT DISTINCT a"
            + " FROM Artisan a inner join a.services s"
            + " WHERE (:name is NULL OR a.name = :name)"
            + " AND (:serv is NULL  OR s.name = :serv)"
            + "AND (:address is NULL OR a.address = :address)")
    List<Artisan> filter(@Param("name") String keyword, @Param("serv") String serv, @Param("address") String address);

    @Query("Select c.firstname from Artisan c where c.firstname like %:keyword%")
    List<String> autocompleteNames(@Param("keyword") String keyword);
    @Query("Select c.address from Artisan c where c.address like %:keyword%")
    List<String> autocompleteAddress(@Param("keyword") String keyword);
    @Query(value = "Select DISTINCT a from Artisan a inner join a.services s inner join a.availability_id av " +
            "where (:service is NULL OR s.name = :service)" +
            " and (:start_date is NULL OR a.availability_id is NULL OR av.start_date > :start_date) ORDER BY a.rate")
    List<Artisan> findArtiasnBy(@Param("service") String service, @Param("start_date") String date);
}
