package modelo;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "credito", schema = "SchemaBody")
public class Credito {
	// Atributos

		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "id_credito", nullable = false)
		private long id_credito;
		
		@Column(name = "tipo_prestamo")
		private String tipo_prestamo;
		
		@Column(name = "cantidad_prestamo_total")
		private double CantidadPrestamoTotal;
		
		@Column(name = "tasa_interes")
		private double tasa_interes;
		
		@Column(name = "estado_prestamo")
		private String estado_prestamo;
		
		@Column(name = "CuotaMensual")
		private double CuotaMensual;
		
		@Column(name = "fch_inicio")
		@Temporal(TemporalType.TIMESTAMP)
		private Date  fch_inicio;
		
		@Column(name = "fch_final")
		@Temporal(TemporalType.TIMESTAMP)
		private Date  fch_final;
		
		
		@ManyToOne
		@JoinColumn(name = "id_cuenta", nullable = false)
		Cuenta cuenta;
		
		public Credito(String tipo_prestamo) {
			super();
			this.tipo_prestamo = tipo_prestamo;
		}

		public Credito(String tipo_prestamo, double cantidadPrestamoTotal, double tasa_interes, String estado_prestamo,
				double cuotaMensual, Date  fch_inicio, Date  fch_final, Cuenta cuenta) {
			super();
			this.tipo_prestamo = tipo_prestamo;
			this.tasa_interes = tasa_interes;
			this.estado_prestamo = estado_prestamo;
			this.fch_inicio = fch_inicio;
			this.fch_final = fch_final;
			this.cuenta = cuenta;
		}
		
		
}
