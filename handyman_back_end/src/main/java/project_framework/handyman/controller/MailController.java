package project_framework.handyman.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import project_framework.handyman.Services.MailService;
import project_framework.handyman.models.Artisan;
import project_framework.handyman.models.Client;
import project_framework.handyman.models.Contract;

import javax.mail.MessagingException;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class MailController {

    @Autowired
    private MailService notificationService;

    //@Autowired
   // private Client user;

    @RequestMapping("/send-mail-attachment")
    public String sendWithAttachment(@RequestParam Artisan artisan , @RequestParam Client client , @RequestParam Contract contract ) throws MessagingException {

        /*
         * Creating a User with the help of User class that we have declared and setting
         * Email address of the sender.
         */
       // user.setEmailAddress("mukul.jaiswal786@gmail.com"); //Receiver's email address

        /*
         * Here we will call sendEmailWithAttachment() for Sending mail to the sender
         * that contains a attachment.
         */
        try {
            notificationService.sendEmailWithAttachment(client,artisan,contract);
        } catch (MailException mailException) {
            System.out.println(mailException);
        }		return "Congratulations! Your mail has been send to the user.";
    }

}
