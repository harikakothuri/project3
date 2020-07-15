import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name: string='';
  names: string;

  constructor(private route: Router) { }

  ngOnInit(): void {
    
  }
  func(){
    this.names = this.name;
    // console.log(this.names);
    this.route.navigate(['/quiz', {'key': this.name}]);
  }


}
