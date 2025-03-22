import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClienteDTO } from '../../../DTO/cliente.model';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrl: './cliente-edit.component.less'
})
export class ClienteEditComponent {

  /**
   *
   */
  constructor(
  ) { 
  }

  onNoClick(){
    
  }
}
