import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { Expansion } from "@angular/compiler";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@NgModule({
    declarations: [ 
        HeaderComponent,
        FooterComponent


    ],
imports:[
    IonicModule
],
exports:[
    HeaderComponent,
    FooterComponent
]
})
export class SharedModule{
    
}