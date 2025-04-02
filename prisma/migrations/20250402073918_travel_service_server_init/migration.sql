-- AddForeignKey
ALTER TABLE `travel_tb` ADD CONSTRAINT `travel_tb_travellerId_fkey` FOREIGN KEY (`travellerId`) REFERENCES `traveller_tb`(`travellerId`) ON DELETE CASCADE ON UPDATE CASCADE;
