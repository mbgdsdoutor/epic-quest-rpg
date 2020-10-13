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

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@AllArgsConstructor
@Entity
@Builder
@Table(name = "User")
public class User implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Basic(optional = false)
	@Column(name = "userId")
	private Long userId;

	@Basic(optional = false)
	@Column(name = "userName")
	private String userName;

	@Basic(optional = false)
	@Column(name = "fullName")
	private String fullName;
	
	@Basic(optional = false)
	@Column(name = "birthday")
	private Date birthday;
	
	@Basic(optional = false)
	@Column(name = "userPassword")
	private String userPassword;

	@Basic(optional = false)
	@Column(name = "userEmail")
	private String userEmail;

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