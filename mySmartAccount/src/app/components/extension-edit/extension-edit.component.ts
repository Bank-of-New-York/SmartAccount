import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Extension } from '../../model/Extension';
import { LocalStorageService } from '../../services/local-storage.service';
import { ExtensionService } from '../../services/extension.service';
import { SmartAccountService } from '../../services/smart-account.service';
import { ExtensionData } from '../../model/ExtensionData';

@Component({
  selector: 'app-extension-edit',
  templateUrl: './extension-edit.component.html',
  styleUrls: ['./extension-edit.component.css']
})
export class ExtensionEditComponent implements OnInit {

  extension: Extension;
  loading: boolean;

  constructor(private route: ActivatedRoute, private zone: NgZone, 
    private localStorageService: LocalStorageService, 
    private extensionService: ExtensionService,
    private smartAccountService : SmartAccountService) { }

  ngOnInit() {
    var self = this;
    this.route.params.subscribe(params => {
      var address = params['address'];
      var extension: Extension = this.getExtensionByAddress(address);
      this.loading = true;
      this.extensionService.getExtension(extension.address).subscribe(result => {
        self.zone.run(() => {
          self.extension = result;
          self.loading = false;
        })
        
        // self.extensionService.getSetupData(self.smartAccountService.getContractAddress(), 
        // self.extension.address, self.extension.returnSetupTypes()).subscribe(ret => {
        //   self.extension.addSetupParameters(ret);
        // });
      });
    });
  }

  getExtensionByAddress(address) {
    var extensionList = this.extensionService.getExtensionList();
    var ret : Extension;
    extensionList.forEach(extension => {
      if (extension.address == address) {
        ret = extension;
      }
    });
    return ret;
  }

  onChangeActiveStatus(event) {

  }
}
