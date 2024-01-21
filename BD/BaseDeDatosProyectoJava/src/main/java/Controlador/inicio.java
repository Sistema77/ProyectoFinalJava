package Controlador;

import modelo.*;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.Persistence;

public class inicio {

	public static void main(String[] args) {
		EntityManagerFactory emf = Persistence.createEntityManagerFactory("default");
		EntityManager em = emf.createEntityManager();
		em.getTransaction().begin();
		
		Usuario acceso4 = new Usuario("11");
		Credito acceso = new Credito("11");
		Cuenta acceso2 = new Cuenta("11");
		Transferencia acceso3 = new Transferencia(11);
		
		em.persist(acceso4);
		em.persist(acceso);
		em.persist(acceso2);
		em.persist(acceso3);

		em.getTransaction().commit();
		em.close();

	}

}