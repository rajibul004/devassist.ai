package com.devassist.service;

import com.devassist.dto.ResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AiServiceImpl implements AiService{

    private final ChatClient chatClient;

    @Override
    public ResponseDTO analyze(String message) {
        String prompt = """
                You are an expert Java debugging assistant.

                Analyze this error and provide:
                1. Explanation
                2. Suggested fix

                Error:
                %s
                """.formatted(message);

        String response = chatClient.prompt()
                .user(prompt)
                .call()
                .content();

        return new ResponseDTO(
                response,
                "Check null values and method calls"
        );

    }
}
