package com.devassist.exception;

public record APIResponse(

        String message,

        boolean success
) {
}