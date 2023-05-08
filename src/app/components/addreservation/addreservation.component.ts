import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationserviceService } from 'src/app/reservationservice.service';
import { Reservation } from 'src/app/Reservation';

@Component({
  selector: 'app-addreservation',
  templateUrl: './addreservation.component.html',
  styleUrls: ['./addreservation.component.css']
})
export class AddreservationComponent implements OnInit {
  show = false;
  data!: Reservation;

  form = new FormGroup({
    reference: new FormControl('', [Validators.required]),
    dateReservation: new FormControl('', [Validators.required]),
    lieuDep: new FormControl('', [Validators.required]),
    lieuArr: new FormControl('', [Validators.required])
  });

  constructor(private service: ReservationserviceService, private router: Router) {}

  ngOnInit(): void {}

  submit() {
    this.data = this.form.value as unknown as Reservation;
    console.log(this.data);

    this.service.addreservation(this.data).subscribe(
      (data) => {
        console.log(data);
        try {
          const jsonData = JSON.parse(JSON.stringify(data));
          console.log(jsonData);
        } catch (err) {
          console.error(err);
        }
      },
      (error) => {
        console.error('Error:', error.error);
      }
    );

    this.router.navigate(['']);
  }

  imageUrl = 'https://img.freepik.com/premium-photo/fun-monkey_183364-4793.jpg?w=996';
}
