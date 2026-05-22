package com.devassist.service;

import com.devassist.dto.AuthDTO;
import com.devassist.dto.AuthResponse;
import com.devassist.dto.UserDTO;
import com.devassist.exception.APIResponse;
import org.springframework.http.ResponseCookie;

import java.util.List;

public interface UserService {
    List<UserDTO> allUsers();

    UserDTO register(AuthDTO authDTO);

    AuthResponse login(AuthDTO authDTO);

    ResponseCookie logout();
}
