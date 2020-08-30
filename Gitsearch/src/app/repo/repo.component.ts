import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepoService } from '../repo-service/repo.service';
import { Repo } from '../repo';
import { AlertService } from '../alert-service/alert.service';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repos:Repo[]
  alertService:AlertService;
  quote:Quote;

  addNewRepo(repo){
    let repoLength = this.repos.length;
    repo.id = repoLength+1;
    repo.completeDate = new Date(repo.completeDate)
    this.repos.push(repo)
  }

  goToUrl(id){
    this.router.navigate(['/repos',id])
  }

  deleteRepo(index){
    let toDelete = confirm(`Are you sure you want to delete ${this.repos[index].name}`)

    if (toDelete){
      this.repos.splice(index,1)
      this.alertService.alertMe("Goal has been deleted")
    }
  }

  constructor(repoService:RepoService, alertService:AlertService, private quoteService:QuoteRequestService, private router:Router) {
    this.repos = repoService.getRepos()
    this.alertService = alertService;
  }

  ngOnInit() {
    //this.quoteService.quoteRequest()
    //this.quote = this.quoteService.quote
  }

}
