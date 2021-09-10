import { Component, OnInit } from '@angular/core';
import { Animation } from '@ionic/core';
import { AnimationController } from '@ionic/angular';


@Component({
  selector: 'app-ani4',
  templateUrl: './ani4.page.html',
  styleUrls: ['./ani4.page.scss'],
})

export class Ani4Page implements OnInit {


  constructor(private animationCtrl: AnimationController) {
    const animation: Animation = animationCtrl.create()
    .addElement(document.querySelector('capa'))
    .duration(1000)
    .fromTo('opacity',1,0);
    animation.play;
  }

  ngOnInit() {
  }

}
