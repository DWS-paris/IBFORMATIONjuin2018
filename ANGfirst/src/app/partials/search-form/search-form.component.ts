import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styles: [`
    input{ font-size: 3rem; }
  `]
})
export class SearchFormComponent implements OnInit {

  // Récupérer la valeur envoyée par le composant parent
  @Input() inputTitle: String;

  // Créer un événement personnalisé
  @Output() sendDataEvent = new EventEmitter();

  // Créer une variable pour le input
  public inputValue: String = ``;

  constructor() { }

  public searchThis = () => {
    // Emettre l'événement sendDataEvent
    this.sendDataEvent.emit( this.inputValue );
  };

  // Fonction applée à la fin du chargement composant
  ngOnInit() {
  }

}
