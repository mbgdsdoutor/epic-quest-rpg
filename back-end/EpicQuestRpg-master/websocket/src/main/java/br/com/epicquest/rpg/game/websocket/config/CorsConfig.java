package br.com.epicquest.rpg.game.websocket.config;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Configuration;

@Configuration
public class CorsConfig implements Filter {

    // This is to be replaced with a list of domains allowed to access the server
  //You can include more than one origin here
    private final List<String> allowedOrigins = Arrays.asList("http://localhost:4200"); 

    public void destroy() {

    }

    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        // Lets make sure that we are working with HTTP (that is, against HttpServletRequest and HttpServletResponse objects)
        if (req instanceof HttpServletRequest && res instanceof HttpServletResponse) {
            HttpServletRequest request = (HttpServletRequest) req;
            HttpServletResponse response = (HttpServletResponse) res;

            // Access-Control-Allow-Origin
            String origin = request.getHeader("Origin");
            response.setHeader("Access-Control-Allow-Origin", allowedOrigins.contains(origin) ? origin : "");
            response.setHeader("Vary", "Origin");

            // Access-Control-Max-Age
            response.setHeader("Access-Control-Max-Age", "3600");

            // Access-Control-Allow-Credentials
            response.setHeader("Access-Control-Allow-Credentials", "true");

            // Access-Control-Allow-Methods
            response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");

            // Access-Control-Allow-Headers
            response.setHeader("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, " + "X-CSRF-TOKEN");
        }

        chain.doFilter(req, res);
    }

    public void init(FilterConfig filterConfig) {
    }
}
