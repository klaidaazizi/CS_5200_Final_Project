-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(55) NOT NULL,
  `last_name` varchar(55) NOT NULL,
  `username` varchar(55) DEFAULT NULL,
  `password` varchar(15) DEFAULT NULL,
  `email` varchar(55) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `street_address` varchar(55) DEFAULT NULL,
  `city` varchar(55) DEFAULT NULL,
  `state` varchar(2) DEFAULT NULL,
  `zip_code` int DEFAULT NULL,
  `phone_number` bigint DEFAULT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `year_founded` int DEFAULT NULL,
  `age` int DEFAULT NULL,
  `profile_picture` varchar(45) DEFAULT NULL,
  `user_type` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Parag','Agrawal','jpark','CS','as','1992-08-19','19 Copley St','Brookline','MA',2446,8785465,'Twitter',2009,NULL,NULL,1),(3,'Aliza','Miller Etka','amiller','password1','aliza@gmail.com',NULL,'12344 Street','Lincoln','NE',34593,12,NULL,NULL,29,'apple.jpeg',2),(4,'Patrick','Etka','patetka','password','patetka@gmail.com',NULL,'123 Street','Bristol','VT',5443,82,NULL,NULL,29,'dog.jpeg',2),(5,'Cora','Dog','corabear74','Kibble','Cora@wuff.com',NULL,'132 Treat Avenue','KongVille','PB',20003,1,'Kong \'R Us',2010,NULL,NULL,1),(6,'Mark','Zuckerberg','mzuck',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Facebook',2003,NULL,NULL,1),(11,'John','Smith','jsmith','password','j.smith@aol.com','2020-10-30',NULL,NULL,NULL,NULL,NULL,NULL,NULL,33,'picture.jpeg',2),(12,'Elon','Musk','spaceTravelor','bezosSucks','tesla@tesla.com','1975-04-10',NULL,NULL,NULL,NULL,NULL,'SpaceX',2004,NULL,NULL,1),(13,'Matt','Ress','mattressAllDay','comfy','matrress@mattress.com','1990-10-15','123 Bed Lane','Semi Firm','FL',23102,NULL,'Mattress Firm',2000,NULL,NULL,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-17  9:18:09
