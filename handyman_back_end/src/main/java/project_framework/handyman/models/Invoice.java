package project_framework.handyman.models;

import javax.persistence.*;

@Entity
@Table(name = "invoice")
public class Invoice {
    public Invoice(){}

    public Invoice(String url_pdf_invoice, String creation_date, Project project_id) {
        this.url_pdf_invoice = url_pdf_invoice;
        this.creation_date = creation_date;
        this.project_id = project_id;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_invoice")
    private int id_invoice;

    @Column(name = "url_pdf_invoice")
    private String url_pdf_invoice;

    @Column(name = "creation_date")
    private String creation_date;

    @OneToOne
    @JoinColumn(name = "project_id")
    private Project project_id;

    public int getId_invoice() {
        return id_invoice;
    }

    public void setId_invoice(int id_invoice) {
        this.id_invoice = id_invoice;
    }

    public String getUrl_pdf_invoice() {
        return url_pdf_invoice;
    }

    public void setUrl_pdf_invoice(String url_pdf_invoice) {
        this.url_pdf_invoice = url_pdf_invoice;
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
