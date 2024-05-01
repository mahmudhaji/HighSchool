package backend.zanzibar.high.school.services;

import backend.zanzibar.high.school.model.Application;
import backend.zanzibar.high.school.model.Combination;
import backend.zanzibar.high.school.repository.CombinationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CombinationService {
    @Autowired
    private CombinationRepository combinationRepository;

    public List<Combination> getAllCombinations() {
        return combinationRepository.findAll();
    }

    public Combination getCombinationById(Long id) {
        return combinationRepository.findById(id).orElse(null);
    }

    public Combination addCombination(Combination combination) {
        return combinationRepository.save(combination);
    }

    public Combination updateCombination(Combination combination) {
        return combinationRepository.save(combination);
    }

    public void deleteCombination(Long id) {
        combinationRepository.deleteById(id);
    }
//    public List<Application> getApplicationsByCombination(Combination combination) {
//        return combination.getApplications();
//    }
}
