import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CaesarCipherModule } from '../page/caesar-cipher/caesar-cipher.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CaesarCipherModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
