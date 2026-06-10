package com.devassist.service;

import com.devassist.dto.RequestDTO;
import com.devassist.dto.ResponseDTO;

public interface PdfService {
    byte[] pdfGenerate(ResponseDTO responseDTO);
}
