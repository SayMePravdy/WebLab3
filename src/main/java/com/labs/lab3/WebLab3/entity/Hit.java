package com.labs.lab3.WebLab3.entity;

public class Hit {
    private double x;
    private double y;
    private double r;
    private String isHit;

    public Hit(){}

    public Hit(double x, double y, double r) {
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
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public void checkHit() {
        if (x >= 0 && y >= 0 && y <= r && x <= r / 2) {
            setIsHit("Да");
            return;
        }
        if (x <= 0 && y >= 0 && (x * x + y * y <= (r * r) / 4)) {
            setIsHit("Да");
            return;
        }
        setIsHit(x >= 0 && y <= 0 && y >= (2 * x - r) ? "Да" : "Нет");
    }
}
