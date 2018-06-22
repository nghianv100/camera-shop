CREATE DATABASE  IF NOT EXISTS `camera_shop` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `camera_shop`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: camera_shop
-- ------------------------------------------------------
-- Server version	5.7.21-log

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
-- Table structure for table `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sanpham` (
  `idsanpham` char(5) NOT NULL,
  `gia` int(11) DEFAULT NULL,
  `luotxem` int(11) DEFAULT '0',
  `luotban` int(11) DEFAULT '0',
  `mota` varchar(3000) DEFAULT '<p>Không có mô tả<p>',
  `xuatxu` varchar(20) DEFAULT NULL,
  `loai` varchar(20) DEFAULT NULL,
  `nhasanxuat` varchar(20) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `tensanpham` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idsanpham`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sanpham`
--

LOCK TABLES `sanpham` WRITE;
/*!40000 ALTER TABLE `sanpham` DISABLE KEYS */;
INSERT INTO `sanpham` VALUES ('c0001',13625000,0,0,'<p>Không có mô tả<p>','china','360degree','GoPro','360-GOPRO-gopro fusion.jpg','GoPro Fusion'),('c0002',8620000,0,0,'<p>Không có mô tả<p>','america','360degree','Kodak','360-KODAK-kodak pixpro orbit360 4k.jpg','Kodak Pixpro Orbit 360 4K'),('c0003',7620000,0,0,'<p>Không có mô tả<p>','america','360degree','Kodak','360-KODAK-kodak pixpro sp360 4k.jpg','Kodak Pixpro SP360 4K'),('c0004',2025000,0,0,'<p>Không có mô tả<p>','south-korea','360degree','LG','360-LG-lg 360 cam.jpg','LG G5 Friend 360'),('c0005',11280000,0,0,'<p>Không có mô tả<p>','japan','360degree','Nikon','360-NIKON-nikon keymission 360 4k.jpg','Nikon KeyMission 360'),('c0006',7710000,0,0,'<p>Không có mô tả<p>','japan','360degree','Ricoh','360-RICOH-ricoh theta v.jpg','Ricoh Theta V 4K'),('c0007',1135000,0,0,'<p>Không có mô tả<p>','south-korea','360degree','Samsung','360-SAMSUNG-samsung gear 360.jpg','Samsung Gear 360'),('c0008',11350000,0,0,'<p>Không có mô tả<p>','china','compact','Canon','compact-CANON-canon powershot d30.jpg','Canon PowerShot D30'),('c0009',7230000,0,0,'<p>Không có mô tả<p>','japan','compact','Canon','compact-CANON-canon powershot n2.jpg','Canon PowerShot N2'),('c0010',5890000,0,0,'<p>Không có mô tả<p>','japan','compact','Canon','compact-CANON-canon powershot sx420.jpg','Canon PowerShot SX420'),('c0011',6800000,0,0,'<p>Không có mô tả<p>','china','compact','Canon','compact-CANON-canon powershot sx530.jpg','Canon PowerShot SX530'),('c0012',5890000,0,0,'<p>Không có mô tả<p>','japan','compact','Canon','compact-CANON-canon powershot sx620.jpg','Canon PowerShot SX620'),('c0013',28180000,0,0,'<p>Không có mô tả<p>','america','compact','Fujifilm','compact-FUJIFILM-fujifilm x100f.jpg','Fujifilm X100F'),('c0014',20490000,0,0,'<p>Không có mô tả<p>','japan','compact','Fujifilm','compact-FUJIFILM-fujifilm x70.jpg','Fujifilm X70'),('c0015',2250000,0,0,'<p>Không có mô tả<p>','america','compact','Kodak','compact-KODAK-kodak pixpro fz151.jpg','Kodak Pixpro FZ151'),('c0016',2050000,0,0,'<p>Không có mô tả<p>','america','compact','Kodak','compact-KODAK-kodak pixpro fz51.jpg','Kodak Pixpro FZ51'),('c0017',2150000,0,0,'<p>Không có mô tả<p>','america','compact','Kodak','compact-KODAK-kodak pixpro wp1 sport.jpg','Kodak pixpro WP1 Sport'),('c0018',4030000,0,0,'<p>Không có mô tả<p>','south-korea','compact','Nikon','compact-NIKON-nikon coolpix a300.jpg','Nikon Coolpix A300'),('c0019',1910000,0,0,'<p>Không có mô tả<p>','japan','compact','Nikon','compact-NIKON-nikon coolpix l32.jpg','Nikon Coolpix L32'),('c0020',4420000,0,0,'<p>Không có mô tả<p>','japan','compact','Nikon','compact-NIKON-nikon coolpix w100.jpg','Nikon Coolpix W100'),('c0021',31790000,0,0,'<p>Không có mô tả<p>','japan','compact','Sony','compact-SONY-sony cybershot rx10 iii.jpg','Sony Cybershot RX10 III'),('c0022',38620000,0,0,'<p>Không có mô tả<p>','japan','compact','Sony','compact-SONY-sony cybershot rx10 iv.jpg','Sony Cybershot RX10 IV'),('c0023',2290000,0,0,'<p>Không có mô tả<p>','japan','compact','Sony','compact-SONY-sony cybershot wx220.jpg','Sony Cubershot WX220'),('c0024',8390000,0,0,'<p>Không có mô tả<p>','japan','dslr','Canon','dslr-CANON-canon eos 1300d Kit.jpg','Canon EOS 1300D'),('c0025',13190000,0,0,'<p>Không có mô tả<p>','china','dslr','Canon','dslr-CANON-canon eos 1500d.jpg','Canon EOS 1500D'),('c0026',36190000,0,0,'<p>Không có mô tả<p>','japan','dslr','Canon','dslr-CANON-canon eos 3000d.jpg','Canon EOS 3000D'),('c0027',65990000,0,0,'<p>Không có mô tả<p>','america','dslr','Canon','dslr-CANON-canon eos 5d mark iii.jpg','Canon EOS 5D Mark III'),('c0028',67990000,0,0,'<p>Không có mô tả<p>','america','dslr','Canon','dslr-CANON-canon eos 5d mark-iii-1.jpg','Canon EOS 5D Mark III-1'),('c0029',64990000,0,0,'<p>Không có mô tả<p>','china','dslr','Canon','dslr-CANON-canon eos 5d mark-iii-2.jpg','Canon EOS 5D Mark III-2'),('c0030',62990000,0,0,'<p>Không có mô tả<p>','china','dslr','Canon','dslr-CANON-canon eos 5d mark-iii-3.jpg','Canon EOS 5D Mark III-3'),('c0031',49950000,0,0,'<p>Không có mô tả<p>','japan','dslr','Canon','dslr-CANON-canon eos 6d.jpg','Canon EOS 6D'),('c0032',25750000,0,0,'<p>Không có mô tả<p>','japan','dslr','Canon','dslr-CANON-canon eos 70d.jpg','Canon EOS 70D'),('c0033',18500000,0,0,'<p>Không có mô tả<p>','america','dslr','Kodak','dslr-KODAK-kodak pixpro az365.jpg','Kodak Pixpro AZ365'),('c0034',16450000,0,0,'<p>Không có mô tả<p>','america','dslr','Kodak','dslr-KODAK-kodak pixpro az421.jpg','Kodak Pixpro AZ421'),('c0035',19500000,0,0,'<p>Không có mô tả<p>','america','dslr','Kodak','dslr-KODAK-kodak pixpro az525.jpg','Kodak Pixpro AZ525'),('c0036',23500000,0,0,'<p>Không có mô tả<p>','america','dslr','Kodak','dslr-KODAK-kodak pixpro az651.jpg','Kodak Pixpro AZ651'),('c0037',14490000,0,0,'<p>Không có mô tả<p>','south-korea','dslr','Nikon','dslr-NIKON-nikon d3400.jpg','Nikon D3400'),('c0038',17490000,0,0,'<p>Không có mô tả<p>','america','dslr','Nikon','dslr-NIKON-nikon d5500.jpg','Nikon D5500'),('c0039',19490000,0,0,'<p>Không có mô tả<p>','japan','dslr','Nikon','dslr-NIKON-nikon d7100.jpg','Nikon D7100'),('c0040',20490000,0,0,'<p>Không có mô tả<p>','japan','dslr','Nikon','dslr-NIKON-nikon d7500.jpg','Nikon D7500'),('c0041',24490000,0,0,'<p>Không có mô tả<p>','japan','dslr','Nikon','dslr-NIKON-nikon d850.jpg','Nikon D850'),('c0042',14390000,0,0,'<p>Không có mô tả<p>','japan','dslr','Sony','dslr-SONY-sony a58.jpg','Sony A58'),('c0043',16390000,0,0,'<p>Không có mô tả<p>','china','dslr','Sony','dslr-SONY-sony a68.jpg','Sony A68'),('c0044',16990000,0,0,'<p>Không có mô tả<p>','japan','dslr','Sony','dslr-SONY-sony a7s.JPG','Sony A7S'),('c0045',11990000,0,0,'<p>Không có mô tả<p>','japan','mirrorless','Canon','mirrorless-CANON-canon eos m100.jpg','Canon EOS M100'),('c0046',14990000,0,0,'<p>Không có mô tả<p>','japan','mirrorless','Canon','mirrorless-CANON-canon eos m6.jpg','Canon EOS M6'),('c0047',24990000,0,0,'<p>Không có mô tả<p>','japan','mirrorless','Fujifilm','mirrorless-FUJIFILM-fujifilm x-e3.jpg','Fujifilm X-E3'),('c0048',27990000,0,0,'<p>Không có mô tả<p>','japan','mirrorless','Fujifilm','mirrorless-FUJIFILM-fujifilm x-h1.jpg','Fujifilm X-H1'),('c0049',42990000,0,0,'<p>Không có mô tả<p>','japan','mirrorless','Fujifilm','mirrorless-FUJIFILM-fujifilm x-t2.jpg','Fujifilm X-T2'),('c0050',12490000,0,0,'<p>Không có mô tả<p>','japan','mirrorless','Panasonic','mirrorless-PANASONIC-panasonic g80.jpg','Panasonic G80'),('c0051',12290000,0,0,'<p>Không có mô tả<p>','japan','mirrorless','Panasonic','mirrorless-PANASONIC-panasonic lumix g7.jpg','Panasonic G7'),('c0052',43490000,0,0,'<p>Không có mô tả<p>','japan','mirrorless','Panasonic','mirrorless-PANASONIC-panasonic lumix gh5.jpg','Panasonic Lumix GH5'),('c0053',36490000,0,0,'<p>Không có mô tả<p>','china','mirrorless','Sony','mirrorless-SONY-sony a6500.jpg','Sony A6500'),('c0054',72490000,0,0,'<p>Không có mô tả<p>','america','mirrorless','Sony','mirrorless-SONY-sony a7r iii.jpg','Sony A7R III'),('c0055',89490000,0,0,'<p>Không có mô tả<p>','america','mirrorless','Sony','mirrorless-SONY-sony a9.jpeg','Sony A9');
/*!40000 ALTER TABLE `sanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `taikhoan` (
  `email` varchar(50) NOT NULL,
  `matkhau` varchar(128) DEFAULT NULL,
  `hoten` varchar(50) DEFAULT NULL,
  `sdt` char(15) DEFAULT NULL,
  `admin` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoan`
--

LOCK TABLES `taikhoan` WRITE;
/*!40000 ALTER TABLE `taikhoan` DISABLE KEYS */;
/*!40000 ALTER TABLE `taikhoan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'camera_shop'
--

--
-- Dumping routines for database 'camera_shop'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-22 15:48:10
