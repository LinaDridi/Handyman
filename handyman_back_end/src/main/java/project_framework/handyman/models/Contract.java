package project_framework.handyman.models;

import javax.persistence.*;
@Entity
@Table(name = "contract")
public class Contract {
   public  Contract(){}

    public Contract(String url_pdf_contract, String creation_date, Project project_id) {
        this.url_pdf_contract = url_pdf_contract;
        this.creation_date = creation_date;
        this.project_id = project_id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_contract")
    private int id_contract;

    @Column(name = "url_pdf_contract")
    private String url_pdf_contract;

    @Column(name = "creation_date")
    private String creation_date;

    @OneToOne
    @JoinColumn(name = "id")
    private Project project_id;

    public int getId_contract() {
        return id_contract;
    }

    public void setId_contract(int id_contract) {
        this.id_contract = id_contract;
    }

    public String getUrl_pdf_contract() {
        return url_pdf_contract;
    }

    public void setUrl_pdf_contract(String url_pdf_contract) {
        this.url_pdf_contract = url_pdf_contract;
    }

    public String getCreation_date() {
        return creation_date;
    }

    public void setCreation_date(String creation_date) {
        this.creation_date = creation_date;
    }

    public Project getProject_id() {
        return project_id;
    }

    public void setProject_id(Project project_id) {
        this.project_id = project_id;
    }
}
