CREATE TABLE IF NOT EXISTS `table1` (
  `id` varchar(14) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `table2` (
  `id` varchar(14) NOT NULL,
  `fk_id` varchar(14) NOT NULL,
  `custom_id` varchar(14) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `table2_fk_id_foreign_idx` (`fk_id`),
  KEY `table2_custom_id_foreign_idx` (`custom_id`),
  CONSTRAINT `table2_custom_id_foreign_idx` FOREIGN KEY (`custom_id`) REFERENCES `table1` (`id`),
  CONSTRAINT `table2_fk_id_foreign_idx` FOREIGN KEY (`fk_id`) REFERENCES `table1` (`id`)
);