import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ColComponent, ContainerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.html',
  styleUrls: ['./account-settings.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountSettings {
  isOpen: boolean = true;
  @Input() role: 'student' | 'teacher' | 'parent' = 'student';
  @Input() user?: { fullName?: string; email?: string; };

  constructor(private http: HttpClient) {}

  deleteAccount() {
    const endpoint = `/api/${this.role}/delete-account`;
    this.http.post(endpoint, {}).subscribe({
      next: () => {
        // Hesap başarıyla silindi, kullanıcıyı çıkışa yönlendir
        window.location.href = '/login';
      },
      error: (err) => {
        // Hata yönetimi: kullanıcıya bilgilendirme göster
        alert('Hesap silme işlemi başarısız!');
      }
    });
  }

  eraseData() {
    const endpoint = `/api/${this.role}/erase-data`;
    this.http.post(endpoint, {}).subscribe({
      next: () => {
        // Veri başarıyla silindi, kullanıcıya bilgilendirme göster
        alert('Verileriniz başarıyla silindi.');
      },
      error: (err) => {
        // Hata yönetimi: kullanıcıya bilgilendirme göster
        alert('Veri silme işlemi başarısız!');
      }
    });
  }
}
