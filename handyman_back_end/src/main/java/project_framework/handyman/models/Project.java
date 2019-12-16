package project_framework.handyman.models;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "project")
public class Project {
    public Project(){}

    public Project(String start_date, String deadline, String address, Boolean accepted_by_artisan, Boolean accepted_by_client, String client_username, String description, String img, String facture, String contrat, String title, String state, Set<Devis> devis, Long artisan_id) {
        this.start_date = start_date;
        this.deadline = deadline;
        this.address = address;
        this.accepted_by_artisan = accepted_by_artisan;
        this.accepted_by_client = accepted_by_client;
        this.client_username = client_username;
        this.description = description;
        this.img = img;
        this.facture = facture;
        this.contrat = contrat;
        this.title = title;
        this.state = state;
        this.devis = devis;
        this.artisan_id = artisan_id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "project_id")
    private int project_id;

    @Column(name = "start_date")
    private String start_date;

    @Column(name = "deadline")
    private String deadline;

    @Column(nullable=true ,name = "address")
    private String address;

    @Column(nullable=true,name = "accepted_by_artisan")
    private Boolean accepted_by_artisan;

    @Column(name = "accepted_by_client")
    private Boolean accepted_by_client;

    @Column(name = "client_username")
    private String client_username;

    @Column(name = "description",columnDefinition="LONGTEXT")
    private String description;

    @Column(name = "img")
    private String img;

    @Column(name = "facture")
    private String facture;

    @Column(name = "contrat")
    private String contrat;


    @Column(name = "title")
    private String title;

    @Column(name = "state")
    private String state;

  //  @OneToMany(mappedBy = "project"/*, cascade = CascadeType.ALL*/)
    //@Column(name = "devis")
  @OneToMany(cascade = CascadeType.ALL)
  @JoinTable(name = "project_devis",
          joinColumns = @JoinColumn(name = "project_id"),
          inverseJoinColumns = @JoinColumn(name = "devis_id"))
    private Set<Devis> devis= new HashSet<>();


    @Column(name = "artisan_id")
    private Long artisan_id;


    public int getProject_id() {
        return project_id;
    }

    public void setProject_id(int project_id) {
        this.project_id = project_id;
    }

    public String getStart_date() {
        return start_date;
    }

    public void setStart_date(String start_date) {
        this.start_date = start_date;
    }

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(String deadline) {
        this.deadline = deadline;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }


    public Boolean isAccepted_by_client() {
        return accepted_by_client;
    }

    public void setAccepted_by_client(Boolean accepted_by_client) {
        this.accepted_by_client = accepted_by_client;
    }

    public Boolean isAccepted_by_artisan() {
        return accepted_by_artisan;
    }

    public void setAccepted_by_artisan(Boolean accepted_by_artisan) {
        this.accepted_by_artisan = accepted_by_artisan;
    }



    public String getFacture() {
        return facture;
    }

    public void setFacture(String facture) {
        this.facture = facture;
    }

    public String getContrat() {
        return contrat;
    }

    public void setContrat(String contrat) {
        this.contrat = contrat;
    }

    public Set<Devis> getDevis() {
        return devis;
    }

    public void setDevis(Set<Devis> devis) {
        this.devis = devis;
    }

    public Boolean getAccepted_by_artisan() {
        return accepted_by_artisan;
    }

    public Boolean getAccepted_by_client() {
        return accepted_by_client;
    }

    public String getClient_username() {
        return client_username;
    }

    public void setClient_username(String client_username) {
        this.client_username = client_username;
    }

    public Long getArtisan_id() {
        return artisan_id;
    }

    public void setArtisan_id(Long artisan_id) {
        this.artisan_id = artisan_id;
    }
}
