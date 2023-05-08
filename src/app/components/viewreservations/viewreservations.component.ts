import { Component, OnInit } from '@angular/core';
import { ReservationserviceService } from 'src/app/reservationservice.service';
import { Reservation } from 'src/app/Reservation';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewreservations',
  templateUrl: './viewreservations.component.html',
  styleUrls: ['./viewreservations.component.css']
})
export class ViewreservationsComponent implements OnInit{
  reservations: Reservation[];
  searchTerm :string ='';

  constructor(private reservationsService: ReservationserviceService, private router: Router) {
    this.reservations = [];
    
    }
    ngOnInit(){
      this.reservationsService.getReservations().subscribe()
    }
    deleteReservations(id: string) {
      this.reservationsService.deleteReservation(id).subscribe
      this.ngOnInit();
      }
    
      
      showReservations(id: string): void {
          this.router.navigate(['reservationId', id]);
        }
        search(): void {
          this.reservationsService.search(this.searchTerm).subscribe((data: Reservation[]) => {
            this.reservations = data;
          });
        }
      

}
