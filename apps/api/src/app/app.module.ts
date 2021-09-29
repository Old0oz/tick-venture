import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadController } from './lead/lead.controller';
import { LeadService } from './lead/lead.service';


@Module({
  imports: [],
  controllers: [AppController, LeadController],
  providers: [AppService, LeadService],
})
export class AppModule { }
