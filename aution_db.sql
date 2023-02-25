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
  CONSTRAINT `fk_product_id` FOREIGN KEY (`P_Id`) REFERENCES `product` (`ProductId`)
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
  `Transaction_Id` int NOT NULL AUTO_INCREMENT,
  `P_Id` int NOT NULL,
  `Bidder_Id` int NOT NULL,
  `Bid_Price` decimal(11,2) NOT NULL,
  `Bid_Time` datetime NOT NULL,
  PRIMARY KEY (`Transaction_Id`),
  UNIQUE KEY `Transaction_Id_UNIQUE` (`Transaction_Id`),
  KEY `fk_product_id_idx` (`P_Id`),
  KEY `fk_bidder_id_idx` (`Bidder_Id`),
  CONSTRAINT `fk_bidder_id` FOREIGN KEY (`Bidder_Id`) REFERENCES `user_table` (`UserId`),
  CONSTRAINT `fk_p_id` FOREIGN KEY (`P_Id`) REFERENCES `product` (`ProductId`)
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
  CONSTRAINT `fk_bidder_id_feedback` FOREIGN KEY (`Bidder_Id`) REFERENCES `user_table` (`UserId`),
  CONSTRAINT `fk_product_id_feedback` FOREIGN KEY (`P_Id`) REFERENCES `product` (`ProductId`),
  CONSTRAINT `fk_seller_id_feedback` FOREIGN KEY (`Seller_Id`) REFERENCES `user_table` (`UserId`)
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
-- Table structure for table `message_table`
--

DROP TABLE IF EXISTS `message_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message_table` (
  `Message_Id` int NOT NULL AUTO_INCREMENT,
  `User_Id` int NOT NULL,
  `P_Id` int NOT NULL,
  `Message` varchar(200) NOT NULL,
  PRIMARY KEY (`Message_Id`),
  UNIQUE KEY `Message_Id_UNIQUE` (`Message_Id`),
  KEY `fk_product_id_message_idx` (`P_Id`),
  KEY `fk_user_id_messsage_idx` (`User_Id`),
  CONSTRAINT `fk_product_id_message` FOREIGN KEY (`P_Id`) REFERENCES `product_sold` (`P_Id`),
  CONSTRAINT `fk_user_id_messsage` FOREIGN KEY (`User_Id`) REFERENCES `user_table` (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message_table`
--

LOCK TABLES `message_table` WRITE;
/*!40000 ALTER TABLE `message_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `message_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `ProductId` int NOT NULL AUTO_INCREMENT,
  `ProductName` varchar(45) NOT NULL,
  `Description` varchar(200) NOT NULL,
  `ProductImage1` longblob NOT NULL,
  `ProductImage2` longblob,
  `ProductImage3` longblob,
  `BasePrice` decimal(9,2) NOT NULL,
  `SellerId` int NOT NULL,
  `StartDate` datetime NOT NULL,
  `EndDate` datetime NOT NULL,
  `Status` varchar(45) NOT NULL DEFAULT 'Pending',
  PRIMARY KEY (`ProductId`),
  UNIQUE KEY `ProductId_UNIQUE` (`ProductId`),
  KEY `fk_seller_id_idx` (`SellerId`),
  CONSTRAINT `fk_seller_id` FOREIGN KEY (`SellerId`) REFERENCES `user_table` (`UserId`)
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
  `Bidding_Transaction_Id` int NOT NULL,
  `Delivery_Status` varchar(45) NOT NULL,
  PRIMARY KEY (`Sold_Pid`),
  UNIQUE KEY `Sold_Pid_UNIQUE` (`Sold_Pid`),
  KEY `fk_product_id_sold_idx` (`P_Id`),
  KEY `fk_seller_id_sold_idx` (`Seller_Id`),
  KEY `fk_bidder_id_sold_idx` (`Bidder_Id`),
  KEY `fk_biiding_transcation_id_idx` (`Bidding_Transaction_Id`),
  CONSTRAINT `fk_bidder_id_sold` FOREIGN KEY (`Bidder_Id`) REFERENCES `user_table` (`UserId`),
  CONSTRAINT `fk_biiding_transcation_id` FOREIGN KEY (`Bidding_Transaction_Id`) REFERENCES `bidding_transaction` (`Transaction_Id`),
  CONSTRAINT `fk_product_id_sold` FOREIGN KEY (`P_Id`) REFERENCES `product` (`ProductId`),
  CONSTRAINT `fk_seller_id_sold` FOREIGN KEY (`Seller_Id`) REFERENCES `user_table` (`UserId`)
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
  `QId` int NOT NULL,
  `Question` varchar(100) NOT NULL,
  PRIMARY KEY (`QId`),
  UNIQUE KEY `QId_UNIQUE` (`QId`),
  UNIQUE KEY `Question_UNIQUE` (`Question`)
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
  `UserId` int NOT NULL AUTO_INCREMENT,
  `UserTypeId` int NOT NULL,
  `FName` varchar(45) NOT NULL,
  `LName` varchar(45) NOT NULL,
  `Email` varchar(60) NOT NULL,
  `MobileNumber` varchar(15) NOT NULL,
  `Address` varchar(200) NOT NULL,
  `Gender` varchar(45) NOT NULL,
  `PanCardNumber` varchar(15) DEFAULT NULL,
  `PanCardImage` longblob,
  `AccountStatus` varchar(45) DEFAULT NULL,
  `Q_Id` int NOT NULL,
  `Answer` varchar(100) NOT NULL,
  PRIMARY KEY (`UserId`),
  UNIQUE KEY `UserId_UNIQUE` (`UserId`),
  KEY `UserTypeId_idx` (`UserTypeId`),
  KEY `fk_question_id_idx` (`Q_Id`),
  CONSTRAINT `fk_question_id` FOREIGN KEY (`Q_Id`) REFERENCES `question_table` (`QId`),
  CONSTRAINT `fk_user_type_id` FOREIGN KEY (`UserTypeId`) REFERENCES `user_type` (`UserTypeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_table`
--

LOCK TABLES `user_table` WRITE;
/*!40000 ALTER TABLE `user_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_type`
--

DROP TABLE IF EXISTS `user_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_type` (
  `UserTypeId` int NOT NULL,
  `User_Type` varchar(45) NOT NULL,
  PRIMARY KEY (`UserTypeId`),
  UNIQUE KEY `UserTypeId_UNIQUE` (`UserTypeId`),
  UNIQUE KEY `User_Type_UNIQUE` (`User_Type`)
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

-- Dump completed on 2023-02-25 22:33:14
