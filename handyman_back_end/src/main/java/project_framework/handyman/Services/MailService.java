package project_framework.handyman.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import project_framework.handyman.models.Artisan;
import project_framework.handyman.models.Client;
import project_framework.handyman.models.Contract;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class MailService {


    private JavaMailSender javaMailSender;


    @Autowired
    public MailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendEmailWithAttachment(Client client , Artisan artisan, Contract contract) throws MailException, MessagingException {

        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

        helper.setTo(new String[]{artisan.getEmail(),client.getEmail()});
        helper.setSubject("Project Started:check your Project Contract");
        helper.setText("The project has been accepted by both parties.Please find attached the generated contract");

        ClassPathResource classPathResource = new ClassPathResource(contract.getUrl_pdf_contract());
        helper.addAttachment(classPathResource.getFilename(), classPathResource);

        javaMailSender.send(mimeMessage);
    }



}
