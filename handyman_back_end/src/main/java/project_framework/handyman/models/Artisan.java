package project_framework.handyman.models;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "artisan")
public class Artisan extends User {

    public Artisan(){}

    public Artisan(String firstname, String lastname, String username, String email, String password, String birth, String address, String job, String phone, int rate, String type, String description, String img) {
        super(firstname, username, email, password);
        this.firstname = firstname;
        this.lastname = lastname;
        this.birth = birth;
        this.address = address;
        this.job = job;
        this.phone = phone;
        this.rate = 0;
        this.type = type;
        this.description = description;
        this.img = img;
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

    @Column(name = "birth")
    private String birth;

    @Column(name = "address")
    private String address;

    @Column(name = "job")
    private String job;

    @Column(name = "phone")
    private String phone;

    @Column(name = "rate")
    private int rate;

    @Column(name = "type")
    private String type;

    @Column(name = "description")
    private String description;

    @Column(name = "img")
    private String img;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "artisan_service",
            joinColumns = @JoinColumn(name = "artisan_id"),
            inverseJoinColumns = @JoinColumn(name = "service_id"))
    private Set<Service> services = new HashSet<>();

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="Schedule_id")
    private Schedule Schedule_id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="availability_id")
    private Availability availability_id;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "artisan_project",
            joinColumns = @JoinColumn(name = "artisan_id"),
            inverseJoinColumns = @JoinColumn(name = "project_id"))
    private Set<Project> projects = new HashSet<>();

    public Long getId() {
        return id;
    }

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

    public String getBirth() {
        return birth;
    }

    public void setBirth(String birth) {
        this.birth = birth;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
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

    public Set<Service> getServices() {
        return services;
    }

    public void setServices(Set<Service> services) {
        this.services = services;
    }

    public Schedule getSchedule_id() {
        return Schedule_id;
    }

    public void setSchedule_id(Schedule schedule_id) {
        Schedule_id = schedule_id;
    }

    public Availability getAvailability_id() {
        return availability_id;
    }

    public void setAvailability_id(Availability availability_id) {
        this.availability_id = availability_id;
    }

    public Set<Project> getProjects() {
        return projects;
    }

    public void setProjects(Set<Project> projects) {
        this.projects = projects;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }
}
