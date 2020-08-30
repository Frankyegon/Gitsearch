import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Repo } from '../repo';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { RepoService } from '../repo-service/repo.service';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.css']
})
export class RepoDetailComponent implements OnInit {

  repo:Repo;
  //@Input() repo: Repo;
  //@Output() isComplete = new EventEmitter<boolean>();

  //repoDelete(complete:boolean){
    //this.isComplete.emit(complete);
  //}

  constructor(private route:ActivatedRoute, private service:RepoService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.repo = this.service.getRepo(id)
  }
}
