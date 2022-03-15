-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema contatos
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema contatos
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `contatos` DEFAULT CHARACTER SET utf8 ;
USE `contatos` ;

-- -----------------------------------------------------
-- Table `contatos`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `contatos`.`usuarios` (
  `id` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(256) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `contatos`.`contatos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `contatos`.`contatos` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `usuarios_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_contatos_usuarios_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_contatos_usuarios`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `contatos`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `contatos`.`telefones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `contatos`.`telefones` (
  `id` INT NOT NULL,
  `numero` VARCHAR(25) NOT NULL,
  `contatos_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_telefones_contatos1_idx` (`contatos_id` ASC) VISIBLE,
  CONSTRAINT `fk_telefones_contatos1`
    FOREIGN KEY (`contatos_id`)
    REFERENCES `contatos`.`contatos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `contatos`.`emails`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `contatos`.`emails` (
  `id` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contatos_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_emails_contatos1_idx` (`contatos_id` ASC) VISIBLE,
  CONSTRAINT `fk_emails_contatos1`
    FOREIGN KEY (`contatos_id`)
    REFERENCES `contatos`.`contatos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
