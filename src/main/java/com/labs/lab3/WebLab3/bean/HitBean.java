package com.labs.lab3.WebLab3.bean;

import com.labs.lab3.WebLab3.entity.Hit;
import com.labs.lab3.WebLab3.utils.HibernateSessionFactoryUtil;
import org.hibernate.Session;
import org.hibernate.Transaction;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Named;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Named
@ApplicationScoped
public class HitBean implements Serializable {

    //    private static final long serialVersionUID = 1L;
    private Hit hit;
    private List<Hit> hits;
    private Session hibernateSession = createSession();

    public HitBean() {
        this.hit = new Hit();
        clearHits();
    }

    public Hit getHit() {
        return hit;
    }

    public void setHit(Hit hit) {
        this.hit = hit;
    }

    public List<Hit> getHits() {
        List<Hit> outputHits = new ArrayList<>(hits);
        Collections.reverse(outputHits);
        return outputHits;
    }

    public void setHits(List<Hit> hits) {
        this.hits = hits;
    }

    public void addHit() {
        long startTime = System.nanoTime();
        hit.checkHit();
        hit.setCurrentTime(LocalDateTime.now());
        hit.setExecutionTime((System.nanoTime() - startTime) / 1000000d);
        try {
            Transaction transaction = hibernateSession.beginTransaction();
            hibernateSession.save(hit);
            transaction.commit();
        } catch (Exception e) {
            e.printStackTrace();
        }
        hits.add(hit);
        hit = new Hit(hit.getX(), hit.getY(), hit.getR());
    }

    public void clearHits() {
//        try {
//            Transaction transaction = hibernateSession.beginTransaction();
//            hibernateSession.createQuery("delete from Hit").executeUpdate();
//            transaction.commit();
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
        hits = new ArrayList<>();
    }

    private Session createSession() {
        try {
            return HibernateSessionFactoryUtil.getSessionFactory().openSession();
        } catch (NullPointerException e) {
            e.printStackTrace();
            return null;
        }
    }
}
