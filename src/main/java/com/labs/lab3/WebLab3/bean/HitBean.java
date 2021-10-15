package com.labs.lab3.WebLab3.bean;

import com.labs.lab3.WebLab3.entity.Hit;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Named;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Named
@ApplicationScoped
public class HitBean implements Serializable {

//    private static final long serialVersionUID = 1L;
    private Hit hit = new Hit();
    private List<Hit> hits = new ArrayList<>();

    public Hit getHit() {
        return hit;
    }

    public void setHit(Hit hit) {
        this.hit = hit;
    }

    public List<Hit> getHits() {
        System.out.println(hits);
        return hits;
    }

    public void setHits(List<Hit> hits) {
        this.hits = hits;
    }

    public void addHit() {
        hit.checkHit();
        hits.add(hit);
        hit = new Hit(hit.getX(), hit.getY(), hit.getR());
    }

    public void clearHits() {
        hits = new ArrayList<>();
    }
}
