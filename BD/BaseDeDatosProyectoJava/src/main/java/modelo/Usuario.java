package modelo;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuario", schema = "SchemaUsuario")
public class Usuario {

		// Atributos
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name = "id_usuario", nullable = false)
		private long id_usuario;
		
		@Column(name = "nombre")
		private String nombre;
		
		@Column(name = "apellido")
		private String apellido;
		
		@Column(name = "email")
		private String email;
		
		@Column(name = "password")
		private String password;
		
		@Column(name = "tlf")
		private String tlf;
		
		@Column(name = "tipo_usuario")
		private String tipo_usuario;
		
		@Column(name = "foto")
		private byte[] foto;
		
		
		
		@OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL, orphanRemoval = true)
		private List<Cuenta> cuentas;

		
		// Constructores
		
		public Usuario(String nombre) {
			super();
			this.nombre = nombre;
		}


		public Usuario(String nombre, String apellido, String email, String password, String tlf, String es) {
			super();
			this.nombre = nombre;
			this.apellido = apellido;
			this.email = email;
			this.password = password;
			this.tlf = tlf;
			this.tipo_usuario = es;
		}
		
		
		
	
}
