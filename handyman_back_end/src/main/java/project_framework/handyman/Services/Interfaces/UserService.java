package project_framework.handyman.Services.Interfaces;

import project_framework.handyman.models.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    /**
     * Get all the users.
     *
     * @return the list of entities
     */
    public List<User> findAll();

    /**
     * Get user by username.
     *
     * @return entitie
     */
    public Optional<User> findByUsername(String username);


}
