package project_framework.handyman.models;

import javax.persistence.*;

@Entity
@Table(name = "devis")
public class Devis {
    public Devis(){}

    public Devis(Double cost, String currency, int project_id, Long id_artisan) {
        this.cost = cost;
        this.currency = currency;
        this.project_id = project_id;
        this.id_artisan = id_artisan;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "devis_id")
    private Long devis_id;

    @Column(name = "cost")
    private Double cost;
    @Column(name = "currency")
    private String currency;

    @Column(name = "project_id")
    private int project_id;

    @Column(name = "id_artisan")
    private Long id_artisan;

    public Long getDevis_id() {
        return devis_id;
    }

    public void setDevis_id(Long devis_id) {
        this.devis_id = devis_id;
    }

    public int getProject_id() {
        return project_id;
    }

    public void setProject_id(int project_id) {
        this.project_id = project_id;
    }

    public Double getCost() {
        return cost;
    }

    public void setCost(Double cost) {
        this.cost = cost;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public Long getId_artisan() {
        return id_artisan;
    }

    public void setId_artisan(Long id_artisan) {
        this.id_artisan = id_artisan;
    }
}
