import { Injectable } from '@angular/core';
import { Repos } from '../repos';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  getRepos(){
    return Repos
  }

  getRepo(id){
    for (let repo of Repos){
      if (repo.id == id){
        return repo;
      }
    }
  }

  constructor() { }
}
