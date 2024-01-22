import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.css']
})
export class SidebarContentComponent {
  @Input()
  // tsconfig.json -> strict is set to "false".
  routers: { 
    icons: IconProp,
    path: string,
    label: string
  }
}
