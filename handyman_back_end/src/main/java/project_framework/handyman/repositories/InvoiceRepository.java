package project_framework.handyman.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project_framework.handyman.models.Invoice;

public interface InvoiceRepository extends JpaRepository<Invoice,Integer> {
}
