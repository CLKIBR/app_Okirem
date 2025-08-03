const CryptoJS = require('crypto-js');
import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class DataEncryptionService {
  private secretKey = environment.encryptionSecretKey;

  encryptData(data: string): string {
    return CryptoJS.AES.encrypt(data, this.secretKey).toString();
  }

  decryptData(ciphertext: string): string {
    const bytes = CryptoJS.AES.decrypt(ciphertext, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
