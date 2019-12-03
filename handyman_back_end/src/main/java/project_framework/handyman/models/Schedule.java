package project_framework.handyman.models;

import javax.persistence.*;

@Entity
@Table(name = "Schedule")
public class Schedule {

    public Schedule(){}
    public Schedule(String lundi, String mardi, String mercredi, String jeudi, String vendredi, String samedi, String dimanche) {
        this.lundi = lundi;
        this.mardi = mardi;
        this.mercredi = mercredi;
        this.jeudi = jeudi;
        this.vendredi = vendredi;
        this.samedi = samedi;
        this.dimanche = dimanche;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "lundi")
    private String lundi;

    @Column(name = "mardi")
    private String mardi;

    @Column(name = "mercredi")
    private String mercredi;

    @Column(name = "jeudi")
    private String jeudi;

    @Column(name = "vendredi")
    private String vendredi;

    @Column(name = "samedi")
    private String samedi;

    @Column(name = "diamanche")
    private String dimanche;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLundi() {
        return lundi;
    }

    public void setLundi(String lundi) {
        this.lundi = lundi;
    }

    public String getMardi() {
        return mardi;
    }

    public void setMardi(String mardi) {
        this.mardi = mardi;
    }

    public String getMercredi() {
        return mercredi;
    }

    public void setMercredi(String mercredi) {
        this.mercredi = mercredi;
    }

    public String getJeudi() {
        return jeudi;
    }

    public void setJeudi(String jeudi) {
        this.jeudi = jeudi;
    }

    public String getVendredi() {
        return vendredi;
    }

    public void setVendredi(String vendredi) {
        this.vendredi = vendredi;
    }

    public String getSamedi() {
        return samedi;
    }

    public void setSamedi(String samedi) {
        this.samedi = samedi;
    }

    public String getDimanche() {
        return dimanche;
    }

    public void setDimanche(String dimanche) {
        this.dimanche = dimanche;
    }
}
