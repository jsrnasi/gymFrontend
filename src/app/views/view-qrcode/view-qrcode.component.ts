import {AfterViewInit, ViewChild, Component } from '@angular/core';
import { QrcodeService } from '../../service/qrcode.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  ScannerQRCodeConfig,
  ScannerQRCodeResult,
  NgxScannerQrcodeService,
  NgxScannerQrcodeComponent,
  ScannerQRCodeSelectedFiles,
} from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-view-qrcode',
  templateUrl: './view-qrcode.component.html',
  styleUrls: ['./view-qrcode.component.scss']
})
export class ViewQRCodeComponent {

 

  constructor(private http:HttpClient,private _router: Router,private qrcodeService:QrcodeService,private qrcode: NgxScannerQrcodeService) { 


  }


}
