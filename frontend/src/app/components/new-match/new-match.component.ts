import { AddMatch } from './adddata';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data-service.service';


@Component({
  selector: 'app-new-match',
  templateUrl: './new-match.component.html',
  styleUrls: ['./new-match.component.css']
})
export class NewMatchComponent implements OnInit {
  addForm: FormGroup;

  loading = false;
  success = false;


  constructor(private fb: FormBuilder, private dataService: DataService) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      lane: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      gameId: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      champion: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      platformId: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9]*$')]
      ],
      queue: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      role: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]*$')]],
      season: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
    });
  }

  async submitHandler() {
    this.loading = true;
    const formData: AddMatch[] = this.addForm.value;
    try {
      this.dataService.addMatch(formData).subscribe();
      this.success = true;
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }
}
