package project_framework.handyman.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_framework.handyman.Services.Interfaces.ScheduleService;
import project_framework.handyman.models.Schedule;
import project_framework.handyman.repositories.ScheduleRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ScheduleServiceImpl implements ScheduleService {
    @Autowired
    ScheduleRepository scheduleRepository;
    @Override
    public List<Schedule> findAll(){
        return scheduleRepository.findAll();
    }
    @Override
    public Schedule findById(int theId){
        Optional<Schedule> result = scheduleRepository.findById(theId);

        Schedule theSchedule = null;

        if (result.isPresent()) {
            theSchedule = result.get();
        }
        else {
            // we didn't find the schedule.
            throw new RuntimeException("Did not find Schedule id - " + theId);
        }

        return theSchedule;
    }
    @Override
    public void save(Schedule schedule){
        scheduleRepository.save(schedule);
    }
    @Override
    public void deleteById(int theId){
        scheduleRepository.deleteById(theId);
    }
}
