package modelo;

import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "cuenta", schema = "SchemaBody")
public class Cuenta {

	// Atributos

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_cuenta", nullable = false)
	private long id_cuenta;

	@Column(name = "cod_cuenta")
	private String cod_cuenta;

	@Column(name = "saldo")
	private double saldo;

	@Column(name = "con_nomina")
	private boolean con_nomina;

	@Column(name = "fch_apertura")
	@Temporal(TemporalType.TIMESTAMP) 
	private Date  fch_apertura;

	@ManyToOne
	@JoinColumn(name = "id_usuario", nullable = false)
	Usuario usuario;

	@OneToMany(mappedBy = "cuenta", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Credito> credito;

	
	// Para crear dos Foraneas en Transferencia
	
	@OneToMany(mappedBy = "cuentaOrigen", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Transferencia> transferenciasEnviadas;

    @OneToMany(mappedBy = "cuentaDestino", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Transferencia> transferenciasRecibidas;

	public Cuenta(String cod_cuenta) {
		super();
		this.cod_cuenta = cod_cuenta;
	}

	public Cuenta(String cod_cuenta, double saldo, boolean con_nomina, Date  fch_apertura, Usuario usuario,
			List<Credito> credito) {
		super();
		this.cod_cuenta = cod_cuenta;
		this.saldo = saldo;
		this.con_nomina = con_nomina;
		this.fch_apertura = fch_apertura;
		this.usuario = usuario;
		this.credito = credito;
	}
	
	
}
