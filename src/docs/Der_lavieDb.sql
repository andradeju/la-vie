-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 06-Maio-2022 às 01:14
-- Versão do servidor: 10.5.12-MariaDB-cll-lve
-- versão do PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `u959158588_lavieDb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `atendimentos`
--

CREATE TABLE `atendimentos` (
  `ID` int(5) UNSIGNED ZEROFILL NOT NULL,
  `DATA_ATENDIMENTO` date NOT NULL,
  `OBSERVACAO` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PACIENTE_ID` int(5) UNSIGNED ZEROFILL DEFAULT NULL,
  `PSICOLOGO_ID` int(5) UNSIGNED ZEROFILL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `atendimentos`
--

INSERT INTO `atendimentos` (`ID`, `DATA_ATENDIMENTO`, `OBSERVACAO`, `PACIENTE_ID`, `PSICOLOGO_ID`) VALUES
(00001, '0000-00-00', 'Foi um otimo atendimento', 00001, NULL),
(00002, '0000-00-00', 'Foi um otimo atendimento muito bom', 00011, NULL),
(00003, '0000-00-00', 'Melhor psicologo de todos', 00011, NULL),
(00004, '2000-02-02', 'Bom atendimento', 00011, 00024),
(00005, '2022-10-05', 'blablabla', 00007, 00013),
(00006, '2022-10-05', 'blablabla', NULL, 00013),
(00014, '2022-10-05', 'blablabla', 00001, 00013),
(00015, '2022-10-05', NULL, 00001, 00013),
(00016, '2022-10-05', 'blablabla', 00001, 00013),
(00017, '2022-05-02', 'sflsdfskfdflsfkdssfl', 00010, 00024),
(00018, '2022-10-10', 'novo', 00001, 00025);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pacientes`
--

CREATE TABLE `pacientes` (
  `ID` int(5) UNSIGNED ZEROFILL NOT NULL,
  `NOME` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `EMAIL` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `IDADE` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `pacientes`
--

INSERT INTO `pacientes` (`ID`, `NOME`, `EMAIL`, `IDADE`) VALUES
(00001, 'Felipe Azevedo', 'felipe@felipe.com', '1995-05-10'),
(00006, 'tomaeqqte', 'q@lucas.com', '2000-02-02'),
(00007, 'tomaeqqte', 'q@lucas.com', '2000-02-02'),
(00008, 'twomaeqqte', 'wq@lucas.com', '2000-02-02'),
(00009, 'twomaeqqte', 'waq@lucas.com', '2000-02-02'),
(00010, 'twomaeqqte', 'wacq@lucas.com', '2000-02-02'),
(00011, 'twomaeqqte', 'wacvq@lucas.com', '2000-02-02'),
(00013, 'twomaeqqte', 'wacvbgq@lucas.com', '2000-02-02'),
(00014, 'twomaeqqte', 'wacvbghq@lucas.com', '2000-02-02'),
(00015, 'twomaeqqte', 'wacvbghjq@lucas.com', '2000-02-02'),
(00017, 'Victor', 'victor@email.com', '1977-05-01'),
(00018, 'Sabrynna L', 'sabrynna.lima@gmail.com', '1998-10-10');

-- --------------------------------------------------------

--
-- Estrutura da tabela `psicologos`
--

CREATE TABLE `psicologos` (
  `ID` int(5) UNSIGNED ZEROFILL NOT NULL,
  `NOME` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `EMAIL` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `SENHA` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `APRESENTACAO` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `psicologos`
--

INSERT INTO `psicologos` (`ID`, `NOME`, `EMAIL`, `SENHA`, `APRESENTACAO`) VALUES
(00008, 'tomate', 'lucas@lucas.com', '$2a$10$.WkOrq2iAQ52v/Fj9/DMEeajrZE2uWLGZbSl2xajh7NEiJvgNm2Xa', 'fqewoprkpwqekf'),
(00009, 'tomaewete', 'lucawws@lucas.com', '$2a$10$gGOSMvLFJLDzQYlIPqEKXu4J8EEuDh1CPjo5PmYt1rjcqQ7zHhX0q', 'fqewoprkpwqekf'),
(00013, 'tomaeewqqewweqqte', 'czcxzczx@lucas.com', '$2a$10$3Lh3woE0uD/zTYExPF9EIeol2rdGUyZ2eO38ctzV8KVrdOMeI9gKC', 'fqewoprkpwqekf'),
(00015, 'tomaeqqte', 'czcxzcqzzzzqzx@lucas.com', '$2a$10$rX2HZGE/5KFD3smazP/4lOYnFd9geP/NK/URkYjL7mS/ptbWauwGy', 'fqewoprkpwqekf'),
(00016, 'tomaeqqte', 'czcxqqcqzzzzqzx@lucas.com', '$2a$10$fEr3GqXKvo5Yx.Y2x7p0muRg49IWUycwxTibPsIv6UnjNlR3bxIZm', 'fqewoprkpwqekf'),
(00017, 'tomaeqqte', 'czcxqqcqzvvzzzqzx@lucas.com', '$2a$10$aeAGZVC42CMjLzMUvyxKoeip0tq1CS092PX4f3MhQgdJi8alZ6hr6', 'fqewoprkpwqekf'),
(00018, 'tomaeqqte', 'czcxqqcqzgggvvzzzqzx@lucas.com', '$2a$10$tdQ.eulMRZHicVBIaTDECOJeUcrfevDzhrxJnQB/PMC7j5d1HZEo.', 'fqewoprkpwqekf'),
(00019, 'tomaeqqte', 'czcxqqcqzgggvvqzzzqzx@lucas.com', '$2a$10$sqWF8prwaVfMxKxxPuiH.eajSsJhVpFh16ldStE2UbKAci1lrEAOS', 'fqewoprkpwqekf'),
(00020, 'tomaeqqte', 'czcxqqcqzgggvvqezzzqzx@lucas.com', '$2a$10$L1KetTl/XdpxPjvRUeT1g.U71g.PAkpljB9ibYSvTBEudWdbIt1Pa', 'fqewoprkpwqekf'),
(00021, 'tomaeqqte', 'czcxqqcqzgggvvqezzrzqzx@lucas.com', '$2a$10$uxC4WbcmpV2oXZonzZu1P.GUZgOTfwcLh89hIBbG18Sa8OKOiv5BC', 'fqewoprkpwqekf'),
(00022, '', '', '', ''),
(00024, 'Felipe Eduardo', 'felipe@felipe.com', '$2a$10$ttqmsLp45e3zyeOoSJBJFusFinsrmhbJJsUHdzkwN3yxtkS8rJPDm', 'Oi eu sou especialista em recuperação de danos sociais'),
(00025, 'teste1', 'teste@teste.com', '$2a$10$jH4AR9FwDhj9VzyMxWXU6.M5/Y4KHX.r721Eg/Hv6mHBhoorkDN5i', 'oláoláteste'),
(00026, 'teste', 'teste@gmail.com', '$2a$10$5F.dAkFh/SPilWrZ1fLuXeoi3AiSeDcNbfJDmiGC8G58Ldn5CaKHa', 'olá'),
(00027, 'Sabrynna Lima', 'sabrynna.lima@gmail.com', '$2a$10$dGhCGYHxJ7dyWKLtPOOyp.gt0tIkmV982AaBznqoTQNSTCvakIEia', 'olá'),
(00028, 'Felipe Andre', 'andre@andre.com', '$2a$10$AaH.ewCeD7Ky0psNWwcji.180WnVLW9P1P9jPbXGk6IUrcp8Nap1a', 'Oi eu sou especialista em recuperação de danos sociais');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `atendimentos`
--
ALTER TABLE `atendimentos`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `FK_PACIENTE` (`PACIENTE_ID`),
  ADD KEY `FK_PSICOLOGO_idx` (`PSICOLOGO_ID`);

--
-- Índices para tabela `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`ID`);

--
-- Índices para tabela `psicologos`
--
ALTER TABLE `psicologos`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `EMAIL_UNIQUE` (`EMAIL`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `atendimentos`
--
ALTER TABLE `atendimentos`
  MODIFY `ID` int(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de tabela `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `ID` int(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de tabela `psicologos`
--
ALTER TABLE `psicologos`
  MODIFY `ID` int(5) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `atendimentos`
--
ALTER TABLE `atendimentos`
  ADD CONSTRAINT `FK_PACIENTE` FOREIGN KEY (`PACIENTE_ID`) REFERENCES `pacientes` (`ID`),
  ADD CONSTRAINT `FK_PSICOLOGO` FOREIGN KEY (`PSICOLOGO_ID`) REFERENCES `psicologos` (`ID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
