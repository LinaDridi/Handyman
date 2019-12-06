package project_framework.handyman.models;

import javax.persistence.*;

@Entity
    @Table(name = "rate")
public class Rate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Long getId_artisan() {
        return id_artisan;
    }

    public void setId_artisan(Long id_artisan) {
        this.id_artisan = id_artisan;
    }

    public String getUsername_client() {
        return username_client;
    }

    public void setUsername_client(String username_client) {
        this.username_client = username_client;
    }

    @Column(name = "id_artisan")
    private Long id_artisan;
    @Column(name = "username_client")
    private String username_client;

    public Rate(Long id_artisan, String username_client) {
        this.id_artisan = id_artisan;
        this.username_client = username_client;
    }

    public Rate() {
    }
}
