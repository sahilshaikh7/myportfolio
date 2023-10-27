import { Component, OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
 
  constructor(private alertController: AlertController) {}
 
  ngOnInit() {
    this.initializeTyped();
  }

  initializeTyped() {
    var typed = new Typed('.typing', {
      strings: [
        'FullStack developer',
        'Fresher',
        'Designer',
        'Freelancer'
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
    var typed = new Typed('.typing-2', {
      strings: [
        'FullStack developer',
        'Fresher',
        'Designer',
        'Freelancer'
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'customcss',
      header: 'Project Details',
      message: 'Here s a small text description for the card content. Nothing more, nothing less',
      buttons: ['OK'],
    });

    await alert.present();
  }

}

