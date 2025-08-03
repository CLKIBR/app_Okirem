import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdminFooter, AdminHeader } from '../../shared';
import { navItems } from './student-nav';
import { ContainerComponent, ShadowOnScrollDirective, SharedModule, SidebarBrandComponent, SidebarComponent, 
  SidebarFooterComponent, SidebarHeaderComponent, SidebarNavComponent, SidebarToggleDirective, SidebarTogglerDirective } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { NgScrollbar } from 'ngx-scrollbar';

@Component({
  selector: 'app-student',
  imports: [
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarBrandComponent,
    RouterLink,
    IconDirective,
    NgScrollbar,
    SidebarNavComponent,
    SidebarFooterComponent,
    SidebarToggleDirective,
    SidebarTogglerDirective,
    ShadowOnScrollDirective,
    ContainerComponent,
    RouterOutlet,
    SharedModule,
    AdminFooter,
    AdminHeader
  ],
  templateUrl: './student.html',
  styleUrls: ['./student.scss']
})
export class Student {
  public navItems = navItems;
  @ViewChild('scrollable', { read: ElementRef }) scrollbarElementRef!: ElementRef;

  onScrollbarUpdate() {
    const scrollElement = this.scrollbarElementRef?.nativeElement?.querySelector('.scrollable-content');
    
    if (scrollElement) {
      const scrollTop = scrollElement.scrollTop;
      console.log('Scroll Top:', scrollTop);
    }
  }
}
