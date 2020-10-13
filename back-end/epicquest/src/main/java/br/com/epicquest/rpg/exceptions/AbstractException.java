package br.com.epicquest.rpg.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class AbstractException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	public AbstractException(String message) {
		super(message);
	}

	public AbstractException(String message, Throwable cause) {
		super(message, cause);
	}
}
