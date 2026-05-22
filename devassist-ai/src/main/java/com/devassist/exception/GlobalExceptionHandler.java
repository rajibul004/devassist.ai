package com.devassist.exception;

import org.springframework.http.*;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(APIException.class)
    public ResponseEntity<APIResponse>
    handleAPIException(APIException e) {

        APIResponse apiResponse =
                new APIResponse(
                        e.getMessage(),
                        false
                );

        return ResponseEntity
                .badRequest()
                .body(apiResponse);
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<APIResponse> handleVelidationException(MethodArgumentNotValidException e){
        String message  =
                e.getBindingResult()
                        .getFieldError()
                        .getDefaultMessage();

                APIResponse apiResponse = new APIResponse(
                        message,
                        false
                );
                return ResponseEntity
                        .badRequest()
                        .body(apiResponse);

    }
}