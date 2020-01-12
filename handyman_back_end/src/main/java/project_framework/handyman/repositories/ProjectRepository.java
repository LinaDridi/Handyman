package project_framework.handyman.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import project_framework.handyman.models.Devis;
import project_framework.handyman.models.Project;

import java.util.Set;

@Repository
public interface ProjectRepository extends JpaRepository<Project,Integer> {
   /* @Modifying(clearAutomatically = true)
    @Query("UPDATE project p SET p.accepted_by_artisan = true,p.cost=:cost,p.currency=:currency WHERE p.id = :id")
    public int postOffer(@Param("id") int id, @Param("cost") int cost, @Param("currency") String currency);*/
    @Query(value = "Select DISTINCT p from Project p inner join p.devis d " +
            "where (:id is NULL OR d.id_artisan = :id)")
    Set<Project> getProposedProjects(@Param("id") Long id);
    @Query("Select p from Project p where p.client_username like %:clientUsername%")
    Set<Project> findByClientUsername(@Param("clientUsername")String clientUsername);

    @Query("Select d from Devis d where d.devis_id=:devis_id")
    Devis findDevisById(@Param("devis_id")Long devis_id);
 @Transactional
 @Modifying
 @Query("delete from Devis d where d.devis_id=:devis_id")
 void deleteDevis(@Param("devis_id") Long devis_id);

}
