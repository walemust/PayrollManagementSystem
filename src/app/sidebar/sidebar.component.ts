import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  dashEm() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id: any = params.get('id');
        localStorage.setItem('employeeId', id);
      },
    });
  }
}
