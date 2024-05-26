-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: g00232918
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
-- Table structure for table `prod_data`
--

DROP TABLE IF EXISTS `prod_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prod_data` (
  `ID` int DEFAULT NULL,
  `Album_Name` text,
  `Artist` text,
  `Price` int DEFAULT NULL,
  `Image` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prod_data`
--

LOCK TABLES `prod_data` WRITE;
/*!40000 ALTER TABLE `prod_data` DISABLE KEYS */;
INSERT INTO `prod_data` VALUES (1,'Deuce','Rory Gallagher',30,'DeuceS.PNG'),(2,'Urban Hymns','The Verve',25,'UrbanH.PNG'),(3,'Skinty Fia','Fontaines DC',39,'SkintyS.PNG'),(4,'The Mary Wallopers','The Mary Wallopers',30,'MaryS.PNG'),(5,'The Wedding Above in Glencree','Daoiri Farrell',30,'Wedding.PNG'),(6,'Gigis Recovery','The Murder Capital',28,'Gigis.PNG'),(7,'Delusions of Grandeur','Thumper',28,'Delusions.PNG'),(8,'Leave the Light On','Pillow Queens',27,'LeaveS.PNG'),(9,'Unlimted Love','The Red Hot Chilli Peppers',38,'UnlimitedS.PNG'),(10,'False Lankum','Lankum',29,'False.PNG'),(11,'Smiling Like an Idiot','Sorcha Richardson',29,'Smiling.PNG'),(12,'Live and Dangerous','Thin Lizzy',45,'LiveAndDangS.PNG');
/*!40000 ALTER TABLE `prod_data` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-23 22:13:49
