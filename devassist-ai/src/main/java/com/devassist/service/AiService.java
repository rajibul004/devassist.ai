package com.devassist.service;

import com.devassist.dto.ResponseDTO;

public interface AiService {
    ResponseDTO analyze(String message);
}
