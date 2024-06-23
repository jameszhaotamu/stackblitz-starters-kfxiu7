import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, HostBinding } from '@angular/core';
import { Player } from '../players';
import { enterLeaveAnimation } from './animations';
import { PlayerDetailsComponent } from './player-details/player-details.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  animations: [
    enterLeaveAnimation
  ],
  imports: [NgOptimizedImage, CommonModule, OverlayModule, PlayerDetailsComponent],
  standalone: true
})
export class PlayerComponent {
  @Input({required: true}) player!: Player;
  @HostBinding('@enterLeaveAnimation') animate = true;
  protected detailsOpen = false;
}
