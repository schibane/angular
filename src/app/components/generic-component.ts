import { OnDestroy, Component } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

@Component({
  template: '',
})
export class GenericComponent implements OnDestroy {
  protected ngUnsubscribe: Subject<void> = new Subject<void>();
  subscriptions = new Subscription();
  waitingSalesOrdersEvent = new Subscription();

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this.subscriptions.unsubscribe();
    this.waitingSalesOrdersEvent.unsubscribe();
  }
}
// export class PutWallDistributionComponent
//   extends GenericComponent
//   implements OnInit
// .pipe(takeUntil(this.ngUnsubscribe))
