package com.devassist.controller;

import com.devassist.dto.RequestDTO;
import com.devassist.dto.ResponseDTO;
import com.devassist.service.DebugService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DebugController {
    private final DebugService debugService;


    public DebugController(DebugService debugService) {
        this.debugService = debugService;
    }

    @PostMapping("/public/chat")
    public ResponseEntity<ResponseDTO> chats(@RequestBody RequestDTO requestDTO){
        ResponseDTO response = debugService.response(requestDTO);
        return ResponseEntity.ok(response);
    }
}
