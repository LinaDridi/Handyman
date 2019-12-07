package project_framework.handyman.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project_framework.handyman.Services.Interfaces.InvoiceService;
import project_framework.handyman.models.Invoice;
import project_framework.handyman.repositories.InvoiceRepository;

import java.util.Optional;

@Service
public class InvoiceServiceImpl implements  InvoiceService{
    public InvoiceRepository invoiceRepository;
    @Autowired
    public InvoiceServiceImpl(InvoiceRepository invoiceRepo)
    {
        invoiceRepository=invoiceRepo;
    }
    @Override
    public Invoice findById(int theId){
        Optional<Invoice> result = invoiceRepository.findById(theId);

        Invoice theinvoice = null;

        if (result.isPresent()) {

            theinvoice = result.get();

        }
        else {
            // we didn't find the Project
            throw new RuntimeException("Did not find invoice id - " + theId);
        }

        return theinvoice;
    }
    @Override
    public void save(Invoice invoice){
        invoiceRepository.save(invoice);
    }

}
