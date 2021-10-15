package com.labs.lab3.WebLab3.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Hit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private double x;
    private double y;
    private int r;
    private String isHit;

    public Hit(){}

    public Hit(double x, double y, int r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.isHit = "Нет";
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
        return Double.parseDouble(strY.length() > 4 ? strY.substring(0, 4) : strY);
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
