import { Injectable } from '@nestjs/common';
@Injectable()
export class StartupsService { findAll(){ return [{ id: 1, name: 'Demo' }]; } }
