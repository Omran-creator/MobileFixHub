-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 26, 2025 at 10:00 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phone_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `accessories`
--

CREATE TABLE `accessories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `accessories`
--

INSERT INTO `accessories` (`id`, `name`, `brand`, `price`, `category`, `img`) VALUES
(1, 'iPhone 13 Case', 'Apple', 29.00, 'Case', '1766331575093.webp'),
(2, 'Wireless Charger', 'Generic', 19.00, 'Charger', '1766331594655.jpg'),
(3, 'Screen Protector', 'Generic', 9.00, 'Protector', '1766331611778.png'),
(4, 'Wireless Earbuds', 'Generic', 49.00, 'Audio', '1766328432938.png'),
(5, 'Fast USB-C Charger', 'Generic', 25.00, 'Charger', '1766332919295.png'),
(6, 'Phone Stand', 'Generic', 15.00, 'Stand', '1766332930826.png'),
(7, 'Bluetooth Headphones', 'Generic', 59.00, 'Audio', '1766332943873.png'),
(8, 'Car Phone Holder', 'Generic', 18.00, 'Holder', '1766332964614.png');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `customer_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `total_price` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `customer_name`, `email`, `address`, `total_price`, `created_at`) VALUES
(2, 1, '', '', '3trd43', 299.00, '2025-12-26 19:28:21'),
(3, 3, '', '', 'somewhere', 999.00, '2025-12-26 19:30:33');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_name`, `quantity`, `price`) VALUES
(5, 2, 'Xiaomi Redmi Note 12', 1, 299.00),
(6, 3, 'iPhone 13 Pro', 1, 999.00);

-- --------------------------------------------------------

--
-- Table structure for table `parts`
--

CREATE TABLE `parts` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `compatible` varchar(100) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `parts`
--

INSERT INTO `parts` (`id`, `name`, `brand`, `price`, `compatible`, `img`) VALUES
(1, 'iPhone 13 Pro Screen', 'Apple', 199.00, 'iPhone 13 Pro', '1766331545928.jpg'),
(2, 'Samsung Galaxy S22 Battery', 'Samsung', 49.00, 'Samsung Galaxy S22', '1766331514235.jpg'),
(3, 'OnePlus 11 Camera', 'OnePlus', 89.00, 'OnePlus 11', '1766331559426.webp'),
(4, 'iPhone 12 Screen', 'Apple', 179.00, 'iPhone 12', '1766332889737.png'),
(5, 'Samsung Galaxy A54 Battery', 'Samsung', 39.00, 'Samsung Galaxy A54', '1766332841852.png'),
(6, 'OnePlus 11 Charging Port', 'OnePlus', 29.00, 'OnePlus 11', '1766332857336.jpg'),
(7, 'Pixel 7 Camera Module', 'Google', 99.00, 'Google Pixel 7', '1766332871819.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `phones`
--

CREATE TABLE `phones` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `condition` varchar(20) DEFAULT NULL,
  `storage` varchar(20) DEFAULT NULL,
  `ram` varchar(20) DEFAULT NULL,
  `screen` varchar(20) DEFAULT NULL,
  `battery` varchar(20) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `phones`
--

INSERT INTO `phones` (`id`, `name`, `brand`, `price`, `condition`, `storage`, `ram`, `screen`, `battery`, `img`) VALUES
(1, 'Google Pixel 7', 'Google', 699.00, 'New', '128GB', '8GB', '6.3 inch', '4355 mAh', '1766332777315.png'),
(2, 'iPhone 13 Pro', 'Apple', 999.00, 'New', '256GB', '6GB', '6.1 inch', '3095 mAh', '1766331394819.png'),
(3, 'Samsung Galaxy S22', 'Samsung', 899.00, 'New', '128GB', '8GB', '6.2 inch', '3700 mAh', '1766331415613.png'),
(4, 'OnePlus 11', 'OnePlus', 749.00, 'Refurbished', '256GB', '12GB', '6.7 inch', '5000 mAh', '1766331429383.jpg'),
(6, 'iPhone 12', 'Apple', 599.00, 'Refurbished', '128GB', '4GB', '6.1 inch', '2815 mAh', '1766332759686.png'),
(7, 'Samsung Galaxy A54', 'Samsung', 449.00, 'New', '128GB', '6GB', '6.4 inch', '5000 mAh', '1766332794825.png'),
(8, 'Xiaomi Redmi Note 12', 'Xiaomi', 299.00, 'New', '128GB', '6GB', '6.67 inch', '5000 mAh', '1766332820975.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `role` varchar(20) DEFAULT 'user',
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `password`, `created_at`) VALUES
(1, 'test', '111@g.com', 'user', '$2b$10$3lWK2ragKQDpepUSbR6G3.p6U5ecKmRVBjQmtO6ISYoVPaoOFaORS', '2025-12-26 16:02:12'),
(2, 'admin', 'admin@gmail.com', 'admin', '$2b$10$CY3qdkFKuftliQp46v2j8.ZMLfcbphw6N3uhBMbc9FlMsN.9UWX6q', '2025-12-26 16:27:01'),
(3, 'kam', 'kamkomary@gmail.com', 'user', '$2b$10$g4AbNpUCfEhhXwV9kYlFWeLqXRydk93MeYVOvKa/bnfLLvHRvsFqG', '2025-12-26 19:29:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accessories`
--
ALTER TABLE `accessories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orders_users` (`user_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`);

--
-- Indexes for table `parts`
--
ALTER TABLE `parts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `phones`
--
ALTER TABLE `phones`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accessories`
--
ALTER TABLE `accessories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `parts`
--
ALTER TABLE `parts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `phones`
--
ALTER TABLE `phones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_orders_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
