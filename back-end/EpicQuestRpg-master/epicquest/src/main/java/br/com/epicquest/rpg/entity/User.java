package br.com.epicquest.rpg.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "User")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	@Column(name = "id")
	private Long id;

	@Basic(optional = false)
	@Column(name = "username")
	private String username;

	@Basic(optional = false)
	@Column(name = "fullname")
	private String fullname;
	
	@Basic(optional = false)
	@Column(name = "birthday")
	private Date birthday;
	
	@Basic(optional = false)
	@Column(name = "password")
	private String password;

	@Basic(optional = false)
	@Column(name = "email")
	private String email;

	@Column(name = "photoDirectory")
	private String photoDirectory;

	/*
	@JoinTable(name = "PermissionList", joinColumns = {
			@JoinColumn(name = "userId", referencedColumnName = "userId") }, inverseJoinColumns = {
					@JoinColumn(name = "permissionId", referencedColumnName = "permissionId") })
	@ManyToMany
	private List<Permission> permissions;
	*/
}