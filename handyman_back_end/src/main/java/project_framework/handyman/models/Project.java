package project_framework.handyman.models;

import javax.persistence.*;

@Entity
@Table(name = "project")
public class Project {
    public Project(){}

    public Project(String start_date, String deadline, String address, boolean accepted_by_artisan, boolean accepted_by_client, Client client_id, String description, String img, String facture, String contrat, String title, String state, String currency, int cost, Artisan artisan_id) {
        this.start_date = start_date;
        this.deadline = deadline;
        this.address = address;
        this.accepted_by_artisan = accepted_by_artisan;
        this.accepted_by_client = accepted_by_client;
        this.client_id = client_id;
        this.description = description;
        this.img = img;
        this.facture = facture;
        this.contrat = contrat;
        this.title = title;
        this.state = state;
        this.currency = currency;
        this.cost = cost;
        this.artisan_id = artisan_id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

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


    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client_id;

    @Column(name = "description")
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

    @Column(name = "currency")
    private String currency;

    @Column(name = "cost")
    private int cost;

    @ManyToOne
    @JoinColumn(name = "artisan_id")
    private Artisan artisan_id;



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public Artisan getArtisan_id() {
        return artisan_id;
    }

    public void setArtisan_id(Artisan artisan_id) {
        this.artisan_id = artisan_id;
    }

    public Client getClient_id() {
        return client_id;
    }

    public void setClient_id(Client client_id) {
        this.client_id = client_id;
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

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

}
