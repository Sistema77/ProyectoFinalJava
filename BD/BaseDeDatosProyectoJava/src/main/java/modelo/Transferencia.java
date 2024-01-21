package modelo;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Transferencia {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_trasferencia", nullable = false)
	private long id_trasferencia;
	
	@Column(name = "cantidad_enviada")
	private double cantidad_enviada;

	@Column(name = "fch_transferencia")
	@Temporal(TemporalType.TIMESTAMP)
	private Date fch_transferencia;
	
    @ManyToOne
    @JoinColumn(name = "cuenta_origen_id")
    private Cuenta cuentaOrigen;

    @ManyToOne
    @JoinColumn(name = "cuenta_destino_id")
    private Cuenta cuentaDestino;

	public Transferencia(double cantidad_enviada, Date fch_transferencia) {
		super();
		this.cantidad_enviada = cantidad_enviada;
		this.fch_transferencia = fch_transferencia;
	}
    
	public Transferencia(double cantidad_enviada) {
		super();
		this.cantidad_enviada = cantidad_enviada;
	}
}
