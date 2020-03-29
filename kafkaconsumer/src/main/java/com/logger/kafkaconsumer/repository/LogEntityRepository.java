package com.logger.kafkaconsumer.repository;

import com.logger.kafkaconsumer.entity.LogEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogEntityRepository extends JpaRepository<LogEntity,String> {
}
