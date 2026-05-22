    package com.devassist.entity;

    import jakarta.persistence.*;
    import jakarta.validation.constraints.Email;
    import jakarta.validation.constraints.NotBlank;
    import jakarta.validation.constraints.Size;
    import lombok.AllArgsConstructor;
    import lombok.Getter;
    import lombok.NoArgsConstructor;
    import lombok.Setter;
    import org.hibernate.annotations.CreationTimestamp;

    import java.time.LocalDateTime;

    @Entity
    @Table(name = "users")
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public class User {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(nullable = false,unique = true)
        @Email
        private String email;

        @Column(nullable = false)
        @NotBlank
        @Size(min = 8, message = "Password must at least 8 characters")
        private String password;

        @CreationTimestamp
        private LocalDateTime createdAt;

        @Enumerated(EnumType.STRING)
        @Column(nullable = false)
        private Role role;
    }
