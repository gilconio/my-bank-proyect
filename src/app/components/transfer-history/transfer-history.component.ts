import { Component, OnInit } from '@angular/core';
import { UnsubscribeOnDestroy } from 'src/app/utils/unsubscribe-on-destroy';

@Component({
  selector: 'app-transfer-history',
  templateUrl: './transfer-history.component.html',
  styleUrls: ['./transfer-history.component.css']
})
export class TransferHistoryComponent extends UnsubscribeOnDestroy implements OnInit {

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

}
