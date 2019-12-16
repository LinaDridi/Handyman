package project_framework.handyman.models;

import javax.persistence.*;

@Entity
@Table(name = "client")
public class Client  extends User {
    public Client(){}


    public Client(String name, String username, String email, String password, String firstname, String lastname) {
        super(name, username, email, password);
        this.firstname = firstname;
        this.lastname = lastname;
    }
    @PrimaryKeyJoinColumn(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Override
    public Long getId() {
        return id;
    }

    @Override
    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
}
