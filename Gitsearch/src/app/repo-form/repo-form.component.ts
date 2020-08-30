import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo-form',
  templateUrl: './repo-form.component.html',
  styleUrls: ['./repo-form.component.css']
})
export class RepoFormComponent implements OnInit {
  newRepo = new Repo(0,"","",new Date());

  @Output() addRepo = new EventEmitter<Repo>();

  submitRepo(){
    this.addRepo.emit(this.newRepo);
      }

  constructor() { }

  ngOnInit(): void {
  }

}
