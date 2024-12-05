import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGavel, faPlus, faShoppingBasket, faUser, faSearch, faCartPlus, faEdit, faTag, faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [FontAwesomeModule]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faGavel, faPlus, faShoppingBasket, faUser, faSearch, faCartPlus, faEdit, faTag, faImage);
  }
}
