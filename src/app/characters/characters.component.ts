import { Component, OnInit, ViewChild } from '@angular/core';
import { CharactersService } from '../characters.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];
  selectedCharacter: any;

  @ViewChild('characterDetailsModal') characterDetailsModal: any;

  constructor(private charactersService: CharactersService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.charactersService.getCharacters().subscribe(
      (response: any) => {
        this.characters = response.results;
      },
      error => {
        console.log(error);
      }
    );
  }

  openCharacterDetailsModal(character: any) {
    this.selectedCharacter = character;
    this.modalService.open(this.characterDetailsModal, { centered: true });
  }
}
