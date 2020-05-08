import { Test, TestingModule } from '@nestjs/testing';
import { SitesController } from './sites.controller';

describe('Users Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [SitesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: SitesController = module.get<SitesController>(SitesController);
    expect(controller).toBeDefined();
  });
});
