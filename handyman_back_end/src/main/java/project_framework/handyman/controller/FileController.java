package project_framework.handyman.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import project_framework.handyman.Services.Util.FileService;
import project_framework.handyman.Services.Util.HeaderUtil;

import java.io.IOException;

@CrossOrigin(origins = "*")
@RestController
public class FileController {

    @Autowired
    private FileService fileService;
    @PostMapping(value = "/api/files")
    public ResponseEntity<?> handleFileUpload(@RequestParam("uploadFile") MultipartFile file) throws IOException {
        fileService.storeFile(file);
        return ResponseEntity.ok().headers(HeaderUtil.createAlert("FileStorage : Creation", file.getName())).build();
    }
}
