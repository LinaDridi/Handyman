package project_framework.handyman.Services.Interfaces;

import project_framework.handyman.models.Invoice;

public interface InvoiceService {

    public Invoice findById(int theId);

    /**
     * Save Project.
     *
     */
    public void save(Invoice invoice);

/**
 * delete Project by id.
 *
*/
 }

