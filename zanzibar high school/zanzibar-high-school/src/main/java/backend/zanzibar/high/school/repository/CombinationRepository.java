package backend.zanzibar.high.school.repository;

import backend.zanzibar.high.school.model.Combination;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CombinationRepository extends JpaRepository<Combination,Long> {
}
