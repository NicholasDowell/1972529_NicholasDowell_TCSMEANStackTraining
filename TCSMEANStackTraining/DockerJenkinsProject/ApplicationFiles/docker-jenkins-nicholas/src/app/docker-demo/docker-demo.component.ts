import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docker-demo',
  templateUrl: './docker-demo.component.html',
  styleUrls: ['./docker-demo.component.css']
})
export class DockerDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Docker Demo Component loaded successfully!");
  }

}
