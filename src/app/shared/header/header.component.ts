import { NgIfContext } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { UsersService } from 'src/app/components/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  LoggedIn!: TemplateRef<NgIfContext<boolean>> | null;

  constructor(public usersService: UsersService) { }
  ngOnInit(): void {
  }
}