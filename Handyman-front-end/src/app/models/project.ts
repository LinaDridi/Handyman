import { throwMatDialogContentAlreadyAttachedError } from '@angular/material'

export class Project {
    start_date: string
    deadline: string
    address: string
    accepted_by_artisan: boolean
    accepted_by_client: boolean
    description: string
    //img
    facture: string
    contrat: string
    title: string
    state: string
    currency: string
    cost: number
    constructor(start_date: string, deadline: string, address: string, description: string, title: string) {

        this.start_date = start_date;
        this.deadline = deadline;
        this.address = address;
        this.description = description;
        this.title = title;
        this.accepted_by_artisan = false;
        this.accepted_by_client = false;
        this.facture = '';
        this.contrat = '';
        this.state = 'waiting for artisan';
        this.cost = null;
        this.currency = null;

    }

}
