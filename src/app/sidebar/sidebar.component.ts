import { Component, Inject } from '@angular/core';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {

  routesArray: {icons: IconProp, path: string, label: string}[] = [
    {icons: faFileInvoice, path: '/UploadCv', label: 'Upload CV'},
    {icons: faStar, path: '/Login', label: 'Login'},
    {icons: faClipboardList, path: '/Register', label: 'Register'}
  ]

}