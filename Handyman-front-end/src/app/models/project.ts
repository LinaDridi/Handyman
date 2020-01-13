import { throwMatDialogContentAlreadyAttachedError } from '@angular/material'
import { logging } from 'protractor'
import {Devis} from "./devis";

export class Project {
    project_id: number;
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
    artisan_id: number;
    client_username: string;
    service: string;
    devis : Devis [];
    constructor(start_date: string, deadline: string, address: string, description: string, title: string, artisan_id: number, client_username: string) {

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
        this.artisan_id = artisan_id;
        this.client_username = client_username;

    }

}
