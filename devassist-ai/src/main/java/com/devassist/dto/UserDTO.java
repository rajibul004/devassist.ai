package com.devassist.dto;

import java.time.LocalDateTime;

public record UserDTO(
        Long id,
        String email,
        String firstName,
        String lastName,
        String role,
        LocalDateTime createdAt
) {
}
