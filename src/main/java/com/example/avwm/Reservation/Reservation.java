package com.example.avwm.Reservation;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "reservation")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int reservationid;

    private String resname;
    private LocalTime reservationtime;
    private LocalDate reservationdate;

    // Getters and Setters
    public int getReservationid() {
        return reservationid;
    }

    public void setReservationid(int reservationid) {
        this.reservationid = reservationid;
    }

    public String getResname() {
        return resname;
    }

    public void setResname(String resname) {
        this.resname = resname;
    }

    public LocalTime getReservationtime() {
        return reservationtime;
    }

    public void setReservationtime(LocalTime reservationtime) {
        this.reservationtime = reservationtime;
    }

    public LocalDate getReservationdate() {
        return reservationdate;
    }

    public void setReservationdate(LocalDate reservationdate) {
        this.reservationdate = reservationdate;
    }
}
