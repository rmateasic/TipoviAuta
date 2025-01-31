-- Ovo je SQL skripta tipovi auta

use master;
go

drop database if exists tipoviauta;
go

create database tipoviauta collate Croatian_CI_AS;
go

use tipoviauta;
go

create table proizvodjaci(
sifra int not null primary key identity(1,1),
naziv varchar(100) not null,
zemlja varchar(100) not null
);

create table vrsteauta(
sifra int not null primary key identity(1,1),
naziv varchar(100) not null
);

create table automobili(
sifra int not null primary key identity(1,1),
nazivauta varchar(100) not null ,
gorivo varchar(100) not null,
model varchar(100) not null,
godiste int,
proizvodjaci int not null references proizvodjaci(sifra),
vrsteauta int not null references vrsteauta(sifra)
);

insert into proizvodjaci(naziv, zemlja)
values
--1
('Bmw', 'Njema?ka'),
--2
('Mercedes', 'Njema?ka'),
--3
('Ferrari', 'Italija'),
--4
('Alfa_romeo', 'Italija'),
--5
('Cupra', 'Španjolska'),
--6
('Seat', 'Španjolska'),
--7
('Renault','Francuska'),
--8
('Peugeot', 'Francuska');

insert into vrsteauta(naziv)
values
--1
('limuzina'), 
--2
('karavan'), 
--3
('monovolumen'), 
--4
('coupe'), 
--5
('kabriolet'), 
--6
('suv');


insert into automobili(nazivauta, gorivo, model, godiste, proizvodjaci, vrsteauta)
values
('Bmw', 'hibrid', 'serija1', '2015', 1, 3), 
('Bmw', 'hibrid', 'serija2', '2015', 1, 3),
('Bmw', 'hibrid', 'serija3', '2018', 1, 2),
('Bmw', 'hibrid', 'serija4', '2018', 1, 1),
('Bmw', 'hibrid', 'serija5', '2020', 1, 2),
('Bmw', 'hibrid', 'serija6', '2020', 1, 4),
('Bmw', 'hibrid', 'serija7', '2022', 1, 6),
('Bmw', 'hibrid', 'serija8', '2022', 1, 5),
('Mercedes', 'hibrid', 'Aklasa', '2017', 2, 3), 
('Mercedes', 'hibrid', 'Bklasa', '2017', 2, 3),
('Mercedes', 'hibrid', 'Cklasa', '2019', 2, 1),
('Mercedes', 'hibrid', 'Eklasa', '2020', 2, 1),
('Mercedes', 'hibrid', 'Sklasa', '2022', 2, 5), 
('Ferrari', 'hibrid', 'F40', '2015', 3, 4),
('Ferrari', 'hibrid', 'F50', '2017', 3, 5), 
('Ferrari', 'hibrid', 'Dino', '2018', 3, 4),
('Ferrari', 'hibrid', 'Enzo', '2020', 3, 6),
('Alfa_romeo', 'hibrid', 'Giulia', '2018', 4, 6), 
('Alfa_romeo', 'hibrid', 'Giulietta', '2020', 4, 3), 
('Alfa_romeo', 'hibrid', 'Spider', '2024', 4, 6),
('Alfa_romeo', 'hibrid', 'Stelvio', '2024', 4, 6),
('Alfa_romeo', 'hibrid', 'GTV', '2023', 4, 5),
('Cupra', 'hibrid', 'Alteca', '2020', 5, 3), 
('Cupra', 'hibrid', 'Born', '2022', 5, 4),
('Cupra', 'hibrid', 'Formentor', '2024', 5, 3), 
('Cupra', 'hibrid', 'Leon', '2018', 5, 3),
('Seat', 'hibrid', 'Ibiza', '2011', 6, 3), 
('Seat', 'hibrid', 'Cordoba', '2016', 6, 1),
('Seat', 'hibrid', 'Malaga', '2014', 6, 3), 
('Seat', 'hibrid', 'Toledo', '2011', 6, 1),
('Renault', 'hibrid', 'Megan', '2018', 7, 1), 
('Renault', 'hibrid', 'Talisman', '2020', 7, 1),
('Renault', 'hibrid', 'Capture', '2022', 7, 3),
('Renault', 'hibrid', 'Fluence', '2022', 7, 3),
('Peugeot', 'hibrid', '208', '2021', 8, 5),
('Peugeot', 'hibrid', '308', '2019', 8, 3),
('Peugeot', 'hibrid', '408', '2020', 8, 1), 
('Peugeot', 'hibrid', '508', '2024', 8, 1),
('Peugeot', 'hibrid', '2008', '2019', 8, 6), 
('Peugeot', 'hibrid', '3008', '2018', 8, 6),
('Peugeot', 'hibrid', '4008', '2019', 8, 6), 
('Peugeot', 'hibrid', '5008', '2020', 8, 6);