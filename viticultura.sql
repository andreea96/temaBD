-- MySQL dump 10.13  Distrib 5.5.58, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: viticultura
-- ------------------------------------------------------
-- Server version	5.5.58-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Comanda`
--

DROP TABLE IF EXISTS `Comanda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Comanda` (
  `comandaID` int(11) NOT NULL AUTO_INCREMENT,
  `comandaNo` varchar(100) NOT NULL,
  PRIMARY KEY (`comandaID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comanda`
--

LOCK TABLES `Comanda` WRITE;
/*!40000 ALTER TABLE `Comanda` DISABLE KEYS */;
INSERT INTO `Comanda` VALUES (1,'125487d1'),(2,'dst43567'),(3,'ro657'),(4,'ru745657'),(5,'po5466');
/*!40000 ALTER TABLE `Comanda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Crama`
--

DROP TABLE IF EXISTS `Crama`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Crama` (
  `cramaID` int(11) NOT NULL AUTO_INCREMENT,
  `denumire` varchar(50) DEFAULT NULL,
  `localizare` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cramaID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Crama`
--

LOCK TABLES `Crama` WRITE;
/*!40000 ALTER TABLE `Crama` DISABLE KEYS */;
INSERT INTO `Crama` VALUES (2,'Crama Paradis','Focsani'),(3,'Crama Carligele','Vrancea'),(4,'Crama Beciul Domnesc','Odobesti');
/*!40000 ALTER TABLE `Crama` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Premii`
--

DROP TABLE IF EXISTS `Premii`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Premii` (
  `premiuID` int(11) NOT NULL AUTO_INCREMENT,
  `Denumire` varchar(250) DEFAULT NULL,
  `an` int(11) DEFAULT NULL,
  `concurs` varchar(250) DEFAULT NULL,
  `vinID` int(11) NOT NULL,
  PRIMARY KEY (`premiuID`),
  KEY `vinID` (`vinID`),
  CONSTRAINT `Premii_ibfk_1` FOREIGN KEY (`vinID`) REFERENCES `vinuri` (`vinId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Premii`
--

LOCK TABLES `Premii` WRITE;
/*!40000 ALTER TABLE `Premii` DISABLE KEYS */;
INSERT INTO `Premii` VALUES (2,'Medalia de aur',2013,'CNV Bachus',2),(3,'Medalia de aur',2012,'CMV Bruxelles',3),(4,'Medalia de argint',2012,'IWC Bucharest',4);
/*!40000 ALTER TABLE `Premii` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Struguri`
--

DROP TABLE IF EXISTS `Struguri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Struguri` (
  `strugureID` int(11) NOT NULL AUTO_INCREMENT,
  `Denumire` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`strugureID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Struguri`
--

LOCK TABLES `Struguri` WRITE;
/*!40000 ALTER TABLE `Struguri` DISABLE KEYS */;
INSERT INTO `Struguri` VALUES (2,'Rieslingul Italian'),(3,'Grasa de cotnari'),(4,'Sauvignonul'),(5,'Babeasca Neagra'),(6,'Muscat Ottonel'),(7,'Feteasca Alba');
/*!40000 ALTER TABLE `Struguri` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vin_comanda`
--

DROP TABLE IF EXISTS `vin_comanda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vin_comanda` (
  `vin_comanda_id` int(11) NOT NULL AUTO_INCREMENT,
  `vin_id` int(11) NOT NULL,
  `comanda_id` int(11) NOT NULL,
  PRIMARY KEY (`vin_comanda_id`),
  KEY `vin_id` (`vin_id`),
  KEY `comanda_id` (`comanda_id`),
  CONSTRAINT `vin_comanda_ibfk_1` FOREIGN KEY (`vin_id`) REFERENCES `vinuri` (`vinId`),
  CONSTRAINT `vin_comanda_ibfk_2` FOREIGN KEY (`comanda_id`) REFERENCES `Comanda` (`comandaID`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vin_comanda`
--

LOCK TABLES `vin_comanda` WRITE;
/*!40000 ALTER TABLE `vin_comanda` DISABLE KEYS */;
INSERT INTO `vin_comanda` VALUES (1,2,1),(2,4,1),(3,8,1),(4,8,1),(5,9,2),(6,4,2),(7,9,2),(8,3,2),(9,2,2),(10,7,2),(11,7,3),(12,2,3),(13,3,3),(14,4,3),(15,11,3),(16,6,3),(17,1,4),(18,2,4),(19,3,4),(20,3,4),(21,4,4),(22,6,4),(23,6,5),(24,3,5),(25,2,5),(26,8,5),(27,9,5);
/*!40000 ALTER TABLE `vin_comanda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vin_crama`
--

DROP TABLE IF EXISTS `vin_crama`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vin_crama` (
  `vin_cramaID` int(11) NOT NULL AUTO_INCREMENT,
  `vinID` int(11) NOT NULL,
  `cramaID` int(11) NOT NULL,
  `cantitate` int(11) DEFAULT NULL,
  PRIMARY KEY (`vin_cramaID`),
  KEY `vinID` (`vinID`),
  KEY `cramaID` (`cramaID`),
  CONSTRAINT `vin_crama_ibfk_1` FOREIGN KEY (`vinID`) REFERENCES `vinuri` (`vinId`),
  CONSTRAINT `vin_crama_ibfk_2` FOREIGN KEY (`cramaID`) REFERENCES `Crama` (`cramaID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vin_crama`
--

LOCK TABLES `vin_crama` WRITE;
/*!40000 ALTER TABLE `vin_crama` DISABLE KEYS */;
INSERT INTO `vin_crama` VALUES (3,2,2,100),(4,4,3,500),(5,3,2,500),(6,5,3,5000),(9,11,2,999),(10,7,4,180),(11,8,4,1800),(12,9,4,970),(13,2,4,5000);
/*!40000 ALTER TABLE `vin_crama` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vinuri`
--

DROP TABLE IF EXISTS `vinuri`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vinuri` (
  `vinId` int(11) NOT NULL AUTO_INCREMENT,
  `nume` varchar(30) DEFAULT NULL,
  `cost` float DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `Culoare` enum('alb','rosu','rose') DEFAULT NULL,
  `Tip` enum('sec','demi-sec','demi-dulce','dulce') DEFAULT NULL,
  `strugureId` int(11) DEFAULT NULL,
  PRIMARY KEY (`vinId`),
  KEY `strugureId` (`strugureId`),
  CONSTRAINT `vinuri_ibfk_1` FOREIGN KEY (`strugureId`) REFERENCES `Struguri` (`strugureID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vinuri`
--

LOCK TABLES `vinuri` WRITE;
/*!40000 ALTER TABLE `vinuri` DISABLE KEYS */;
INSERT INTO `vinuri` VALUES (1,'vin1',78,NULL,'rose','demi-sec',NULL),(2,'Vita Romaneasca-Rosu',120,'vita_romaneasca_rosu.png','rosu','demi-sec',3),(3,'Muscat Ottonel',200,'muscat.png','alb','sec',4),(4,'Tamaioasa Romaneasca',200,'tamaioasa.png','alb','dulce',5),(5,'Chardonnay',250,'chardonnay.png','alb','sec',5),(6,'Ambrosio',100,'ambrosio.png','alb','sec',4),(7,'Vinoteca',300,'vinoteca.png','alb','dulce',5),(8,'Comoara Pivnitei',150,'comoara.png','alb','dulce',6),(9,'Beciul Domnesc',250,'beciul_domnesc_alb.png','alb','',7),(11,'vin2Test',78,NULL,'rosu','demi-sec',NULL);
/*!40000 ALTER TABLE `vinuri` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-01-11 17:16:50
