import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {GeneralModule} from "../../general/general.module";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink, GeneralModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
