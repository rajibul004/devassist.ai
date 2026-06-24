package com.devassist.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

public record AuthDTO(

        @NotBlank(message = "Email is required")
        @Email(message = "Invalid email format")
        String email,

        @NotBlank(message = "Password must be required")
        @Size(min = 8 ,  max = 20,
                message = "Password must be between 8 and 20 characters")
        @Pattern(
                regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]).{8,20}$",
                message = "Password must contain uppercase,  lowercase, number and special character"
        )
        String password,

        @NotBlank(message = "Fast Name is Required")
        String firstName,
        @NotBlank(message = "Last Name is Required")
        String lastName

) {
}