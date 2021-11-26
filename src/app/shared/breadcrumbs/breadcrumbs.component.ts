import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo!: string;
  public tituloSubs$!: Subscription

  constructor( private router: Router ) { 
    this.tituloSubs$ = this.getArgumentsData()
                        .subscribe( data => {
                          console.log(data);
                          this.titulo = data.titulo;
                          document.title = `AdminPro - ${this.titulo}`;
                        } )
  }
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getArgumentsData() {
    return this.router.events
    .pipe(
      filter( (event): event is ActivationEnd => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data )
    )

  }

    

}
