-- DropForeignKey
ALTER TABLE `travel_tb` DROP FOREIGN KEY `travel_tb_travellerId_fkey`;

-- DropIndex
DROP INDEX `travel_tb_travellerId_fkey` ON `travel_tb`;
