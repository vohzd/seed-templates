CREATE TABLE `account` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text,
	`password` text,
	`createdAt` text DEFAULT '1701695290459'
);
--> statement-breakpoint
CREATE TABLE `file` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `page` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `product` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `account_email_unique` ON `account` (`email`);