USE [His_db]
GO

/****** Object: Table [dbo].[Patients] Script Date: 17.06.2021 02:14:05 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Users] (
    [Id]        INT          IDENTITY (1, 1) NOT NULL,
    [Tc_no]     VARCHAR (50) NOT NULL,
    [FirstName] VARCHAR (50) NOT NULL,
    [LastName]  VARCHAR (50) NOT NULL
);


SET IDENTITY_INSERT [dbo].[Patients] ON
INSERT INTO [dbo].[Patients] ([Id], [Tc_no], [FirstName], [LastName]) VALUES (2, N'12345678984', N'Mehmet', N'Yıldırım')
INSERT INTO [dbo].[Patients] ([Id], [Tc_no], [FirstName], [LastName]) VALUES (1002, N'98745632115', N'Nehir', N'Çiçek')
INSERT INTO [dbo].[Patients] ([Id], [Tc_no], [FirstName], [LastName]) VALUES (2002, N'85479637412', N'Alihan', N'Çarikçi')
SET IDENTITY_INSERT [dbo].[Patients] OFF


