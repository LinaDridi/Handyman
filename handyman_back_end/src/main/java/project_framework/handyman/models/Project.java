package project_framework.handyman.models;

import javax.persistence.*;

@Entity
@Table(name = "project")
public class Project {
    public Project(){}
    public Project(String start_date, String deadline, String address, boolean accepted, String description, String img, String title, String state) {
        this.start_date = start_date;
        this.deadline = deadline;
        this.address = address;
        this.accepted = accepted;
        this.description = description;
        this.img = img;
        this.title = title;
        this.state = state;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "start_date")
    private String start_date;

    @Column(name = "deadline")
    private String deadline;

    @Column(name = "address")
    private String address;

    @Column(name = "accepted")
    private boolean accepted;

    @Column(name = "description")
    private String description;

    @Column(name = "img")
    private String img;

    @Column(name = "title")
    private String title;

    @Column(name = "state")
    private String state;

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

    public boolean isAccepted() {
        return accepted;
    }

    public void setAccepted(boolean accepted) {
        this.accepted = accepted;
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
}
