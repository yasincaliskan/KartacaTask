package com.logger.kafkaconsumer;

import com.logger.kafkaconsumer.entity.LogEntity;
import com.logger.kafkaconsumer.repository.LogEntityRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.io.IOException;


@SpringBootApplication
@EnableKafka
public class KafkaconsumerApplication implements WebMvcConfigurer {

	@Autowired
	LogEntityRepository logEntityRepository;

	ObjectMapper objectMapper = new ObjectMapper();


	@Autowired
	private SimpMessagingTemplate template;


	public static void main(String[] args) {
		SpringApplication.run(KafkaconsumerApplication.class, args);
	}

	@KafkaListener(topics = "Topic1", groupId = "group-id")
	public void listen(String message) throws IOException {
		LogEntity logEntity = objectMapper.readValue(message, LogEntity.class);
		logEntityRepository.save(logEntity);
		template.convertAndSend("/queue/now", message);
	}

}
