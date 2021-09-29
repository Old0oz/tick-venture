import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { Lead } from '../../../../../libs/api-interfaces/src';
import { LeadService } from './lead.service';



@Controller('lead')
export class LeadController {
    constructor(private leadService: LeadService) { }
    @Get()
    findAll(): Observable<Lead[]> {
        return of(this.leadService.findAll());
    }
    @Get(':id')
    findOne(@Param('id') id): Observable<Lead> {
        return of(this.leadService.find(id));
    }
    @Post()
    async create(@Body() lead: Lead) {
        this.leadService.create(lead);
        return lead;
    }
    @Put(':id')
    update(@Param('id') id: number, @Body() updateLead: Lead): Observable<Lead> {
        return of(this.leadService.update(id, updateLead));
    }
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.leadService.remove(id);
    }
}
