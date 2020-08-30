import { Repo } from "./repo"
import { from } from 'rxjs';

export const Repos:Repo[] = [
    new Repo(1, 'IPweek1', 'angular1',new Date(2020,3,14)),
    new Repo(2, 'IPweek2', 'angular2',new Date(2020,4,20)),
    new Repo(3, 'IPweek3', 'python',new Date(2020,1,30))
  ];