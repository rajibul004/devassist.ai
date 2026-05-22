package com.devassist.dto;

public record AuthResponse(

        Long id,

        String email,

        String role,

        String token
) {}