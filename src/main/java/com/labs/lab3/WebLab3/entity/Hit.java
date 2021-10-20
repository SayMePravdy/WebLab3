package com.labs.lab3.WebLab3.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@Entity
public class Hit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private double x;
    private double y;
    private int r;
    private String isHit;
    private double executionTime = 0;
    private LocalDateTime currentTime = LocalDateTime.now();

    public double getExecutionTime() {
        return executionTime;
    }

    public Hit(){}

    public Hit(double x, double y, int r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.isHit = "Нет";
    }

    public void setExecutionTime(double executionTime) {
        this.executionTime = executionTime;
    }

    public String getCurrentTime() {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        return currentTime.format(formatter);
    }

    public void setCurrentTime(LocalDateTime currentTime) {
        this.currentTime = currentTime;
    }

    public String getIsHit() {
        return isHit;
    }

    public void setIsHit(String isHit) {
        this.isHit = isHit;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        String strY = String.valueOf(y);
        int minus = strY.charAt(0) == '-' ? 1 : 0;
        return Double.parseDouble(strY.length() > 6 + minus ? strY.substring(0, 6 + minus) : strY);
    }

    public void setY(double y) {
        this.y = y;
    }

    public int getR() {
        return r;
    }

    public void setR(int r) {
        this.r = r;
    }

    public void checkHit() {
        if (x >= 0 && y >= 0 && y <= r && x * 2 <= r) {
            setIsHit("Да");
            return;
        }
        if (x <= 0 && y >= 0 && ((x * x + y * y) * 4 <= (r * r))) {
            setIsHit("Да");
            return;
        }
        setIsHit(x >= 0 && y <= 0 && y >= (2 * x - r) ? "Да" : "Нет");
    }
}
