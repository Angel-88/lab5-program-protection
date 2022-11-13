import { NgModule } from '@angular/core';
import { CaesarCipherComponent } from './caesar-cipher.component';
import { FormsModule } from '@angular/forms';
import { LoginModule } from '../login/login.module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    FormsModule,
    LoginModule,
    CommonModule,
  ],
  exports: [
    CaesarCipherComponent,
  ],
  declarations: [ CaesarCipherComponent ],
  providers: [],
})
export class CaesarCipherModule {}
