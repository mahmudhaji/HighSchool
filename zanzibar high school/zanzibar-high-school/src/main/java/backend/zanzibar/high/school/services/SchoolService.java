package backend.zanzibar.high.school.services;

import backend.zanzibar.high.school.model.Combination;
import backend.zanzibar.high.school.model.School;
import backend.zanzibar.high.school.repository.SchoolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SchoolService {
    @Autowired
    private SchoolRepository schoolRepository;

    public List<School> getAllSchools() {
        return schoolRepository.findAll();
    }

    public School getSchoolById(Integer id) {
        return schoolRepository.findById(id).orElse(null);
    }

    public School addSchool(School school) {
        return schoolRepository.save(school);
    }

    public School update(School school,Integer id){
        school.setId(id);
        return schoolRepository.save(school);
    }

    public void deleteSchool(Integer id) {
        schoolRepository.deleteById(id);
    }

//    public List<Combination> getCombinationsBySchool(School school) {
//        return school.getCombinations();
//    }

}