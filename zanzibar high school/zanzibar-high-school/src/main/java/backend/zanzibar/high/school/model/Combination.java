package backend.zanzibar.high.school.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Combination {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String coName;

//    @ManyToOne
//    @JoinColumn(name = "school_id")
//    private School school;
//
//    @OneToMany(mappedBy = "combination")
//    private List<Application> applications;
}
