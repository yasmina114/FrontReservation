import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from './Reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationserviceService {
  private url ="http://localhost:8081/commands/reservation";

  constructor(private http :HttpClient) { }
    
  // Add Reservations - Create
  addreservation(reservation: Reservation){
    return this.http.post<Reservation>(`${this.url}create`, reservation)
  }

  // Get Reservations- Read
  getReservations(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'reservations')
  }

  // Get Reservation by Id - Read
  getReservationById(id: String): Observable<Reservation>{
    return this.http.get<Reservation>(`${this.url}reservation/${id}`)
  }

 
  // Delete reservation - Delete
  deleteReservation(id: String): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${id}`)
  }

  search(query: string): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.url}search?q=${query}`);
  }

}
