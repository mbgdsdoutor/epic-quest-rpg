package br.com.epicquest.rpg.security;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    //private static final Logger logger = Logger.getLogger(JwtAuthenticationEntryPoint.class);
    @Override
    public void commence(HttpServletRequest httpServletRequest,
                         HttpServletResponse httpServletResponse,
                         AuthenticationException e) throws IOException, ServletException {
        //logger.error("Responding with unauthorized error. Message - " + JwtAuthenticationEntryPoint.class + " | " + e.getMessage());
        httpServletResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED, e.getMessage());
    }
}
