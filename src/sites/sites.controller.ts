import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './sites.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('sites')
export class SitesController {

    constructor(private usersService: UsersService) {
    }
}
