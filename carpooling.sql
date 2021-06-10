-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-05-2021 a las 15:53:14
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `carpooling`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `journey`
--

CREATE TABLE `journey` (
  `journeyId` int(11) NOT NULL,
  `userOrigin` varchar(50) NOT NULL,
  `userDestination` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `journey`
--

INSERT INTO `journey` (`journeyId`, `userOrigin`, `userDestination`) VALUES
(1, 'De un lado', 'Pa otro'),
(2, 'De otro lado', 'Pal anterior');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `route`
--

CREATE TABLE `route` (
  `routeId` int(11) NOT NULL,
  `schedule` varchar(50) NOT NULL,
  `routeName` varchar(50) NOT NULL,
  `cost` int(11) NOT NULL,
  `routeOrigin` varchar(50) NOT NULL,
  `routeDestination` varchar(50) NOT NULL,
  `spaces` int(11) NOT NULL,
  `emptySpaces` int(11) NOT NULL,
  `carpooler` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `route`
--

INSERT INTO `route` (`routeId`, `schedule`, `routeName`, `cost`, `routeOrigin`, `routeDestination`, `spaces`, `emptySpaces`, `carpooler`) VALUES
(1, '20/07/2021', 'Itagüi', 1000, 'De aquí', 'Pa allá', 4, 2, 'Ozzy'),
(2, '20/08/2021', 'Bello', 1000, 'De aquí', 'Pa allá', 4, 2, 'Ozzy');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `user` varchar(30) NOT NULL,
  `password` varchar(128) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `userType` tinyint(4) NOT NULL DEFAULT 1,
  `waLink` varchar(100) NOT NULL,
  `rol` tinyint(4) NOT NULL,
  `notificationId` int(11) NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`userId`, `user`, `password`, `email`, `phone`, `userType`, `waLink`, `rol`, `notificationId`, `createdAt`) VALUES
(1, 'Ozzy', '$2a$10$Wb/iU1xe3sMQo7jXSAzMWOowELlWihB5Y32g7MEEdyDqpfXdp9ZKC', 'ozzyo@gmail.com', '1234567', 1, 'wa_ozzy', 1, 12, '2021-05-07 19:43:12.015462'),
(2, 'Benito', '$2a$10$k05uTiye9wE5Y0/iO1o78uJCM0X2o0y9jqjN/1UzFM6hzwv76ME0i', 'benitoc@gmail.com', '1234567', 1, 'wa_benito', 1, 12, '2021-05-07 19:50:52.988426'),
(5, 'Jorge', '$2a$10$ILJU4Ic6.azkCB1BR5860OvFHjtYVVTIDuzTJEokzs7oiQWfR4mu2', 'jorgen@gmail.com', '1234567', 1, 'wa_bjorge', 1, 13, '2021-05-07 20:24:50.739394');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userjourney`
--

CREATE TABLE `userjourney` (
  `userjourneyId` int(11) NOT NULL,
  `userId_uj` int(11) NOT NULL,
  `journeyId_uj` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `userjourney`
--

INSERT INTO `userjourney` (`userjourneyId`, `userId_uj`, `journeyId_uj`) VALUES
(1, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `userroute`
--

CREATE TABLE `userroute` (
  `userrouteId` int(11) NOT NULL,
  `userId_ur` int(11) NOT NULL,
  `routeId_ur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `userroute`
--

INSERT INTO `userroute` (`userrouteId`, `userId_ur`, `routeId_ur`) VALUES
(1, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehicle`
--

CREATE TABLE `vehicle` (
  `vehicleId` int(11) NOT NULL,
  `vehicleType` varchar(20) NOT NULL,
  `plate` varchar(10) DEFAULT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `vehicle`
--

INSERT INTO `vehicle` (`vehicleId`, `vehicleType`, `plate`, `userId`) VALUES
(1, 'Car', 'ASD123', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `journey`
--
ALTER TABLE `journey`
  ADD PRIMARY KEY (`journeyId`);

--
-- Indices de la tabla `route`
--
ALTER TABLE `route`
  ADD PRIMARY KEY (`routeId`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`);

--
-- Indices de la tabla `userjourney`
--
ALTER TABLE `userjourney`
  ADD PRIMARY KEY (`userjourneyId`);

--
-- Indices de la tabla `userroute`
--
ALTER TABLE `userroute`
  ADD PRIMARY KEY (`userrouteId`);

--
-- Indices de la tabla `vehicle`
--
ALTER TABLE `vehicle`
  ADD PRIMARY KEY (`vehicleId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `journey`
--
ALTER TABLE `journey`
  MODIFY `journeyId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `route`
--
ALTER TABLE `route`
  MODIFY `routeId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `userjourney`
--
ALTER TABLE `userjourney`
  MODIFY `userjourneyId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `userroute`
--
ALTER TABLE `userroute`
  MODIFY `userrouteId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `vehicle`
--
ALTER TABLE `vehicle`
  MODIFY `vehicleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
