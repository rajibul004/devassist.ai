package com.devassist.controller;

import com.devassist.dto.AuthDTO;
import com.devassist.dto.AuthResponse;
import com.devassist.dto.UserDTO;
import com.devassist.exception.APIResponse;
import com.devassist.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AuthController {
    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/public/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody AuthDTO authDTO){
        userService.register(authDTO);
        return  ResponseEntity.ok("User Register Sucessfull ");
    }

    @PostMapping("/public/signin")
    public ResponseEntity<?> login(@RequestBody AuthDTO authDTO){
        AuthResponse response =userService.login(authDTO) ;
        return ResponseEntity.ok(response);
    }
    @PostMapping("/public/logout")
    public ResponseEntity<?> logout(){
        ResponseCookie cookie = userService.logout();
        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE,
                        cookie.toString())
                .body(
                        new APIResponse("logout Sucessfull",true)
                );
    }

    @GetMapping("/admin/users")
    public List<UserDTO> users (){
       return userService.allUsers();
    }
}
