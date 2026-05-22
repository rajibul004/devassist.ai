package com.devassist.service;

import com.devassist.dto.AuthDTO;
import com.devassist.dto.AuthResponse;
import com.devassist.dto.UserDTO;
import com.devassist.entity.Role;
import com.devassist.entity.User;
import com.devassist.exception.APIException;
import com.devassist.repository.UserRepository;
import com.devassist.util.JwtUtils;
import com.devassist.util.UserDetailsImpl;
import org.springframework.http.ResponseCookie;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserServiceImpl(AuthenticationManager authenticationManager, JwtUtils jwtUtils, UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public List<UserDTO> allUsers() {
        List<User> users = userRepository.findAll();

        return users.stream().map(
                user -> new UserDTO(
                        user.getId(),
                        user.getEmail(),
                        user.getRole().name()
                ))
                .toList();
    }

    @Override
    public UserDTO register(AuthDTO authDTO) {
        if (userRepository.existsByEmail(authDTO.email())){
            throw new APIException("Email already exist! ");
        }

        User user = new User();
        user.setEmail(authDTO.email());
        user.setPassword(passwordEncoder.encode(authDTO.password()));
        user.setRole(Role.USER);

        User savedUser = userRepository.save(user);
        return new UserDTO(savedUser.getId(),savedUser.getEmail(),savedUser.getRole().name());
    }

    @Override
    public AuthResponse login(AuthDTO authDTO) {

        Authentication authentication =
                authenticationManager.authenticate(

                        new UsernamePasswordAuthenticationToken(
                                authDTO.email(),
                                authDTO.password()
                        )

                );

        SecurityContextHolder.getContext()
                .setAuthentication(authentication);

        UserDetailsImpl userDetails =
                (UserDetailsImpl)
                        authentication.getPrincipal();

        String jwt =
                jwtUtils.generateTokenFromUsername(
                        userDetails.getUsername()
                );

        return new AuthResponse(
                userDetails.getId(),
                userDetails.getEmail(),
                userDetails.getAuthorities()
                        .iterator()
                        .next()
                        .getAuthority(),
                jwt
        );

    }

    @Override
    public ResponseCookie logout() {
        return jwtUtils.getCleanJwtCookie();
    }
}
