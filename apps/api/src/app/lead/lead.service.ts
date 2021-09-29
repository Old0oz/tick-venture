import { Injectable } from '@nestjs/common';
import { Lead, mockLeads } from '../../../../../libs/api-interfaces/src';

@Injectable()
export class LeadService {
    private leads: Lead[] = [];
    constructor() {
        this.leads = mockLeads;
    }
    create(lead: Lead) {
        this.leads.push(lead);
    }
    findAll(): Lead[] {
        return this.leads;
    }
    find(id: number): Lead {
        return this.leads.find(item => {
            return item.id == id;
        });
    }
    remove(id: number): void {
        this.leads = this.leads.filter(item => {
            return item.id != id;
        });
    }
    update(id: number, lead: Lead): Lead {
        const tmpIndex = this.leads.findIndex(obj => obj.id == id);
        const updatedObject = { ...this.leads[tmpIndex], ...lead };
        this.leads = [
            ...this.leads.slice(0, tmpIndex),
            updatedObject,
            ...this.leads.slice(tmpIndex + 1)
        ];
        return updatedObject;
    }
}
