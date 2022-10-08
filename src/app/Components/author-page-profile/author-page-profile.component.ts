import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'author-page-profile',
  templateUrl: './author-page-profile.component.html',
  styleUrls: ['./author-page-profile.component.css']
})
export class AuthorPageProfileComponent implements OnInit {
  isSubscribed: boolean;
  constructor() {
    this.isSubscribed = true;
  }

  ngOnInit(): void {
  }

  changeSubscriptionStatus(): void {
    this.isSubscribed = !this.isSubscribed;
  }

}