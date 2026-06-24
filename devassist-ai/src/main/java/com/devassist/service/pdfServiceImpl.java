package com.devassist.service;

import com.devassist.dto.ResponseDTO;
import com.devassist.entity.User;
import com.devassist.exception.APIException;
import com.devassist.repository.DebugSessionRepository;
import com.devassist.repository.UserRepository;
import com.devassist.util.AuthUtil;
import com.lowagie.text.Document;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfWriter;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;

@Service
public class pdfServiceImpl implements PdfService{

    private final DebugSessionRepository debugSessionRepository;
    private final UserRepository userRepository;

    public pdfServiceImpl(DebugSessionRepository debugSessionRepository, UserRepository userRepository) {
        this.debugSessionRepository = debugSessionRepository;
        this.userRepository = userRepository;
    }


    @Override
    public byte[] pdfGenerate(ResponseDTO responseDTO) {
        String email = AuthUtil.logedInEmail();
        User user = userRepository.findByEmail(email).orElseThrow(()->
                       new APIException("User not found! "));

        ByteArrayOutputStream outputStream =
                new ByteArrayOutputStream();
        Document document = new Document();

        PdfWriter.getInstance(
                document, outputStream
        );
        document.open();
        document.add(
                new Paragraph("Explanation:\n" +
                        responseDTO.explanation())
        );

        document.add(
                new Paragraph("Suggested Fix:\n"+
                        responseDTO.suggestedFix())
        );  document.close();


        return outputStream.toByteArray();

    }
}
