package project_framework.handyman.models;

import javax.persistence.*;

@Entity
@Table(name = "availability")
public class Availability {
    public Availability(){}

    public Availability(String start_date, String end_date) {
        this.start_date = start_date;
        this.end_date = end_date;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "start_date")
    private String start_date;

    @Column(name = "end_date")
    private String end_date;

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

    public String getEnd_date() {
        return end_date;
    }

    public void setEnd_date(String end_date) {
        this.end_date = end_date;
    }
}
