import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sites } from './sites.interface';
import { CreateSitesDto } from './dto/create-sites.dto';
@Injectable()
export class SitesService {

  constructor(@InjectModel('Sites') private sitesModel: Model<Sites>) {}
  async create(createSitesDto: CreateSitesDto) {

    let createdSites = new this.sitesModel(createSitesDto);
    return await createdSites.save();

  }

}
