package project_framework.handyman.Services.Interfaces;

import project_framework.handyman.models.Schedule;

import java.util.List;

public interface ScheduleService {
    /**
     * Get all the schedule.
     *
     * @return the list of entities
     */
    public List<Schedule> findAll();

    /**
     * Get schedule by id.
     *
     * @return entitie
     */
    public Schedule findById(int theId);

    /**
     * Save schedule.
     *
     */
    public void save(Schedule schedule);

    /**
     * delete schedule by id.
     *
     */
    public void deleteById(int theId);
}
