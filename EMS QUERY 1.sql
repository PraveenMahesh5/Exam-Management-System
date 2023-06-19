-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: emsspringboot
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `Trainer_Code` bigint NOT NULL AUTO_INCREMENT,
  `Email_Address` varchar(45) DEFAULT NULL,
  `Password` varchar(20) DEFAULT NULL,
  `Confirm_Password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Trainer_Code`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'nbs@gmail.com','abc@123','abc@123'),(2,'gha@gmail.com','12345','12345'),(11,'suwethamvkl@gmail.com','suwe','suwe'),(12,'','','');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `class_exam_tag`
--

DROP TABLE IF EXISTS `class_exam_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class_exam_tag` (
  `Exam_Code` bigint NOT NULL AUTO_INCREMENT,
  `Class_Code` int NOT NULL,
  PRIMARY KEY (`Exam_Code`,`Class_Code`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class_exam_tag`
--

LOCK TABLES `class_exam_tag` WRITE;
/*!40000 ALTER TABLE `class_exam_tag` DISABLE KEYS */;
INSERT INTO `class_exam_tag` VALUES (2,7),(3,5),(4,8),(5,4),(6,6),(7,3),(8,4),(9,9);
/*!40000 ALTER TABLE `class_exam_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `process_result`
--

DROP TABLE IF EXISTS `process_result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `process_result` (
  `Student_code` bigint NOT NULL AUTO_INCREMENT,
  `class_code` int NOT NULL,
  `exam_code` int NOT NULL,
  `total_marks_scored` int NOT NULL,
  `grade` varchar(2) NOT NULL,
  `remarks` varchar(50) NOT NULL,
  PRIMARY KEY (`Student_code`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `process_result`
--

LOCK TABLES `process_result` WRITE;
/*!40000 ALTER TABLE `process_result` DISABLE KEYS */;
INSERT INTO `process_result` VALUES (12,123,1,84,'B','Good'),(13,204,2,73,'C','Average'),(14,79,3,64,'D','Average'),(15,234,4,87,'B','Good'),(16,567,5,73,'C','Average'),(17,456,6,87,'B','Good');
/*!40000 ALTER TABLE `process_result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `set_exam_information`
--

DROP TABLE IF EXISTS `set_exam_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `set_exam_information` (
  `Question_Paper_Code` bigint NOT NULL AUTO_INCREMENT,
  `Subject_Code` int NOT NULL,
  `Subject_Name` varchar(30) DEFAULT NULL,
  `Maximum_Score_For_Part_A` int DEFAULT NULL,
  `Maximum_Score_For_Part_B` int DEFAULT NULL,
  `Maximum_Score_For_Part_C` int DEFAULT NULL,
  `Number_Of_Question_In_Part_A` int DEFAULT NULL,
  `Number_Of_Question_In_Part_B` int DEFAULT NULL,
  `Number_Of_Question_In_Part_C` int DEFAULT NULL,
  `Total_Score` int DEFAULT NULL,
  PRIMARY KEY (`Question_Paper_Code`,`Subject_Code`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `set_exam_information`
--

LOCK TABLES `set_exam_information` WRITE;
/*!40000 ALTER TABLE `set_exam_information` DISABLE KEYS */;
INSERT INTO `set_exam_information` VALUES (6,791891,NULL,10,50,40,5,5,2,100),(7,871397,NULL,26,48,36,13,4,3,100),(8,45678,NULL,10,70,30,5,7,2,100),(9,882872,NULL,30,50,20,10,5,1,100),(13,1,NULL,67,56,8,2,2,4,100);
/*!40000 ALTER TABLE `set_exam_information` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students_marks_entry`
--

DROP TABLE IF EXISTS `students_marks_entry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students_marks_entry` (
  `Exam_Code` bigint NOT NULL AUTO_INCREMENT,
  `Student_Code` int DEFAULT NULL,
  `Marks_Scored_In_Part_A` int DEFAULT NULL,
  `Marks_Scored_In_Part_B` int DEFAULT NULL,
  `Marks_Scored_In_Part_C` int DEFAULT NULL,
  `Total_Marks_Scored` int DEFAULT NULL,
  `Marks_Code` int DEFAULT NULL,
  PRIMARY KEY (`Exam_Code`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students_marks_entry`
--

LOCK TABLES `students_marks_entry` WRITE;
/*!40000 ALTER TABLE `students_marks_entry` DISABLE KEYS */;
INSERT INTO `students_marks_entry` VALUES (1,1,14,60,10,84,8),(2,1,10,56,7,73,7),(3,1,8,44,12,64,6),(4,1,12,61,14,87,9),(5,1,9,55,9,73,7);
/*!40000 ALTER TABLE `students_marks_entry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `Student_Code` bigint NOT NULL AUTO_INCREMENT,
  `Email_Address` varchar(45) DEFAULT NULL,
  `Password` varchar(20) DEFAULT NULL,
  `Confirm_Password` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Student_Code`),
  UNIQUE KEY `Student_Code_UNIQUE` (`Student_Code`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'suwethamvkl@gmail.com','anu123$$','anu123$$');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-15 20:11:47
