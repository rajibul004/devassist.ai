package com.devassist.service;


import com.devassist.dto.ResponseDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class AiServiceImpl implements AiService {


    private final ChatClient chatClient;


    @Override
    public ResponseDTO analyze(String message) {


        String prompt = """
                Act as a Principal Software Engineer and Software Architect 
                with 15+ years of experience.

                Analyze any software:
                - code
                - error
                - architecture
                - configuration
                - performance issue


                Provide output EXACTLY:

                Explanation:
                Explain:
                - what is happening
                - root cause
                - why it happens


                Suggested Fix:
                Provide:
                - production ready solution
                - improved code if needed
                - best practices


                Problem:
                ----------------
                %s
                ----------------

                Think like a senior engineer.
                """.formatted(message);



        String aiResponse = chatClient
                .prompt()
                .user(prompt)
                .call()
                .content();



        return new ResponseDTO(
                extractExplanation(aiResponse),
                extractSuggestedFix(aiResponse)
        );
    }



    private String extractExplanation(String response){

        String start = "Explanation:";
        String end = "Suggested Fix:";


        if(response.contains(start)
                && response.contains(end)){

            return response.substring(
                    response.indexOf(start)+start.length(),
                    response.indexOf(end)
            ).trim();

        }


        return response;
    }



    private String extractSuggestedFix(String response){


        String marker = "Suggested Fix:";


        if(response.contains(marker)){

            return response.substring(
                    response.indexOf(marker)
                            + marker.length()
            ).trim();

        }


        return "No suggested fix available";
    }

}