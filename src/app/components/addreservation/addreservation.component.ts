import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReservationserviceService } from 'src/app/reservationservice.service';

@Component({
  selector: 'app-addreservation',
  templateUrl: './addreservation.component.html',
  styleUrls: ['./addreservation.component.css']
})
export class AddreservationComponent implements OnInit{
  constructor (private service:ReservationserviceService ,private router:Router){}
  data:any

  form =new FormGroup({
    reference: new FormControl('', [Validators.required]),
    dateReservation: new FormControl('', [Validators.required]),
    lieuDep: new FormControl('', [Validators.required]),
    lieuArr: new FormControl('', [Validators.required])

  })
  ngOnInit(): void {
  }
  submit(){
    this.data = this.form.value
    console.log(this.data)

    this.service.addreservation(this.data).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(['/']);

}
imageUrl = 'https://img.freepik.com/premium-photo/fun-monkey_183364-4793.jpg?w=996';

}
