import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainPagesComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [MainPagesComponent, ListComponent, FormComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPagesComponent],
})
export class DbzModule {}
