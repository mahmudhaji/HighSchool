package backend.zanzibar.high.school.controller;


import backend.zanzibar.high.school.model.School;
import backend.zanzibar.high.school.model.Student;
import backend.zanzibar.high.school.services.SchoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/schools")
public class SchoolController {

    @Autowired
    private SchoolService schoolService;

    @GetMapping
    public ResponseEntity<List<School>> getAllSchools() {
        List<School> schools = schoolService.getAllSchools();
        return new ResponseEntity<>(schools, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<School> getSchoolById(@PathVariable Integer id) {
        School school = schoolService.getSchoolById(id);
        if (school == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(school, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<School> addSchool(@RequestBody School school) {
        School createdSchool = schoolService.addSchool(school);
        return new ResponseEntity<>(createdSchool, HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public School update(@RequestBody School school,@PathVariable Integer id){
        school.setId(id);
        return schoolService.addSchool(school);
    }


}

