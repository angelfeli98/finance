import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit(): void {
  }

  public signOut = async (): Promise<void> => {
    await this.userService.signOutUser();
    this.router.navigateByUrl('/login');
  }
}
