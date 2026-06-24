    package com.devassist.entity;

    import jakarta.persistence.*;
    import jakarta.validation.constraints.Email;
    import jakarta.validation.constraints.NotBlank;
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

        @NotBlank(message = "Email is required")
        @Email(message = "Invalid email format")
        @Column(unique = true, nullable = false)
        private String email;

        @NotBlank(message = "First Name is Required")
        private String firstName;
        @NotBlank(message = "Last Name is Required")
        private String lastName;

        @Column(
                nullable = false,
                length = 100
        )
        private String password;

        @CreationTimestamp
        private LocalDateTime createdAt;

        @Enumerated(EnumType.STRING)
        @Column(nullable = false)
        private Role role;
    }
