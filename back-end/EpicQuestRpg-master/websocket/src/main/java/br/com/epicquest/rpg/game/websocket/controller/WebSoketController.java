package br.com.epicquest.rpg.game.websocket.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.socket.WebSocketMessage;

@Controller
public class WebSoketController {

	private final SimpMessagingTemplate simpMessagingTemplate; // 1
	private final Set<String> connectedUsers; // 2

	public WebSoketController(SimpMessagingTemplate simpMessagingTemplate){ 
	    this.simpMessagingTemplate = simpMessagingTemplate; //1
	    connectedUsers = new HashSet<>();  //2
	  }

	@MessageMapping("/register") // 3
	@SendToUser("/queue/newMember")
	public Set<String> registerUser(String webChatUsername) {
		if (!connectedUsers.contains(webChatUsername)) {
			connectedUsers.add(webChatUsername);
			simpMessagingTemplate.convertAndSend("/topic/newMember", webChatUsername); // 4
			return connectedUsers;
		} else {
			return new HashSet<>();
		}
	}

	@MessageMapping("/unregister") // 5
	@SendTo("/topic/disconnectedUser")
	public String unregisterUser(String webChatUsername) {
		connectedUsers.remove(webChatUsername);
		return webChatUsername;
	}

	@MessageMapping("/message") // 6
	public void greeting(String message) {
		simpMessagingTemplate.convertAndSendToUser("Akame", "/msg", message);
	}
}
