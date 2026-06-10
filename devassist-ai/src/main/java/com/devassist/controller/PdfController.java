package com.devassist.controller;

import com.devassist.dto.RequestDTO;
import com.devassist.dto.ResponseDTO;
import com.devassist.service.PdfService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api")
@RestController
public class PdfController {
    private  final PdfService pdfService;

    public PdfController(PdfService pdfService) {
        this.pdfService = pdfService;
    }

    @PostMapping("/pdf/download")
    public ResponseEntity<byte[]> download(@RequestBody ResponseDTO responseDTO){

        byte[] pdf = pdfService.pdfGenerate(responseDTO);

        return ResponseEntity.ok().
                header(
                        HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=debug report.pdf"
                ).contentType(
                        MediaType.APPLICATION_PDF
                )
                .body(pdf);
    }
}
