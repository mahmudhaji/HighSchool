package backend.zanzibar.high.school.controller;


import backend.zanzibar.high.school.model.Combination;
import backend.zanzibar.high.school.services.CombinationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/combinations")
public class CombinationController {

    @Autowired
    private CombinationService combinationService;

    @GetMapping
    public ResponseEntity<List<Combination>> getAllCombinations() {
        List<Combination> combinations = combinationService.getAllCombinations();
        return new ResponseEntity<>(combinations, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Combination> getCombinationById(@PathVariable Long id) {
        Combination combination = combinationService.getCombinationById(id);
        if (combination == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(combination, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Combination> addCombination(@RequestBody Combination combination) {
        Combination createdCombination = combinationService.addCombination(combination);
        return new ResponseEntity<>(createdCombination, HttpStatus.CREATED);
    }

//    @PutMapping("/{id}")
//    public ResponseEntity<Combination> updateCombination(@PathVariable Long id, @RequestBody Combination combination) {
//        if (!combinationService.existsById(id)) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        combination.setId(id); // Ensure ID consistency
//        Combination updatedCombination = combinationService.updateCombination(combination);
//        return new ResponseEntity<>(updatedCombination, HttpStatus.OK);
//    }

//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteCombination(@PathVariable Long id) {
//        if (!combinationService.existsById(id)) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        combinationService.deleteCombination(id);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
}
