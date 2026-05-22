package com.devassist.service;

import com.devassist.dto.RequestDTO;
import com.devassist.dto.ResponseDTO;
import com.devassist.entity.DebugSession;
import com.devassist.entity.User;
import com.devassist.exception.APIException;
import com.devassist.repository.DebugSessionRepository;
import com.devassist.repository.UserRepository;
import com.devassist.util.AuthUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DebugServiceImpl implements DebugService{
    private final AiService aiService;
    private final DebugSessionRepository debugSessionRepository;
    private final UserRepository userRepository;


    @Override
    public ResponseDTO response(RequestDTO requestDTO) {
        String email = AuthUtil.logedInEmail();
        User user = userRepository.findByEmail(email).orElseThrow(()->
                new APIException("User not Found !" + false)
        );

        ResponseDTO aiResponse = aiService.analyze(requestDTO.message()) ;

        DebugSession debugSession = DebugSession.builder()
                        .originalInput(requestDTO.message())
                        .aiResponse(aiResponse.explanation()  + "\n\n" + aiResponse.suggestedFix())
                        .user(user)
                        .build();
      debugSessionRepository.save(debugSession);
        return aiResponse;
    }
}
