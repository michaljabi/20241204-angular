import {Component, inject, OnDestroy} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {AsyncPipe} from '@angular/common';
import {interval, map, share, Subscription} from 'rxjs';

@Component({
  selector: 'app-not-found-page',
  imports: [
    RouterLink,
    AsyncPipe
  ],
  template: `
    <div>
      <div class="alert alert-warning">
        Niestety 🥹 strona <code>{{pagePath}}</code> nie istnieje

        <div>{{ pathString$ | async  }}<div>
      </div>
      <a routerLink="/" class="btn btn-outline-info">
        Powrót do 🏠 {{ intervalHot$ | async }}
      </a>
    </div>
  `,
  styles: ``
})
export class NotFoundPageComponent implements OnDestroy {
  //todo: show path that is not found
  pagePath = '/hello/ok'
  // informacje od routera:
  activatedRoute = inject(ActivatedRoute);
  pathString$ = this.activatedRoute.url.pipe(map(url => url.join('/')))


  // COLD STREAM
  interval$ = interval(1000)
  // HOT STREAM
  intervalHot$ = this.interval$.pipe(share())
  intervalSub = new Subscription()

  constructor() {
    this.activatedRoute.url.subscribe(url => {
      // console.log(url.join('/'))
      this.pagePath = url.join('/')
    })

    // this.activatedRoute.params.subscribe(params => {
    //   console.log(params)
    // })

    setTimeout(() => {
      this.intervalSub = this.intervalHot$.subscribe(val => {
        console.log(val)
      })
    }, 7000)
  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe()
  }
}
