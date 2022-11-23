import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GalleryModule } from './gallery/gallery.module';

@Module({
  imports: [CommonModule, AuthModule, UserModule, GalleryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

