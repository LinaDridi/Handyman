package project_framework.handyman.models;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "artisan")
public class Artisan {

    public Artisan(){}

    public Artisan(String firstname, String lastname, String username, String email, String password, String birth, String address, String job, String phone, String rate, String type, String description, String img) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.birth = birth;
        this.address = address;
        this.job = job;
        this.phone = phone;
        this.rate = rate;
        this.type = type;
        this.description = description;
        this.img = img;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "firstname")
    private String firstname;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "birth")
    private String birth;

    @Column(name = "address")
    private String address;

    @Column(name = "job")
    private String job;

    @Column(name = "phone")
    private String phone;

    @Column(name = "rate")
    private String rate;

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

    @OneToOne
    @JoinColumn(name="Schedule_id")
    private Schedule Schedule_id;

    @OneToOne
    @JoinColumn(name="availability_id")
    private Availability availability_id;

    @OneToMany
    @JoinTable(name = "artisan_project",
            joinColumns = @JoinColumn(name = "artisan_id"),
            inverseJoinColumns = @JoinColumn(name = "project_id"))
    private List<Project> projects;

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public String getRate() {
        return rate;
    }

    public void setRate(String rate) {
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

    public List<Project> getProjects() {
        return projects;
    }

    public void setProjects(List<Project> projects) {
        this.projects = projects;
    }
}
