package project_framework.handyman.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import project_framework.handyman.models.*;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class MailService {


    private JavaMailSender javaMailSender;


    @Autowired
    public MailService(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    public void sendEmailWithAttachment(User client, Artisan artisan, Contract contract) throws MailException, MessagingException {
        ClassPathResource classPathResource;

        System.out.println(client.getEmail());
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

        helper.setTo(new String[]{artisan.getEmail(), client.getEmail()});
        helper.setSubject("Project Started:check your Project Contract");
        helper.setText("The project has been accepted by both parties.Please find attached the generated contract");
        System.out.println(contract.getUrl_pdf_contract());

        classPathResource = new ClassPathResource(contract.getUrl_pdf_contract());

        System.out.println();
        helper.addAttachment(classPathResource.getFilename(), classPathResource);
        javaMailSender.send(mimeMessage);


    }

    public void sendMailFileBytes(User client, Artisan artisan, byte[] content, Contract contract) throws MailException, MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

        helper.setTo(new String[]{artisan.getEmail(), client.getEmail()});
        helper.setSubject("Project Started:check your Project Contract");
        helper.setText("The project has been accepted by both parties.Please find attached the generated contract");
        helper.addAttachment(contract.getUrl_pdf_contract(), new ByteArrayResource(content));

        javaMailSender.send(mimeMessage);


    }
    public void sendMailInvoiceBytes(User client, Artisan artisan, byte[] content, Invoice invoice) throws MailException, MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();

        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);

        helper.setTo(new String[]{artisan.getEmail(), client.getEmail()});
        helper.setSubject("Project payed:check your Project invoice");
        helper.setText("The project waspayed.Please find attached the generated invoice");
        helper.addAttachment(invoice.getUrl_pdf_invoice(), new ByteArrayResource(content));

        javaMailSender.send(mimeMessage);


    }


}
