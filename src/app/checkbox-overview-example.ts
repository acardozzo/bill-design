import { Component } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

/**
 * @title Basic checkboxes
 */
@Component({
  selector: "checkbox-overview-example",
  templateUrl: "checkbox-overview-example.html",
  styleUrls: ["checkbox-overview-example.css"]
})
export class CheckboxOverviewExample {

  bill = {
    billType: "service",
    totalInvoice: 73.34,
    accountNumner: "670157667329",
    invoiceNumber: "129219843",
    invoiceDate: "March 3 , 2018",
    paymantMethod: "Visa*********555",
    items: [
      {
        service: "Computer Repair and Help",
        serviceValue: 120.0,
        uuid: "003449",
        refund: {
          refunded: true,
          refundValue: -90.0,
          transactionId: "txn_1DOPCMJTIT8vqFoAyZ2wywQw",
          card: "xxxxxxxxx555",
          note: "Cancellation fee applied $30,00",
          dueDate: "01/05/2018"
        }
      },
      {
        service: "Virus Clean up",
        serviceValue: 20.0,
        uuid: "003450",
        refund: {
          refunded: false,
          refundValue: -90.0,
          transactionId: "txn_1DOPCMJTIT8vqFoAyZ2wywQw",
          card: "xxxxxxxxx555",
          note: "Cancellation fee applied $30,00",
          dueDate: "01/05/2018"
        }
      },
      {
        service: "Hookup TV",
        serviceValue: 24.34,
        uuid: "003451",
        refund: {
          refunded: false,
          refundValue: -90.0,
          transactionId: "txn_1DOPCMJTIT8vqFoAyZ2wywQw",
          card: "xxxxxxxxx555",
          note: "Cancellation fee applied $30,00",
          dueDate: "01/05/2018"
        }
      }
    ]
  };
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
