import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caesar-cipher',
  templateUrl: 'caesar-cipher.component.html',
  styleUrls: [ './caesar-cipher.component.css' ],
})

export class CaesarCipherComponent implements OnInit {
  cypher!: string;
  offset = 3;
  alphabet = 'abcdefghijklmnopqrstuvwxyzабвгдеєжзиіїйклмнопрстуфхцчшщьюя0123456789!?., ';
  fullAlphabet!: string;
  isAllowAccess = false;

  constructor() {
    this.fullAlphabet = this.alphabet + this.alphabet + this.alphabet;
  }

  ngOnInit() { }

  handleEncrypt() {
    this.offset = (this.offset % this.alphabet.length);
    let cipherFinish = '';

    for (let i = 0; i < this.cypher.length; i++) {
      let letter = this.cypher[i];
      let upper = (letter === letter.toUpperCase());
      letter = letter.toLowerCase();

      let index = this.alphabet.indexOf(letter);
      if (index === -1) {
        cipherFinish += letter;
      } else {
        index = ((index + this.offset) + this.alphabet.length);
        let nextLetter = (this.fullAlphabet)[index];
        if (upper) nextLetter = nextLetter.toUpperCase();
        cipherFinish += nextLetter;
      }

    }
    this.cypher = cipherFinish;
  }

  handleDecrypt() {
    this.offset = (this.offset % this.alphabet.length);
    let cipherFinish = '';

    for (let i = 0; i < this.cypher.length; i++) {
      let letter = this.cypher[i];
      let upper = (letter === letter.toUpperCase());
      letter = letter.toLowerCase();

      let index = this.alphabet.indexOf(letter);
      if (index === -1) {
        cipherFinish += letter;
      } else {
        index = ((index - this.offset) + this.alphabet.length);
        let nextLetter = (this.fullAlphabet)[index];
        if (upper) nextLetter = nextLetter.toUpperCase();
        cipherFinish += nextLetter;
      }

    }
    this.cypher = cipherFinish;
  }
}
