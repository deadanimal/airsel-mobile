declare var broadcaster: any;

import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import {
  AlertController,
  LoadingController
} from "@ionic/angular";

import { NotificationsService } from "src/app/shared/services/notifications/notifications.service";
import { AssetsService } from 'src/app/shared/services/assets/assets.service';
import { AssetLocatioSyncService } from 'src/app/shared/services/asset-location-sync/asset-location-sync.service';

@Component({
  selector: 'app-multiple-retagging',
  templateUrl: './multiple-retagging.page.html',
  styleUrls: ['./multiple-retagging.page.scss'],
})
export class MultipleRetaggingPage implements OnInit {
  assetdetailmultiple = [];
  feed: any;
  // feed = {
  //   badge_no: "MOTR-0000789", 
  //   asset_id: '040570271910', 
  //   asset_type: "MOTOR-SQUIRRL-CAGE", 
  //   asset_location: "TAMAN PUNCAK SAUJANA PUMP HOUSE-PUMP-02"
  // };
  type = "";
  public scanValue: any;
  assetloc: any;

  constructor(
    public alertController: AlertController,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    private router: Router,
    public notificationService: NotificationsService,
    private assetsService: AssetsService,
    private ngZone: NgZone,
    private assetLocatioSyncService: AssetLocatioSyncService,
    ) { 
      this.route.queryParams.subscribe((params) => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.type = this.router.getCurrentNavigation().extras.state.type;
        }
      });
    }

  ngOnInit() {
    console.log("trytype", this.type);
  }

  ionViewWillEnter() {
    
  }

  ionViewDidEnter() {

  }

  ionViewWillLeave(){

  }

  ionViewDidLeave(){
    
  }

  GetAssetData() {
    // for (let i = 0; i < 3; i++) {
    //   this.assetdetailmultiple.push(this.feed)
    // }
  }

  clickEdit(badge_no: string) {
    //console.log("try1", badge_no);
    this.assetsService.filter("badge_no=" + badge_no).subscribe(
      (res) => {
        var assetregistration = res['results'];
        //console.log("try1", assetregistration[0]);
        if(assetregistration[0]){
          var navigationExtras: NavigationExtras = {
            state: {
              asset_detail: assetregistration[0]
            }
          }
        }
        this.router.navigate(["/technical/asset-detail"], navigationExtras);
      },
      (err) => {
        console.error("err", err);
      }
    )
  }
  
  homePage(path: string) {
    this.router.navigate([path]);
  }

  StartScan() {
    this.assetdetailmultiple = [];
    if (this.type == "RFID") {
      this.loadingController
      .create({
        message: "Please scan the RFID tag ...",
        backdropDismiss:true
      })
      .then((loading) => {
        loading.present();
        //loading.dismiss();
        this.GetAssetData();
        console.log("[register onRegister2DBarcodeListener] ");
        const ev = "com.scanner.broadcast";
        var isGlobal = true;

        var listener = (event) => {
          console.log(JSON.stringify(event));

          if (event.SCAN_STATE == "success") {
            this.ngZone.run(() => {
              
                var data = event.data.trim();

                //this.updateQrbarcode(event.data, asset);

                //loading.dismiss();
                //broadcaster.removeEventListener(ev, listener);
                //this.updateQrbarcode(event.data, asset);
                
                //var badge = asset.badge_number.trim();
                // if(data == badge){
                  
                // }else{
                //     this.warningAlert(
                //       "Error",
                //       "Batch number not match. Please try again,"
                //     );
                // }
                
              
            });
          }
        };
      });
    }
    else if (this.type == "QRC") {
      this.loadingController
      .create({
        message: "Please scan the QR Code ...",
        backdropDismiss:true
      })
      .then((loading) => {
        loading.present();
        this.GetAssetData();

        const ev = "com.scanner.broadcast";
        var isGlobal = true;
        var listener = (event) => {
          console.log(JSON.stringify(event));

          if (event.SCAN_STATE == "success") {
            var data = event.data.trim();
            var addinto = "true";
            this.assetdetailmultiple.forEach(element => {
              if(data == element.badge_no){
                addinto = "false";
              }
            });
            if (addinto == "true"){
              this.updateQrbarcode(data);
            }

            // this.ngZone.run(() => {
            //   broadcaster.removeEventListener(ev, listener);          
            // });
          }
        };
        broadcaster.addEventListener(ev, isGlobal, listener);
      })
    }
  }

  updateQrbarcode(data) {
    this.scanValue = data;
    this.assetsService.filter("badge_no=" + this.scanValue).subscribe(
      (res) => {
        if (res['results'].length > 0) {
          this.assetLocatioSyncService.filter("node_id=" + res['results'][0].node_id).subscribe(
            (res) => {
              if (res.length > 0) {
                this.assetloc = res[0].description
              }
            }
          );

          this.feed = {
            badge_no: res[0].badge_no, 
            asset_id: res[0].asset_id, 
            asset_type: res[0].asset_type, 
            asset_location: this.assetloc
          };
        }
      }
    )
    this.assetdetailmultiple.push(this.feed)
  }
}
