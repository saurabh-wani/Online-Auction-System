-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: auction
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `bidding_table`
--

DROP TABLE IF EXISTS `bidding_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bidding_table` (
  `Bid_Id` int NOT NULL AUTO_INCREMENT,
  `P_Id` int NOT NULL,
  `BasePrice` decimal(11,2) NOT NULL,
  `Bidder_Id` int NOT NULL,
  `Start_Date` datetime NOT NULL,
  `End_Date` datetime NOT NULL,
  `Final_Bid_price` decimal(11,2) DEFAULT NULL,
  `Bidding_Status` varchar(45) NOT NULL DEFAULT 'not bidded',
  PRIMARY KEY (`Bid_Id`),
  UNIQUE KEY `Bid_Id_UNIQUE` (`Bid_Id`),
  KEY `fk_product_id_idx` (`P_Id`),
  CONSTRAINT `fk_product_id` FOREIGN KEY (`P_Id`) REFERENCES `product` (`P_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bidding_table`
--

LOCK TABLES `bidding_table` WRITE;
/*!40000 ALTER TABLE `bidding_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `bidding_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bidding_transaction`
--

DROP TABLE IF EXISTS `bidding_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bidding_transaction` (
  `bidding_transaction_id` int NOT NULL AUTO_INCREMENT,
  `P_Id` int NOT NULL,
  `Bidder_Id` int NOT NULL,
  `Bid_Price` decimal(11,2) NOT NULL,
  `Bid_Time` datetime NOT NULL,
  PRIMARY KEY (`bidding_transaction_id`),
  UNIQUE KEY `Transaction_Id_UNIQUE` (`bidding_transaction_id`),
  KEY `fk_product_id_idx` (`P_Id`),
  KEY `fk_bidder_id_idx` (`Bidder_Id`),
  CONSTRAINT `fk_bidder_id` FOREIGN KEY (`Bidder_Id`) REFERENCES `user_table` (`user_id`),
  CONSTRAINT `fk_p_id` FOREIGN KEY (`P_Id`) REFERENCES `product` (`P_Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bidding_transaction`
--

LOCK TABLES `bidding_transaction` WRITE;
/*!40000 ALTER TABLE `bidding_transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `bidding_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback_table`
--

DROP TABLE IF EXISTS `feedback_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback_table` (
  `Feedback_Id` int NOT NULL AUTO_INCREMENT,
  `P_Id` int NOT NULL,
  `Seller_Id` int NOT NULL,
  `Bidder_Id` int NOT NULL,
  `Seller_Rating` int DEFAULT NULL,
  `Product_Rating` int DEFAULT NULL,
  `Feedback_Description` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`Feedback_Id`),
  UNIQUE KEY `Feedback_Id_UNIQUE` (`Feedback_Id`),
  KEY `fk_product_id_feedback_idx` (`P_Id`),
  KEY `fk_seller_id_feedback_idx` (`Seller_Id`),
  KEY `fk_bidder_id_feedback_idx` (`Bidder_Id`),
  CONSTRAINT `fk_bidder_id_feedback` FOREIGN KEY (`Bidder_Id`) REFERENCES `user_table` (`user_id`),
  CONSTRAINT `fk_product_id_feedback` FOREIGN KEY (`P_Id`) REFERENCES `product` (`P_Id`),
  CONSTRAINT `fk_seller_id_feedback` FOREIGN KEY (`Seller_Id`) REFERENCES `user_table` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback_table`
--

LOCK TABLES `feedback_table` WRITE;
/*!40000 ALTER TABLE `feedback_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedback_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (10);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `message_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `P_Id` int NOT NULL,
  `message` varchar(200) NOT NULL,
  PRIMARY KEY (`message_id`),
  UNIQUE KEY `message_id_UNIQUE` (`message_id`),
  KEY `fk_user_id_message_idx` (`user_id`),
  KEY `fk_p_id_message_idx` (`P_Id`),
  CONSTRAINT `fk_p_id_message` FOREIGN KEY (`P_Id`) REFERENCES `product_sold` (`P_Id`),
  CONSTRAINT `fk_user_id_message` FOREIGN KEY (`user_id`) REFERENCES `user_table` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `P_Id` int NOT NULL AUTO_INCREMENT,
  `ProductName` varchar(45) NOT NULL,
  `Description` varchar(200) NOT NULL,
  `ProductImage1` longblob NOT NULL,
  `ProductImage2` longblob,
  `ProductImage3` longblob,
  `BasePrice` decimal(9,2) NOT NULL,
  `Seller_Id` int NOT NULL,
  `StartDate` datetime DEFAULT NULL,
  `EndDate` datetime DEFAULT NULL,
  `Status` varchar(45) NOT NULL DEFAULT 'Pending',
  PRIMARY KEY (`P_Id`),
  UNIQUE KEY `ProductId_UNIQUE` (`P_Id`),
  KEY `fk_seller_id_idx` (`Seller_Id`),
  CONSTRAINT `fk_seller_id` FOREIGN KEY (`Seller_Id`) REFERENCES `user_table` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_sold`
--

DROP TABLE IF EXISTS `product_sold`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_sold` (
  `Sold_Pid` int NOT NULL AUTO_INCREMENT,
  `P_Id` int NOT NULL,
  `Seller_Id` int NOT NULL,
  `Bidder_Id` int NOT NULL,
  `Sold_Amount` decimal(11,2) NOT NULL,
  `Sold_Date` datetime NOT NULL,
  `Payment_Mode` varchar(45) NOT NULL,
  `Payment_Transaction_Id` varchar(45) NOT NULL,
  `bidding_transaction_id` int NOT NULL,
  `Delivery_Status` varchar(45) NOT NULL,
  PRIMARY KEY (`Sold_Pid`),
  UNIQUE KEY `Sold_Pid_UNIQUE` (`Sold_Pid`),
  KEY `fk_product_id_sold_idx` (`P_Id`),
  KEY `fk_seller_id_sold_idx` (`Seller_Id`),
  KEY `fk_bidder_id_sold_idx` (`Bidder_Id`),
  KEY `fk_biiding_transcation_id_idx` (`bidding_transaction_id`),
  CONSTRAINT `fk_bidder_id_sold` FOREIGN KEY (`Bidder_Id`) REFERENCES `user_table` (`user_id`),
  CONSTRAINT `fk_product_id_sold` FOREIGN KEY (`P_Id`) REFERENCES `product` (`P_Id`),
  CONSTRAINT `fk_seller_id_sold` FOREIGN KEY (`Seller_Id`) REFERENCES `user_table` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_sold`
--

LOCK TABLES `product_sold` WRITE;
/*!40000 ALTER TABLE `product_sold` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_sold` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_table`
--

DROP TABLE IF EXISTS `question_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question_table` (
  `q_id` int NOT NULL,
  `question` varchar(100) NOT NULL,
  PRIMARY KEY (`q_id`),
  UNIQUE KEY `QId_UNIQUE` (`q_id`),
  UNIQUE KEY `Question_UNIQUE` (`question`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_table`
--

LOCK TABLES `question_table` WRITE;
/*!40000 ALTER TABLE `question_table` DISABLE KEYS */;
INSERT INTO `question_table` VALUES (4,' What was your first car?'),(6,'In which year you completed your graduation?'),(5,'What elementary school did you attend?'),(3,'What is the name of your favourite movie?'),(1,'What is the name of your first pet?'),(2,'What is your favourite color?'),(7,'What is your mother\'s maiden name?'),(8,'Which  is your favourite vacation spot?');
/*!40000 ALTER TABLE `question_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_table`
--

DROP TABLE IF EXISTS `user_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_table` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_type_id` int NOT NULL,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `email` varchar(60) NOT NULL,
  `mobile` varchar(15) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `pincode` varchar(10) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `pan_card_number` varchar(15) DEFAULT NULL,
  `pan_card_image` longblob,
  `account_status` varchar(45) DEFAULT 'pending',
  `q_id` int NOT NULL,
  `answer` varchar(100) NOT NULL,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UserId_UNIQUE` (`user_id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  KEY `UserTypeId_idx` (`user_type_id`),
  KEY `fk_question_id_idx` (`q_id`),
  CONSTRAINT `fk_question_id` FOREIGN KEY (`q_id`) REFERENCES `question_table` (`q_id`),
  CONSTRAINT `fk_user_type_id` FOREIGN KEY (`user_type_id`) REFERENCES `user_type` (`user_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_table`
--

LOCK TABLES `user_table` WRITE;
/*!40000 ALTER TABLE `user_table` DISABLE KEYS */;
INSERT INTO `user_table` VALUES (1,1,'Random','Person','random@gmail.com',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'approved',2,'grey','admin','admin@123'),(2,2,'Saurabh','Wani','saurabh@gmail.com','9896548756','Maharashtra','Jalgaon','425001','plot no.31 Mahabal','Male','SDHP8976I',NULL,'pending',3,'znmd','saurabh','saurabh@123'),(3,3,'Rahul ','Muttanvar','rahul@gmail.com','6895784987','Maharashtra','Kolhapur','411035','plot no.56 Sambhaji Nagar','Male','HGOP4598L',NULL,'approved',8,'mountain','rahul','rahul@123'),(4,3,'Neha','Patil','neha@gmail.com','8795468789','Maharashtra','Pune','411016','Gokle nagar','Female','HdMP9875K',NULL,'approved',1,'jimmy','neha','neha@123'),(5,2,'Akshay','Wagh','akshay@gmail.com','9862547983','Maharashtra','Jalgaon','425001','Mahabal','Male','JOLPU9876I',NULL,'approved',2,'white','akshay','akshay@123'),(6,2,'bnm','kmk','vv@fg.ci','8789654785','Jammu and Kashmir','ashanjm','456879','sadsad','male','SAIUY7654Y',NULL,'pending',2,'grey','grey','grey@1234'),(7,2,'shash','Singh','shash@gmail.com','9865748957','Bihar','dsda','451265','sdsds','male','FGHPJ9876Y',NULL,'pending',2,'white','shash','shash@123'),(8,3,'Prathamesh','Tayade','pratham@gmail.com','8568598745','Maharashtra','jalgaon','425001','state bank colony','male','HGJPO7895L',NULL,'approved',4,'i10','pratham','pratham@123'),(9,3,'rohit','patil','rohit@gmail.com','9856471236','Jammu and Kashmir','Kolhapur','411025','kolhapur jasj','male','LKJPO9876L',NULL,'approved',2,'blue','rohit','rohit@123');
/*!40000 ALTER TABLE `user_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_type`
--

DROP TABLE IF EXISTS `user_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_type` (
  `user_type_id` int NOT NULL,
  `user_type` varchar(45) NOT NULL,
  PRIMARY KEY (`user_type_id`),
  UNIQUE KEY `UserTypeId_UNIQUE` (`user_type_id`),
  UNIQUE KEY `User_Type_UNIQUE` (`user_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_type`
--

LOCK TABLES `user_type` WRITE;
/*!40000 ALTER TABLE `user_type` DISABLE KEYS */;
INSERT INTO `user_type` VALUES (1,'Admin'),(3,'Bidder'),(2,'Seller');
/*!40000 ALTER TABLE `user_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-03 21:33:20
